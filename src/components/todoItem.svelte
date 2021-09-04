<script lang="ts">
    import Icon from "svelte-awesome";
    import { star, starO, trash } from "svelte-awesome/icons";

    type todoItemType = {
        id:string,
        task:string,
        is_priority:boolean,
        is_complete:boolean
    };

    export let todoItem:todoItemType = {
        id: "",
        task: "",
        is_priority: false,
        is_complete: false
    };
</script>

<div class="todo-item {todoItem.is_complete ? 'completed' : ''}">
    <div class="grid">
        <div class="input-container">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="checkbox-container">
                <input type="checkbox" checked="{todoItem.is_complete}">
                <span class="checkmark"></span>
                {todoItem.task}
            </label>
        </div>
    </div>

    <div class="text-right">
        <button>
            {#if todoItem.is_priority}
                <Icon data={star}/>
            {:else}
                <Icon data={starO}/>
            {/if}
        </button>
    
        <button>
            <Icon data={trash}/>
        </button>
    </div>
</div>

