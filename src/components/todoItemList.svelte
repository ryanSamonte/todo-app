<script lang="ts">
    import Loading from "./loading.svelte";
    import Empty from "./empty.svelte";
    import TodoItem from "./todoItem.svelte";

    export let isLoading:boolean;
    export let todoItems = [];

    $: emptyTodoItem = todoItems.length == 0;
</script>

<div class="mt-5">
    {#if isLoading}
        <Loading />
    {/if}

    {#if emptyTodoItem && !isLoading}
        <Empty />
    {/if}

    {#each todoItems as todoItem}
        <TodoItem todoItem={todoItem}/>
    {/each}
</div>