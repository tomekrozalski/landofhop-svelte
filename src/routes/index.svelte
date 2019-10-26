<script context="module">
  import { servers } from "utils/constants";
  import { beveragesBasics } from "utils/store";

  export function preload({ params, query }) {
    return this.fetch(`${servers.data}beverage/0/10`)
      .then(res => res.json())
      .then(values => beveragesBasics.set(values));
  }
</script>

<script>
  import Tiles from "./tiles";
</script>

<Tiles />
