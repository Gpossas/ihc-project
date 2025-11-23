<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import SearchBar from "./SearchBar.svelte";

    const dispatch = createEventDispatcher<{ changeType: 'movie' | 'tv' }>();
    import { goto } from '$app/navigation';

    let selected: 'movie' | 'tv' = 'movie';
    function select(type: 'movie' | 'tv') {
        selected = type;
        dispatch('changeType', type);
    }

    let menuOpen = false;
    function goToWatchlist() {
        goto('/watchlist');
    }
</script>
    
<nav class="navbar">
    <div class="center">
        <img src="rotten_tomatoes_logo.png" alt="Rotten Tomatoes" class="logo" id="logo" />
    </div>

    <div class="hamburger-wrapper">
        <button class="hamburger-button" on:click={() => (menuOpen = !menuOpen)}>
            <svg width="28" height="28" stroke="black" fill="none" stroke-width="3">
                <line x1="4" y1="8" x2="24" y2="8" />
                <line x1="4" y1="14" x2="24" y2="14" />
                <line x1="4" y1="20" x2="24" y2="20" />
            </svg>
        </button>

        <!-- ✅ DROPDOWN MENU -->
        {#if menuOpen}
            <div class="hamburger-menu">
                <button on:click={goToWatchlist}>Filmes salvos</button>
                <button on:click={() => goto('/filtro')}>Filtros</button>
            </div>
        {/if}
    </div>
</nav>

<div class="search">
    <SearchBar/>
</div>



<div class="text">
    <p class="text_for_you">Para você!</p>
</div>

<div class="tabs">
    <div class="buttons">
        <button class="button" class:selected={selected === 'tv'} on:click={() => select('tv')}>Séries</button>
        <button class="button" class:selected={selected === 'movie'} on:click={() => select('movie')}>Filmes</button>
    </div>

    <select class="categoria-select">
        <option>Categorias</option>
    </select>
</div>

<style>
    #logo {
        height: 40px;

    }
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px;
    }
    
    .text_for_you {
        color: rgb(128, 128, 128);
        font-size: 25px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    .text {
        padding-left: 12px;
    }

    p {
        margin: 0;
    }
    
    .logo { height: 26px; }
    .tabs {
        gap: 12px;
        margin: 10px;
        display: flex;
        gap: 12px;
        align-items: center;
        justify-content: space-between;
    }
    
    .categoria-select {
        margin-left: auto;
        padding: 10px;
        background-color: rgb(225, 225, 225);
        border: none;
        border-radius: 20px;
        border: none;
    }

    .buttons {
        display: flex;
        gap: 10px;
    }

    .button {
    align-items: center;
    appearance: none;
    background-color: #fff;
    border-radius: 24px;
    border-style: none;
    box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px,rgba(0, 0, 0, .14) 0 6px 10px 0,rgba(0, 0, 0, .12) 0 1px 18px 0;
    box-sizing: border-box;
    color: #3c4043;
    cursor: pointer;
    display: inline-flex;
    fill: currentcolor;
    font-family: "Google Sans",Roboto,Arial,sans-serif;
    font-size: 14px;
    font-weight: 500;
    height: 28px;
    justify-content: center;
    letter-spacing: .25px;
    line-height: normal;
    max-width: 100%;
    overflow: visible;
    padding: 2px 24px;
    position: relative;
    text-align: center;
    text-transform: none;
    transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: auto;
    will-change: transform,opacity;
    z-index: 0;
    }

    .button:hover {
    background: #F6F9FE;
    color: #174ea6;
    }

    .button:active {
    box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%), 0 8px 12px 6px rgb(60 64 67 / 15%);
    outline: none;
    }

    .button:focus {
    outline: none;
    border: 2px solid #4285f4;
    }

    .button:not(:disabled) {
    box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
    }

    .button:not(:disabled):hover {
    box-shadow: rgba(60, 64, 67, .3) 0 2px 3px 0, rgba(60, 64, 67, .15) 0 6px 10px 4px;
    }

    .button:not(:disabled):focus {
    box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
    }

    .button:not(:disabled):active {
    box-shadow: rgba(60, 64, 67, .3) 0 4px 4px 0, rgba(60, 64, 67, .15) 0 8px 12px 6px;
    }

    .button:disabled {
    box-shadow: rgba(60, 64, 67, .3) 0 1px 3px 0, rgba(60, 64, 67, .15) 0 4px 8px 3px;
    }

    /* HAMBURGER WRAPPER */
.hamburger-wrapper {
    position: relative;
}

/* HAMBURGER BUTTON */
.hamburger-button {
    background: none;
    border: none;
    padding: 6px;
    cursor: pointer;
}

/* MENU DROPDOWN */
.hamburger-menu {
    position: absolute;
    right: 0;
    top: 36px;
    background: white;
    border-radius: 10px;
    padding: 10px 0;
    box-shadow: rgba(0, 0, 0, 0.2) 0 3px 10px;
    min-width: 140px;
    z-index: 10;
}

.hamburger-menu button {
    width: 100%;
    background: none;
    border: none;
    padding: 10px 16px;
    text-align: left;
    font-size: 16px;
    cursor: pointer;
}

.hamburger-menu button:hover {
    background: #f0f0f0;
}

.bar {
    align-items: center;
}
</style>
