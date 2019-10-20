<script>
  import { language, webpSupport } from "../../utils/store";
  import { servers } from "../../utils/constants";
  import { getNameByLanguage, setContainerHeight } from "../../utils/helpers";
  import { BrokenContainer, Container, Image, TileLink } from "./";

  export let item;
  let failure = false;
  let loaded = false;
  let { container } = item;

  function setFailure() {
    failure = true;
  }

  function setLoaded() {
    loaded = true;
  }
</script>

<style lang="scss">
  li {
    display: flex;
    align-items: flex-end;
    width: 200px;
  }

  :global(a:hover img) {
    transform: scale(0.9);
  }
</style>

<li>
  <TileLink {container}>
    {#if failure}
      <BrokenContainer type={container.type} />
    {:else}
      <Image {item} {loaded} on:error={setFailure} on:load={setLoaded} />
    {/if}
    {#if !loaded && !failure}
      <Container type={container.type} />
    {/if}
  </TileLink>
</li>
