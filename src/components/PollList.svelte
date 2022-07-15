<script>
 import PollDetails from "./PollDetails.svelte";
 export let polls = [];
</script>

<div class="poll-list">
 {#each polls as poll, i (poll.id)}
  <PollDetails {poll} index={i} on:vote />
 {/each}
</div>

<style>
 .poll-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
 }
</style>
