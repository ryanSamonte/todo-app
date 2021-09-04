<script lang="ts">
    // Library
    import Icon from "svelte-awesome";
    import { star, starO, trash } from "svelte-awesome/icons";

    // Supabase
    import supabase from "$lib/db";
import { identity } from "svelte/internal";

    // Props
    export let todoItem:todoItemType = {
        id: "",
        task: "",
        is_priority: false,
        is_complete: false
    };

    // Fields
    type todoItemType = {
        id:string,
        task:string,
        is_priority:boolean,
        is_complete:boolean
    };

    async function handleTaskStatus(id:string, is_complete:boolean) {
        let updateData = {
            is_complete: !is_complete
        };

        const response = await supabase.from("todos").update(updateData).match({ id });

        console.log(response);
    }

    async function handlePriorityStatus(id:string, is_priority:boolean) {
        let updateData = {
            is_priority: !is_priority
        };

        const response = await supabase.from("todos").update(updateData).match({ id });

        console.log(response);
    }
</script>

<div class="todo-item {todoItem.is_complete ? 'completed' : ''}">
    <div class="grid">
        <div class="input-container">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="checkbox-container">
                <input type="checkbox" checked="{todoItem.is_complete}" on:change={() => handleTaskStatus(todoItem.id, todoItem.is_complete)}>
                <span class="checkmark"></span>
                {todoItem.task}
            </label>
        </div>
    </div>

    <div class="text-right">
        {#if !todoItem.is_complete}
            <button on:click={() => handlePriorityStatus(todoItem.id, todoItem.is_priority)}>
                {#if todoItem.is_priority}
                    <Icon data={star}/>
                {:else}
                    <Icon data={starO}/>
                {/if}
            </button>
        {/if}
    
        <button>
            <Icon data={trash}/>
        </button>
    </div>
</div>

