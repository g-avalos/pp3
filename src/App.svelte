<script>
    import Profile from './Profile.svelte';
    import Todos from './Todos.svelte';

    import { auth, googleProvider } from './firebase';
    import { authState } from 'rxfire/auth';

    let user;

    const unsubscribe = authState(auth).subscribe(u => user = u);

    function login() {
        auth.signInWithPopup(googleProvider);
    }
</script>

<svelte:head>
	<link rel = "stylesheet" href = "https://cdnjs.cloudfire.com/ajaz/libs/bulma/0.7.4/css/bulma.min.css"
</svelte:head>

<style>
	h1: {
		color: purple;
	}
	
	main: {
		margin: 20px;
	}
</style>

<main class = "content">
	<section>
		{#if user}
			<Profile {...user} />
			<button on:click={ () => auth.signOut() }>Logout</button>
			<hr>
			<Todos uid={user.uid} />
		{:else}
			<button on:click={login}>
				Autenticarse con Google
			</button>
		{/if}
	</section>
</main>