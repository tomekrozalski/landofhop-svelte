<script>
  import { afterUpdate, onMount } from "svelte";
  import { beveragesBasics } from "utils/store";
  import { Spinner } from "elements";
  import Tile from "./Tile.svelte";

  let bodyHeight;
  let y;

  $: console.log("y", y);
  $: console.log("bodyHeight", bodyHeight);
  $: console.log("beveragesBasics", $beveragesBasics);

  onMount(beveragesBasics.getBasics);

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

<svelte:head>
  <title>Land of Hop :: Tiles</title>
</svelte:head>

<svelte:window bind:scrollY={y} />
<svelte:body on:mouseenter={mouseenter} />

{#if $beveragesBasics.length}
  <ul>
    {#each $beveragesBasics as item (item.id)}
      <Tile {item} />
    {/each}
  </ul>
{:else}
  <Spinner centered={true} />
{/if}
