import type { MediaItem } from "$lib/interfaces/MovieCard";
import { writable } from "svelte/store";

export const watchlist = writable<MediaItem[]>([]);

if (typeof window !== "undefined") {
    const saved = localStorage.getItem("watchlist");
    if (saved) {
        watchlist.set(JSON.parse(saved));
    }

    watchlist.subscribe(value => {
        localStorage.setItem("watchlist", JSON.stringify(value));
    });
}
