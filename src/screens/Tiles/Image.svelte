<script>
  import { language, webpSupport } from "../../utils/store";
  import { servers } from "../../utils/constants";
  import { getNameByLanguage } from "../../utils/helpers";

  export let item;
  export let loaded = false;

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

  const coverPath = `${servers.images}${brandBadge}/${badge}/${shortId}/cover/${
    $webpSupport ? "webp" : "jpg"
  }`;
</script>

<style lang="scss">
  img {
    display: none;
    height: 100%;
    transform: scale(1);
    transition: transform var(--transition-default);
    pointer-events: none;

    &.loaded {
      display: block;
    }
  }
</style>

<img
  alt={`${formattedName}, ${formattedBrand}`}
  class:loaded
  on:error
  on:load
  srcSet={`
				${coverPath}/1x.${$webpSupport ? 'webp' : 'jpg'},
				${coverPath}/2x.${$webpSupport ? 'webp' : 'jpg'} 2x,
				${coverPath}/4x.${$webpSupport ? 'webp' : 'jpg'} 4x,
			`}
  src={`${coverPath}/1x.${$webpSupport ? 'webp' : 'jpg'}`} />
