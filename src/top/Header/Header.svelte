<script>
  import { isLoginbar, isNavbar } from "../../utils/store";
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
    transform: translateY(0);
    transition: transform var(--transition-default);

    &.navbar {
      transform: translateY(var(--size-navbar-height));
    }

    &.loginbar {
      transform: translateY(
        calc(var(--size-navbar-height) + var(--size-loginbar-height))
      );
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

<header class:navbar={$isNavbar} class:loginbar={$isLoginbar}>
  <div>
    <Logo />
    <SearchbarSwitcher />
    <NavigationSwitcher />
  </div>
</header>
