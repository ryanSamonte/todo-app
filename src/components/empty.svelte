<script lang="ts">
    // Library
    import Icon from "svelte-awesome";
    import { check } from "svelte-awesome/icons";

    // Props
    export let emptyStateMessage:string;
</script>

<div class="empty-item">
    <Icon data={check} scale=5/>

    <p>{emptyStateMessage}</p>
</div>