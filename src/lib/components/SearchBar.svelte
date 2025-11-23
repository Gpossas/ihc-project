<script>
  let query = "";
  
  function handleInput(e) {
    query = e.target.value;
  }
</script>

<div class="search-wrapper">
  <svg class="search-icon" viewBox="0 0 24 24" stroke-width="2" fill="none">
    <path stroke="gray" stroke-linecap="round" stroke-linejoin="round"
      d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 6.65 6.65a7.5 7.5 0 0 0 10.6 10.6Z" />
  </svg>

  <input 
    type="text" 
    placeholder="Buscar..."
    bind:value={query}
    on:input={handleInput}
  />
</div>

<style>
  .search-wrapper {
    position: relative;
    width: 100%;
    max-width: 400px;
  }

  .search-icon {
    position: absolute;
    left: 12px;
    top: 50%;
    width: 20px;
    height: 20px;
    transform: translateY(-50%);
    pointer-events: none;
  }

  input {
    width: 100%;
    padding: 10px 14px;
    padding-left: 42px;
    border-radius: 999px;
    border: 1px solid #ccc;
    font-size: 16px;
    transition: border 0.2s;
  }

  input:focus {
    border-color: #888;
    outline: none;
  }
</style>
