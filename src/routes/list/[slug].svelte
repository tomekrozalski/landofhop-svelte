<script context="module">
  import { writable } from "svelte/store";
  import { servers } from "utils/constants";

  export async function preload({ params }) {
    let basicsValues;
    let countValue;
    const page = Number(params.slug);

    try {
      const basicsResponse = await this.fetch(
        `${servers.data}beverage/${page ? (page - 1) * 10 : 0}/10`
      );
      basicsValues = await basicsResponse.json();
    } catch (err) {
      this.error(500, "Could not fetch beverage basics");
    }

    try {
      const countResponse = await this.fetch(`${servers.data}beverage/count`);
      countValue = await countResponse.json();
    } catch (err) {
      this.error(500, "Could not fetch beverage count");
    }

    return { basicsValues, countValue, page };
  }
</script>

<script>
  import { onMount } from "svelte";
  import { beveragesBasics, beveragesCount } from "utils/store";
  import { Tiles, TilesPagination } from "components";

  export let basicsValues;
  export let countValue;
  export let page;

  onMount(() => {
    beveragesBasics.set(basicsValues);
    beveragesCount.set(countValue);
  });
</script>

<Tiles {basicsValues} />
<TilesPagination {page} lastPage={Math.ceil(countValue / 10)} />
