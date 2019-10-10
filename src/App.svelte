<script>
  import { isNavbar } from "./utils/store";
  import { Header, NavBar } from "./top";

  // import Tiles from "./Tiles.svelte";
</script>

{#if $isNavbar}
  <NavBar />
{/if}
<Header />
<!-- <Tiles /> -->
