<script>
  import { isnavbar } from "../utils/store/navigation";
  import { Logo, NavigationSwitcher, SearchbarSwitcher } from "./";
</script>

<style lang="scss">
  header {
    display: block;
    width: 100%;
    background-color: var(--color-black);
    position: fixed;
    top: 0;
    left: 0;
    z-index: var(--index-header);

    &.navbar {
      transform: translateY(100px);
    }
  }

  div {
    display: grid;
    grid-template-columns: minmax(10rem, auto) 1fr minmax(10rem, auto);
    grid-template-areas: "search logo more";
    grid-template-rows: var(--size-header-height);
    width: 100%;
    max-width: var(--size-container-max-width);
    margin: 0 auto;
  }
</style>

<header class:navbar={$isnavbar}>
  <div>
    <Logo />
    <SearchbarSwitcher />
    <NavigationSwitcher />
  </div>
</header>
