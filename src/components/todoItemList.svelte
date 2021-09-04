<script lang="ts">
    // Children
    import Loading from "./loading.svelte";
    import Empty from "./empty.svelte";
    import TodoItem from "./todoItem.svelte";

    // Props
    export let isLoading:boolean;
    export let todoItems = [];
    export let emptyStateMessage:string;

    $: emptyTodoItem = todoItems.length == 0;
</script>

<div class="mt-5">
    {#if isLoading}
        <Loading />
    {/if}

    {#if emptyTodoItem && !isLoading}
        <Empty emptyStateMessage={emptyStateMessage} />
    {/if}

    {#each todoItems as todoItem}
        <TodoItem todoItem={todoItem}/>
    {/each}
</div>