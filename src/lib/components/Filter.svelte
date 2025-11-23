<script>
    import { goto } from "$app/navigation";

</script>
<button class="filter-btn" on:click={() => goto('/filtro')} tabindex="1">
    Filtro
</button>

<style>
    .filter-btn {
        padding: 11px 22px;
        font-size: 20px;
        font-weight: 500;

        background: #bfbfbf;
        border: 1px solid rgb(225, 225, 225);
        border-radius: 40px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    }

    .filter-btn:hover {
        background: #e0e0e0;
    }
</style>
