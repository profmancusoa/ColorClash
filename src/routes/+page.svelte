<!--
- Main game page where everything is orchestrated
-->

<script>
    import Disclaimer from '$lib/components/disclaimer.svelte'
    import GameBoard from '../lib/components/game_board.svelte';
    import EndGame from "../lib/components/end_game.svelte";
    import GameTitle from '../lib/components/game_title.svelte';
    import GameScore from '../lib/components/game_score.svelte';
    import { totalScore } from '../lib/js/store.js';

    let gameOver = false;
</script>

<!-- disclaimer per modalità landscape
possiamo giocare solo in verticale/portrait -->
<Disclaimer />

<!-- Main game logic -->
<div class="wrapper">
    <GameTitle />
    <div class="col-center-top visible">
        {#if gameOver == false}
            <GameBoard on:gameOver={() => gameOver =  true} />
        {:else}
            <EndGame on:newGame={() => { gameOver = false; $totalScore = 0}}/>
        {/if}
    </div>
    <GameScore />
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

    @media only screen and (min-width: 1023px) {
        .wrapper {
            width: 100%;
            height: 100vh;
            display: grid;
            grid-template-columns: 1fr 2.5fr 1.1fr;
        }

        .col-center-top {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
        }
    }

    @media only screen and (orientation:portrait) and (max-width: 1023px) {
        .wrapper {
            width: 100%;
            height: 100vh;
            display: grid;
            grid-template-rows: 1fr auto 1fr;
        }

        .col-center-top {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
        }
    }

    @media only screen and (orientation:landscape) and (max-width: 1023px) {    
        .visible {
            display: none;
        }
    }
</style>
