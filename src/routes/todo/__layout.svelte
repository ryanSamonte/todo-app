<script lang="ts">
    import Navigation from "../../components/navigation.svelte";
    import AddTodo from "../../components/addTodo.svelte";
    import supabase from "$lib/db";
    import { onMount } from "svelte";
    import { session } from "$app/stores";
    import { goto } from "$app/navigation";

    onMount(() => {
        $session = supabase.auth.session();

        console.log($session);

        $session ? goto("/todo") : goto("/user/signin");
    });

    async function signOut() {
        const {error} = await supabase.auth.signOut();

        if(!error) goto("/user/signin");
    }
</script>

<h1 class="page-title">To-Do App</h1>

<Navigation />

<AddTodo />

<button class="btn primary" on:click={signOut}>Sign Out</button>

<slot />