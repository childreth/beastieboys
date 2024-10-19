import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { g as goto, S as Stepper, C as Cart } from "../../../chunks/Cart2.js";
import { A as Alert, I as Input } from "../../../chunks/Alert.js";
import { S as Select, P as PrimaryFooter } from "../../../chunks/PrimaryFooter.js";
import { C as Checkbox } from "../../../chunks/Checkbox.js";
import { B as Button } from "../../../chunks/Button.js";
import { P as Processing } from "../../../chunks/Processing.js";
import { c as cart } from "../../../chunks/cart.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20,300,0,0");:root{--theme-primary:hsl(150, 21%, 30%);--theme-primary-light:hsl(150 21% 50%);--theme-primary-lighter:hsl(150 21% 75%);--theme-primary-lightest:hsl(150 21% 90%);--theme-primary-dark:hsl(150, 21%, 20%);--bg-summary-bottom:hsl(25 8% 88%);--bg-summary-top:hsl(25 8% 96%);--baseSize:16px;font-size:var(--baseSize);scroll-behavior:smooth}.material-symbols-rounded{font-variation-settings:"FILL" 0, "wght" 300, "GRAD" 0, "opsz" 20}.material-symbols-rounded{font-size:1rem;color:hsl(25, 4%, 50%)}.SR_hide{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}@keyframes svelte-14oyyzi-slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:0}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes svelte-14oyyzi-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes svelte-14oyyzi-fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}@keyframes svelte-14oyyzi-slideOut{0%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}50%{filter:blur(0px)}100%{transform:scale(1) translateY(80px);filter:blur(0px);opacity:1}}@media screen and (max-width: 480px){@keyframes svelte-14oyyzi-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes svelte-14oyyzi-slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:1}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes svelte-14oyyzi-fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}}main.checkout.svelte-14oyyzi.svelte-14oyyzi.svelte-14oyyzi.svelte-14oyyzi{display:flex;flex-grow:1;flex-direction:row;height:calc(100% - 61px);overflow:auto;align-items:stretch}main.checkout.svelte-14oyyzi .summary.svelte-14oyyzi.svelte-14oyyzi.svelte-14oyyzi,main.checkout.svelte-14oyyzi form.svelte-14oyyzi.svelte-14oyyzi.svelte-14oyyzi{flex:1 1 auto;display:flex;padding:64px 56px}main.checkout.svelte-14oyyzi .formcontent.svelte-14oyyzi.svelte-14oyyzi.svelte-14oyyzi{width:400px}main.checkout.svelte-14oyyzi form.svelte-14oyyzi.svelte-14oyyzi.svelte-14oyyzi{justify-content:flex-end}main.checkout.svelte-14oyyzi form.svelte-14oyyzi>section.svelte-14oyyzi.svelte-14oyyzi{flex-direction:column}main.checkout.svelte-14oyyzi form.svelte-14oyyzi>section.svelte-14oyyzi>section.svelte-14oyyzi{padding:16px 4px 24px 4px}main.checkout.svelte-14oyyzi .content.svelte-14oyyzi.svelte-14oyyzi.svelte-14oyyzi{min-height:260px}main.checkout.svelte-14oyyzi div.summary.svelte-14oyyzi.svelte-14oyyzi.svelte-14oyyzi{background:linear-gradient(0deg, var(--bg-summary-bottom) 0%, var(--bg-summary-top) 100%)}main.checkout.svelte-14oyyzi section.svelte-14oyyzi>header.svelte-14oyyzi.svelte-14oyyzi{padding:0 2px}main.checkout.svelte-14oyyzi h1.svelte-14oyyzi.svelte-14oyyzi.svelte-14oyyzi{font-size:1.75rem;margin:0 0 8px 0;color:hsl(25, 4%, 10%)}#notifications.svelte-14oyyzi.svelte-14oyyzi.svelte-14oyyzi.svelte-14oyyzi{position:fixed;z-index:100;top:0;width:100%;overflow:visible;display:flex;align-items:center;justify-content:center}#notifications.showMe.svelte-14oyyzi.svelte-14oyyzi.svelte-14oyyzi.svelte-14oyyzi{display:none}@media screen and (max-width: 1020px){main.checkout.svelte-14oyyzi>div.svelte-14oyyzi.svelte-14oyyzi.svelte-14oyyzi{padding:48px 32px}main.checkout.svelte-14oyyzi>form.svelte-14oyyzi>section.svelte-14oyyzi.svelte-14oyyzi{width:100%}}@media only screen and (max-width: 768px){main.checkout.svelte-14oyyzi.svelte-14oyyzi.svelte-14oyyzi.svelte-14oyyzi{flex-direction:column-reverse}main.checkout.svelte-14oyyzi>form.svelte-14oyyzi.svelte-14oyyzi.svelte-14oyyzi{padding:32px 20px 16px;flex:1 1 0}main.checkout.svelte-14oyyzi>div.summary.svelte-14oyyzi.svelte-14oyyzi.svelte-14oyyzi{padding:0;flex:0 1 0}main.checkout.svelte-14oyyzi>form.svelte-14oyyzi>section.svelte-14oyyzi.svelte-14oyyzi{width:auto;flex:1 0 0}}.companycard.svelte-14oyyzi.svelte-14oyyzi.svelte-14oyyzi.svelte-14oyyzi{border:0;padding:4px 0;margin:0;display:flex;flex-direction:column;gap:0}.companycard.svelte-14oyyzi .inputGroup{margin-top:4px}.cityzip.svelte-14oyyzi.svelte-14oyyzi.svelte-14oyyzi.svelte-14oyyzi{display:flex;flex-direction:row;gap:8px}.cityzip > div:first-child{flex-basis:70%}',
  map: null
};
function closeMe() {
  const alertBox = document.querySelector("#notifications");
  alertBox.classList.add("showMe");
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let companyCC = false;
  let gift;
  let theErrors;
  cart.subscribe((items) => {
    gift = items;
  });
  let donationAmt = gift.myamount;
  let donationFrequency = gift.frequency;
  let dcfVal = gift.dcfAmount;
  let dcfChecked = gift.dcfChecked;
  let totalAmount = gift.totalAmount;
  let paymentChoosen = gift.payment;
  function updateGift() {
    console.log("updateGift", gift);
    cart.set({
      payment: paymentChoosen,
      myamount: donationAmt,
      frequency: donationFrequency,
      dcfChecked,
      dcfAmount: dcfVal,
      totalAmount,
      hasGift: false
    });
    console.log("updateGift-after", gift);
  }
  const states = [
    "Please select",
    "Alabama",
    "California",
    "Delware",
    "Massachusetts",
    "Minnesota",
    "Nebraska",
    "New York",
    "Utah"
  ];
  const countries = [
    "United States of America",
    "Canada",
    "Chile",
    "France",
    "Hungary",
    "Russia",
    "Ubezestan",
    "Zimbabwe"
  ];
  const breadcrumbs = ["previous", "previous", "previous", "previous", "current"];
  function nextStep() {
    const dialog = document.querySelector("#processing");
    const theForm = document.querySelector("form");
    const alertBox = document.querySelector("#notifications");
    const inputs = theForm.querySelectorAll("input, select,textarea");
    let skipVal = false;
    updateGift();
    console.log("theForm.checkValidity()", theForm.checkValidity());
    if (theForm.checkValidity() || skipVal) {
      console.log("nextstep", theForm);
      updateGift();
      dialog.show();
      setTimeout(
        () => {
          console.log("processed");
          goto(`/thanks`);
        },
        "2400"
      );
    } else {
      let theError = [];
      let totalErrors = inputs.length;
      for (let input of inputs) {
        if (input.required && !input.checkValidity()) {
          alertBox.firstChild.classList.remove("hidebanner");
          input.parentNode.classList.add("error");
          console.log("input.previousSibling", input.previousSibling.id);
          theError.push(" " + input.parentNode.firstElementChild.firstElementChild.textContent);
        }
      }
      let lastOne = theError.length - 1;
      theError.splice(theError.length - 1, theError.length, " and " + theError[lastOne]);
      theErrors = theError;
      alertBox.classList.remove("showMe");
      console.log("showErrors", totalErrors);
    }
    console.log("processDonation");
  }
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div id="notifications" class="showMe svelte-14oyyzi">${validate_component(Alert, "Alert").$$render(
      $$result,
      {
        status: "error",
        label: theErrors,
        closeMe: () => closeMe()
      },
      {},
      {}
    )}</div>
${validate_component(Processing, "Processing").$$render($$result, {}, {}, {})}
<main class="checkout svelte-14oyyzi"><form id="info" class="svelte-14oyyzi"><section class="formcontent svelte-14oyyzi"><header class="svelte-14oyyzi"><h1 class="svelte-14oyyzi">Add card details</h1>
				${validate_component(Stepper, "Stepper").$$render(
      $$result,
      {
        state: breadcrumbs,
        hasCC: paymentChoosen
      },
      {},
      {}
    )}</header>
			<section class="content svelte-14oyyzi">${validate_component(Input, "Input").$$render(
      $$result,
      {
        label: "Card number",
        val: "4242 4242 4242 4242",
        required: true,
        type: "text",
        disabled: true,
        readOnly: true,
        patternValidation: "[a-zA-Z0-9.+ ]+",
        placeholder: "1234 1234 1234 1234",
        autocomplete: "off"
      },
      {},
      {}
    )}

				<div class="fieldCol2">${validate_component(Input, "Input").$$render(
      $$result,
      {
        label: "Exp. date",
        val: "12/34",
        type: "text",
        required: true,
        readOnly: true,
        disabled: true,
        patternValidation: "[a-zA-Z0-9.+/ ]+",
        placeholder: "MM/YY",
        autocomplete: "off"
      },
      {},
      {}
    )}
					${validate_component(Input, "Input").$$render(
      $$result,
      {
        label: "Security code",
        val: "000",
        required: true,
        readOnly: true,
        disabled: true,
        patternValidation: "[a-zA-Z0-9.+ ]+",
        placeholder: "CVC",
        autocomplete: "off"
      },
      {},
      {}
    )}</div>

				<fieldset class="companycard svelte-14oyyzi"><legend class="hideIt">Company credit card</legend>
					${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      {
        label: "Is this a company card",
        hideOptional: true,
        checked: companyCC
      },
      {
        checked: ($$value) => {
          companyCC = $$value;
          $$settled = false;
        }
      },
      {}
    )}
					${companyCC ? `<div>${validate_component(Input, "Input").$$render(
      $$result,
      {
        label: "Company",
        val: "",
        required: true,
        patternValidation: "[a-zA-Z0-9]+"
      },
      {},
      {}
    )}</div>` : ``}</fieldset>
				${validate_component(Select, "Select").$$render(
      $$result,
      {
        label: "Country",
        val: "",
        required: true,
        listItems: countries
      },
      {},
      {}
    )}
				${validate_component(Input, "Input").$$render(
      $$result,
      {
        label: "Address",
        val: "",
        required: true,
        patternValidation: "[a-zA-Z0-9.+ ]+",
        invalidMsg: "Please enter a real address"
      },
      {},
      {}
    )}
				<div class="address2">${`<div>${validate_component(Button, "Button").$$render(
      $$result,
      {
        label: "+ Add apt., suite, floor",
        class: "text"
      },
      {},
      {}
    )}</div>`}

					${``}</div>

				${validate_component(Input, "Input").$$render(
      $$result,
      {
        label: "City",
        val: "",
        required: true,
        patternValidation: "[a-zA-Z0-9.+ ]+"
      },
      {},
      {}
    )}
				<div class="cityzip svelte-14oyyzi">${validate_component(Select, "Select").$$render(
      $$result,
      {
        label: "State",
        val: "",
        required: true,
        listItems: states,
        autocomplete: "address-level1"
      },
      {},
      {}
    )}
					${validate_component(Input, "Input").$$render(
      $$result,
      {
        label: "Zip code",
        val: "",
        type: "number",
        required: true,
        patternValidation: "[0-9]+",
        autocomplete: "postal-code"
      },
      {},
      {}
    )}</div></section>

			${validate_component(PrimaryFooter, "PrimaryFooter").$$render(
      $$result,
      {
        ctatext: "final",
        nextStep: () => nextStep()
      },
      {},
      {}
    )}</section></form>
	<div class="summary svelte-14oyyzi">${validate_component(Cart, "CartSummary").$$render(
      $$result,
      {
        donationAmt,
        donationFrequency,
        dcfValue: dcfVal,
        totalAmount,
        dcfCheck: dcfChecked
      },
      {
        dcfCheck: ($$value) => {
          dcfChecked = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
</main>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
