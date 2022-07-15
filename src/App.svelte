<script>
 import CreatePollForm from "./components/CreatePollForm.svelte";
 import PollList from "./components/PollList.svelte";
 import Header from "./components/Header.svelte";
 import Footer from "./components/Footer.svelte";
 import Tabs from "./shared/Tabs.svelte";

 // tabs
 let items = ["Current Polls", "Add New Poll"];
 let activeItem = "Current Polls";

 let polls = [
  {
   id: 1,
   question: "Python or JavaScript?",
   answerA: "Python",
   answerB: "JavaScript",
   votesA: 9,
   votesB: 15,
  },
  {
   id: 2,
   question: "React or Vue?",
   answerA: "React",

   answerB: "Vue",
   votesA: 10,
   votesB: 15,
  },
 ];

 const handleAdd = ({detail: poll}) => {
  polls = [poll, ...polls];
  activeItem = "Current Polls";
  console.log(polls);
 };

 const handleVote = ({detail: {id, option}}) => {
  let copy = [...polls];
  let poll = copy.find((p) => p.id === id);
  if (option === "a") {
   poll.votesA++;
  } else {
   poll.votesB++;
  }
  polls = copy;
 };
</script>

<Header />
<main>
 <Tabs {items} {activeItem} on:tabChange={(e) => (activeItem = e.detail)} />
 {#if activeItem === "Current Polls"}
  <PollList {polls} on:vote={handleVote} />
 {:else if activeItem === "Add New Poll"}
  <CreatePollForm on:add={handleAdd} />
 {/if}
</main>
<Footer />

<style>
 main {
  max-width: 960px;
  margin: 40px auto;
 }
</style>
