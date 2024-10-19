import { w as writable } from "./index.js";
const cart = writable({
  myamount: 25,
  frequency: "one-time",
  dcfChecked: false,
  totalAmount: 0,
  dcfAmount: 10,
  hasGift: false,
  payment: ""
});
export {
  cart as c
};
