<script>
    import Disclaimer from '$lib/components/disclaimer.svelte'
    import GameBoard from '../lib/components/game_board.svelte';
</script>

<!-- disclaimer per modalità landscape
possiamo giocare solo in verticale/portrait -->
<Disclaimer />

<GameBoard />


<style>
    :global(*) {
        margin: 0;
        padding: 0;
    }

    :global(body)  {
        /* background: url('/background6.png') no-repeat center center fixed;
        background-size: cover; */
        
        background: rgb(129,202,214);
background: linear-gradient(60deg, rgba(129,202,214,1) 0%, rgba(237,205,68,1) 49%, rgba(220,62,38,1) 100%);


        /* background: rgb(9,6,217);
        background: linear-gradient(135deg, rgba(9,6,217,1) 0%, rgba(131,58,180,1) 10%, rgba(57,153,53,1) 20%, rgba(223,228,11,1) 30%, rgba(189,44,108,1) 40%, rgba(38,215,130,1) 50%, rgba(253,29,29,1) 60%, rgba(86,253,38,1) 70%, rgba(252,240,50,1) 80%, rgba(58,231,252,1) 90%, rgba(252,176,69,1) 100%);  */
        
        /* background: rgb(63,94,251);
        background: linear-gradient(121deg, rgba(63,94,251,1) 0%, rgba(4,0,6,1) 50%, rgba(228,55,90,1) 100%); */
        
        /* background-image: linear-gradient(135deg, #dbdcd7 0%, #dddcd7 24%, #e2c9cc 30%, #e7627d 46%, #b8235a 59%, #801357 71%, #3d1635 84%, #1c1a27 100%); */

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 100vh;
    }
</style>

