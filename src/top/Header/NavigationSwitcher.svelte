<script>
  import { isNavbar } from "../../utils/store/navigation";
</script>

<style lang="scss">
  @import "../../utils/breakpoints";

  button {
    grid-area: more;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover svg {
      opacity: 0.5;
    }
  }

  svg {
    display: block;
    width: 2rem;
    height: 0.4rem;
    opacity: 1;
    transition: opacity var(--transition-default);

    @media (min-width: $breakpoint-xl) {
      width: 4rem;
      height: 0.8rem;
    }

    circle {
      fill: var(--color-white);
    }
  }
</style>

<button on:click={() => isNavbar.update(val => !val)}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 9">
    <title>Open</title>
    <circle cx="35.5" cy="4.5" r="4.5" />
    <circle cx="20" cy="4.5" r="4.5" />
    <circle cx="4.5" cy="4.5" r="4.5" />
  </svg>
</button>
