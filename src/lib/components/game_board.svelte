<script>
    import UIcell from "./uicell.svelte";
    import { Cell } from '$lib/js/cell.js'
    import { desktopBoard, mobileBoard } from '$lib/js/board.js';
    import { onMount } from "svelte";

    let board = new desktopBoard();

    // console.log(board);

    onMount(() => {
    })

    const refresh = () => { board = board };


    function cambio() {
        for(let i  = 0; i < 10; i++) {
            for(let j = 0; j < 15; j++) {
                board.getCell(i,j).status = Cell.STATUS_ON;
               
            }
        }
        refresh();
    }

    const handlerGetFocus = (e) => {
        // console.log("FOCUS:", e.detail.r, e.detail.c)
        // console.log(board)
        board.preClash(e.detail.r, e.detail.c);
        board.preClashON();
        // console.log(board)
        refresh();
    }

    const handlerLostFocus = (e) => {
        // console.log("defocus")
        board.preClashOFF();
        refresh();
    }

    const handlerClash = (e) => {
        // console.log("clash")
        board.clash();
        // console.log("BOARD:",board)
        refresh();
        board.shiftDown();
        refresh();
        // console.log("BOARD:",board)
    }

</script>

<button on:click={cambio}>CAMBIA</button>

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
        background-color: black;
        width: 60%;
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