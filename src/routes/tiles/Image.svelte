<script>
  import { onMount } from "svelte";
  import isBoolean from "lodash/isBoolean";
  import { language, webpSupport } from "utils/store";
  import { servers } from "utils/constants";
  import { getNameByLanguage } from "utils/helpers";

  export let item;
  export let loaded = false;

  onMount(webpSupport.checkSupport);

  const {
    badge,
    brand: { badge: brandBadge, name: brandName },
    container,
    name,
    shortId
  } = item;

  const { value: formattedName } = getNameByLanguage({
    values: name,
    language
  });

  const { value: formattedBrand } = getNameByLanguage({
    values: brandName,
    language
  });

  $: format = $webpSupport ? "webp" : "jpg";
  $: coverPath = `${servers.images}${brandBadge}/${badge}/${shortId}/cover/${format}`;
  $: srcSet = `${coverPath}/1x.${format}, ${coverPath}/2x.${format} 2x, ${coverPath}/4x.${format} 4x,`;
</script>

<style lang="scss">
  img {
    display: block;
    height: 100%;
    transform: scale(1);
    opacity: 0;
    transition: transform var(--transition-default),
      opacity var(--transition-default);
    pointer-events: none;

    &.loaded {
      opacity: 1;
    }
  }
</style>

{#if !process.browser || isBoolean($webpSupport)}
  <img
    alt={`${formattedName}, ${formattedBrand}`}
    class:loaded
    on:error
    on:load
    {srcSet}
    src={`${coverPath}/1x.${format}`} />
{/if}
