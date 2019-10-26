<script>
  import { onDestroy, onMount } from "svelte";

  export let status;
  export let error;

  let seconds = 3;
  let interval;

  onMount(() => {
    interval = setInterval(() => {
      seconds = seconds - 1;
    }, 1000);
  });

  onDestroy(() => {
    clearInterval(interval);
  });

  const dev = process.env.NODE_ENV === "development";
</script>

<style>
  div {
    padding-top: 2rem;
    text-align: center;
  }

  h1 {
    margin: 4rem;
    font: 500 8rem / 1 var(--font-primary);
    text-shadow: 1px 1px 1px var(--color-brighter), 0 0 0 var(--color-darker),
      1px 1px 1px var(--color-brighter);
    color: transparent;
  }

  p {
    font: 400 1.6rem / 1 var(--font-primary);
    color: var(--color-darker);
  }
</style>

<svelte:head>
  <title>notFound.title: {status}</title>
</svelte:head>

{#if seconds === 0}
  <div>@ToDo: Redirect</div>
{:else}
  <div>
    <h1>notFound.title</h1>
    <p>{status} : {error.message} : notFound.countDown {seconds}</p>
  </div>
{/if}

{#if dev && error.stack}
  <pre>{error.stack}</pre>
{/if}
