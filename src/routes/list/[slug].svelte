<script context="module">
  import { servers } from "utils/constants";
  import { beveragesBasics, beveragesCount } from "utils/store";

  export async function preload({ params }) {
    const page = params.slug;

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

    return { page };
  }
</script>

<script>
  export let page = 1;
</script>

<div>
  Hura, jesteś na stronie {page}, wszystkich piw w bazie jest {$beveragesCount}
</div>
