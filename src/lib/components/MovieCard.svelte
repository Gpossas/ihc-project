<script lang="ts">
    import type { MediaItem } from '$lib/interfaces/MovieCard';
    import { addToWatchlist, removeFromWatchlist, isInWatchlist } from '../../utils/watchlist';

    export let movie: MediaItem;

    let inList = isInWatchlist(movie.id);

    function toggle() {
        if (inList) {
            removeFromWatchlist(movie.id);
        } else {
            addToWatchlist(movie);
        }
        inList = !inList;
    }
</script>

<div class="card">
    <img class="poster" src={movie.poster} alt={movie.title} />

    <div class="rating">
        🍅 {movie.rating}%
    </div>

    <h3>{movie.title}</h3>

    {#if movie.date}
        <p>{movie.date}</p>
    {/if}

    <button class="watchlist" onclick={toggle}>{inList ? "Remove from Watchlist" : "+ Watchlist"}</button>
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