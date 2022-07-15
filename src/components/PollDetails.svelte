<script>
 import {createEventDispatcher} from "svelte";
 import Card from "../shared/Card.svelte";
 import Button from "../shared/Button.svelte";
 import PollStore from "../stores/PollStore";
 export let poll;
 export let index;
 const dispatch = createEventDispatcher();

 // reactive values
 $: totalVotes = poll.votesA + poll.votesB;
 $: percentageA = (poll.votesA / totalVotes) * 100;
 $: percentageB = (poll.votesB / totalVotes) * 100;

 // handling votes
 const handleVote = (option, id) => {
  PollStore.update((currentPolls) => {
   let poll = currentPolls.find((p) => p.id === id);
   if (option === "a") {
    poll.votesA++;
   } else {
    poll.votesB++;
   }
   return [...currentPolls];
  });
 };

 const handlePollDelete = (poll) => {
  PollStore.update((currentPolls) => {
   let filtered = currentPolls.filter((d) => d.id !== poll.id);
   console.log("deleting", poll);
   return filtered;
  });
 };
</script>

<Card>
 <div class="poll">
  <h3>{index + 1}. {poll.question}</h3>
  <p>Total votes: {totalVotes}</p>
  <div
   class="answer"
   on:click={() => {
    handleVote("a", poll.id);
   }}
  >
   <div class="percent percent-a" style={`width:${percentageA}%`} />
   <span>{poll.answerA} ({poll.votesA})</span>
  </div>
  <div
   class="answer"
   on:click={() => {
    handleVote("b", poll.id);
   }}
  >
   <div class="percent percent-b" style={`width:${percentageB}%`} />
   <span>{poll.answerB} ({poll.votesB})</span>
  </div>

  <div class="delete">
   <Button flat={true} on:click={() => handlePollDelete(poll)}>Delete</Button>
  </div>
 </div>
</Card>

<style>
 h3 {
  margin: 0 auto;
  color: #555;
 }
 p {
  margin-top: 6px;
  font-size: 14px;
  color: #aaa;
  margin-bottom: 30px;
 }
 .answer {
  background: #fafafa;
  cursor: pointer;
  margin: 10px auto;
  position: relative;
 }
 .answer:hover {
  opacity: 0.6;
 }
 span {
  display: inline-block;
  padding: 10px 20px;
 }
 .percent {
  height: 100%;
  position: absolute;
  box-sizing: border-box;
 }
 .percent-a {
  border-left: 4px solid #d91b42;
  background: rgba(217, 27, 66, 0.2);
 }
 .percent-b {
  border-left: 4px solid #45c496;
  background: rgba(69, 196, 150, 0.2);
 }

 .delete {
  margin-top: 20px;
  text-align: center;
 }
</style>
