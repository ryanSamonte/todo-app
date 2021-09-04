<script lang="ts">
    // Library
    import { createEventDispatcher } from 'svelte';
    import { session } from "$app/stores";
    import { goto } from "$app/navigation";

    // Supabase
    import supabase from "$lib/db";

    // Props
    export let isAddTodoModalVisible:boolean;

    // Fields
    const dispatch = createEventDispatcher();

    let taskContent: string;

    function closeModal() {
        isAddTodoModalVisible = false;

        dispatch("closeAddTodoModal");
    }

    async function handleSubmit() {
        let insertData = {
            user_id: $session.user.id,
            task: taskContent
        };

        const response = await supabase.from('todos').insert(insertData)

        closeModal();

        if(response.error) {
            alert(response.error.message);
        }

        goto("/todo");
    }
</script>

{#if isAddTodoModalVisible}
<div class="modal-container" style="z-index: 101;">
    <div class="modal-overlay-container">
        <div class="modal-overlay">
            <div class="overlay"></div>
        </div>
    
        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="modal-center">&#8203;</span>
        
        <div class="modal-dialog">
            <div class="modal-header">
                <span class="modal-title">Add New Task</span>
                <button type="button" class="close" on:click={() => closeModal()}>×</button>
            </div>

            <div class="modal-body">
                <div class="form mt-5">
                    <input type="text" bind:value={taskContent} placeholder="Add New Task">
                </div>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn button primary" on:click={handleSubmit}>
                    Save
                </button>
            </div>
        </div>
    </div>
</div>
{/if}