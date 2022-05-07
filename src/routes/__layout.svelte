<script lang="ts">
	import { page } from '$app/stores';
import { onMount } from 'svelte';


const startLinks = [
		{ name: 'Account', link: '/account' },
		{ name: 'Groups', link: '/groups' },
		{ name: 'Car', link: '/car' }
	];
	const endLinks = [
		{ name: 'Sign Up', link: '/signup', class: 'is-primary' },
		{ name: 'Log In', link: '/login', class: 'is-light' }
	];
	let burgerIsActive = false;
	const onBurgerClick = () => {
		burgerIsActive = !burgerIsActive;
	};
</script>

<svelte:head>
	<title>Car sharing</title>
</svelte:head>

<nav class="navbar is-info" role="navigation" aria-label="main navigation">
	<div class="navbar-brand">
		<button
			class="navbar-burger"
			class:is-active={burgerIsActive}
			aria-label="menu"
			aria-expanded="false"
			data-target="navbarMenu"
			on:click={onBurgerClick}
		>
			<span aria-hidden="true" />
			<span aria-hidden="true" />
			<span aria-hidden="true" />
		</button>
		<a class="navbar-item" href="/" class:is-active={$page.url.pathname === "/"}><img src="/icons/home.svg" width="24" height="24" />Home</a>
	</div>
	<div class="navbar-menu" class:is-active={burgerIsActive} id="navbarMenu">
		<div class="navbar-start">
			{#each startLinks as link}
				<a class="navbar-item" class:is-active={$page.url.pathname === link.link} href={link.link}>{link.name}</a>
			{/each}
		</div>
		<div class="navbar-end">
			<div class="navbar-item">
				<div class="buttons">
					{#each endLinks as link}
						<a class={'navbar-item button ' + link.class} href={link.link}>{link.name}</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</nav>
<div class="content">
	<slot />
</div>

<style>
    .content {
        margin-top: 10px;
        display: flex; 
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
</style>
