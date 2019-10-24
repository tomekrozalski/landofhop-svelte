<script>
  import { onMount } from "svelte";
  import { beveragesBasics } from "../../utils/store";
  import Tile from "./Tile.svelte";

  onMount(beveragesBasics.getBasics);
</script>

<style>
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 200px));
    grid-gap: var(--size-tiles-gap);
    max-width: var(--size-container-max-width);
    padding: 0 var(--size-tiles-gap);
    margin: 0 auto 8rem auto;
  }
</style>

{#await $beveragesBasics}
  loading...
{:then data}
  <ul>
    {#each data as item (item.id)}
      <Tile {item} />
    {/each}
  </ul>
{/await}
