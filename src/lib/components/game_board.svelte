<!-- 
- Core of teh game, this is the Game Board component
- This handle the major events and implement most of
- the game logic
 -->

<script>
    import UIcell from "./uicell.svelte";
    import { desktopBoard, mobileBoard } from '$lib/js/board.js';
    import { createEventDispatcher } from "svelte";
    import { onMount } from "svelte";
    import { currentScore } from "../js/store.js";

    export let show;
    let dispatch = createEventDispatcher();
    let board = [0][0];
    let mobile = false;

    $: if(show == true) board = mobile ? new mobileBoard() : new desktopBoard();

    const isMobile = (ua) => {
	    return ua.includes('Android') || ua.includes('Mobile') || ua.includes('iPhone');
    };

    onMount(() => {
        mobile = isMobile(navigator.userAgent);
    });

    //this is needed as board is not reactive
    //remember that svelte is only reactive on assignments
    const refresh = () => { board = board };

    const handlerGetFocus = (e) => {
        board.preClash(e.detail.r, e.detail.c);
        board.preClashON();
        refresh();
    }

    const handlerLostFocus = (e) => {
        board.preClashOFF();
        refresh();
    }

    const handlerClash = (e) => {
        //clash cells and calculate score
        let score = board.clash();
    
        //as new spaces are generated
        //shift cells down and then left
        //to compact the board game
        board.shiftCells();
        refresh();

        //dispatch new score event if greater than zero
        if(score > 0) {
            //this is a trick to make sure currentScore is reactive
            $currentScore = 0;
            $currentScore = score;
        }
        //check if game is over and notify game main
        if(board.isGameOver()) dispatch('gameOver');
    }

</script>

{#if board}
<div class="board visible {show ? '' : 'hide'}">
    {#each {length:board.rows} as _, i}
        {#each {length: board.cols} as _, j}
            <UIcell 
                cell={board.getCell(i,j)} 
                on:getFocus={handlerGetFocus}
                on:lostFocus={handlerLostFocus}
                on:clash={handlerClash}
                bind:mobile={mobile}
            />
        {/each}    
    {/each}
</div>
{/if}

<style>    
    .hide {
        display: none !important;
    }

    @keyframes board-rotate {
        from { 
                rotate: 0deg;
                scale: 0.1;
            }

        to { 
                rotate: 720deg;
                scale: 1;
            }
    }

    .board {
        border-radius: 0.8rem;
        padding: 0.3rem;
        background-color: rgba(0, 0, 0, 1);
        width: 90%;
        display: grid;
        grid-template-columns: repeat(15, 1fr);
        row-gap: 2px;
        column-gap: 2px;
        animation-name: board-rotate;
        animation-duration: 2s;
    }

@media only screen and (orientation:portrait) and (max-width: 1023px) {
    .board {
        padding: 0.3rem;
        background-color: black;
        width: 90%;
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        row-gap: 2px;
        column-gap: 2px;
        animation-name: board-rotate;
        animation-duration: 2s;
    }
}

@media only screen and (orientation:landscape) and (max-width: 1023px) {    
    .visible {
        display: none;
    }
}
</style>