<script>
  import { setContainerHeight } from "utils/helpers";

  export let container;
</script>

<style lang="scss">
  @import "../../utils/helpers/breakpoints";

  a {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
  }

  .tile-height-bottle-xl {
    height: 431px;

    @media (min-width: $breakpoint-xl) {
      height: 592px;
    }
  }
  .tile-height-bottle-lg {
    height: 364px;

    @media (min-width: $breakpoint-xl) {
      height: 500px;
    }
  }
  .tile-height-bottle-md {
    height: 324px;

    @media (min-width: $breakpoint-xl) {
      height: 446px;
    }
  }
  .tile-height-can-lg {
    height: 264px;

    @media (min-width: $breakpoint-xl) {
      height: 363px;
    }
  }
  .tile-height-can-md {
    height: 180x;

    @media (min-width: $breakpoint-xl) {
      height: 248px;
    }
  }

  .tile-height-zero {
    height: 10px;
  }
</style>

<a class="tile-height-{setContainerHeight(container)}" href="/">
  <slot />
</a>
