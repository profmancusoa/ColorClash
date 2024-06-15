<script>
    import UIcell from "./uicell.svelte";
    import { desktopBoard, mobileBoard } from '$lib/js/board.js';
    import { createEventDispatcher } from "svelte";
    import { onMount } from "svelte";

    let dispatch = createEventDispatcher();
    let board = [0][0];

    const isMobile = (ua) => {
	    return ua.includes('Android') || ua.includes('Mobile') || ua.includes('iPhone');
    };

    onMount(() => {
        let mobile = isMobile(navigator.userAgent);
        board = mobile ? new mobileBoard() : new desktopBoard();
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
        if(score > 0) dispatch('score', score);

        //check if game is over and notify game main
        if(board.isGameOver()) dispatch('gameOver');
    }

</script>

{#if board}
<div class="board visible">
    {#each {length:board.rows} as _, i}
        {#each {length: board.cols} as _, j}
            <UIcell 
                cell={board.getCell(i,j)} 
                on:getFocus={handlerGetFocus}
                on:lostFocus={handlerLostFocus}
                on:clash={handlerClash}
            />
        {/each}    
    {/each}
</div>
{/if}

<style>    
    .board {
        border-radius: 0.8rem;
        padding: 0.3rem;
        background-color: rgba(0, 0, 0, 1);
        width: 90%;
        display: grid;
        grid-template-columns: repeat(15, 1fr);
        row-gap: 2px;
        column-gap: 2px;
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
    }
}

@media only screen and (orientation:landscape) and (max-width: 1023px) {    
    .visible {
        display: none;
    }
}
</style>