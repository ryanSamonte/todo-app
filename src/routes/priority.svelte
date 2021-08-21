<svelte:head>
    <title>Priority: To-Do</title>
</svelte:head>

<script lang="ts">
    import TodoItemList from "../components/todoItemList.svelte";

    let todoItems = [
        {
            id: "3",
            content: "Exercise",
            isPriority: true,
            isCompleted: false
        },
        {
            id: "1",
            content: "Go to Grocery",
            isPriority: false,
            isCompleted: false
        },
        {
            id: "2",
            content: "Pay Electric and Water Bill",
            isPriority: false,
            isCompleted: true
        },
        {
            id: "4",
            content: "Read Book",
            isPriority: false,
            isCompleted: false
        }
    ];

    let isLoading:boolean = false;
</script>

<div class="mt-5">
    <TodoItemList todoItems={todoItems} isLoading={isLoading} />
</div>