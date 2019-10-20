<script>
  import { setContainerHeight } from "../../utils/helpers";

  export let container;
</script>

<style lang="scss">
  a {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
  }

  .tile-height-592 {
    height: 592px;
  }
  .tile-height-500 {
    height: 500px;
  }
  .tile-height-446 {
    height: 446px;
  }
  .tile-height-363 {
    height: 363px;
  }
  .tile-height-248 {
    height: 248px;
  }
  .tile-height-100 {
    height: 100px;
  }
  .tile-height-0 {
    height: 10px;
  }
</style>

<a class={`tile-height-${setContainerHeight(container)}`} href="/">
  <slot />
</a>
