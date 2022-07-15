<script>
 import CreatePollForm from "./components/CreatePollForm.svelte";
 import PollList from "./components/PollList.svelte";
 import Header from "./components/Header.svelte";
 import Footer from "./components/Footer.svelte";
 import Tabs from "./shared/Tabs.svelte";
 import {tweened} from "svelte/motion";

 

 // tabs
 let items = ["Current Polls", "Add New Poll"];
 let activeItem = "Current Polls";

 const handleAdd = () => {
  activeItem = "Current Polls";
 };
</script>

<Header />
<main>
 <a
  rel="ar"
  href="/macbook.usdz"
  data-analytics-title="view silver macbook air m2 in ar"
  data-analytics-click="prop3:view silver macbook air m2 in ar"
  aria-label="View Silver MacBook Air M2 in augmented reality"
 >
  AR Test
 </a>
 <Tabs {items} {activeItem} on:tabChange={(e) => (activeItem = e.detail)} />
 {#if activeItem === "Current Polls"}
  <PollList />
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
