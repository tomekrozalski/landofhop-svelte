<script>
  import { blur } from "svelte/transition";
</script>

<style>
  nav {
    display: block;
    width: 100%;
    height: var(--size-navbar-height);
    background: var(--color-white);
    position: fixed;
    top: 0;

    font: 250px solid arial;
    /* transform: translateY(${({ isNavbar }) => (isNavbar ? 0 : `-${sizes.topbar.height.xs}px`)});
	transition: transform ${timingFunctions.default}; */
    left: 0;
    z-index: var(--index-navbar);

    /* ${mq.md`
		transform: translateY(${({ isNavbar }) => (isNavbar ? 0 : `-${sizes.topbar.height.md}px`)});
	`}

	${mq.xl`
		height: ${sizes.navbar.height.xl}px;
		transform: translateY(${({ isNavbar }) => (isNavbar ? 0 : `-${sizes.topbar.height.xl}px`)});
	`} */
  }
</style>

<nav>
  <div transition:blur={{ amount: 10 }}>Navbar</div>
</nav>
