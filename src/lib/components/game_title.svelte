<!-- 
-  Reactive Title of the game
-->

<div class="col-left-top visible">
    <p class="string rot-left">COLOR</p>
    <p class="string rot-right">CLASH</p>
</div>

<style>
    .string {
        font-family: "Londrina Solid", sans-serif;
        font-weight: bold;
        font-style: normal;
        color: #fdea92;
        text-align: center;
    }

    @media only screen and (min-width: 1023px) {
        .rot-left {
            rotate: -10deg;
            font-size: 6vw;
        }

        .rot-right {
            rotate: 10deg;
            font-size: 7vw;
        }

        .col-left-top {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;        
        }
    }

    @media only screen and (orientation:portrait) and (max-width: 1023px) {
        .rot-left {
            rotate: -10deg;
            font-size: 8vw;
        }

        .rot-right {
            rotate: 10deg;
            font-size: 9vw;
        }

        .col-left-top {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-evenly;        
        }
    }

    @media only screen and (orientation:landscape) and (max-width: 1023px) {    
        .visible {
            display: none;
        }
    }
</style>