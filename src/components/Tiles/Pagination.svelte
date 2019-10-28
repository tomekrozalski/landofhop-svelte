<script>
  import { onMount } from "svelte";
  import { beveragesCount } from "utils/store";

  // let pages = Math.ceil($beveragesCount / 10);
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
    <span>←</span>
  </li>
  <li>
    <a class="active" href="/">1</a>
  </li>
  <li>
    <a href="/list/2">2</a>
  </li>
  <li>
    <a href="/list/3">3</a>
  </li>
  <li>
    <a href="/list/4">4</a>
  </li>
  <li>
    <a href="/list/5">5</a>
  </li>
  <li>
    <a href="/list/5">→</a>
  </li>
</ul>
