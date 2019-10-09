<style lang="scss">
  a {
    grid-area: logo;
    display: flex;
    justify-content: center;

    &:hover h1 {
      transform: scaleX(1.2);
    }
  }

  h1 {
    width: 5rem;
    height: 100%;
    overflow: hidden;
    position: relative;
    transform: scaleX(1);
    transition: transform var(--transition-default);

    &::before {
      content: "";
      background: var(--color-white);
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }
</style>

<a href="/">
  <h1>Land of Hop</h1>
</a>
