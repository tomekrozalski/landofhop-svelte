<script>
  import { isnavbar } from "../utils/store/navigation";
</script>

<style lang="scss">
  button {
    grid-area: more;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    background: var(--color-black);

    &:hover svg {
      opacity: 0.5;
    }
  }

  svg {
    display: block;
    width: 40px;
    height: 8px;
    opacity: 1;
    transition: opacity 0.2s;

    circle {
      fill: #fff;
    }
  }
</style>

<button on:click={() => isnavbar.update(val => !val)}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 9">
    <title>Open</title>
    <circle cx="35.5" cy="4.5" r="4.5" />
    <circle cx="20" cy="4.5" r="4.5" />
    <circle cx="4.5" cy="4.5" r="4.5" />
  </svg>
</button>
