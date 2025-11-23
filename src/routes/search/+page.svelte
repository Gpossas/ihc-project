<script lang="ts">
    import { goto } from '$app/navigation';
    import MovieCard from '$lib/components/MovieCard.svelte';

  export let data;

  const { results, query } = data;

  function goToHome() {
        goto('/');
    }
</script>

<button class="center" onclick={goToHome}>
    <img src="rotten_tomatoes_logo.png" alt="Rotten Tomatoes" class="logo" id="logo" />
</button>

<h2>Resultados para: "{query}"</h2>

<div class="grid">
    {#each results as movie (movie.id)}
        <MovieCard {movie} />
    {/each}
</div>

{#if results.length === 0}
  <p>Nenhum filme encontrado.</p>
{/if}

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        gap: 22px;
        padding: 16px;
    }

     #logo {
        height: 40px;

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