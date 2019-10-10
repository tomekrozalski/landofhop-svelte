<script>
  import { fly } from "svelte/transition";

  let email = "";

  $: console.log("email", email);
</script>

<style>
  div {
    width: 100%;
    position: fixed;
    top: var(--size-navbar-height);
    left: 0;
    background-color: var(--color-brighter);
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: var(--size-container-max-width);
    height: var(--size-loginbar-height);
    margin: 0 auto;
  }
</style>

<div transition:fly={{ duration: 200, opacity: 1 }}>
  <form>
    <input bind:value={email} type="email" />
  </form>
</div>
