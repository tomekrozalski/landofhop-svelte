<script>
  import { fly } from "svelte/transition";
  import { string, object } from "yup";
  import { TextInput } from "../../elements";

  let email = "";
  let password = "";
  let isEmailValid = false;

  let schema = string()
    .email()
    .required();

  $: schema.isValid(email).then(isEmailValid => isEmailValid);

  function sendTheForm() {
    console.log(":)", email, password);
  }
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
  <form on:submit|preventDefault={sendTheForm}>
    <div class="group">
      <label for="login-email">Email:</label>
      <TextInput
        id="login-email"
        inverse={true}
        type="email"
        value={email}
        isValid={isEmailValid} />
    </div>
    <div class="group">
      <label for="login-password">Hasło:</label>
      <TextInput
        id="login-password"
        inverse={true}
        type="password"
        value={password} />
    </div>
    <button class="btn-default">Wyślij</button>
  </form>
</div>
