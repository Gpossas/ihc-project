<script lang="ts">
    import GoToHomeButton from '$lib/components/GoToHomeButton.svelte';
    import MovieCard from '$lib/components/MovieCard.svelte';
    import { watchlist } from '../../stores/watchlist';
</script>


<img style="margin: 10px;" src="rotten_tomatoes_logo.png" alt="Rotten Tomatoes" class="logo" id="logo" />

<GoToHomeButton />

<p>Sua lista de filmes salvos</p>

<div class="grid">
    {#each $watchlist as movie (movie.id)}
        <MovieCard {movie} />
    {:else}
     <h2>Você ainda não salvou nenhum filme :(</h2>
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

    p {
        padding-left: 12px;
        color: rgb(128, 128, 128);
        font-size: 25px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
</style>
