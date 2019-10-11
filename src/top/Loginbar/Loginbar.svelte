<script>
  import { fly } from "svelte/transition";

  let email = "";
  let password = "";

  $: console.log("email", email);
</script>

<style>
  .wrapper {
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

  .group {
    display: flex;
    align-items: center;
    width: 34rem;
    margin: 0 1.5rem;
  }

  label {
    margin-right: 1rem;
  }
</style>

<div class="wrapper" transition:fly={{ duration: 200, opacity: 1 }}>
  <form>
    <div class="group">
      <label for="login-email">email:</label>
      <input
        bind:value={email}
        class="input-bright"
        id="login-email"
        type="email" />
    </div>
    <div class="group">
      <label for="login-password">hasło:</label>
      <input
        bind:value={password}
        class="input-bright"
        id="login-password"
        type="password" />
    </div>
  </form>
</div>
