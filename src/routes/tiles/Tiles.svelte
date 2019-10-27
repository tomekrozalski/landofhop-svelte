<script>
  import { afterUpdate, onMount } from "svelte";
  import { beveragesBasics } from "utils/store";
  import Tile from "./Tile.svelte";

  let bodyHeight;
  let y;

  // $: console.log("y", y);
  // $: console.log("bodyHeight", bodyHeight);

  afterUpdate(() => {
    const { offsetHeight } = document.body;

    if (offsetHeight && !bodyHeight) {
      bodyHeight = offsetHeight;
    }
  });

  function mouseenter() {
    console.log("mouseenter");
  }
</script>

<style lang="scss">
  @import "../../utils/helpers/breakpoints";

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

<svelte:window bind:scrollY={y} />
<svelte:body on:mouseenter={mouseenter} />

<ul>
  {#each $beveragesBasics as item (item.id)}
    <Tile {item} />
  {/each}
</ul>
