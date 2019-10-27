<script>
  import Nav from "components/Nav.svelte";
  import { isLoginbar, isNavbar } from "utils/store";
  import { Header, Loginbar, NavBar } from "../top";

  export let segment;
</script>

<style>
  main {
    margin-top: var(--size-header-height);
  }
</style>

{#if $isLoginbar}
  <Loginbar />
{/if}
<NavBar />
<Header />

<!-- <Nav {segment} /> -->

<main>
  <slot />
</main>
