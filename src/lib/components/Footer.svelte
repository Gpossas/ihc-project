<script lang="ts">
  import SearchBar from "./SearchBar.svelte";
  import Filter from "./Filter.svelte";
</script>

<div class="footer-container">
  <SearchBar />
  <Filter />
</div>

<style>
  .footer-container {
    position: fixed;
    bottom: 10px;
    left: 0;
    width: 90%;
    padding: 0 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;

    z-index: 1000;
  }
</style>
