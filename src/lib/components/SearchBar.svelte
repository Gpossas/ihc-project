<script>
  let query = "";
</script>

<div class="search-bar">
    <img class="icon" src="search_icon.png" alt="">
    
    <input 
      type="text" 
      placeholder="Buscar..."
      bind:value={query}
    />
</div>


<style>
  .search-bar {
    position: fixed;
    bottom: 20px;               
    left: 10px;
    width: 60%;                 
    max-width: 500px;

    background: #bcbcbc;         
    padding: 12px 18px;
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
    font-size: 16px;
    color: #333;
}

  input:focus {
    border-color: #888;
    outline: none;
  }
</style>
