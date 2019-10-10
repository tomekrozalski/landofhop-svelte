<script>
  import { fly } from "svelte/transition";
  import { LangNavigation, MainNavigation } from "./";
</script>

<style lang="scss">
  @import "../../utils/breakpoints";

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
    flex-direction: column;
    width: 100%;
    max-width: var(--size-container-max-width);
    height: 100%;
    margin: 0 auto;

    @media (min-width: $breakpoint-md) {
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: stretch;
    }
  }
</style>

<nav transition:fly={{ duration: 200, opacity: 1 }}>
  <div>
    <MainNavigation />
    <LangNavigation />
  </div>
</nav>
