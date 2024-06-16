<!-- 
- Reactive game score
-->

<script>
    import { onMount } from "svelte";
    import { totalScore, currentScore } from "../js/store.js";
    import { fly } from "svelte/transition"
    import { create_in_transition } from "svelte/internal"

    let lastScoreUpdate = 0;
    let bestScore = 0;
    let totalScoreComp;
    let totalScoreAnim;
    let totalBestComp;
    let totalBestAnim;

    // react on changes to currentScore
    $: if($currentScore > 0) updateScore();

    onMount(() => {
        bestScore = getBestScore();
    });

    const getBestScore = () => {
        let bestScore = localStorage.getItem('bestScore');
        return bestScore ? +bestScore : 0;
    }

    const setBestScore = (score) => {
        localStorage.setItem('bestScore', score);
        bestScore = score;
    }

    const updateScore = () => {
        $totalScore += $currentScore;
        if($totalScore > bestScore) {
            setBestScore($totalScore);
            totalBestAnim = create_in_transition(totalBestComp, fly, {x: -200});   
            totalBestAnim.start();
        } 
        totalScoreAnim = create_in_transition(totalScoreComp, fly, {x: -200});   
        totalScoreAnim.start();
    }
</script>

<div class="col-right-top visible">
    <div>
        <p class="string score-title">BEST SCORE</p>
        <p class="string score-score" bind:this={totalBestComp}>{bestScore}</p>
    </div>
    <div>
        <p class="string score-title">TOTAL SCORE</p>
        <p class="string score-score" bind:this={totalScoreComp}>{$totalScore}</p>
    </div>
</div>

<style>
    .string {
        font-family: "Londrina Solid", sans-serif;
        font-weight: bold;
        font-style: normal;
        color: #fdea92;
        text-align: center;
    } 

    @media only screen and (min-width: 1023px) {
        .score-title {
           font-size: 4vw;
        }

        .score-score {
            font-size: 6vw;
        }

        .col-right-top {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 10vh;
        }
    }

    @media only screen and (orientation:portrait) and (max-width: 1023px) {
        .score-title {
           font-size: 6vw;
        }

        .score-score {
            font-size: 8vw;
        }

        .col-right-top {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 10vh;
        }
    }

    @media only screen and (orientation:landscape) and (max-width: 1023px) {    
        .visible {
            display: none;
        }
    }
</style>