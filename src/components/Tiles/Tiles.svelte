<script>
  import { afterUpdate, onMount } from "svelte";
  import { beveragesBasics } from "utils/store";
  import Tile from "./Tile.svelte";

  export let basicsValues = [];
</script>

<style lang="scss">
  @import "../../utils/helpers/breakpoints";

  h2 {
    display: none;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, 160px);
    grid-gap: var(--size-tiles-gap);
    justify-content: center;
    max-width: var(--size-container-max-width);
    padding: 0 var(--size-tiles-gap);
    margin: 0 auto 8rem auto;

    @media (min-width: $breakpoint-xl) {
      grid-template-columns: repeat(auto-fill, 220px);
    }
  }
</style>

<svelte:head>
  <title>Land of Hop</title>
</svelte:head>

<h2>Lista napojów</h2>

<ul>
  {#each basicsValues as item (item.id)}
    <Tile {item} />
  {/each}
</ul>
