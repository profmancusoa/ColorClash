<script>
    import { Cell } from '$lib/js/cell';
    import { createEventDispatcher } from 'svelte';

    export let cell;
    const TOUCH_THRESHOLD = 200;
    let tStartTime = 0;
    let tEndTime = 0;
    let preClash = false;
    let dispatch = createEventDispatcher();

    const get_focus = () => {
        if(cell.status != Cell.STATUS_EMPTY)
            dispatch('getFocus', {r: cell.row, c: cell.col});
    }

    const lost_focus = () => {
        if(cell.status != Cell.STATUS_EMPTY)
            dispatch('lostFocus', {r: cell.row, c: cell.col});
    }

    const clash = () => {
        console.log("CLICK")
        if(cell.status != Cell.STATUS_EMPTY)
            dispatch('clash', {r: cell.row, c: cell.col});
    }

    const touchStart = () =>{
        // console.log("TSTART:", Date.now())
        console.log("START")
        // tStartTime = Date.now();
        if(preClash == false) {
            preClash = true;
            get_focus();
            setTimeout(() => {
                lost_focus();
                preClash = false;
            }, 1500);
        } else {
            clash();
        }
    }

    // const touchEnd = () =>{
    //     console.log("END")
    //     // console.log("TEND:", Date.now())
    //     tEndTime = Date.now();
    //     let touchPeriod = tEndTime - tStartTime;
    //     console.log(touchPeriod)
    //     if(touchPeriod < TOUCH_THRESHOLD) {
    //         if(preClash == false) {
    //             console.log("pre-clash")
    //             get_focus();
    //             setTimeout(() => {
    //                 if(preClash == false) {
    //                     lost_focus();
    //                     preClash = true;
    //                 }
    //             }, 1500);
    //         }
    //     } else {
    //         if(preClash == true) {
    //             console.log("clash")
    //             preClash = false;
    //             clash();
    //         }
    //     }
    // }
</script>

<!-- <div 
    class="cell cell-{cell.type}-{cell.status}"  
    on:mouseenter={get_focus} 
    on:mouseleave={lost_focus} 
    on:click={clash}
    aria-hidden="true">
</div> -->

<!-- //mobileBoard -->
<div 
    class="cell cell-{cell.type}-{cell.status}"  
    on:touchstart={touchStart} 
    aria-hidden="true">
</div>

<style>
    :root {
        --cell-1-on: #b3e3eb;
        --cell-1-off: #81CAD6;
        --cell-2-on: #fdea92;
        --cell-2-off: #EDCD44;
        --cell-3-on: #f89384;
        --cell-3-off: #DC3E26;
    }
    
    .cell {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        aspect-ratio: 1; 
        animation-duration: 0.5s;  
    }
    
    .cell-1-empty, .cell-2-empty, .cell-3-empty {
        background-color: transparent;    
    }

    @keyframes cell-1-preclash-in {
        from { background-color: var(--cell-1-off);}
        to { background-color: var(--cell-1-on); }
    }

    @keyframes cell-1-preclash-out {
        from { background-color: var(--cell-1-on);}
        to { background-color:  var(--cell-1-off); }
    }

    .cell-1-on {
        background: var(--cell-1-on) url('/visibility.svg') no-repeat center center;
        background-size: cover; 
        animation-name: cell-1-preclash-in;
    }

    .cell-1-off {
        background: var(--cell-1-off) url('/visibility.svg') no-repeat center center;
        background-size: cover; 
        animation-name: cell-1-preclash-out;
    }

    @keyframes cell-2-preclash-in {
        from { background-color: var(--cell-2-off);}
        to { background-color: var(--cell-2-on); }
    }

    @keyframes cell-2-preclash-out {
        from { background-color: var(--cell-2-on);}
        to { background-color:  var(--cell-2-off); }
    }

    .cell-2-on {
        background:  var(--cell-2-on) url('/adjust.svg') no-repeat center center;
        background-size: cover; 
        animation-name: cell-2-preclash-in;
    }

    .cell-2-off {
        background: var(--cell-2-off) url('/adjust.svg') no-repeat center center;
        background-size: cover;
        animation-name: cell-2-preclash-out; 
    }

    @keyframes cell-3-preclash-in {
        from { background-color: var(--cell-3-off);}
        to { background-color: var(--cell-3-on); }
    }

    @keyframes cell-3-preclash-out {
        from { background-color: var(--cell-3-on);}
        to { background-color:  var(--cell-3-off); }
    }

    .cell-3-on {
        background: var(--cell-3-on)  url('/family.svg') no-repeat center center;
        background-size: cover;
        animation-name: cell-3-preclash-in; 
    }

    .cell-3-off {
        background: var(--cell-3-off)  url('/family.svg') no-repeat center center;
        background-size: cover;
        animation-name: cell-3-preclash-out; 
    }
</style>