<script lang="ts">
    import Icon from "svelte-awesome";
    import { star, starO } from "svelte-awesome/icons";

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
    <p>{todoItem.content}</p>

    <Icon data={star}/>
    
    <Icon data={starO}/>
</div>

