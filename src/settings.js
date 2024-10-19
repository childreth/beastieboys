import { writable } from "svelte/store";

const settings = writable({
    dcfEnabled: true;
})

export default settings;