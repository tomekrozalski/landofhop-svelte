<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  import { language, webpSupport } from "../../utils/store";
  import { servers } from "../../utils/constants";
  import { getNameByLanguage, setContainerHeight } from "../../utils/helpers";
  import BrokenContainer from "./BrokenContainer.svelte";
  import Container from "./Container.svelte";
  import Image from "./Image.svelte";
  import TileLink from "./TileLink.svelte";

  export let item;
  let failure = false;
  let loaded = false;
  let { container } = item;

  let canvasElement;
  let visible;

  function setFailure() {
    failure = true;
  }

  function setLoaded() {
    loaded = true;
  }

  onMount(() => {
    const observer = new IntersectionObserver(
      (entry, observer) => {
        const { isIntersecting, target } = entry[0];
        if (!isIntersecting) {
          return;
        }

        visible = isIntersecting;
        observer.unobserve(target);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "800px"
      }
    );

    observer.observe(canvasElement);
  });
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

<li transition:fade bind:this={canvasElement}>
  <TileLink {container}>
    {#if visible && failure}
      <BrokenContainer type={container.type} />
    {:else if visible}
      <Image {item} {loaded} on:error={setFailure} on:load={setLoaded} />
    {:else if !visible || (!loaded && !failure)}
      <Container type={container.type} />
    {/if}
  </TileLink>
</li>
