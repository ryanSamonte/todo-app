<script lang="ts">
    // Library
    import { createEventDispatcher } from 'svelte';

    // Props
    export let isAddTodoModalVisible:boolean;

    // Fields
    const dispatch = createEventDispatcher();

    let todoContent: string;

    function closeModal() {
        isAddTodoModalVisible = false;

        dispatch("closeAddTodoModal");
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
                <button type="button" class="close" on:click={() => closeModal()}>×</button>
            </div>

            <div class="modal-body">
                <div class="form mt-5">
                    <input type="text" bind:value={todoContent} placeholder="Add New Task">
                </div>
                
                {todoContent == undefined ? "" : todoContent}
            </div>

            <div class="modal-footer">
                <button type="button" class="btn button primary">
                    Submit
                </button>
            </div>
        </div>
    </div>
</div>
{/if}