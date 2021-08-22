<script>
    import Navigation from "../components/navigation.svelte";
    import AddTodo from "../components/addTodo.svelte";
</script>

<h1 class="page-title">To-Do App</h1>

<Navigation />

<AddTodo />

<slot />