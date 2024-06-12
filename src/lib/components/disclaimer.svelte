<div class="disclaimer">
    <p>Gioca a Color Clash in modalità portrait.</p>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');

    .disclaimer {
        display: none;
    }

    @media only screen and (orientation:landscape) and (max-width: 1023px) {
        .disclaimer {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            visibility: visible;
            color: black;
            background-color: white;
            width: 100%;
            height: 100vh;
            opacity: 0.6;
            font-family: "Lilita One", sans-serif;
            font-weight: 400;
            font-style: normal;
            font-size: 3rem;
            text-align: center;
        }
    }
</style>