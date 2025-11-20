<script lang="ts">
    import MovieCard from '$lib/components/MovieCard.svelte';
    import { watchlist } from '../../stores/watchlist';
</script>

<h1>Your Watchlist</h1>

<div class="grid">
    {#each $watchlist as movie (movie.id)}
        <MovieCard {movie} />
    {/each}
</div>


<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        gap: 22px;
        padding: 16px;
    }
</style>
