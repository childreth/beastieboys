import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "../../chunks/index2.js";
/* empty css                   */import { c as cart } from "../../chunks/cart.js";
import { C as Checkbox } from "../../chunks/Checkbox.js";
const DonationGrid_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20,300,0,0");:root{--theme-primary:hsl(150, 21%, 30%);--theme-primary-light:hsl(150 21% 50%);--theme-primary-lighter:hsl(150 21% 75%);--theme-primary-lightest:hsl(150 21% 90%);--theme-primary-dark:hsl(150, 21%, 20%);--bg-summary-bottom:hsl(25 8% 88%);--bg-summary-top:hsl(25 8% 96%);--baseSize:16px;font-size:var(--baseSize);scroll-behavior:smooth}.material-symbols-rounded{font-variation-settings:"FILL" 0, "wght" 300, "GRAD" 0, "opsz" 20}.material-symbols-rounded{font-size:1rem;color:hsl(25, 4%, 50%)}.SR_hide{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}@keyframes svelte-if6lf9-slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:0}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes svelte-if6lf9-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes svelte-if6lf9-fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}@keyframes svelte-if6lf9-slideOut{0%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}50%{filter:blur(0px)}100%{transform:scale(1) translateY(80px);filter:blur(0px);opacity:1}}@media screen and (max-width: 480px){@keyframes svelte-if6lf9-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes svelte-if6lf9-slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:1}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes svelte-if6lf9-fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}}label.radiobtn.svelte-if6lf9.svelte-if6lf9.svelte-if6lf9,label.other.svelte-if6lf9 input.svelte-if6lf9.svelte-if6lf9{background-color:var(--theme-primary-lightest);line-height:2rem;font-size:1.125rem;padding:12px 8px;border-radius:8px;flex:1 1 auto;flex-wrap:wrap;cursor:pointer;font-weight:700}#otherGroup.svelte-if6lf9.svelte-if6lf9.svelte-if6lf9{background-color:var(--theme-primary-lightest);border-radius:8px;width:100%}#otherGroup.svelte-if6lf9 input.svelte-if6lf9.svelte-if6lf9{background-color:transparent}fieldset.svelte-if6lf9.svelte-if6lf9.svelte-if6lf9{display:flex;flex-wrap:wrap;gap:0px;border:0}input[type=radio].svelte-if6lf9.svelte-if6lf9.svelte-if6lf9{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;margin:0;position:absolute;opacity:0;pointer-events:none;transition:all 0.3s ease-in-out}input[type=radio].svelte-if6lf9.svelte-if6lf9.svelte-if6lf9:focus{outline:none}#donationForm.svelte-if6lf9.svelte-if6lf9.svelte-if6lf9{box-shadow:0px 2px 12px hsl(25, 4%, 90%);border-radius:20px;border:1px solid hsl(25, 4%, 92%);background-color:white;padding:40px 0 32px 0;text-align:center}#donationForm.svelte-if6lf9 h2.svelte-if6lf9.svelte-if6lf9{font-size:1.5rem;font-weight:700;line-height:2.25rem;padding:0 0 24px 0;margin:0}fieldset#frequency.svelte-if6lf9.svelte-if6lf9.svelte-if6lf9{gap:4px;margin:0 32px;padding:0;border-radius:48px;box-shadow:0px 0px 0px 2px var(--theme-primary-lightest);background:var(--theme-primary-lightest)}fieldset#frequency.svelte-if6lf9 legend.svelte-if6lf9.svelte-if6lf9{padding:0 0 12px 0}fieldset#frequency.svelte-if6lf9 label.svelte-if6lf9.svelte-if6lf9{font-size:1rem;font-weight:700;text-align:center;line-height:1.25rem;background:var(--theme-primary-lightest);border-radius:24px;transition:all 0.25s ease-in-out}fieldset#frequency.svelte-if6lf9 label.svelte-if6lf9.svelte-if6lf9:hover{background:var(--theme-primary-lightest);box-shadow:inset 0px 0px 0px 1px white, 0px 0px 0px 2px hsl(150, 21%, 75%)}fieldset#frequency.svelte-if6lf9 input[type=radio].svelte-if6lf9:checked+label.svelte-if6lf9{background-color:var(--theme-primary);position:relative;color:white;display:flex;justify-content:center;align-items:center;transition:all 0.2s ease-in-out;box-shadow:inset 0px 0px 0px 1px rgba(0, 0, 0, 0.3), inset 1px 2px 12px rgba(0, 0, 0, 0.2), inset 1px 2px 2px rgba(0, 0, 0, 0.2)}fieldset#frequency.svelte-if6lf9 input[type=radio]+label.svelte-if6lf9 span.svelte-if6lf9{position:relative}fieldset#frequency.svelte-if6lf9 input[type=radio]+label.svelte-if6lf9 span.svelte-if6lf9:before{content:url("../img/checkbox_check.svg");position:absolute;left:-20px;top:2px;transform:scale(0);transition:all 0.3s cubic-bezier(0.03, 0.47, 0.08, 1.18);transition-delay:0.2s}fieldset#frequency.svelte-if6lf9 input[type=radio]:checked+label.svelte-if6lf9 span.svelte-if6lf9:before{transform:scale(1.2)}fieldset#amount.svelte-if6lf9.svelte-if6lf9.svelte-if6lf9{padding:0 40px 48px 40px}fieldset#amount.svelte-if6lf9 legend.svelte-if6lf9.svelte-if6lf9{padding:20px 0 8px 0;line-height:1.25rem;position:relative;width:100%}fieldset#amount.svelte-if6lf9 label.svelte-if6lf9.svelte-if6lf9{display:flex;justify-content:center;flex:1 1 0px;min-width:33%;transition:all 0.25s ease-in-out}fieldset#amount.svelte-if6lf9 label.svelte-if6lf9.svelte-if6lf9:hover{background:var(--theme-primary-lightest);box-shadow:inset 0px 0px 0px 1px white, 0px 0px 0px 2px hsl(150, 21%, 75%)}fieldset#amount.svelte-if6lf9 label.svelte-if6lf9.svelte-if6lf9:active{transform:scale(0.98)}fieldset#amount.svelte-if6lf9 label.svelte-if6lf9.svelte-if6lf9:focus-within{background-color:var(--theme-primary)}fieldset#amount.svelte-if6lf9 input[type=radio].svelte-if6lf9:checked+label.svelte-if6lf9,fieldset#amount.svelte-if6lf9 #otherGroup:has(input[type=radio]:checked) input#Otheramt.svelte-if6lf9.svelte-if6lf9{background-color:var(--theme-primary);transition:all 0.2s ease-in -out;box-shadow:inset 0px 0px 0px 1px rgba(0, 0, 0, 0.3), inset 1px 2px 12px rgba(0, 0, 0, 0.2), inset 1px 2px 2px rgba(0, 0, 0, 0.2);color:white}fieldset#amount.svelte-if6lf9 input[type=radio]:checked+label span.textValue.svelte-if6lf9.svelte-if6lf9,fieldset#amount.svelte-if6lf9 #otherGroup:has(input[type=radio]:checked) input#Otheramt span.textValue.svelte-if6lf9.svelte-if6lf9{color:white}fieldset#amount.svelte-if6lf9 #otherGroup:has(input[type=radio]:checked) #currency.svelte-if6lf9.svelte-if6lf9{color:white}fieldset#amount.svelte-if6lf9 #otherGroup:has(input[type=radio]:checked) input#Otheramt.svelte-if6lf9.svelte-if6lf9::placeholder{color:rgba(255, 255, 255, 0.4)}fieldset#amount.svelte-if6lf9 input#Otheramt.svelte-if6lf9.svelte-if6lf9::-webkit-outer-spin-button,fieldset#amount.svelte-if6lf9 input#Otheramt.svelte-if6lf9.svelte-if6lf9::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}fieldset#amount.svelte-if6lf9 input#Otheramt.svelte-if6lf9.svelte-if6lf9:focus-visible{outline-offset:4px;outline:2px dotted blue !important}fieldset#amount.svelte-if6lf9 .amountWrapper.svelte-if6lf9.svelte-if6lf9{display:flex;flex-wrap:wrap;flex-direction:row;flex:1 1 50%;gap:4px}fieldset#amount.svelte-if6lf9 label.other.svelte-if6lf9.svelte-if6lf9{padding:0;position:relative;flex-direction:row;flex-wrap:nowrap;flex:1 0 0px;min-height:56px;overflow:hidden}fieldset#amount.svelte-if6lf9 input.otherinput.svelte-if6lf9.svelte-if6lf9{border:0;padding:8px 12px 8px 32px;margin:0px;border-radius:0}fieldset#amount.svelte-if6lf9 input.otherinput.svelte-if6lf9.svelte-if6lf9:focus-visible{outline-offset:-8px}fieldset#amount.svelte-if6lf9 input.otherinput.svelte-if6lf9.svelte-if6lf9::placeholder{color:hsl(25, 4%, 10%)}fieldset#amount.svelte-if6lf9 #currency.svelte-if6lf9.svelte-if6lf9{position:absolute;left:18px;line-height:56px;color:hsl(25, 4%, 10%)}.terms.svelte-if6lf9.svelte-if6lf9.svelte-if6lf9{font-size:0.75rem;line-height:1rem;color:hsl(25, 4%, 50%);text-align:center;padding-top:16px}.gradBorder.svelte-if6lf9.svelte-if6lf9.svelte-if6lf9{background:radial-gradient(79.1% 135.19% at 50% 135.19%, hsl(150, 21%, 92%) 0%, hsl(150, 21%, 100%) 80%);height:28px;border-bottom:1px solid white;filter:drop-shadow(0px 1px 0px var(--theme-primary-lightest))}footer.svelte-if6lf9.svelte-if6lf9.svelte-if6lf9{background-color:transparent;min-height:auto;padding:0 32px}footer.svelte-if6lf9 #primaryCta.svelte-if6lf9.svelte-if6lf9{background-color:hsl(25, 4%, 20%);display:flex;flex-direction:column;padding:12px;border-radius:12px;color:white;text-decoration:none;box-shadow:0px 2px 2px rgba(0, 0, 0, 0.12);transition:all 0.2s ease-in-out}footer.svelte-if6lf9 #primaryCta .freqTitle.svelte-if6lf9.svelte-if6lf9{font-size:0.875rem;line-height:1.25rem;font-weight:600}footer.svelte-if6lf9 #primaryCta .gift.svelte-if6lf9.svelte-if6lf9{font-size:1.125rem;line-height:1.5rem;font-weight:700}footer.svelte-if6lf9 #primaryCta.svelte-if6lf9.svelte-if6lf9:hover{background-color:hsl(25, 4%, 10%)}footer.svelte-if6lf9 #primaryCta.svelte-if6lf9.svelte-if6lf9:active{transform:scale(0.95)}footer.svelte-if6lf9 .checkbox.svelte-if6lf9.svelte-if6lf9{display:flex;justify-content:center;padding:16px 8px}@media only screen and (max-width: 768px){fieldset#frequency.svelte-if6lf9.svelte-if6lf9.svelte-if6lf9{margin:0 24px}fieldset#amount.svelte-if6lf9.svelte-if6lf9.svelte-if6lf9{padding:0 32px 48px 32px}#donationForm.svelte-if6lf9.svelte-if6lf9.svelte-if6lf9{border-radius:0}footer.svelte-if6lf9.svelte-if6lf9.svelte-if6lf9{padding:0 24px}}',
  map: null
};
const DonationGrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dcf;
  let gift;
  cart.subscribe((items) => {
    console.log("load gift");
    gift = items;
  });
  let { amount = gift.myamount } = $$props;
  let { frequency = gift.frequency } = $$props;
  let { dcfCheck = gift.dcfChecked } = $$props;
  let { amountCal = gift.totalAmount } = $$props;
  let otherVal;
  let donationAmount;
  if ($$props.amount === void 0 && $$bindings.amount && amount !== void 0)
    $$bindings.amount(amount);
  if ($$props.frequency === void 0 && $$bindings.frequency && frequency !== void 0)
    $$bindings.frequency(frequency);
  if ($$props.dcfCheck === void 0 && $$bindings.dcfCheck && dcfCheck !== void 0)
    $$bindings.dcfCheck(dcfCheck);
  if ($$props.amountCal === void 0 && $$bindings.amountCal && amountCal !== void 0)
    $$bindings.amountCal(amountCal);
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (amount == "Other") {
        donationAmount = otherVal;
      } else {
        donationAmount = amount;
        otherVal = "";
      }
    }
    dcf = Number(donationAmount * 0.1).toFixed(2);
    {
      if (dcfCheck) {
        amountCal = Number(donationAmount + donationAmount * 0.1).toFixed(2);
      } else {
        amountCal = Number(donationAmount).toFixed(2);
      }
    }
    $$rendered = `<section id="donationForm" class="svelte-if6lf9"><h2 class="svelte-if6lf9"><small>💜</small> Make Impact Today!</h2>
	<fieldset id="frequency" class="svelte-if6lf9"><legend class="hideIt svelte-if6lf9"><h3>Choose a donation frequency</h3></legend>
		<input type="radio" id="onetime" name="donation-freq" value="one-time" aria-label="One time donation" class="svelte-if6lf9"${"one-time" === frequency ? add_attribute("checked", true, 1) : ""}>
		<label for="onetime" class="radiobtn frequency svelte-if6lf9"><span class="svelte-if6lf9">One-time</span></label>

		<input type="radio" id="monthly" name="donation-freq" value="monthly" aria-label="Monthly donation" class="svelte-if6lf9"${"monthly" === frequency ? add_attribute("checked", true, 1) : ""}>
		<label for="monthly" class="radiobtn frequency svelte-if6lf9"><span class="svelte-if6lf9">Monthly</span></label></fieldset>
	<fieldset id="amount" class="svelte-if6lf9"><legend class="svelte-if6lf9">Choose a <strong id="freq">${escape(frequency)}</strong> amount</legend>
		<div class="amountWrapper svelte-if6lf9"><input type="radio" id="25" name="donation-amount"${add_attribute("value", 25, 0)} class="svelte-if6lf9"${25 === amount ? add_attribute("checked", true, 1) : ""}>
			<label for="25" class="radiobtn svelte-if6lf9"><span class="textValue svelte-if6lf9">$25</span></label>

			<input type="radio" id="50" name="donation-amount"${add_attribute("value", 50, 0)} class="svelte-if6lf9"${50 === amount ? add_attribute("checked", true, 1) : ""}>
			<label for="50" class="radiobtn svelte-if6lf9"><span class="textValue svelte-if6lf9">$50</span></label>

			<input type="radio" id="75" name="donation-amount"${add_attribute("value", 75, 0)} class="svelte-if6lf9"${75 === amount ? add_attribute("checked", true, 1) : ""}>
			<label for="75" class="radiobtn svelte-if6lf9"><span class="textValue svelte-if6lf9">$75</span></label>

			<input type="radio" id="100" name="donation-amount"${add_attribute("value", 100, 0)} class="svelte-if6lf9"${100 === amount ? add_attribute("checked", true, 1) : ""}>
			<label for="100" class="radiobtn svelte-if6lf9"><span class="textValue svelte-if6lf9">$100</span></label>

			
			<div id="otherGroup" class="svelte-if6lf9"><label for="Other" class="radiobtn other svelte-if6lf9" aria-label="Tab to enter an amount"><input type="radio" id="Other" name="donation-amount" value="Other" aria-label="Custom donation amount" class="svelte-if6lf9"${"Other" === amount ? add_attribute("checked", true, 1) : ""}>

					<span id="currency" class="svelte-if6lf9">$</span>
					<input type="number" inputmode="decimal" id="Otheramt" aria-label="Enter amount" class="otherinput svelte-if6lf9" name="donation-amount" placeholder="Other" autocomplete="off"${add_attribute("value", otherVal, 0)}></label></div></div>
		</fieldset>
	
	<div class="gradBorder svelte-if6lf9"></div>
	<footer class="svelte-if6lf9"><div class="checkbox svelte-if6lf9">${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      {
        label: `Cover transaction fees ($${dcf})`,
        hideOptional: true,
        toolTip: "I’d like to cover the fees associated with my donation so more of my donation goes directly to Santa Fe Pantry.",
        checked: dcfCheck
      },
      {
        checked: ($$value) => {
          dcfCheck = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
		
		<a id="primaryCta" href="/details" aria-describedby="sr_continue" class="svelte-if6lf9">
			<span class="freqTitle svelte-if6lf9">Donate ${escape(frequency)}</span>
			<span class="gift svelte-if6lf9">$${escape(amountCal)}</span></a>
		<p id="sr_continue" class="SR_hide">Continue with the donation process, next step is adding options</p></footer></section>
<section class="terms svelte-if6lf9">Santa Pantry is a 501(c)3 tax-exempt organization and your donation is tax deductible within the
	guidelines of U.S. taxes, please keep your email donation as a deduction on your U.S. taxes,
	please keep your email donation receipt as your official record. We’ll send it to you upon
	successful completion of your donation.
</section>`;
  } while (!$$settled);
  return $$rendered;
});
const Mission_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20,300,0,0");:root{--theme-primary:hsl(150, 21%, 30%);--theme-primary-light:hsl(150 21% 50%);--theme-primary-lighter:hsl(150 21% 75%);--theme-primary-lightest:hsl(150 21% 90%);--theme-primary-dark:hsl(150, 21%, 20%);--bg-summary-bottom:hsl(25 8% 88%);--bg-summary-top:hsl(25 8% 96%);--baseSize:16px;font-size:var(--baseSize);scroll-behavior:smooth}.material-symbols-rounded{font-variation-settings:"FILL" 0, "wght" 300, "GRAD" 0, "opsz" 20}.material-symbols-rounded{font-size:1rem;color:hsl(25, 4%, 50%)}.SR_hide{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}@keyframes svelte-1qyhg6q-slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:0}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes svelte-1qyhg6q-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes svelte-1qyhg6q-fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}@keyframes svelte-1qyhg6q-slideOut{0%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}50%{filter:blur(0px)}100%{transform:scale(1) translateY(80px);filter:blur(0px);opacity:1}}@media screen and (max-width: 480px){@keyframes svelte-1qyhg6q-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes svelte-1qyhg6q-slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:1}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes svelte-1qyhg6q-fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}}.mission.svelte-1qyhg6q h2.svelte-1qyhg6q:after{content:"";width:32px;height:32px;position:absolute;right:0;background:transparent url("../img/lemon.png") no-repeat center right;background-size:contain}.mission.svelte-1qyhg6q h2.svelte-1qyhg6q{font-family:"Unbounded";font-size:1.75rem;padding-right:40px;position:relative;display:inline-block;margin:16px 0 0 0}.mission.svelte-1qyhg6q p.svelte-1qyhg6q{font-size:1rem;line-height:1.5rem}.faqs.svelte-1qyhg6q.svelte-1qyhg6q{border:1px solid rgba(0, 0, 0, 0.12);border-radius:8px;margin-top:48px}.faqs.svelte-1qyhg6q h2.svelte-1qyhg6q{font-family:system-ui;font-size:1.125rem;font-weight:400;margin:0;padding:24px}.faqs.svelte-1qyhg6q details.svelte-1qyhg6q{border-bottom:1px solid hsl(25, 4%, 92%);font-size:0.875rem;font-weight:600}.faqs.svelte-1qyhg6q details summary.svelte-1qyhg6q{background:url("../img/keyboard-arrow-down.svg") no-repeat 95% 50%;cursor:pointer;padding:24px;list-style:none}.faqs.svelte-1qyhg6q details p.svelte-1qyhg6q{padding:0 24px;font-weight:400}.faqs.svelte-1qyhg6q details[open] summary.svelte-1qyhg6q{background:url("../img/keyboard-arrow-up.svg") no-repeat 95% 50%}@media only screen and (max-width: 768px){.mission.svelte-1qyhg6q.svelte-1qyhg6q{padding:48px 24px 16px 24px}.faqs.svelte-1qyhg6q.svelte-1qyhg6q{margin:24px 24px 48px 24px}}',
  map: null
};
const Mission = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="mission svelte-1qyhg6q"><h2 class="svelte-1qyhg6q">Our Mission &amp; Vision</h2>
	<p class="svelte-1qyhg6q">Since 2001, Santa Fe Pantry has worked to mobilize resources in the community to alleviate
		hunger. Our goal is to grow, source, acquire, and distribute nutritious food and other products
		to people experiencing nutrition insecurity.
	</p>
	<p class="svelte-1qyhg6q">Sourcing food can be expensive, our farming program helps reduce costs of sourcing food while
		also providing jobs to families in need. While we provide food to hungry individuals, we also
		have a variety of meal plans sponsored by donors to support entire families.
	</p></div>
<section class="faqs svelte-1qyhg6q"><h2 class="svelte-1qyhg6q">Frequently asked questions</h2>
	<details class="svelte-1qyhg6q"><summary class="svelte-1qyhg6q">Is this donation tax deductibles?</summary>
		<p class="svelte-1qyhg6q">This is a prototype and not all areas work as expected. This is a prototype and not all areas work as expected. 
		</p></details>
	<details class="svelte-1qyhg6q"><summary class="svelte-1qyhg6q">Do I get a receipt?</summary>
		<p class="svelte-1qyhg6q">This is a prototype and not all areas work as expected. This is a prototype and not all areas work as expected. 
		</p></details>
	<details class="svelte-1qyhg6q"><summary class="svelte-1qyhg6q">Is my donation secure?</summary>
		<p class="svelte-1qyhg6q">This is a prototype and not all areas work as expected. This is a prototype and not all areas work as expected. 
		</p></details>
</section>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media only screen and (min-width: 1020px){.thirdCol.svelte-1i5gtu0{max-width:40%}.formCol.svelte-1i5gtu0{padding:64px 36px}}@media only screen and (min-width: 1440px){.thirdCol.svelte-1i5gtu0{max-width:33%}.formCol.svelte-1i5gtu0{padding:64px 48px}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mygift;
  cart.subscribe((items) => {
    mygift = items;
  });
  $$result.css.add(css);
  return `<main><section id="hero"><div><h1>We&#39;re here for all who <span style="white-space: nowrap;">need food
					<svg width="326" height="16" viewBox="0 0 326 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="underline"><path d="M313.001 2.9999C315.001 1.99953 317.167 4.16667 318 5.5C320 3.99953 325.001 4.00037 324.001 8.50037C323.201 12.1004 317.667 12.667 315.001 12.5004C312 9.49995 309.154 4.9238 313.001 2.9999Z" fill="#F4775E"></path><path d="M1.59517 9.29789C60.2071 7.29519 202.437 4.26672 302.459 8.17438" stroke="var(--theme-primary)" stroke-width="3" stroke-linecap="round"></path></svg></span></h1>
			<p>Santa Pantry combats hunger by farming and distributing food. We provide community
				leadership on issues related to hunger. ${escape(mygift.myamount)}</p></div></section>

	
	<section class="donateSec"><div class="col formCol svelte-1i5gtu0">${validate_component(Mission, "Mission").$$render($$result, {}, {}, {})}</div>
		<div class="col formCol thirdCol svelte-1i5gtu0">${validate_component(DonationGrid, "DonationGrid").$$render($$result, {}, {}, {})}</div></section>
	<section id="footImg"></section></main>

<footer><section class="location"><h2>Santa Pantry Location</h2>
		<address>123 Street Name Ave. <br>
			City, AB 12345
		</address>
		<p class="social"></p></section>
	<section class="copyright">Copyright ©2022 • All rights reserved • Privacy Policy • Terms of Use • Cookie Statement • DMCA
		Policy
	</section>
</footer>`;
});
export {
  Page as default
};
