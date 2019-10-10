<style lang="scss">
  ul {
    display: flex;
    margin: 0 0.5rem;
    padding: 0.5rem 0;
  }

  li {
    display: flex;
  }

  button {
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
    <button>PL</button>
  </li>
  <li>
    <button>EN</button>
  </li>
</ul>
