<script>
  import { language, webpSupport } from "../../utils/store";
  import { servers } from "../../utils/constants";
  import { getNameByLanguage } from "../../utils/helpers";
  export let item;

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
    webpSupport ? "webp" : "jpg"
  }`;
</script>

<li>
  <img
    alt={`${formattedName}, ${formattedBrand}`}
    srcSet={`
          ${coverPath}/1x.${webpSupport ? 'webp' : 'jpg'},
          ${coverPath}/2x.${webpSupport ? 'webp' : 'jpg'} 2x,
          ${coverPath}/4x.${webpSupport ? 'webp' : 'jpg'} 4x,
        `}
    src={`${coverPath}/1x.${webpSupport ? 'webp' : 'jpg'}`} />

  <!-- <img
      alt={`${formattedName}, ${formattedBrand}`}
      onError={() => setFailure(true)}
      onLoad={() => setLoaded(true)}
      isLoaded={loaded}
      srcSet={`
          ${coverPath}/1x.${webpSupport ? 'webp' : 'jpg'},
          ${coverPath}/2x.${webpSupport ? 'webp' : 'jpg'} 2x,
          ${coverPath}/4x.${webpSupport ? 'webp' : 'jpg'} 4x,
        `}
      src={`${coverPath}/1x.${webpSupport ? 'webp' : 'jpg'}`}
    /> -->
</li>
