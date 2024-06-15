<script>
    import Disclaimer from '$lib/components/disclaimer.svelte'
    import GameBoard from '../lib/components/game_board.svelte';
    import EndGame from "../lib/components/end_game.svelte";
    import { fly } from "svelte/transition"
    import { create_in_transition } from "svelte/internal"
    import { onMount } from 'svelte';

    let currentScore = 0;
    let totalScore = 0;
    let bestScore = 0;
    let totalScoreComp;
    let totalScoreAnim;
    let totalBestComp;
    let totalBestAnim;
    let gameOver = false;

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

<button on:click={() => gameOver = true}>END</button>

<!-- disclaimer per modalità landscape
possiamo giocare solo in verticale/portrait -->
<Disclaimer />

<div class="wrapper">
    <div class="col-left">
        <p class="string rot-left">COLOR</p>
        <p class="string rot-right">CLASH</p>
    </div>
    <div class="col-center">
        {#if gameOver == false}
            <GameBoard on:score={updateScore}/>
        {:else}
            <EndGame score={totalScore} on:newGame={() => gameOver = false}/>
        {/if}
    </div>
    <div class="col-right">
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
        /* display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around; */
        /* width: 100%; */
        /* height: 100vh; */
    }

    .string {
        font-family: "Londrina Solid", sans-serif;
        font-weight: bold;
        font-style: normal;
        color: #fdea92;
        text-align: center;
    }

    .rot-left {
        rotate: -10deg;
        /* font-size: 7rem; */
        font-size: 6vw;
    }

    .rot-right {
        rotate: 10deg;
        font-size: 7vw;
    }

    .score-title {
        font-size: 4vw;
    }

    .score-score {
        font-size: 6vw;
    }

    .wrapper {
        width: 100%;
        height: 100vh;
        display: grid;
        grid-template-columns: 1fr 2.5fr 1.1fr;
    }

    div {
        border: 0px solid black;
        width: 100%;
    }

    .col-left {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;        
    }

    .col-center {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }


    .col-right {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10vh;
    }
</style>
