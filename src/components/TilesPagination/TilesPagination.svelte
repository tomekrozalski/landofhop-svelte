<script>
  import { onMount } from "svelte";
  import { beveragesCount } from "utils/store";

  export let lastPage = 1;
  export let page = 1;

  const pages = () => {
    if (page <= 3) {
      return new Array(4).fill("").reduce(acc => [...acc, acc.pop() + 1], [1]);
    }

    if (page + 2 >= lastPage) {
      return new Array(4)
        .fill("")
        .reduce(acc => [...acc, acc.pop() + 1], [lastPage - 4]);
    }

    return new Array(4)
      .fill("")
      .reduce(acc => [...acc, acc.pop() + 1], [page - 2]);
  };
</script>

<style lang="scss">
  h3 {
    display: none;
  }

  ul {
    display: flex;
    justify-content: center;
    max-width: var(--size-container-max-width);
    margin: 12rem auto 8rem auto;
  }

  li {
    margin: 0 0.5rem;
  }

  a,
  span {
    display: inline-block;
    padding: 0.5rem 1rem;
    border: 1px solid var(--color-dark);
    background-color: var(--color-dark);
    font: 400 1.6rem / 1 var(--font-primary);
    color: var(--color-white);
  }

  span {
    cursor: not-allowed;
  }

  a {
    background-color: var(--color-brighter);
    color: var(--color-darker);
    transition: background-color var(--transition-default),
      color var(--transition-default);

    &:hover {
      background-color: var(--color-white);
      color: var(--color-black);
    }

    &.active {
      background-color: var(--color-black);
      border-color: var(--color-black);
      color: var(--color-white);
    }
  }
</style>

<h3>Zobacz więcej:</h3>

<ul>
  <li>
    {#if page === 1}
      <span>←</span>
    {:else}
      <a href="/list/{page - 1}">←</a>
    {/if}
  </li>
  {#each pages() as pageItem (pageItem)}
    <li>
      <a class:active={pageItem === page} href="/list/{pageItem}">{pageItem}</a>
    </li>
  {/each}
  <li>
    {#if page === lastPage}
      <span>→</span>
    {:else}
      <a href="/list/{page + 1}">→</a>
    {/if}

  </li>
</ul>
