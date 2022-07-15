<script>
 import CreatePollForm from "./components/CreatePollForm.svelte";
 import PollList from "./components/PollList.svelte";
 import Header from "./components/Header.svelte";
 import Footer from "./components/Footer.svelte";
 import Tabs from "./shared/Tabs.svelte";

 // tabs
 let items = ["Current Polls", "Add New Poll"];
 let activeItem = "Current Polls";

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
 <a
  rel="ar"
  href="https://apple.com/105/media/us/macbook-air-m2/2022/58a79d66-620c-4d70-8679-8db4c76ff675/ar/macbook_air_m2_chip_silver_ios15.usdz"
  data-analytics-title="view silver macbook air m2 in ar"
  data-analytics-click="prop3:view silver macbook air m2 in ar"
  aria-label="View Silver MacBook Air M2 in augmented reality"
 >
  AR Test
 </a>
 <Tabs {items} {activeItem} on:tabChange={(e) => (activeItem = e.detail)} />
 {#if activeItem === "Current Polls"}
  <PollList on:vote={handleVote} />
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
