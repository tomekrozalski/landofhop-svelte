<script context="module">
  import { writable } from "svelte/store";
  import { servers } from "utils/constants";
  import {
    beveragesBasics,
    beveragesCount,
    page,
    tilesOnPage
  } from "utils/store";

  export async function preload({ params }) {
    page.set(Number(params.slug));

    let tilesOnPageValue;

    const unsubscibe = tilesOnPage.subscribe(val => (tilesOnPageValue = val));
    unsubscibe();

    try {
      const basicsResponse = await this.fetch(
        `${servers.data}beverage/0/${tilesOnPageValue}`
      );
      const basicsValues = await basicsResponse.json();

      beveragesBasics.set(basicsValues);
    } catch (err) {
      this.error(500, "Could not fetch beverage basics");
    }

    try {
      const countResponse = await this.fetch(`${servers.data}beverage/count`);
      const countValue = await countResponse.json();

      await beveragesCount.set(countValue);
    } catch (err) {
      this.error(500, "Could not fetch beverage count");
    }

    return null;
  }
</script>

<script>
  import { onMount } from "svelte";
  import { Tiles, TilesPagination } from "components";
</script>

<div>
  Hura, jesteś na stronie {$page}, wszystkich piw w bazie jest {$beveragesCount}
</div>

<Tiles />
<TilesPagination page={$page} />
