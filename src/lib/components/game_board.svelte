<script>
    import UIcell from "./uicell.svelte";
    import { desktopBoard, mobileBoard } from '$lib/js/board.js';
    import { createEventDispatcher } from "svelte";

    let dispatch = createEventDispatcher();
    let board = new desktopBoard();

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
        let score = board.clash();
        refresh();
        board.shiftDown();
        board.shiftLeft();
        refresh();

        dispatch('score', score);
        // console.log("SCORE:",score)
    }

</script>

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
        grid-template-columns: repeat(10, 1fr);
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