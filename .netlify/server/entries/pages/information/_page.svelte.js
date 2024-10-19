import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { g as goto, S as Stepper, C as Cart } from "../../../chunks/Cart2.js";
import { A as Alert, I as Input } from "../../../chunks/Alert.js";
import { C as Checkbox } from "../../../chunks/Checkbox.js";
/* empty css                                                      */import { S as Select, P as PrimaryFooter } from "../../../chunks/PrimaryFooter.js";
import { c as cart } from "../../../chunks/cart.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20,300,0,0");:root{--theme-primary:hsl(150, 21%, 30%);--theme-primary-light:hsl(150 21% 50%);--theme-primary-lighter:hsl(150 21% 75%);--theme-primary-lightest:hsl(150 21% 90%);--theme-primary-dark:hsl(150, 21%, 20%);--bg-summary-bottom:hsl(25 8% 88%);--bg-summary-top:hsl(25 8% 96%);--baseSize:16px;font-size:var(--baseSize);scroll-behavior:smooth}.material-symbols-rounded{font-variation-settings:"FILL" 0, "wght" 300, "GRAD" 0, "opsz" 20}.material-symbols-rounded{font-size:1rem;color:hsl(25, 4%, 50%)}.SR_hide{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}@keyframes svelte-1ovgj93-slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:0}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes svelte-1ovgj93-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes svelte-1ovgj93-fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}@keyframes svelte-1ovgj93-slideOut{0%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}50%{filter:blur(0px)}100%{transform:scale(1) translateY(80px);filter:blur(0px);opacity:1}}@media screen and (max-width: 480px){@keyframes svelte-1ovgj93-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes svelte-1ovgj93-slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:1}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes svelte-1ovgj93-fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}}main.checkout.svelte-1ovgj93.svelte-1ovgj93.svelte-1ovgj93.svelte-1ovgj93{display:flex;flex-grow:1;flex-direction:row;height:calc(100% - 61px);overflow:auto;align-items:stretch}main.checkout.svelte-1ovgj93 .summary.svelte-1ovgj93.svelte-1ovgj93.svelte-1ovgj93,main.checkout.svelte-1ovgj93 form.svelte-1ovgj93.svelte-1ovgj93.svelte-1ovgj93{flex:1 1 auto;display:flex;padding:64px 56px}main.checkout.svelte-1ovgj93 .formcontent.svelte-1ovgj93.svelte-1ovgj93.svelte-1ovgj93{width:400px}main.checkout.svelte-1ovgj93 form.svelte-1ovgj93.svelte-1ovgj93.svelte-1ovgj93{justify-content:flex-end}main.checkout.svelte-1ovgj93 form.svelte-1ovgj93>section.svelte-1ovgj93.svelte-1ovgj93{flex-direction:column}main.checkout.svelte-1ovgj93 form.svelte-1ovgj93>section.svelte-1ovgj93>section.svelte-1ovgj93{padding:16px 4px 24px 4px}main.checkout.svelte-1ovgj93 div.summary.svelte-1ovgj93.svelte-1ovgj93.svelte-1ovgj93{background:linear-gradient(0deg, var(--bg-summary-bottom) 0%, var(--bg-summary-top) 100%)}main.checkout.svelte-1ovgj93 section.svelte-1ovgj93>header.svelte-1ovgj93.svelte-1ovgj93{padding:0 2px}main.checkout.svelte-1ovgj93 h1.svelte-1ovgj93.svelte-1ovgj93.svelte-1ovgj93{font-size:1.75rem;margin:0 0 8px 0;color:hsl(25, 4%, 10%)}#notifications.svelte-1ovgj93.svelte-1ovgj93.svelte-1ovgj93.svelte-1ovgj93{position:fixed;z-index:100;top:0;width:100%;overflow:visible;display:flex;align-items:center;justify-content:center}#notifications.showMe.svelte-1ovgj93.svelte-1ovgj93.svelte-1ovgj93.svelte-1ovgj93{display:none}@media screen and (max-width: 1020px){main.checkout.svelte-1ovgj93>div.svelte-1ovgj93.svelte-1ovgj93.svelte-1ovgj93{padding:48px 32px}main.checkout.svelte-1ovgj93>form.svelte-1ovgj93>section.svelte-1ovgj93.svelte-1ovgj93{width:100%}}@media only screen and (max-width: 768px){main.checkout.svelte-1ovgj93.svelte-1ovgj93.svelte-1ovgj93.svelte-1ovgj93{flex-direction:column-reverse}main.checkout.svelte-1ovgj93>form.svelte-1ovgj93.svelte-1ovgj93.svelte-1ovgj93{padding:32px 20px 16px;flex:1 1 0}main.checkout.svelte-1ovgj93>div.summary.svelte-1ovgj93.svelte-1ovgj93.svelte-1ovgj93{padding:0;flex:0 1 0}main.checkout.svelte-1ovgj93>form.svelte-1ovgj93>section.svelte-1ovgj93.svelte-1ovgj93{width:auto;flex:1 0 0}}.col-2.svelte-1ovgj93.svelte-1ovgj93.svelte-1ovgj93.svelte-1ovgj93{display:flex;flex-direction:row;gap:8px}',
  map: null
};
function closeMe() {
  const alertBox = document.querySelector("#notifications");
  alertBox.classList.add("showMe");
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let paymentMethod = gift.payment;
  function updateGift() {
    console.log("updateGift", gift);
    cart.set({
      payment: paymentMethod,
      myamount: donationAmt,
      frequency: donationFrequency,
      dcfChecked,
      dcfAmount: dcfVal,
      totalAmount,
      hasGift: false
    });
    console.log("updateGift-after");
  }
  function processDonation() {
    document.querySelector("#processing");
    const theForm = document.querySelector("form");
    const alertBox = document.querySelector("#notifications");
    const inputs = theForm.querySelectorAll("input, select,textarea");
    console.log("processing");
    updateGift();
    goto("/payment");
    {
      if (theForm.checkValidity()) {
        console.log("checkValidity", theForm.checkValidity());
        goto("/payment");
        console.log("updateGift-after");
      } else {
        let theError = [];
        let totalErrors = inputs.length;
        for (let input of inputs) {
          console.log("detect", window.getComputedStyle(input, "-webkit-autofill").getPropertyValue("appearance") === "menulist-button");
          if (input.required && !input.checkValidity()) {
            document.getElementById("firstname").focus();
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
    }
    console.log("processDonation");
  }
  const countries = [
    "Please select",
    "Friend 👯‍♀️",
    "Family 👨‍👩‍👧‍👦",
    "Advertisment ✨",
    "Search Engine 🔎",
    "Other 💜"
  ];
  const breadcrumbs = ["previous", "previous", "current", "next", "next"];
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `


${$$result.head += `<!-- HEAD_svelte-1hwe1lm_START -->${$$result.title = `<title>Santa Pantry - Donor information</title>`, ""}<!-- HEAD_svelte-1hwe1lm_END -->`, ""}

<div id="notifications" class="showMe svelte-1ovgj93">${validate_component(Alert, "Alert").$$render(
      $$result,
      {
        status: "error",
        label: theErrors,
        closeMe: () => closeMe()
      },
      {},
      {}
    )}</div>

<main class="checkout svelte-1ovgj93"><form id="info" class="svelte-1ovgj93"><section class="formcontent svelte-1ovgj93"><header class="svelte-1ovgj93"><h1 class="svelte-1ovgj93">Donor Information</h1>
				${validate_component(Stepper, "Stepper").$$render($$result, { state: breadcrumbs, hasCC: "none" }, {}, {})}</header>
			<section class="svelte-1ovgj93"><div class="col-2 topEl svelte-1ovgj93">${validate_component(Input, "Input").$$render(
      $$result,
      {
        label: "First name",
        val: "",
        required: true,
        patternValidation: ".+"
      },
      {},
      {}
    )}
					${validate_component(Input, "Input").$$render(
      $$result,
      {
        label: "Last name",
        val: "",
        required: true,
        patternValidation: "[a-zA-Z0-9]+"
      },
      {},
      {}
    )}</div>
				${validate_component(Checkbox, "Checkbox").$$render($$result, { label: "Hide my name from the public" }, {}, {})}
				${validate_component(Input, "Input").$$render(
      $$result,
      {
        label: "Email",
        val: "",
        required: true,
        type: "email",
        helper: "Your receipt will be emailed here.",
        invalidMsg: "Please use email format of name@email.com"
      },
      {},
      {}
    )}
				${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      {
        label: "It’s ok to contact me in the future"
      },
      {},
      {}
    )}

				${validate_component(Input, "Input").$$render(
      $$result,
      {
        label: "Phone",
        val: "",
        required: false,
        patternValidation: "[0-9-./()+ ]{9,24}",
        type: "tel",
        invalidMsg: "Please enter a valid phone number"
      },
      {},
      {}
    )}
				

				
				
				${validate_component(Select, "Select").$$render(
      $$result,
      {
        label: "How did you find us?",
        val: "",
        required: false,
        listItems: countries
      },
      {},
      {}
    )}
				

				</section>
			${validate_component(PrimaryFooter, "PrimaryFooter").$$render(
      $$result,
      {
        ctatext: "payment",
        nextStep: () => processDonation()
      },
      {},
      {}
    )}</section></form>
	<div class="summary svelte-1ovgj93">${validate_component(Cart, "CartSummary").$$render(
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
