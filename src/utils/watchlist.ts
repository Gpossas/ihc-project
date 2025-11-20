import { watchlist } from '../stores/watchlist';
import type { MediaItem } from '$lib/interfaces/MovieCard';

export function addToWatchlist(movie: MediaItem) {
    watchlist.update((list) => {
        if (!list.find((m) => m.id === movie.id)) {
            return [...list, movie];
        }
        return list;
    });
}

export function removeFromWatchlist(id: string) {
    watchlist.update((list) => list.filter((m) => m.id !== id));
}

export function isInWatchlist(id: string) {
    let exists = false;
    watchlist.subscribe((list) => {
        exists = list.some((m) => m.id === id);
    })();
    return exists;
}
