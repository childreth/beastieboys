import { c as create_ssr_component, h as compute_rest_props, e as escape, n as null_to_empty, a as add_attribute, v as validate_component } from "./index2.js";
import { C as Checkbox } from "./Checkbox.js";
import { B as Button } from "./Button.js";
function guard(name) {
  return () => {
    throw new Error(`Cannot call ${name}(...) on the server`);
  };
}
const goto = guard("goto");
const Stepper_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20,300,0,0");:root{--theme-primary:hsl(150, 21%, 30%);--theme-primary-light:hsl(150 21% 50%);--theme-primary-lighter:hsl(150 21% 75%);--theme-primary-lightest:hsl(150 21% 90%);--theme-primary-dark:hsl(150, 21%, 20%);--bg-summary-bottom:hsl(25 8% 88%);--bg-summary-top:hsl(25 8% 96%);--baseSize:16px;font-size:var(--baseSize);scroll-behavior:smooth}.material-symbols-rounded{font-variation-settings:"FILL" 0, "wght" 300, "GRAD" 0, "opsz" 20}.material-symbols-rounded{font-size:1rem;color:hsl(25, 4%, 50%)}.SR_hide{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}@keyframes svelte-zbr2nj-slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:0}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes svelte-zbr2nj-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes svelte-zbr2nj-fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}@keyframes svelte-zbr2nj-slideOut{0%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}50%{filter:blur(0px)}100%{transform:scale(1) translateY(80px);filter:blur(0px);opacity:1}}@media screen and (max-width: 480px){@keyframes svelte-zbr2nj-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes svelte-zbr2nj-slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:1}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes svelte-zbr2nj-fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}}nav.svelte-zbr2nj.svelte-zbr2nj.svelte-zbr2nj{box-shadow:none;padding:2px 0}ol.stepper.svelte-zbr2nj.svelte-zbr2nj.svelte-zbr2nj{display:flex;list-style-type:none;margin:0;padding:0}ol.stepper.svelte-zbr2nj li.svelte-zbr2nj.svelte-zbr2nj{font-size:0.875rem;line-height:1.25rem}ol.stepper.svelte-zbr2nj li.svelte-zbr2nj+span.svelte-zbr2nj{display:inline-flex;padding:0 8px;font-weight:300;color:hsl(25, 4%, 60%)}ol.stepper.svelte-zbr2nj li a.svelte-zbr2nj.svelte-zbr2nj{text-decoration:none;color:var(--theme-primary);display:inline-block;cursor:default}.stepper.svelte-zbr2nj li.previous a.svelte-zbr2nj.svelte-zbr2nj{cursor:pointer}.stepper.svelte-zbr2nj li.previous a.svelte-zbr2nj.svelte-zbr2nj:visited{pointer-events:auto}.stepper.svelte-zbr2nj li.previous a.svelte-zbr2nj.svelte-zbr2nj:hover{text-decoration:underline}.stepper.svelte-zbr2nj li.current a.svelte-zbr2nj.svelte-zbr2nj{color:hsl(25, 4%, 10%) !important;pointer-events:none;font-weight:500}.stepper.svelte-zbr2nj li.current+li a.svelte-zbr2nj.svelte-zbr2nj{color:hsl(25, 4%, 60%)}.stepper.svelte-zbr2nj li.next a.svelte-zbr2nj.svelte-zbr2nj:not([aria-disabled=true]){color:hsl(25, 4%, 45%);pointer-events:none}.stepper.svelte-zbr2nj li.next a[aria-disabled=true].svelte-zbr2nj.svelte-zbr2nj{outline:none;color:hsl(25, 4%, 45%)}',
  map: null
};
const Stepper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["hasCC"]);
  let { hasCC } = $$props;
  let stateProps = { state: [$$restProps.state] };
  if ($$props.hasCC === void 0 && $$bindings.hasCC && hasCC !== void 0)
    $$bindings.hasCC(hasCC);
  $$result.css.add(css$2);
  return `<nav aria-label="Steps for your checkout" class="svelte-zbr2nj"><ol class="stepper svelte-zbr2nj"><li class="${escape(null_to_empty(stateProps.state[0][0]), true) + " svelte-zbr2nj"}"><a href="/" class="svelte-zbr2nj">Donation </a></li>
		<span aria-hidden="true" class="svelte-zbr2nj">/</span>
		<li class="${escape(null_to_empty(stateProps.state[0][1]), true) + " svelte-zbr2nj"}"><a href="/details"${add_attribute("tabindex", stateProps.state[0][1] !== "previous" ? "-1" : void 0, 0)}${add_attribute(
    "aria-current",
    stateProps.state[0][1] === "current" ? "step" : void 0,
    0
  )} class="svelte-zbr2nj">Options</a></li>
		<span aria-hidden="true" class="svelte-zbr2nj">/</span>
		<li class="${escape(null_to_empty(stateProps.state[0][2]), true) + " svelte-zbr2nj"}"><a href="/information"${add_attribute("tabindex", stateProps.state[0][2] !== "previous" ? "-1" : void 0, 0)}${add_attribute(
    "aria-current",
    stateProps.state[0][2] === "current" ? "step" : void 0,
    0
  )}${add_attribute("aria-disabled", stateProps.state[0][2] === "next" ? "true" : void 0, 0)} class="svelte-zbr2nj">Information</a></li>
			
		
		${hasCC == "creditcard" ? `<span aria-hidden="true" class="svelte-zbr2nj">/</span>
		<li class="${escape(null_to_empty(stateProps.state[0][3]), true) + " svelte-zbr2nj"}"><a${add_attribute("href", stateProps.state[0][3] === "previous" ? "/payment" : "", 0)}${add_attribute("tabindex", stateProps.state[0][3] !== "previous" ? "-1" : void 0, 0)}${add_attribute(
    "aria-current",
    stateProps.state[0][3] === "current" ? "step" : void 0,
    0
  )}${add_attribute("aria-disabled", stateProps.state[0][3] === "next" ? "true" : void 0, 0)} class="svelte-zbr2nj">Payment</a></li>
			<span aria-hidden="true" class="svelte-zbr2nj">/</span>
			<li class="${escape(null_to_empty(stateProps.state[0][4]), true) + " svelte-zbr2nj"}"><a href="/creditcard"${add_attribute("tabindex", stateProps.state[0][4] !== "previous" ? "-1" : void 0, 0)}${add_attribute(
    "aria-current",
    stateProps.state[0][4] === "current" ? "step" : void 0,
    0
  )} class="svelte-zbr2nj">Card</a></li>` : `<span aria-hidden="true" class="svelte-zbr2nj">/</span>
			<li class="${escape(null_to_empty(stateProps.state[0][3]), true) + " svelte-zbr2nj"}"><a${add_attribute("href", stateProps.state[0][3] === "previous" ? "/payment" : "", 0)}${add_attribute("tabindex", stateProps.state[0][3] !== "previous" ? "-1" : void 0, 0)}${add_attribute(
    "aria-current",
    stateProps.state[0][3] === "current" ? "step" : void 0,
    0
  )}${add_attribute("aria-disabled", stateProps.state[0][3] === "next" ? "true" : void 0, 0)} class="svelte-zbr2nj">Payment</a></li>
				`}</ol>
</nav>`;
});
const sheild = "/_app/immutable/assets/shield.0786f79a.svg";
const Badge_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20,300,0,0");:root{--theme-primary:hsl(150, 21%, 30%);--theme-primary-light:hsl(150 21% 50%);--theme-primary-lighter:hsl(150 21% 75%);--theme-primary-lightest:hsl(150 21% 90%);--theme-primary-dark:hsl(150, 21%, 20%);--bg-summary-bottom:hsl(25 8% 88%);--bg-summary-top:hsl(25 8% 96%);--baseSize:16px;font-size:var(--baseSize);scroll-behavior:smooth}.material-symbols-rounded{font-variation-settings:"FILL" 0, "wght" 300, "GRAD" 0, "opsz" 20}.material-symbols-rounded{font-size:1rem;color:hsl(25, 4%, 50%)}.SR_hide{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}@keyframes svelte-povlvf-slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:0}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes svelte-povlvf-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes svelte-povlvf-fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}@keyframes svelte-povlvf-slideOut{0%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}50%{filter:blur(0px)}100%{transform:scale(1) translateY(80px);filter:blur(0px);opacity:1}}@media screen and (max-width: 480px){@keyframes svelte-povlvf-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes svelte-povlvf-slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:1}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes svelte-povlvf-fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}}.badge.svelte-povlvf{border-radius:8px;padding:4px 12px;font-size:0.875rem;line-height:1.25rem;font-weight:600;border:1px solid hsl(25, 4%, 100%);display:inline-flex;gap:2px;align-items:center;text-transform:capitalize}.neutral.svelte-povlvf{background:hsl(25, 4%, 95%);color:hsl(25, 4%, 30%)}.dark.svelte-povlvf{background:#fff;color:hsl(25, 4%, 20%)}.large.svelte-povlvf{border-radius:8px}',
  map: null
};
const Badge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label = "default" } = $$props;
  let { status = "neutral" } = $$props;
  let { size = "default" } = $$props;
  let { showIcon = false } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.showIcon === void 0 && $$bindings.showIcon && showIcon !== void 0)
    $$bindings.showIcon(showIcon);
  $$result.css.add(css$1);
  return `<div class="${"badge " + escape(status, true) + " " + escape(size, true) + " svelte-povlvf"}">${escape(label)} 
	${showIcon && label == "monthly" ? `<span class="material-symbols-rounded">event
	</span>` : ``}
</div>`;
});
const Switch_svelte_svelte_type_style_lang = "";
const Input_Text_svelte_svelte_type_style_lang = "";
const DoubleDonation_svelte_svelte_type_style_lang = "";
const Cart_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20,300,0,0");:root{--theme-primary:hsl(150, 21%, 30%);--theme-primary-light:hsl(150 21% 50%);--theme-primary-lighter:hsl(150 21% 75%);--theme-primary-lightest:hsl(150 21% 90%);--theme-primary-dark:hsl(150, 21%, 20%);--bg-summary-bottom:hsl(25 8% 88%);--bg-summary-top:hsl(25 8% 96%);--baseSize:16px;font-size:var(--baseSize);scroll-behavior:smooth}.material-symbols-rounded{font-variation-settings:"FILL" 0, "wght" 300, "GRAD" 0, "opsz" 20}.material-symbols-rounded{font-size:1rem;color:hsl(25, 4%, 50%)}.SR_hide{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}@keyframes svelte-1wbjw6t-slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:0}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes svelte-1wbjw6t-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes svelte-1wbjw6t-fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}@keyframes svelte-1wbjw6t-slideOut{0%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}50%{filter:blur(0px)}100%{transform:scale(1) translateY(80px);filter:blur(0px);opacity:1}}@media screen and (max-width: 480px){@keyframes svelte-1wbjw6t-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes svelte-1wbjw6t-slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:1}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes svelte-1wbjw6t-fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}}.svelte-1wbjw6t.svelte-1wbjw6t.svelte-1wbjw6t{font-family:system-ui}.svelte-1wbjw6t.svelte-1wbjw6t.svelte-1wbjw6t:focus-visible{outline:2px dotted blue;outline-offset:2px}p.svelte-1wbjw6t.svelte-1wbjw6t.svelte-1wbjw6t{line-height:1.625rem}.hideIt.svelte-1wbjw6t.svelte-1wbjw6t.svelte-1wbjw6t{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}@media only screen and (max-width: 768px){}@media only screen and (max-width: 768px){}@media only screen and (max-width: 768px){}@media only screen and (max-width: 768px){}@media only screen and (max-width: 768px){}aside.svelte-1wbjw6t.svelte-1wbjw6t.svelte-1wbjw6t{padding:92px 0 24px 0;width:336px;align-items:center}aside.svelte-1wbjw6t details.svelte-1wbjw6t.svelte-1wbjw6t{border-bottom:1px solid hsl(25, 4%, 92%)}aside.svelte-1wbjw6t summary.svelte-1wbjw6t.svelte-1wbjw6t{display:none}aside.svelte-1wbjw6t .summaryDetails.svelte-1wbjw6t.svelte-1wbjw6t{padding:0}aside.svelte-1wbjw6t .summaryOpen{animation:svelte-1wbjw6t-slideDown 0.75s cubic-bezier(0.17, 0.67, 0.13, 1.06) forwards;transform:translateY(-400px);transition:all 0.5s cubic-bezier(0.17, 0.67, 0.13, 1.06)}aside.svelte-1wbjw6t .summaryClose{animation:svelte-1wbjw6t-slideUp 0.75s cubic-bezier(0.17, 0.67, 0.13, 1.06) forwards}aside.svelte-1wbjw6t .donationsummary.svelte-1wbjw6t.svelte-1wbjw6t,aside.svelte-1wbjw6t .payment.svelte-1wbjw6t.svelte-1wbjw6t{display:flex;align-items:center;margin:0 0 8px 0}aside.svelte-1wbjw6t .payment.svelte-1wbjw6t.svelte-1wbjw6t{justify-content:space-between;margin:20px 0 0 4px;flex-grow:1}aside.svelte-1wbjw6t .payment.svelte-1wbjw6t>.svelte-1wbjw6t{display:flex;gap:4px;align-items:center}aside.svelte-1wbjw6t .summaryHeader.svelte-1wbjw6t.svelte-1wbjw6t{display:inline-flex;margin:0;font-weight:400;padding:12px 20px;font-size:0.875rem;line-height:1.25rem;display:flex;justify-content:space-between;flex-grow:1;color:var(--theme-primary);font-weight:700}aside.svelte-1wbjw6t .summaryHeader span.svelte-1wbjw6t.svelte-1wbjw6t{font-weight:400;color:hsl(25, 4%, 20%)}aside.svelte-1wbjw6t .topTotal.svelte-1wbjw6t.svelte-1wbjw6t{display:flex;align-content:space-between;gap:8px;flex-grow:1;margin:0;font-size:1.75rem;line-height:28px;font-weight:650}aside.svelte-1wbjw6t .topTotal.svelte-1wbjw6t>span.svelte-1wbjw6t{flex-direction:row;display:flex;gap:0px}aside.svelte-1wbjw6t .topTotal sup.svelte-1wbjw6t.svelte-1wbjw6t{font-size:1rem;padding:0 2px 0 0}ul.svelte-1wbjw6t.svelte-1wbjw6t.svelte-1wbjw6t{padding:24px 4px;display:flex;flex-direction:column;gap:16px;margin:28px 0 20px 0;border-top:1px solid white}ul.svelte-1wbjw6t li.svelte-1wbjw6t.svelte-1wbjw6t{list-style-type:none;font-size:1rem;line-height:1.5rem;display:flex;justify-content:space-between;padding:0;font-weight:350;color:HSL(225 4% 18%)}ul.svelte-1wbjw6t li.total.svelte-1wbjw6t.svelte-1wbjw6t{border-top:1px solid white;padding:24px 0 0 0;font-weight:600;font-size:1.125rem;line-height:1.5rem;margin-top:12px}.terms.svelte-1wbjw6t.svelte-1wbjw6t.svelte-1wbjw6t{font-size:0.75rem;line-height:1rem;color:hsl(25, 4%, 50%);padding:0;margin:0}.paymentIcon.svelte-1wbjw6t.svelte-1wbjw6t.svelte-1wbjw6t{width:40px;height:24px;display:flex;padding-left:4px;align-items:center;justify-content:flex-start}.paymentIcon.svelte-1wbjw6t img.svelte-1wbjw6t.svelte-1wbjw6t{transform:scale(1.2)}@media screen and (max-width: 1020px){aside.svelte-1wbjw6t.svelte-1wbjw6t.svelte-1wbjw6t{width:100%}}@media screen and (max-width: 768px){aside.svelte-1wbjw6t.svelte-1wbjw6t.svelte-1wbjw6t{padding:0}aside.svelte-1wbjw6t details.svelte-1wbjw6t.svelte-1wbjw6t{background-color:hsl(25, 8%, 92%)}aside.svelte-1wbjw6t .summaryDetails.svelte-1wbjw6t.svelte-1wbjw6t{padding:20px 20px 32px}aside.svelte-1wbjw6t summary.svelte-1wbjw6t.svelte-1wbjw6t{display:flex;background-color:white}aside.svelte-1wbjw6t details[open] summary.svelte-1wbjw6t.svelte-1wbjw6t{background-color:hsl(25, 8%, 92%)}}@keyframes svelte-1wbjw6t-slideDown{from{margin-top:-600px;opacity:0}to{margin-top:0;opacity:1}}@keyframes svelte-1wbjw6t-slideUp{from{margin-top:0px;opacity:0}to{margin-top:-600px;opacity:1}}',
  map: null
};
const Cart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let paymentLogo;
  let { donationAmt = Number } = $$props;
  let { donationFrequency = String } = $$props;
  let { dcfValue = Number } = $$props;
  let { dcfCheck } = $$props;
  let { totalAmount } = $$props;
  let { paymentMethod } = $$props;
  let dcfListItem = 1;
  let theDetails;
  let editedTotal;
  if ($$props.donationAmt === void 0 && $$bindings.donationAmt && donationAmt !== void 0)
    $$bindings.donationAmt(donationAmt);
  if ($$props.donationFrequency === void 0 && $$bindings.donationFrequency && donationFrequency !== void 0)
    $$bindings.donationFrequency(donationFrequency);
  if ($$props.dcfValue === void 0 && $$bindings.dcfValue && dcfValue !== void 0)
    $$bindings.dcfValue(dcfValue);
  if ($$props.dcfCheck === void 0 && $$bindings.dcfCheck && dcfCheck !== void 0)
    $$bindings.dcfCheck(dcfCheck);
  if ($$props.totalAmount === void 0 && $$bindings.totalAmount && totalAmount !== void 0)
    $$bindings.totalAmount(totalAmount);
  if ($$props.paymentMethod === void 0 && $$bindings.paymentMethod && paymentMethod !== void 0)
    $$bindings.paymentMethod(paymentMethod);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      !dcfCheck ? editedTotal = donationAmt : editedTotal = totalAmount;
    }
    paymentLogo = "/src/img/" + paymentMethod + ".svg";
    {
      {
        if (dcfCheck) {
          dcfListItem = dcfValue;
        } else {
          dcfListItem = 0;
        }
      }
    }
    $$rendered = `<aside class="summaryWrapper svelte-1wbjw6t" aria-label="Donation summary"><h2 class="hideIt svelte-1wbjw6t">Your donation summary</h2>
	<details class="svelte-1wbjw6t"${add_attribute("this", theDetails, 0)}><summary class="svelte-1wbjw6t"><div class="summaryHeader svelte-1wbjw6t"><span class="svelte-1wbjw6t">View Summary</span> <span class=" svelte-1wbjw6t">${escape(donationFrequency)} / $${escape(donationAmt)}</span></div></summary>
		<section class="summaryDetails svelte-1wbjw6t"><div class="donationsummary svelte-1wbjw6t"><div class="topTotal svelte-1wbjw6t" aria-label="edit your donation"><span class="svelte-1wbjw6t"><sup class="svelte-1wbjw6t">$</sup>${escape(editedTotal)}</span>
					${validate_component(Badge, "Badge").$$render(
      $$result,
      {
        label: donationFrequency,
        status: "dark",
        size: "large",
        showIcon: true
      },
      {},
      {}
    )}</div>
				</div>
			${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      {
        label: `Cover transaction fees ($${dcfValue})`,
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
    )}

			${paymentMethod !== void 0 ? `<div class="payment svelte-1wbjw6t"><span class="svelte-1wbjw6t">Pay with
						<span class="paymentIcon svelte-1wbjw6t"><img${add_attribute("src", paymentLogo, 0)} height="20px" width="auto" alt="payment method" class="svelte-1wbjw6t"></span></span>
					${validate_component(Button, "Button").$$render($$result, { label: "Edit", class: "text" }, {}, {})}</div>` : ``}

			<ul aria-label="Your checkout items" class="svelte-1wbjw6t"><li class="svelte-1wbjw6t"><span class="svelte-1wbjw6t">Donation (${escape(donationFrequency)})</span><span class="svelte-1wbjw6t">$${escape(donationAmt)}</span></li>
				<li class="svelte-1wbjw6t"><span class="svelte-1wbjw6t">Fees</span><span class="svelte-1wbjw6t">$${escape(dcfListItem)}</span></li>
				<li class="total svelte-1wbjw6t"><span class="svelte-1wbjw6t">Total</span><span class="svelte-1wbjw6t">$${escape(editedTotal)}</span></li></ul>
			
			<p class="terms svelte-1wbjw6t">Santa Pantry is a 501(c)3 tax-exempt organization and your donation is tax deductible within
				the guidelines of U.S. taxes, please keep your email donation as a deduction on your U.S.
				taxes, please keep your email donation receipt as your official record. We&#39;ll send it to you
				upon successful completion of your donation.
			</p></section></details>
</aside>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Badge as B,
  Cart as C,
  Stepper as S,
  goto as g,
  sheild as s
};
