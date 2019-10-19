<script>
  import { onMount } from "svelte";
  import Tile from "./Tile.svelte";

  let beverages = [];

  onMount(async () => {
    const res = await fetch("http://localhost:3100/api/v1/beverage");
    const values = await res.json();

    beverages = values;
  });
</script>

<style>
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 200px));
    max-width: 1200px;
    margin: 0 auto;
  }
</style>

{#await beverages}
  loading...
{:then data}
  <ul>
    {#each data as item}
      <Tile {item} />
    {/each}
  </ul>
{/await}
