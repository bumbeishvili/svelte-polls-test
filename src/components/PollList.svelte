<script>
 import PollDetails from "./PollDetails.svelte";
 import PollStore from "../stores/PollStore.js";
//  import {onMount, onDestroy} from "svelte";
 let polls = [];

//  const pollstoreUnsubscribe = PollStore.subscribe((data) => {
//   polls = data;
//  });

//  onMount(() => {
//   console.log("list mounted");
//  });

//  onDestroy(() => {
//   pollstoreUnsubscribe();
//   console.log("list destroyed and unsubscribed");
//  });
</script>

<div class="poll-list">
 {#each $PollStore as poll, i (poll.id)}
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
