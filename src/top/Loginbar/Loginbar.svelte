<script>
  import { fly } from "svelte/transition";
  import { string, object } from "yup";
  import { FieldStatusIndicator, TextInput } from "../../elements";
  import { serverCall } from "../../utils";
  import { endpoints } from "../../utils/constants";

  let form = {
    email: {
      touched: false,
      valid: false,
      value: ""
    },
    password: {
      touched: false,
      valid: false,
      value: ""
    }
  };

  let validationSchemas = {
    email: string()
      .email()
      .required(),
    password: string()
      .min(5)
      .required()
  };

  function setTouched(e) {
    form[e.target.type].touched = true;
  }

  function onInput(e) {
    const { type, value } = e.target;
    form[type].value = value;

    validationSchemas[type].isValid(form[type].value).then(valid => {
      form[type].valid = valid;
    });
  }

  const sendTheForm = async () => {
    const rawResponse = await serverCall({
      type: endpoints.login,
      body: JSON.stringify({
        email: form.email.value,
        password: form.password.value
      })
    });

    console.log("rawResponse", rawResponse);
  };
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
    width: 100%;
    max-width: 34rem;
    margin: 0 1.5rem;
  }
</style>

<div class="wrapper" transition:fly={{ duration: 200, opacity: 1 }}>
  <form on:submit|preventDefault={sendTheForm}>
    <div class="group">
      <label for="login-email">Email:</label>
      <FieldStatusIndicator field={form.email}>
        <input
          value={form.email.value}
          class="input-bright"
          id="login-email"
          type="email"
          on:change={setTouched}
          on:input={onInput} />
      </FieldStatusIndicator>
    </div>
    <div class="group">
      <label for="login-password">Hasło:</label>
      <FieldStatusIndicator field={form.password}>
        <input
          value={form.password.value}
          class="input-bright"
          id="login-password"
          type="password"
          on:change={setTouched}
          on:input={onInput} />
      </FieldStatusIndicator>
    </div>
    <button
      class="btn-default"
      disabled={!form.email.valid || !form.password.valid}
      type="submit">
      Wyślij
    </button>
  </form>
</div>
