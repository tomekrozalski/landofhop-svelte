<script>
  import { MainNavigation } from "./";
  import { fly } from "svelte/transition";
</script>

<style>
  nav {
    display: block;
    width: 100%;
    height: var(--size-navbar-height);
    background: var(--color-white);
    position: fixed;
    top: 0;
    left: 0;
    z-index: var(--index-navbar);
  }

  div {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: stretch;
    width: 100%;
    max-width: var(--size-container-max-width);
    height: 100%;
    margin: 0 auto;
  }
</style>

<nav transition:fly={{ duration: 200, opacity: 1 }}>
  <div>
    <MainNavigation />
  </div>
</nav>
