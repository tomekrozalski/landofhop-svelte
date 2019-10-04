<script>
  import Tiles from "./Tiles.svelte";

  export let name;
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>Hello {name}!</h1>
<Tiles tilesLength="4" />
<Tiles />
