<script lang="ts">
    import { goto } from '$app/navigation';

    function goToHome() {
        goto('/');
    }
</script>

<button onclick={goToHome} class="circle-btn">
    <span class="arrow">&lt;</span>
</button>

<style>
        .circle-btn {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: linear-gradient(145deg, #ececec, #e9e9e9);
        box-shadow:
        4px 4px 10px rgba(0, 0, 0, 0.1),
        -4px -4px 10px rgba(255, 255, 255, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: all 0.2s ease;
    }

.circle-btn:hover {
  box-shadow:
    2px 2px 6px rgba(0, 0, 0, 0.1),
    -2px -2px 6px rgba(255, 255, 255, 0.7);
}

.arrow {
  font-size: 32px;
  color: #333;
  user-select: none;
}
</style>