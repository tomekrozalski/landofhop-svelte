<script>
  import { onMount } from "svelte";
  import { isBefore } from "date-fns";
  import Tile from "./Tile.svelte";

  let beverages = [];

  onMount(async () => {
    const res = await fetch("http://localhost:3100/api/v1/beverage");
    const values = await res.json();

    beverages = values.sort((a, b) =>
      isBefore(new Date(a.added), new Date(b.added)) ? 1 : -1
    );
  });
</script>

<style>
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 200px));
    grid-gap: var(--size-tiles-gap);
    max-width: var(--size-container-max-width);
    padding: 0 var(--size-tiles-gap);
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
