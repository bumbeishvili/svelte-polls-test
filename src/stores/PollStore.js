import { writable } from 'svelte/store';

const PollStore = writable([
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
]
);

export default PollStore;