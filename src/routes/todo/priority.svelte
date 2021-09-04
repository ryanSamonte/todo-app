<svelte:head>
    <title>Priority: To-Do</title>
</svelte:head>

<script lang="ts">
    // Library
    import { onMount } from "svelte";
    import { session } from "$app/stores";

    // Supabase
    import supabase from "$lib/db";

    // Children
    import TodoItemList from "../../components/todoItemList.svelte";

    onMount(() => {
        fetchTaskList();
    });

    // Fields
    let todoItems = [];
    const emptyStateMessage:string = "You have no priority task";

    async function fetchTaskList() {
        isLoading = true;

        let userId = $session.user.id;

        const response = await supabase.from('todos').select().eq("user_id", userId).eq("is_priority", true);

        if(response) {
            isLoading = false;
            todoItems = response.data;
        }
    }

    let isLoading:boolean = false;
</script>

<div class="mt-5">
    <TodoItemList todoItems={todoItems} isLoading={isLoading} emptyStateMessage={emptyStateMessage} />
</div>