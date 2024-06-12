<script>
    import { Cell } from '$lib/js/cell';

    export let cell;

    const get_focus = () => {
        cell.status = Cell.STATUS_ON;
    }

    const lost_focus = () => {
        cell.status = Cell.STATUS_OFF;
    }
</script>

<div class="cell cell-{cell.type}-{cell.status}"  on:mouseenter={get_focus} on:mouseleave={lost_focus} aria-hidden="true"></div>

<style>
    .icon {
        font-size: 2rem;
        color:gray;
    }
    
    .cell {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        aspect-ratio: 1;
    }
    
    .cell-1-on {
        background: #b3e3eb url('/visibility.svg') no-repeat center center;
        background-size: cover; 
    }

    .cell-1-off {
        background: #81CAD6 url('/visibility.svg') no-repeat center center;
        background-size: cover; 
    }

    .cell-2-on {
        background: #fdea92 url('/adjust.svg') no-repeat center center;
        background-size: cover; 
    }

    .cell-2-off {
        background: #EDCD44 url('/adjust.svg') no-repeat center center;
        background-size: cover; 
    }

    .cell-3-on {
        background:  #f89384 url('/family.svg') no-repeat center center;
        background-size: cover; 
    }

    .cell-3-off {
        background:  #DC3E26 url('/family.svg') no-repeat center center;
        background-size: cover; 
    }
</style>