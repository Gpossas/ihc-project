<script lang="ts">
    import type { MediaItem } from '$lib/interfaces/MovieCard';

    export let id: MediaItem['id'];
    export let poster: MediaItem['poster'];
    export let title: MediaItem['title'];
    export let rating: MediaItem['rating'];
    export let date: MediaItem['date'];
</script>

<div class="card">
    <img class="poster" src={poster} alt={title} />

    <div class="rating">
        🍅 {rating}%
    </div>

    <h3>{title}</h3>

    {#if date}
        <p>{date}</p>
    {/if}

    <button class="watchlist">+ WATCHLIST</button>
</div>

<style>
    .card {
        width: 170px;
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    .poster {
        width: 100%;
        border-radius: 12px;
    }

    .rating {
        font-size: 14px;
        font-weight: 600;
    }

    .watchlist {
        margin-top: 4px;
        border: 1px solid black;
        border-radius: 20px;
        padding: 6px 0;
        background: none;
    }

    p,h3 {
        margin: 0;
    }
</style>