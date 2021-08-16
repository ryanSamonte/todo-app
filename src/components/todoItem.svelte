<script lang="ts">
    import Icon from "svelte-awesome";
    import { star, starO, trash } from "svelte-awesome/icons";

    type todoItemType = {
        id:string,
        content:string,
        isPriority:boolean,
        isCompleted:boolean
    };

    export let todoItem:todoItemType = {
        id: "",
        content: "",
        isPriority: false,
        isCompleted: false
    };
</script>

<div class="todo-item {todoItem.isCompleted ? 'completed' : ''}">
    <div class="grid">
        <div class="input-container">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="checkbox-container">
                <input type="checkbox" checked="{todoItem.isCompleted}">
                <span class="checkmark"></span>
                {todoItem.content}
            </label>
        </div>
    </div>

    <div class="text-right">
        <button>
            {#if todoItem.isPriority}
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

