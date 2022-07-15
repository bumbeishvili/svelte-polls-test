<script>
 import PollDetails from "./PollDetails.svelte";
 import PollStore from "../stores/PollStore.js";
</script>

<div class="poll-list">
 {#each $PollStore as poll, i (poll.id)}
  <PollDetails {poll} index={i} />
 {/each}
</div>
<style>
 .poll-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
 }
</style>
