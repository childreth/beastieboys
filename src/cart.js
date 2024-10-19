import { writable } from "svelte/store";

const cart = writable({
    myamount: 25.00,
    frequency: 'one-time',
    dcfChecked: false,
    totalAmount:0,
    dcfAmount: 10,
    hasGift: false,
    payment: '',
})

export default cart;