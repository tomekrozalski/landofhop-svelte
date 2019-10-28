<script context="module">
  import { servers } from "utils/constants";
  import { beveragesBasics, beveragesCount } from "utils/store";

  export async function preload() {
    try {
      const basicsResponse = await this.fetch(`${servers.data}beverage/0/10`);
      const basicsValues = await basicsResponse.json();

      beveragesBasics.set(basicsValues);
    } catch (err) {
      this.error(500, "Could not fetch beverage basics");
    }

    try {
      const countResponse = await this.fetch(`${servers.data}beverage/count`);
      const countValue = await countResponse.json();

      beveragesCount.set(countValue);
    } catch (err) {
      this.error(500, "Could not fetch beverage count");
    }

    return null;
  }
</script>

<script>
  import Tiles from "./tiles";
</script>

<Tiles />
