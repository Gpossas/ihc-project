import type { MediaItem } from '$lib/interfaces/MovieCard';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url, fetch }) => {
    const query = url.searchParams.get("query") ?? "";

    if (!query) {
        return { results: [], query };
    }

    const API_KEY = import.meta.env.VITE_TMDB_KEY as string;
    const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&language=pt-BR`
    );

    const data = await res.json();
    let items: MediaItem[] = [];
    items = data.results.map((item: any): MediaItem => ({
        id: item.id,
        poster: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
        title: item.title,
        rating: Math.round(item.vote_average * 10),
        date: item.release_date
    }));
    

    return {
        query,
        results: items ?? []
    };
};
