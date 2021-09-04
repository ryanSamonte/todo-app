<script lang="ts">
    // Children
    import AddTodoModal from "./addTodoModal.svelte"

    // Fields
    let isAddTodoModalVisible: boolean = false;

    function openAddTodoModal() {
        isAddTodoModalVisible = true;
    }

    function toggleAddTodoModal(){
        isAddTodoModalVisible = !isAddTodoModalVisible;
    }
</script>

<div class="grid sm:grid-cols-4 gap-2">
    <button class="btn add" on:click={() => openAddTodoModal()}>Add New Task</button>
    <a href="/todo" class="btn primary">All</a>
    <a href="/todo/priority" class="btn secondary">Priority</a>
    <a href="/todo/completed" class="btn success">Completed</a>
</div>

<AddTodoModal 
    {isAddTodoModalVisible}
    on:closeAddTodoModal={toggleAddTodoModal}
/>