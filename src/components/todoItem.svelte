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

<div class="todo-item">
    <div class="grid">
        <label for=""><input type="checkbox">{todoItem.content}</label>
    </div>

    <div class="text-right">
        <button>
            <Icon data={starO}/>
        </button>
    
        <button>
            <Icon data={trash}/>
        </button>
    </div>
</div>

