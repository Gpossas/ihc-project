<script lang="ts">
    import Navbar from '$lib/components/Navbar.svelte';
    import Main from '$lib/components/Main.svelte';
    import Footer from '$lib/components/Footer.svelte';

    let selectedType: 'movie' | 'tv' = 'movie';
</script>

<Navbar on:changeType={(e) => selectedType = e.detail} />

<Main {selectedType} />

<Footer />