<script lang="ts">
    import { onMount } from 'svelte';
    import MovieCard from '$lib/components/MovieCard.svelte';
    import type { MediaItem } from '$lib/interfaces/MovieCard';

    export let selectedType: 'movie' | 'tv' = 'movie';

    let items: MediaItem[] = [];
    let loading = true;
    let error: string | null = null;

    const API_KEY = import.meta.env.VITE_TMDB_KEY as string;

    async function fetchData() {
        loading = true;
        error = null;

        const endpoint =
            selectedType === 'movie'
                ? `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`
                : `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=pt-BR`;

        try {
            const r = await fetch(endpoint);
            if (!r.ok) throw new Error('Erro ao buscar dados');
            
            const data = await r.json();

            items = data.results.map((item: any): MediaItem => ({
                id: item.id,
                poster: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                title: selectedType === 'movie' ? item.title : item.name,
                rating: Math.round(item.vote_average * 10),
                date: selectedType === 'movie' ? item.release_date : item.first_air_date
            }));
        } catch (err: any) {
            error = err.message;
        }

        loading = false;
    }

    onMount(fetchData);
    $: selectedType, fetchData();
</script>

{#if loading}
    <p>Carregando...</p>
{:else if error}
    <p>{error}</p>
{:else}
    <div class="grid">
        {#each items as movie (movie.id)}
            <MovieCard {...movie} />
        {/each}
    </div>
{/if}

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        gap: 22px;
        padding: 16px;
    }
</style>