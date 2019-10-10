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

  :global(.header-link) {
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
    <a href="/" class="header-link">O aplikacji</a>
  </li>
  <li>
    <a href="/" class="header-link">Statystyki</a>
  </li>
  {#if $isLoggedIn}
    <li>
      <a href="/" class="header-link">Dodaj piwo</a>
    </li>
  {/if}
</ul>
