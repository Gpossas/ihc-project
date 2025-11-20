<script lang="ts">
    import { goto } from '$app/navigation';
    import MovieCard from '$lib/components/MovieCard.svelte';
    import { watchlist } from '../../stores/watchlist';

    function goToHome() {
        goto('/');
    }
</script>

<button class="center" onclick={goToHome}>
    <img src="rotten_tomatoes_logo.png" alt="Rotten Tomatoes" class="logo" id="logo" />
</button>

<h1>Your Watchlist</h1>

<div class="grid">
    {#each $watchlist as movie (movie.id)}
        <MovieCard {movie} />
    {/each}
</div>


<style>
    #logo {
        height: 40px;

    }
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        gap: 22px;
        padding: 16px;
    }

    button {
        background: none;
        border: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px;
    }
</style>
