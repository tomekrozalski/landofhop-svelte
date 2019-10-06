<script>
  import Tile from "./Tile.svelte";

  let result;
  let answers = ["a", "b", "c", "d"];
  let beverages = getTiles();

  function pickAnswer(val) {
    result = val;
  }

  async function getTiles() {
    const res = await fetch("http://localhost:3100/api/v1/beverage");
    const beverages = await res.json();
    console.log("beverages", beverages);

    return beverages;
  }
</script>

<style>
  h1 {
    color: green;
  }
</style>

<h1>Tiles</h1>
{#await beverages}
  loading...
{:then data}
  <ul>
    {#each data as item}
      <Tile {item} />
    {/each}
  </ul>
{/await}

{#if result}
  <h2>{result}</h2>
{:else}
  <h2>There is no result</h2>
{/if}

{#each answers as answer}
  <button on:click={() => pickAnswer(answer)}>
    Answer {answer.toUpperCase()}
  </button>
{/each}
