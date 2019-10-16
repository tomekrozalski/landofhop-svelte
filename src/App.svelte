<script>
  import { isLoginbar, isNavbar } from "./utils/store";
  import { Header, Loginbar, NavBar } from "./top";
  import { Tiles } from "./screens";
</script>

<style>
  main {
    margin-top: var(--size-header-height);
  }
</style>

{#if $isLoginbar}
  <Loginbar />
{/if}
{#if $isNavbar}
  <NavBar />
{/if}
<Header />
<main>
  <Tiles />
</main>
