<script>
  let query = "";
</script>

<div class="search-bar">
    <img class="icon" src="search_icon.png" alt="">
    
    <input 
      tabindex="1"
      type="text" 
      placeholder="Buscar..."
      bind:value={query}
    />
</div>


<style>
  .search-bar {
    display: flex;
    align-items: center;
    background: #bfbfbf;
    border-radius: 40px;
    padding: 11px 16px;
    width: 80%;
     
    border-radius: 40px;

    display: flex;
    align-items: center;
    gap: 10px;

    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    
}

.search-bar .icon {
    height: 20px;
}

.search-bar input {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    font-size: 20px;
    color: #333;
}

  input:focus {
    border-color: #888;
    outline: none;
  }
</style>
