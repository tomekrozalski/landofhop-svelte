<script context="module">
  import { servers } from "utils/constants";
  import { beveragesBasics } from "utils/store";

  export function preload() {
    return this.fetch(`${servers.data}beverage/0/10`)
      .then(res => res.json())
      .then(values => beveragesBasics.set(values))
      .catch(err => this.error(500, "Could not fetch beverage basics"));
  }
</script>

<script>
  import Tiles from "./tiles";
</script>

<Tiles />
