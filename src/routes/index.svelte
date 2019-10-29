<script context="module">
  import { servers } from "utils/constants";
  import { beveragesBasics } from "utils/store";

  export async function preload() {
    try {
      const basicsResponse = await this.fetch(`${servers.data}beverage/0/10`);
      const basicsValues = await basicsResponse.json();

      beveragesBasics.set(basicsValues);
    } catch (err) {
      this.error(500, "Could not fetch beverage basics");
    }

    return null;
  }
</script>

<script>
  import { Tiles, TilesPagination } from "components";
</script>

<Tiles />
<TilesPagination />
