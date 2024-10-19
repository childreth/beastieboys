import { writable } from "svelte/store";

const options = writable({
    designations: 'Where its needed the most',
    dedicationType: 'In honor of',
    honoreeFirst: '',
    honoreeLast: '',
    comment: ''
})

export default options;