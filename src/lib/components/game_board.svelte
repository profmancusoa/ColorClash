<script>
    import UIcell from "./uicell.svelte";
    import { Cell } from '$lib/js/cell.js'
    import { desktopBoard, mobileBoard } from '$lib/js/board.js';
    import { onMount } from "svelte";

    let board = new desktopBoard();

    onMount(() => {
    })

    const refresh = () => { board = board };


    function cambio() {
        for(let i  = 0; i < 10; i++) {
            for(let j = 0; j < 15; j++) {
                board.getCell(i,j).status = Cell.STATUS_OFF;
               
            }
        }
        refresh();
    }
</script>

<button on:click={cambio}>CAMBIA</button>

<div class="board visible">
    {#each {length:board.rows} as _, i}
        {#each {length: board.cols} as _, j}
            <UIcell cell={board.getCell(i,j)} />
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