<!-- 
- Show end game scored points and allow for a new round of color clash
-->

<script>
    import { createEventDispatcher } from "svelte";
    import { totalScore} from '../js/store.js';

    let dispatch = createEventDispatcher();
</script>

<div class="score string visible">
    <p class="score-size">Complimenti hai totalizzato</p>
    <p class="score-size">{$totalScore} punti</p>
    <button on:click={() => dispatch('newGame')}>Nuova Partita</button>
</div>

<style>    
     @import url('https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@100;300;400;900&display=swap');
    
     .score {
        border-radius: 0.8rem;
        padding: 3rem;
        background-color: rgba(0, 0, 0, 1);
        width: 90%;
        height: 68vh;
        color: #fdea92;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 6vh;
    }
    
    .string {
        font-family: "Londrina Solid", sans-serif;
        font-weight: bold;
        font-style: normal;
        color: #fdea92;
        text-align: center;
    }

    .score-size {
        font-size: 4vw;
    }

    button {
        margin-top: 10vh;
        padding: 15px 30px;
        text-align: center;
        text-transform: uppercase;
        transition: 0.5s;
        background-size: 200% auto;
        color: #FDEA92;
        border-radius: 10px;
        display: block;
        border: 2px solid #FDEA92;
        font-weight: bolder;
        font-size: 2vh;
        background-image: linear-gradient(45deg, #FF512F 0%, #F09819  51%, #FF512F  100%);
    }

    button:hover {
        background-position: right center;
        color: #fff;
        transform: scale(1.2);
    }

    @media only screen and (orientation:portrait) and (max-width: 1023px) {
        .score {
            border-radius: 0.8rem;
            padding: 3rem;
            background-color: rgba(0, 0, 0, 1);
            width: 60%;
            height: 50vh;
            color: #fdea92;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 6vh;
        }
        
        .string {
            font-family: "Londrina Solid", sans-serif;
            font-weight: bold;
            font-style: normal;
            color: #fdea92;
            text-align: center;
        }

        .score-size {
            font-size: 9vw;
        }
    }

    @media only screen and (orientation:landscape) and (max-width: 1023px) {    
        .visible {
            display: none;
        }
    }
</style>
