<svelte:head>
    <title>To-Do List</title>
</svelte:head>

<script>
    import TodoItem from "../components/todoItem.svelte";

    let todoItems = [
        {
            id: "1",
            content: "Go to Grocery",
            isPriority: true,
            isCompleted: false
        },
        {
            id: "2",
            content: "Pay Electric and Water Bill",
            isPriority: false,
            isCompleted: true
        }
    ];
</script>

<div class="mt-5">
    {#each todoItems as todoItem}
        <TodoItem todoItem={todoItem}/>
    {/each}
</div>