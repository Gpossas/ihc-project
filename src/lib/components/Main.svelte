<script>
    import MovieCard from './MovieCard.svelte';
    
    
    let movies = [
    {
    poster: 'banshees_poster.png',
    title: 'Witchboard',
    rating_tomato: 60,
    rating_audience: 46,
    date: 'Sep 16, 2025'
    },
    {
    poster: 'banshees_poster.png',
    title: 'Bad Shabbos',
    rating_tomato: 82,
    rating_audience: 72,
    date: 'Sep 20, 2025'
    }
    ];
</script>
    
    
<div class="grid">
    {#each movies as movie}
        <MovieCard {...movie} />
    {/each}
</div>
    
    
<style>
.grid {
display: grid;
grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
gap: 20px;
padding: 16px;
}
</style>