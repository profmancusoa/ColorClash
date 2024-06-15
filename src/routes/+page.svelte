<script>
    import Disclaimer from '$lib/components/disclaimer.svelte'
    import GameBoard from '../lib/components/game_board.svelte';
    import EndGame from "../lib/components/end_game.svelte";
    import { fly } from "svelte/transition"
    import { create_in_transition } from "svelte/internal"

    let currentScore = 0;
    let totalScore = 0;
    let bestScore = 0;
    let totalScoreComp;
    let totalScoreAnim;
    let totalBestComp;
    let totalBestAnim;
    let gameOver = false;

    const getBestScore = () => {
        let bestScore = localStorage.getItem('bestScore');
        return bestScore ? +bestScore : 0;
    }

    const setBestScore = (score) => {
        localStorage.setItem('bestScore', score);
        bestScore = score;
    }

    const updateScore = (e) => {
        currentScore = e.detail;
        totalScore += currentScore;
        if(totalScore > bestScore) {
            setBestScore(totalScore);
            totalBestAnim = create_in_transition(totalBestComp, fly, {x: -200});   
            totalBestAnim.start();
        } 
        totalScoreAnim = create_in_transition(totalScoreComp, fly, {x: -200});   
        totalScoreAnim.start();
    }
</script>

<!-- disclaimer per modalità landscape
possiamo giocare solo in verticale/portrait -->
<Disclaimer />

<div class="wrapper">
    <div class="col-left-top visible">
        <p class="string rot-left">COLOR</p>
        <p class="string rot-right">CLASH</p>
    </div>
    <div class="col-center-top visible">
        {#if gameOver == false}
            <GameBoard on:score={updateScore} on:gameOver={() => gameOver =  true} />
        {:else}
            <EndGame score={totalScore} on:newGame={() => { gameOver = false; totalScore = 0}}/>
        {/if}
    </div>
    <div class="col-right-top visible">
        <div>
            <p class="string score-title">BEST SCORE</p>
            <p class="string score-score" bind:this={totalBestComp}>{bestScore}</p>
        </div>
        <div>
            <p class="string score-title">TOTAL SCORE</p>
            <p class="string score-score" bind:this={totalScoreComp}>{totalScore}</p>
        </div>
    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@100;300;400;900&display=swap');

    :global(*) {
        margin: 0;
        padding: 0;
    }

    :global(body)  { 
        background: rgb(129,202,214);
        background: linear-gradient(60deg, rgba(129,202,214,1) 0%, rgba(237,205,68,1) 49%, rgba(220,62,38,1) 100%);
    }

    .string {
        font-family: "Londrina Solid", sans-serif;
        font-weight: bold;
        font-style: normal;
        color: #fdea92;
        text-align: center;
    }


    @media only screen and (min-width: 1023px) {
        .wrapper {
            width: 100%;
            height: 100vh;
            display: grid;
            grid-template-columns: 1fr 2.5fr 1.1fr;
        }

        .score-title {
           font-size: 4vw;
        }

        .score-score {
            font-size: 6vw;
        }

        .rot-left {
            rotate: -10deg;
            font-size: 6vw;
        }

        .rot-right {
            rotate: 10deg;
            font-size: 7vw;
        }

        .col-left-top {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;        
        }

        .col-center-top {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
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
        .wrapper {
            width: 100%;
            height: 100vh;
            display: grid;
            grid-template-rows: 1fr auto 1fr;
        }

        .score-title {
           font-size: 6vw;
        }

        .score-score {
            font-size: 8vw;
        }

        .rot-left {
            rotate: -10deg;
            font-size: 8vw;
        }

        .rot-right {
            rotate: 10deg;
            font-size: 9vw;
        }

        .col-left-top {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-evenly;        
        }

        .col-center-top {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
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
