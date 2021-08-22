<svelte:head>
    <title>Completed: To-Do</title>
</svelte:head>

<script lang="ts">
    import TodoItemList from "../../components/todoItemList.svelte";

    // let todoItems = [
    //     {
    //         id: "2",
    //         content: "Pay Electric and Water Bill",
    //         isPriority: false,
    //         isCompleted: true
    //     }
    // ];

    let todoItems = [];

    let isLoading:boolean = true;

    isLoading = false;
</script>

<div class="mt-5">
    <TodoItemList todoItems={todoItems} isLoading={isLoading} />
</div>