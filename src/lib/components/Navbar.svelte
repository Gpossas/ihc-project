<script>
    export let categories = ["Séries", "Filmes"];
    let selected = "Filmes";
</script>
    
<nav class="navbar">
    <div class="left">
        <img src="profile_picture.png" alt="User profile" class="logo" id="profile_picture" />
    </div>

    <div class="center">
        <img src="rotten_tomatoes_logo.png" alt="Rotten Tomatoes" class="logo" id="logo" />
    </div>
</nav>

<div class="text">
    <p class="text_for_you">Para você</p>
</div>

<div class="tabs">
    <div class="buttons">
        {#each categories as category}
            <button class="button" class:selected={selected === category} on:click={() => (selected = category)}>{category}</button>
        {/each}
    </div>


    <select class="categoria-select">
        <option>Categorias</option>
    </select>
</div>
    
    
<style>
    #profile_picture {
        height: 60px;
        width: 60px;
    }
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
        margin: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .categoria-select {
        margin-left: auto;
        padding: 10px;
        background-color: rgb(225, 225, 225);
        border: none;
        border-radius: 20px;
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
</style>

