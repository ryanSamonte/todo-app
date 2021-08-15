<svelte:head>
    <title>To-Do List</title>
</svelte:head>

<script>
    import TodoItem from "../components/todoItem.svelte";

    let todoItems = [
        {
            id: "1",
            content: "One",
            isPriority: false,
            isCompleted: false
        },
        {
            id: "2",
            content: "Two",
            isPriority: false,
            isCompleted: false
        }
    ];
</script>

<div>
    {#each todoItems as todoItem}
        <TodoItem todoItem={todoItem}/>
    {/each}
</div>