<script>
  export let centered = false;
</script>

<style lang="scss">
  @keyframes animation {
    0%,
    10% {
      -webkit-transform: perspective(140px) rotateX(-180deg);
      transform: perspective(140px) rotateX(-180deg);
      opacity: 0;
    }
    25%,
    75% {
      -webkit-transform: perspective(140px) rotateX(0deg);
      transform: perspective(140px) rotateX(0deg);
      opacity: 1;
    }
    90%,
    100% {
      -webkit-transform: perspective(140px) rotateY(180deg);
      transform: perspective(140px) rotateY(180deg);
      opacity: 0;
    }
  }

  div {
    display: block;
    width: 100%;
    height: calc(100vh - var(--size-header-height));
    background-color: var(--color-white);
    position: absolute;
    top: var(--size-header-height);
    left: 0;
    z-index: var(--index-spinner);
  }

  ul {
    width: 4rem;
    height: 4rem;
    position: absolute;
    top: 5rem;
    left: 50%;
    transform: translateX(-50%) rotateZ(45deg);
  }

  li {
    float: left;
    width: 50%;
    height: 50%;
    position: relative;
    transform: scale(1.1);

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--color-black);
      animation: animation 2.4s infinite linear both;
      transform-origin: 100% 100%;
    }

    &:nth-child(2) {
      transform: scale(1.1) rotateZ(90deg);

      &::before {
        animation-delay: 0.3s;
      }
    }

    &:nth-child(3) {
      transform: scale(1.1) rotateZ(270deg);

      &::before {
        animation-delay: 0.9s;
      }
    }

    &:nth-child(4) {
      transform: scale(1.1) rotateZ(180deg);

      &::before {
        animation-delay: 0.6s;
      }
    }
  }

  div.centered {
    height: 100%;

    ul {
      top: 50%;
      transform: translate(-50%, -50%) rotateZ(45deg);
    }
  }
</style>

<div class:centered>
  <ul>
    <li />
    <li />
    <li />
    <li />
  </ul>
</div>
