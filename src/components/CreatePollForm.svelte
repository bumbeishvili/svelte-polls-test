<script>
 import {createEventDispatcher} from "svelte";
 import Button from "../shared/Button.svelte";

 let dispatch = createEventDispatcher();
 let fields = {
  question: "",
  answerA: "",
  answerB: "",
 };

 let errors = {
  question: "",
  answerA: "",
  answerB: "",
 };

 let valid = false;

 const submitHandler = () => {
  valid = true;

  // validate question
  if (fields.question.trim().length < 5) {
   errors.question = "Question must be at least 5 characters long";
   valid = false;
  } else {
   errors.question = "";
  }

  // validate answer a
  if (fields.answerA.trim().length < 1) {
   errors.answerA = "Answer A must be at least 1 character long";
   valid = false;
  } else {
   errors.answerA = "";
  }

  // validate answer b
  if (fields.answerB.trim().length < 1) {
   errors.answerB = "Answer B must be at least 1 character long";
   valid = false;
  } else {
   errors.answerB = "";
  }

  // add a new poll
  if (valid) {
   let poll = {
    id: crypto.randomUUID(),
    ...fields,
    votesA: 0,
    votesB: 0,
   };

   dispatch("add", poll);
  }
 };
</script>

<div class="create-poll">
 <form on:submit|preventDefault={submitHandler}>
  <div class="form-field">
   <label for="question">Poll Question:</label>
   <input type="text" id="question" bind:value={fields.question} />
   <div class="error">{errors.question}</div>
  </div>
  <div class="form-field">
   <label for="answer-a">Answer A:</label>
   <input type="text" id="answer-a" bind:value={fields.answerA} />
   <div class="error">{errors.answerA}</div>
  </div>
  <div class="form-field">
   <label for="answer-b">Answer B:</label>
   <input type="text" id="answer-b" bind:value={fields.answerB} />
   <div class="error">{errors.answerB}</div>
  </div>
  <Button type="primary" inverse={false} flat={true}>Add Poll</Button>
 </form>
</div>

<style>
 form {
  width: 400px;
  margin: 0 auto;
  text-align: center;
 }
 .form-field {
  margin: 18px auto;
 }

 input {
  border-radius: 6px;
  width: 100%;
 }

 label {
  margin: 10px auto;
  text-align: left;
 }

 .error {
  color: red;
  font-size: 12px;
  text-align: left;
 }
</style>
