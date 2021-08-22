<script lang="ts">
    let todoContent: string;
</script>

<div class="form mt-5">
    <input type="text" bind:value={todoContent} placeholder="Add New Task">
</div>

{todoContent == undefined ? "" : todoContent}