<script context="module">
  import { servers } from "utils/constants";

  export async function preload() {
    try {
      const basicsResponse = await this.fetch(`${servers.data}beverage/0/5`);
      const basicsValues = await basicsResponse.json();

      return { basicsValues };
    } catch (err) {
      this.error(500, "Could not fetch beverage basics");
    }

    return null;
  }
</script>

<script>
  import { onMount } from "svelte";
  import { beveragesBasics } from "utils/store";
  import { Tiles, TilesPagination } from "components";

  export let basicsValues;

  onMount(() => {
    beveragesBasics.set(basicsValues);
  });
</script>

<Tiles />
<TilesPagination />
