<script lang="ts">
  import { goto } from "$app/navigation";
  import MovieCard from "$lib/components/MovieCard.svelte";
  import type { MediaItem } from "$lib/interfaces/MovieCard";

  let medias: MediaItem[] = [];

  let order = "publico";
  let rating = ["5"];

  function montarJSON() {
    const json = {
      order,
    };
    return json;
  }

  async function aplicarFiltro() {
    const filtro = montarJSON();
    const params = new URLSearchParams();

    // ORDEM
    if (filtro.order === "novo") params.append("sort_by", "release_date.desc");

    if (filtro.order === "popular") params.append("sort_by", "popularity.desc");

    if (filtro.order === "publico")
      params.append("sort_by", "vote_average.desc");

    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&${params.toString()}`;
    const response = await fetch(url);
    const data = await response.json();

    return (medias = data.results.map(
      (item: any): MediaItem => ({
        id: item.id,
        poster: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
        title: item.title,
        rating: Math.round(item.vote_average * 10),
        date: item.release_date,
      })
    ));
  }
</script>

<div class="container">
  <button class="home" onclick={() => goto("/")}>
    <img src="rotten_tomatoes_logo.png" alt="Rotten Tomatoes" id="logo" />
  </button>
  <h1>Filtros</h1>
</div>

<div class="content">
  <!-- ORDEM -->
  <section>
    <h2>Ordem</h2>
    <label>
      <input type="radio" bind:group={order} value="novo" />
      Mais novo
    </label>

    <label>
      <input type="radio" bind:group={order} value="popular" />
      Mais popular
    </label>

    <label>
      <input type="radio" bind:group={order} value="periodo" />
      Entre os anos de 1999 e 2025
    </label>

    <label>
      <input type="radio" bind:group={order} value="publico" />
      Aclamados pelo público
    </label>
  </section>

  <!-- AVALIAÇÃO -->
  <section>
    <h2>Avaliação</h2>
    <div class="rating-grid">
      <label>
        <input type="checkbox" value="1" bind:group={rating} />1 Estrela
      </label>

      <label>
        <input type="checkbox" value="2" bind:group={rating} />2 Estrelas
      </label>

      <label>
        <input type="checkbox" value="3" bind:group={rating} />3 Estrelas
      </label>

      <label>
        <input type="checkbox" value="4" bind:group={rating} />4 Estrelas
      </label>

      <label>
        <input type="checkbox" value="5" bind:group={rating} />5 Estrelas
      </label>
    </div>
  </section>
</div>

<div class="filter">
  <button onclick={aplicarFiltro}>Aplicar filtros</button>
</div>

<div class="grid">
  {#each medias as movie (movie.id)}
    <MovieCard {movie} />
  {:else}
    <h2 id="filterResponse">Sem resultados</h2>
  {/each}
</div>

<style>
  .container {
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
  }

  .home {
    border: none;
    margin: 10px;
    background: none;
  }

  .container h1 {
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 25px;
    justify-self: center;
  }

  .home #logo {
    height: 40px;
    justify-self: start;
    margin-right: 50%;
  }

  .content section label {
    display: block;
    padding: 5px;
  }

  .rating-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 22px;
    padding: 16px;
  }
</style>
