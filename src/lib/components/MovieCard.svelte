<script>
    export let poster;
    export let title;
    export let rating_tomato;
    export let rating_audience;
    export let date;
</script>
    
    
<div class="card">
    <img src={poster} alt={title} class="poster" />
    
    
    <div class="ratings">
        {#if rating_tomato !== null}
            <span>🍅 {rating_tomato}%</span>
        {:else}
            <span>🍅 - -</span>
        {/if}
        
        
        {#if rating_audience !== null}
            <span>🍿 {rating_audience}%</span>
        {:else}
            <span>🍿 - -</span>
        {/if}
    </div>
    
    
    <h3>{title}</h3>
    <p>Streaming {date}</p>
    
    
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
.ratings {
    display: flex;
    gap: 10px;
    font-size: 14px;
}
.watchlist {
    margin-top: 4px;
    border: 1px solid black;
    border-radius: 20px;
    padding: 6px 0;
    background: none;
}
p {
    margin: 0;
}
h3 {
    margin: 0;
}
</style>