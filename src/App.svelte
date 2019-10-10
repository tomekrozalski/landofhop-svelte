<script>
  import { isLoginbar, isNavbar } from "./utils/store";
  import { Header, Loginbar, NavBar } from "./top";

  // import Tiles from "./Tiles.svelte";
</script>

{#if $isLoginbar}
  <Loginbar />
{/if}
{#if $isNavbar}
  <NavBar />
{/if}
<Header />
<!-- <Tiles /> -->
