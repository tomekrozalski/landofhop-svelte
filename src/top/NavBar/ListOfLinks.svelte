<script>
  import { isLoggedIn } from "../../utils/store";
</script>

<style lang="scss">
  ul {
    display: flex;
    padding: 0.5rem 0;
  }

  li {
    display: flex;
  }

  a {
    display: flex;
    align-items: center;
    padding: 1rem;
    background-color: var(--color-white);
    color: var(--color-black);
    transition: color var(--transition-default),
      background-color var(--transition-default);

    &:hover {
      background-color: var(--color-black);
      color: var(--color-white);
    }
  }
</style>

<ul>
  <li>
    <a href="/">O aplikacji</a>
  </li>
  <li>
    <a href="/">Statystyki</a>
  </li>
  {#if $isLoggedIn}
    <li>
      <a href="/">Dodaj piwo</a>
    </li>
  {/if}
</ul>
