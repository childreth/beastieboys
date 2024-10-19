import { c as create_ssr_component, a as add_attribute, d as add_classes, e as escape, v as validate_component, f as each } from "../../../chunks/index2.js";
import { g as goto, S as Stepper, C as Cart } from "../../../chunks/Cart2.js";
import { S as Select, P as PrimaryFooter } from "../../../chunks/PrimaryFooter.js";
import { w as writable } from "../../../chunks/index.js";
import { c as cart } from "../../../chunks/cart.js";
import { B as Button } from "../../../chunks/Button.js";
/* empty css                                                      */const css$a = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20,300,0,0");:root{--theme-primary:hsl(150, 21%, 30%);--theme-primary-light:hsl(150 21% 50%);--theme-primary-lighter:hsl(150 21% 75%);--theme-primary-lightest:hsl(150 21% 90%);--theme-primary-dark:hsl(150, 21%, 20%);--bg-summary-bottom:hsl(25 8% 88%);--bg-summary-top:hsl(25 8% 96%);--baseSize:16px;font-size:var(--baseSize);scroll-behavior:smooth}.material-symbols-rounded{font-variation-settings:"FILL" 0, "wght" 300, "GRAD" 0, "opsz" 20}.material-symbols-rounded{font-size:1rem;color:hsl(25, 4%, 50%)}.SR_hide{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}@keyframes svelte-8wk58p-slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:0}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes svelte-8wk58p-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes svelte-8wk58p-fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}@keyframes svelte-8wk58p-slideOut{0%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}50%{filter:blur(0px)}100%{transform:scale(1) translateY(80px);filter:blur(0px);opacity:1}}@media screen and (max-width: 480px){@keyframes svelte-8wk58p-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes svelte-8wk58p-slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:1}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes svelte-8wk58p-fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}}label.svelte-8wk58p.svelte-8wk58p{display:flex;align-items:center;gap:12px;flex-grow:1;cursor:pointer;height:100%;width:100%;padding:2px 0}.label.svelte-8wk58p.svelte-8wk58p{flex-grow:1;font-size:1rem;line-height:1.5rem;text-align:left;padding:8px 0}.switch.svelte-8wk58p.svelte-8wk58p{position:relative;display:inline-block;width:36px;height:20px;box-sizing:border-box}.switch.svelte-8wk58p input.svelte-8wk58p{opacity:0;width:0;height:0}.slider.svelte-8wk58p.svelte-8wk58p{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:hsl(25, 4%, 95%);border:1px solid #847f7b;box-shadow:inset 1px 2px 4px rgba(255, 255, 255, 0.12), inset 0px -2px 4px rgba(0, 0, 0, 0.08);transition:all 0.3s cubic-bezier(0.88, -0.26, 0.23, 1.31);box-sizing:border-box}.slider.svelte-8wk58p.svelte-8wk58p:before{position:absolute;content:"";height:12px;width:12px;left:2px;bottom:3px;background-color:hsl(25, 4%, 50%);transition:all 0.3s cubic-bezier(0.88, -0.26, 0.23, 1.31)}input.svelte-8wk58p:checked+.slider.svelte-8wk58p{background-color:var(--theme-primary)}input.svelte-8wk58p:focus+.slider.svelte-8wk58p{outline:2px dotted blue;outline-offset:2px}input.svelte-8wk58p:checked+.slider.svelte-8wk58p:before{transform:translateX(16px);background-color:hsl(25, 4%, 100%);height:14px;width:14px;bottom:2px}.slider.round.svelte-8wk58p.svelte-8wk58p{border-radius:36px}.slider.round.svelte-8wk58p.svelte-8wk58p:before{border-radius:50%}',
  map: null
};
const Switch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let theLabel;
  let theDesc;
  let { checked = false } = $$props;
  let { name = "default" } = $$props;
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  $$result.css.add(css$a);
  theLabel = name + "Label";
  theDesc = name + "Desc";
  return `<label class="svelte-8wk58p"><div class="label svelte-8wk58p">${slots.default ? slots.default({}) : ``}</div>
	<div class="switch svelte-8wk58p"><input type="checkbox" role="switch"${add_attribute("id", name, 0)}${add_attribute("aria-labelledby", theLabel, 0)}${add_attribute("aria-describedby", theDesc, 0)} class="svelte-8wk58p"${add_attribute("checked", checked, 1)}>
		<span class="slider round svelte-8wk58p"></span></div>
</label>`;
});
const userHeart$2 = "/_app/immutable/assets/user-heart.ccc491cd.svg";
const css$9 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20,300,0,0");:root{--theme-primary:hsl(150, 21%, 30%);--theme-primary-light:hsl(150 21% 50%);--theme-primary-lighter:hsl(150 21% 75%);--theme-primary-lightest:hsl(150 21% 90%);--theme-primary-dark:hsl(150, 21%, 20%);--bg-summary-bottom:hsl(25 8% 88%);--bg-summary-top:hsl(25 8% 96%);--baseSize:16px;font-size:var(--baseSize);scroll-behavior:smooth}.material-symbols-rounded{font-variation-settings:"FILL" 0, "wght" 300, "GRAD" 0, "opsz" 20}.material-symbols-rounded{font-size:1rem;color:hsl(25, 4%, 50%)}.SR_hide{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}@keyframes slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:0}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}@keyframes slideOut{0%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}50%{filter:blur(0px)}100%{transform:scale(1) translateY(80px);filter:blur(0px);opacity:1}}@media screen and (max-width: 480px){@keyframes fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:1}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}}.inputGroup{display:flex;flex-direction:column;flex-grow:1;margin:12px 0 0 0;position:relative}.inputGroup label{font-size:0.875rem;line-height:1.25rem;color:hsl(25, 4%, 30%);padding-bottom:4px;text-align:left}.inputGroup .errormsg,.inputGroup .helper{font-size:0.75rem;line-height:1rem;gap:2px;padding:0 0 4px 0;color:hsl(25, 4%, 40%)}.inputGroup .errormsg{display:none;color:hsl(0, 65%, 50%)}.inputGroup .errormsg .material-symbols-rounded{color:hsl(0, 65%, 50%)}.inputGroup input[type],.inputGroup textarea,.inputGroup select{border:1px solid hsl(25, 4%, 50%);font-size:1rem;line-height:1.5rem;box-sizing:border-box;width:100%;min-height:2.5rem;border-radius:8px;padding:4px 12px;margin:0 0 4px 0;transition:all 0.2s ease-in-out;background-color:white}.inputGroup textarea{padding:8px 12px;min-height:60px}.inputGroup select{background:url("../../img/arrow_down.svg") no-repeat calc(100% - 12px) 50%;min-height:2.5rem;padding:4px 12px;-webkit-appearance:none;appearance:none;box-shadow:0px 2px 2px rgba(0, 0, 0, 0.12)}.inputGroup select:autofill{appearance:auto}.inputGroup input[type].error,.inputGroup textarea.error{border:1px solid hsl(0, 65%, 50%) !important}.inputGroup textarea.resizeHorz{resize:horizontal}.inputGroup textarea.resizeVert{resize:vertical}.inputGroup.error .errormsg{display:flex}.inputGroup.error.not-empty .errormsg .empty{display:none}.inputGroup.error.not-empty .errormsg .format{display:flex}.inputGroup.error .errormsg .empty{display:flex}.inputGroup.error .errormsg .format{display:none}.checkboxGroup{padding:2px 0;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-content:center;cursor:pointer;gap:4px;position:relative}.checkboxGroup label{font-size:0.875rem;line-height:1.25rem;color:hsl(25, 4%, 30%);display:flex;align-items:center;flex-direction:row;padding:2px 0;cursor:inherit;gap:4px}.checkboxGroup label span{border-radius:8px}.checkboxGroup label svg{display:flex;align-items:center;filter:drop-shadow(0px 2px 2px hsla(25, 4%, 10%, 0.12));pointer-events:none}.checkboxGroup label svg.checked>rect{fill:var(--theme-primary)}.checkboxGroup input[type=checkbox]{appearance:none;background:#fff url("../../img/checkbox_check.svg") no-repeat center center;background-size:40%;margin:0;cursor:inherit;width:16px;height:16px;margin:4px;border:1px solid hsl(25, 4%, 50%);border-radius:4px;box-shadow:0 2px 4px 0 rgba(0, 0, 0, 0.1);transition:all 0.2s ease-in-out}.checkboxGroup input[type=checkbox]:checked{background-color:var(--theme-primary);background-size:90%;box-sizing:border-box;border:0px solid var(--theme-primary);box-shadow:0 2px 4px 0 0px 2px 2px rgba(0, 0, 0, 0.12)}.inputGroup.error{transition:all 0.25s ease-in-out}.inputGroup.error label{color:hsl(0, 65%, 50%);transition:inherit}.inputGroup.error input[type],.inputGroup.error textarea,.inputGroup.error select{border-color:hsl(0, 65%, 50%);background-color:hsl(0, 65%, 97%);transition:inherit}.inputGroup.error .optional,.inputGroup.error .required,.inputGroup.error .counter,.inputGroup.error .material-symbols-rounded{color:hsl(0, 65%, 50%)}.inputGroup.error .material-symbols-rounded{font-size:1rem !important}.inputGroup.error .helper{display:none}.inputGroup.error .charUsed{font-weight:700}.optional{color:hsl(25, 4%, 40%);font-size:0.875rem !important}.required{color:hsl(25, 4%, 30%);font-size:0.8em;line-height:0.5rem;display:inline-flex;margin-left:-4px}.helper{display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.counter,.numberCounter{font-size:0.75rem;line-height:1rem;color:hsl(25, 4%, 30%);display:flex;flex-direction:row;flex-grow:1;gap:2px;justify-content:flex-start;align-items:center}.counter span,.numberCounter span{display:flex}.counter .condenseCounter,.numberCounter .condenseCounter{flex-grow:1;justify-content:flex-end}.fieldCol2{display:flex;flex-direction:row;gap:8px;flex:0 1 auto}',
  map: null
};
const Input_Text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inputId;
  let { label = "Label" } = $$props;
  let { val } = $$props;
  let { required } = $$props;
  let { placeholder = "" } = $$props;
  let { type = "text" } = $$props;
  let { patternValidation = "" } = $$props;
  let { autocomplete = "on" } = $$props;
  let { helper = "" } = $$props;
  let { invalidMsg = "" } = $$props;
  let { hideLabel = false } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.val === void 0 && $$bindings.val && val !== void 0)
    $$bindings.val(val);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.patternValidation === void 0 && $$bindings.patternValidation && patternValidation !== void 0)
    $$bindings.patternValidation(patternValidation);
  if ($$props.autocomplete === void 0 && $$bindings.autocomplete && autocomplete !== void 0)
    $$bindings.autocomplete(autocomplete);
  if ($$props.helper === void 0 && $$bindings.helper && helper !== void 0)
    $$bindings.helper(helper);
  if ($$props.invalidMsg === void 0 && $$bindings.invalidMsg && invalidMsg !== void 0)
    $$bindings.invalidMsg(invalidMsg);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  $$result.css.add(css$9);
  inputId = label.toLowerCase().replaceAll(" ", "");
  return `<div class="inputGroup"><label${add_attribute("for", inputId, 0)}${add_classes((hideLabel === true ? "hideIt" : "").trim())}><span>${escape(label)}</span>
    ${required ? `<sup class="required" aria-hidden="true">﹡</sup>` : `<span class="optional">(optional)</span>`}</label>
<input type="text"${add_attribute("id", inputId, 0)} ${required ? "required" : ""}${add_attribute("placeholder", placeholder, 0)}${add_attribute("autocomplete", autocomplete, 0)}${add_attribute("pattern", patternValidation !== "" ? patternValidation : void 0, 0)}${add_attribute("aria-describedby", `${inputId}helper`, 0)}${add_attribute("value", val, 0)}>
${helper ? `<span${add_attribute("id", `${inputId}helper`, 0)} class="helper">${escape(helper)}</span>` : ``}
<span${add_attribute("id", `${inputId}helper`, 0)} class="errormsg" aria-live="assertive"><span class="material-symbols-rounded" aria-hidden="true" style="font-size:16px;">error</span> 
    <span class="empty">${escape(label)} is required.</span>
    <span class="format">${escape(invalidMsg)}</span></span></div>`;
});
const css$8 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20,300,0,0");:root{--theme-primary:hsl(150, 21%, 30%);--theme-primary-light:hsl(150 21% 50%);--theme-primary-lighter:hsl(150 21% 75%);--theme-primary-lightest:hsl(150 21% 90%);--theme-primary-dark:hsl(150, 21%, 20%);--bg-summary-bottom:hsl(25 8% 88%);--bg-summary-top:hsl(25 8% 96%);--baseSize:16px;font-size:var(--baseSize);scroll-behavior:smooth}.material-symbols-rounded{font-variation-settings:"FILL" 0, "wght" 300, "GRAD" 0, "opsz" 20}.material-symbols-rounded{font-size:1rem;color:hsl(25, 4%, 50%)}.SR_hide{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}@keyframes svelte-102yqlm-slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:0}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes svelte-102yqlm-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes svelte-102yqlm-fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}@keyframes svelte-102yqlm-slideOut{0%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}50%{filter:blur(0px)}100%{transform:scale(1) translateY(80px);filter:blur(0px);opacity:1}}@media screen and (max-width: 480px){@keyframes svelte-102yqlm-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes svelte-102yqlm-slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:1}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes svelte-102yqlm-fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}}.wrap.svelte-102yqlm.svelte-102yqlm{all:unset;display:flex;flex-grow:1;gap:12px;width:100%;padding:0 16px;min-height:76px;box-sizing:border-box;align-items:center;flex-direction:row;border-radius:8px;transition:all 0.25s ease-in-out}.searchMatch.svelte-102yqlm.svelte-102yqlm{width:100%;flex-grow:1;display:flex;flex-direction:column;padding:0 20px;box-sizing:border-box;margin-top:-12px}.searchMatch.svelte-102yqlm p.svelte-102yqlm{font-size:0.875rem;line-height:1.25rem;padding:4px 4px 16px 4px;margin:0;color:hsl(25, 4%, 30%)}.wrap label{min-height:72px !important}',
  map: null
};
const DoubleDonation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showDtD } = $$props;
  if ($$props.showDtD === void 0 && $$bindings.showDtD && showDtD !== void 0)
    $$bindings.showDtD(showDtD);
  $$result.css.add(css$8);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<li class="optionItem"><div class="wrap svelte-102yqlm">
		<div class="icon"><img${add_attribute("src", userHeart$2, 0)} aria-hidden="true" alt="dedications"></div>

		${validate_component(Switch, "Switch").$$render(
      $$result,
      { checked: showDtD },
      {
        checked: ($$value) => {
          showDtD = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<span id="" class="title">Employer Matching </span>`;
        }
      }
    )}</div>
		${showDtD ? `<section class="searchMatch svelte-102yqlm">${validate_component(Input_Text, "Input").$$render(
      $$result,
      {
        val: "",
        hideLabel: true,
        required: true,
        placeholder: "Search company...",
        patternValidation: "[a-zA-Z0-9.+ ]+",
        invalidMsg: "Please enter a real address"
      },
      {},
      {}
    )}
			<p class="svelte-102yqlm">Donation matching is provided by our partner Double the Donation. They may send you an email explaining how to request a match from your employer.</p></section>` : ``}
	
</li>`;
  } while (!$$settled);
  return $$rendered;
});
const options = writable({
  designations: "Where its needed the most",
  dedicationType: "In honor of",
  honoreeFirst: "",
  honoreeLast: "",
  comment: ""
});
const userHeart$1 = "/_app/immutable/assets/hand-heart.2a5253b4.svg";
const Dialog_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20,300,0,0");:root{--theme-primary:hsl(150, 21%, 30%);--theme-primary-light:hsl(150 21% 50%);--theme-primary-lighter:hsl(150 21% 75%);--theme-primary-lightest:hsl(150 21% 90%);--theme-primary-dark:hsl(150, 21%, 20%);--bg-summary-bottom:hsl(25 8% 88%);--bg-summary-top:hsl(25 8% 96%);--baseSize:16px;font-size:var(--baseSize);scroll-behavior:smooth}.material-symbols-rounded{font-variation-settings:"FILL" 0, "wght" 300, "GRAD" 0, "opsz" 20}.material-symbols-rounded{font-size:1rem;color:hsl(25, 4%, 50%)}.SR_hide{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}@keyframes svelte-hjy414-slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:0}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes svelte-hjy414-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes svelte-hjy414-fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}@keyframes svelte-hjy414-slideOut{0%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}50%{filter:blur(0px)}100%{transform:scale(1) translateY(80px);filter:blur(0px);opacity:1}}@media screen and (max-width: 480px){@keyframes svelte-hjy414-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes svelte-hjy414-slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:1}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes svelte-hjy414-fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}}dialog.svelte-hjy414.svelte-hjy414::backdrop{background-color:transparent}dialog.svelte-hjy414.svelte-hjy414{max-width:none;max-height:none;width:100%;height:100%;margin:0;padding:0;border:0;background-color:transparent}dialog.svelte-hjy414 .scrim.svelte-hjy414{width:100%;height:100%;display:flex;overflow:hidden;justify-content:center;flex-direction:column;align-items:center;text-align:center;background-color:rgba(0, 0, 0, 0.7);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}dialog.svelte-hjy414 section.svelte-hjy414{max-width:600px;width:90vw;height:80vh;min-height:440px;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0;background-color:hsl(25, 4%, 100%);border-radius:20px;box-shadow:0px 0px 16px rgba(27, 25, 24, 0.24)}dialog.svelte-hjy414 .showScrim.svelte-hjy414{animation:svelte-hjy414-fadeIn 0.75s cubic-bezier(0.05, 0.49, 0.19, 1.03) forwards}dialog.svelte-hjy414 .showUI.svelte-hjy414{animation:svelte-hjy414-slideIn 0.5s cubic-bezier(0.05, 0.49, 0.19, 1.03) forwards}@media screen and (max-width: 480px){dialog.svelte-hjy414 .scrim.svelte-hjy414{justify-content:flex-end}dialog.svelte-hjy414 section.svelte-hjy414{max-width:600px;width:100vw;height:calc(100% - 40px);border-radius:12px 12px 0 0}}.fadeMe{animation:svelte-hjy414-fadeOut 0.35s cubic-bezier(0.74, 0, 0.92, 0.31) forwards;animation-fill-mode:forwards}.slideMe{animation:svelte-hjy414-slideOut 0.35s cubic-bezier(0.74, 0, 0.92, 0.31) forwards;animation-fill-mode:forwards}.showProcessing{animation:showme 0.5s cubic-bezier(0.03, 0.15, 0.04, 1.1) forwards;animation-delay:400ms}.dheader{display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;padding:8px;box-sizing:border-box;height:64px;border-bottom:1px solid hsl(25, 4%, 92%)}.dheader h2{font-size:1rem;line-height:1.5rem;font-weight:400}.dcontent{display:flex;flex-direction:column;scroll-behavior:smooth;flex-grow:1;padding:24px;width:100%;box-sizing:border-box}',
  map: null
};
const Dialog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { thename } = $$props;
  let { modalTitle } = $$props;
  let { saveIt = () => {
  } } = $$props;
  let { cancelIt = () => {
  } } = $$props;
  const closeMe = () => {
    console.log("close");
    const theDialog = document.querySelector(`#${thename}`);
    const theScrim = document.querySelector(`#${thename} .scrim`);
    const theContent = document.querySelector(`#${thename} .maincontent`);
    theScrim.classList.remove("showScrim");
    theContent.classList.remove("showUI");
    theScrim.classList.add("fadeMe");
    theContent.classList.add("slideMe");
    theScrim.addEventListener(
      "animationend",
      (e) => {
        console.log("Animation ended");
        theDialog.close();
        theContent.classList.remove("slideMe");
        theScrim.classList.add("showScrim");
        theContent.classList.add("showUI");
      },
      { once: true }
    );
  };
  if ($$props.thename === void 0 && $$bindings.thename && thename !== void 0)
    $$bindings.thename(thename);
  if ($$props.modalTitle === void 0 && $$bindings.modalTitle && modalTitle !== void 0)
    $$bindings.modalTitle(modalTitle);
  if ($$props.saveIt === void 0 && $$bindings.saveIt && saveIt !== void 0)
    $$bindings.saveIt(saveIt);
  if ($$props.cancelIt === void 0 && $$bindings.cancelIt && cancelIt !== void 0)
    $$bindings.cancelIt(cancelIt);
  if ($$props.closeMe === void 0 && $$bindings.closeMe && closeMe !== void 0)
    $$bindings.closeMe(closeMe);
  $$result.css.add(css$7);
  return `<dialog${add_attribute("id", thename, 0)} class=" svelte-hjy414" role="dialog"${add_attribute("aria-labelledby", `${thename}_title`, 0)}><div class="scrim showScrim svelte-hjy414"><h2${add_attribute("id", `${thename}_title`, 0)} class="hideIt">${escape(modalTitle)}</h2>
		<section class="maincontent showUI svelte-hjy414"><div class="dheader">${validate_component(Button, "Button").$$render($$result, { label: "Cancel", class: "ghost" }, {}, {})}
				<span>${escape(modalTitle)}</span>
				${validate_component(Button, "Button").$$render($$result, { label: "Save", class: "ghost" }, {}, {})}</div>
			${slots.default ? slots.default({}) : ``}</section></div>
</dialog>`;
});
const chervon = "/_app/immutable/assets/chervon.0589a871.svg";
const Input_Search_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20,300,0,0");:root{--theme-primary:hsl(150, 21%, 30%);--theme-primary-light:hsl(150 21% 50%);--theme-primary-lighter:hsl(150 21% 75%);--theme-primary-lightest:hsl(150 21% 90%);--theme-primary-dark:hsl(150, 21%, 20%);--bg-summary-bottom:hsl(25 8% 88%);--bg-summary-top:hsl(25 8% 96%);--baseSize:16px;font-size:var(--baseSize);scroll-behavior:smooth}.material-symbols-rounded{font-variation-settings:"FILL" 0, "wght" 300, "GRAD" 0, "opsz" 20}.material-symbols-rounded{font-size:1rem;color:hsl(25, 4%, 50%)}.SR_hide{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}@keyframes slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:0}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}@keyframes slideOut{0%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}50%{filter:blur(0px)}100%{transform:scale(1) translateY(80px);filter:blur(0px);opacity:1}}@media screen and (max-width: 480px){@keyframes fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:1}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}}.inputGroup{display:flex;flex-direction:column;flex-grow:1;margin:12px 0 0 0;position:relative}.inputGroup label{font-size:0.875rem;line-height:1.25rem;color:hsl(25, 4%, 30%);padding-bottom:4px;text-align:left}.inputGroup .errormsg,.inputGroup .helper{font-size:0.75rem;line-height:1rem;gap:2px;padding:0 0 4px 0;color:hsl(25, 4%, 40%)}.inputGroup .errormsg{display:none;color:hsl(0, 65%, 50%)}.inputGroup .errormsg .material-symbols-rounded{color:hsl(0, 65%, 50%)}.inputGroup input[type],.inputGroup textarea,.inputGroup select{border:1px solid hsl(25, 4%, 50%);font-size:1rem;line-height:1.5rem;box-sizing:border-box;width:100%;min-height:2.5rem;border-radius:8px;padding:4px 12px;margin:0 0 4px 0;transition:all 0.2s ease-in-out;background-color:white}.inputGroup textarea{padding:8px 12px;min-height:60px}.inputGroup select{background:url("../../img/arrow_down.svg") no-repeat calc(100% - 12px) 50%;min-height:2.5rem;padding:4px 12px;-webkit-appearance:none;appearance:none;box-shadow:0px 2px 2px rgba(0, 0, 0, 0.12)}.inputGroup select:autofill{appearance:auto}.inputGroup input[type].error,.inputGroup textarea.error{border:1px solid hsl(0, 65%, 50%) !important}.inputGroup textarea.resizeHorz{resize:horizontal}.inputGroup textarea.resizeVert{resize:vertical}.inputGroup.error .errormsg{display:flex}.inputGroup.error.not-empty .errormsg .empty{display:none}.inputGroup.error.not-empty .errormsg .format{display:flex}.inputGroup.error .errormsg .empty{display:flex}.inputGroup.error .errormsg .format{display:none}.checkboxGroup{padding:2px 0;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-content:center;cursor:pointer;gap:4px;position:relative}.checkboxGroup label{font-size:0.875rem;line-height:1.25rem;color:hsl(25, 4%, 30%);display:flex;align-items:center;flex-direction:row;padding:2px 0;cursor:inherit;gap:4px}.checkboxGroup label span{border-radius:8px}.checkboxGroup label svg{display:flex;align-items:center;filter:drop-shadow(0px 2px 2px hsla(25, 4%, 10%, 0.12));pointer-events:none}.checkboxGroup label svg.checked>rect{fill:var(--theme-primary)}.checkboxGroup input[type=checkbox]{appearance:none;background:#fff url("../../img/checkbox_check.svg") no-repeat center center;background-size:40%;margin:0;cursor:inherit;width:16px;height:16px;margin:4px;border:1px solid hsl(25, 4%, 50%);border-radius:4px;box-shadow:0 2px 4px 0 rgba(0, 0, 0, 0.1);transition:all 0.2s ease-in-out}.checkboxGroup input[type=checkbox]:checked{background-color:var(--theme-primary);background-size:90%;box-sizing:border-box;border:0px solid var(--theme-primary);box-shadow:0 2px 4px 0 0px 2px 2px rgba(0, 0, 0, 0.12)}.inputGroup.error{transition:all 0.25s ease-in-out}.inputGroup.error label{color:hsl(0, 65%, 50%);transition:inherit}.inputGroup.error input[type],.inputGroup.error textarea,.inputGroup.error select{border-color:hsl(0, 65%, 50%);background-color:hsl(0, 65%, 97%);transition:inherit}.inputGroup.error .optional,.inputGroup.error .required,.inputGroup.error .counter,.inputGroup.error .material-symbols-rounded{color:hsl(0, 65%, 50%)}.inputGroup.error .material-symbols-rounded{font-size:1rem !important}.inputGroup.error .helper{display:none}.inputGroup.error .charUsed{font-weight:700}.optional{color:hsl(25, 4%, 40%);font-size:0.875rem !important}.required{color:hsl(25, 4%, 30%);font-size:0.8em;line-height:0.5rem;display:inline-flex;margin-left:-4px}.helper{display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.counter,.numberCounter{font-size:0.75rem;line-height:1rem;color:hsl(25, 4%, 30%);display:flex;flex-direction:row;flex-grow:1;gap:2px;justify-content:flex-start;align-items:center}.counter span,.numberCounter span{display:flex}.counter .condenseCounter,.numberCounter .condenseCounter{flex-grow:1;justify-content:flex-end}.fieldCol2{display:flex;flex-direction:row;gap:8px;flex:0 1 auto}.inputGroup input[type].search{padding-left:36px;background:url("../../img/Search.svg") 8px center no-repeat}',
  map: null
};
const Input_Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inputId;
  let { label = "Label" } = $$props;
  let { val } = $$props;
  let { required = false } = $$props;
  let { placeholder = "" } = $$props;
  let { type = "text" } = $$props;
  let { patternValidation = "" } = $$props;
  let { autocomplete = "on" } = $$props;
  let { helper = "" } = $$props;
  let { invalidMsg = "" } = $$props;
  let { hideLabel = false } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.val === void 0 && $$bindings.val && val !== void 0)
    $$bindings.val(val);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.patternValidation === void 0 && $$bindings.patternValidation && patternValidation !== void 0)
    $$bindings.patternValidation(patternValidation);
  if ($$props.autocomplete === void 0 && $$bindings.autocomplete && autocomplete !== void 0)
    $$bindings.autocomplete(autocomplete);
  if ($$props.helper === void 0 && $$bindings.helper && helper !== void 0)
    $$bindings.helper(helper);
  if ($$props.invalidMsg === void 0 && $$bindings.invalidMsg && invalidMsg !== void 0)
    $$bindings.invalidMsg(invalidMsg);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  $$result.css.add(css$6);
  inputId = label.toLowerCase().replaceAll(" ", "");
  return `<div class="inputGroup"><label${add_attribute("for", inputId, 0)} type="search"${add_classes((hideLabel === true ? "hideIt" : "").trim())}><span>${escape(label)}</span>
    ${required ? `<sup class="required" aria-hidden="true">﹡</sup>` : `<span class="optional">(optional)</span>`}</label>
<input type="search"${add_attribute("id", inputId, 0)} ${required ? "required" : ""}${add_attribute("placeholder", placeholder, 0)}${add_attribute("autocomplete", autocomplete, 0)}${add_attribute("pattern", patternValidation !== "" ? patternValidation : void 0, 0)}${add_attribute("aria-describedby", `${inputId}helper`, 0)} class="search"${add_attribute("value", val, 0)}>
${helper ? `<span${add_attribute("id", `${inputId}helper`, 0)} class="helper">${escape(helper)}</span>` : ``}
<span${add_attribute("id", `${inputId}helper`, 0)} class="errormsg" aria-live="assertive"><span class="material-symbols-rounded" aria-hidden="true" style="font-size:16px;">error</span> 
    <span class="empty">${escape(label)} is required.</span>
    <span class="format">${escape(invalidMsg)}</span></span>
</div>`;
});
const Designation_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20,300,0,0");:root{--theme-primary:hsl(150, 21%, 30%);--theme-primary-light:hsl(150 21% 50%);--theme-primary-lighter:hsl(150 21% 75%);--theme-primary-lightest:hsl(150 21% 90%);--theme-primary-dark:hsl(150, 21%, 20%);--bg-summary-bottom:hsl(25 8% 88%);--bg-summary-top:hsl(25 8% 96%);--baseSize:16px;font-size:var(--baseSize);scroll-behavior:smooth}.material-symbols-rounded{font-variation-settings:"FILL" 0, "wght" 300, "GRAD" 0, "opsz" 20}.material-symbols-rounded{font-size:1rem;color:hsl(25, 4%, 50%)}.SR_hide{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}@keyframes svelte-s2bjt8-slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:0}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes svelte-s2bjt8-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes svelte-s2bjt8-fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}@keyframes svelte-s2bjt8-slideOut{0%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}50%{filter:blur(0px)}100%{transform:scale(1) translateY(80px);filter:blur(0px);opacity:1}}@media screen and (max-width: 480px){@keyframes svelte-s2bjt8-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes svelte-s2bjt8-slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:1}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes svelte-s2bjt8-fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}}.dcontent.svelte-s2bjt8.svelte-s2bjt8{display:flex;flex-direction:column;height:calc(100% - 64px);box-sizing:border-box}.dcontent.svelte-s2bjt8 section.svelte-s2bjt8{width:100%;box-sizing:border-box}#pdsearch.svelte-s2bjt8.svelte-s2bjt8{flex-shrink:1;padding:8px 24px 12px}#pdresults.svelte-s2bjt8.svelte-s2bjt8{overflow-y:auto;overflow-x:hidden;padding:12px 0;margin-bottom:16px;-webkit-mask-image:linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 1%, rgb(255, 255, 255) 98%, rgba(255, 255, 255, 0) 100%);mask-image:linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 1%, rgb(255, 255, 255) 98%, rgba(255, 255, 255, 0) 100%)}ul.svelte-s2bjt8.svelte-s2bjt8{list-style:none;padding:0}li.result.svelte-s2bjt8.svelte-s2bjt8{text-align:left;padding:8px 40px;font-size:1rem;line-height:1.5rem;display:flex;align-items:center;min-height:44px;box-sizing:border-box;cursor:pointer;transition:all 0.25s ease-in-out}li.result.svelte-s2bjt8.svelte-s2bjt8:hover{background-color:hsl(25, 4%, 95%)}',
  map: null
};
const Designation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let search;
  let closeModal;
  let { pdValue = "Where it's needed the most" } = $$props;
  let searchVal = "";
  function saveProgram() {
    console.log("saved", search);
    closeModal();
  }
  function cancelProgram() {
    closeModal();
    console.log("canceled");
  }
  const locations = [
    "Where its needed the most",
    "Boston, MA 02111",
    "Worcester, MA 01944",
    "Springfield, MA 45432",
    "Midland Park, NJ 07432",
    "West Greenwich, RI 02817",
    "Billings, Montana 03921",
    "San Francisco, CA 94107",
    "Vineland, NJ 08360",
    "San Luis Obispo, CA 93405",
    "Uniontown, OH 44685",
    "Saint Cloud, FL 34769",
    "Chickamauga, GA 30707",
    "Highland Park, MI 48203",
    "Anna Maria, FL 34216",
    "Auburn, CA 95602",
    "Rohnert Park, CA 94928",
    "Fontana, CA 92335",
    "Jericho, NY 11753"
  ];
  if ($$props.pdValue === void 0 && $$bindings.pdValue && pdValue !== void 0)
    $$bindings.pdValue(pdValue);
  $$result.css.add(css$5);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    search = locations.filter((location) => location.includes(searchVal));
    $$rendered = `${validate_component(Dialog, "ChildDialog").$$render(
      $$result,
      {
        thename: "designation",
        modalTitle: "Id like to support",
        saveIt: () => saveProgram(),
        cancelIt: () => cancelProgram(),
        closeMe: closeModal
      },
      {
        closeMe: ($$value) => {
          closeModal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="dcontent svelte-s2bjt8" style="padding: 0px"><section id="pdsearch" class="svelte-s2bjt8">${validate_component(Input_Search, "Input").$$render(
            $$result,
            {
              label: "Search designations",
              hideLabel: true,
              required: false,
              placeholder: "Search...",
              val: searchVal
            },
            {
              val: ($$value) => {
                searchVal = $$value;
                $$settled = false;
              }
            },
            {}
          )}</section>
		<section id="pdresults" class="svelte-s2bjt8"><ul class="svelte-s2bjt8">${each(search, (results) => {
            return `<li class="result svelte-s2bjt8">${escape(results)}</li>`;
          })}</ul></section></div>`;
        }
      }
    )}

<li class="optionItem"><button aria-label="I would like to support"><div class="icon" aria-hidden="true"><img${add_attribute("src", userHeart$1, 0)} aria-hidden="true" alt="support"></div>
		<div class="content"><span id="pdtitle" class="title">I&#39;d like to support</span>
			<p class="subtitle">${escape(pdValue)}</p></div>
		<div class="action"><img${add_attribute("src", chervon, 0)} alt="chevron" aria-hidden="true"></div></button>
	
</li>`;
  } while (!$$settled);
  return $$rendered;
});
const userHeart = "/_app/immutable/assets/comment.439a8721.svg";
const css$4 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20,300,0,0");:root{--theme-primary:hsl(150, 21%, 30%);--theme-primary-light:hsl(150 21% 50%);--theme-primary-lighter:hsl(150 21% 75%);--theme-primary-lightest:hsl(150 21% 90%);--theme-primary-dark:hsl(150, 21%, 20%);--bg-summary-bottom:hsl(25 8% 88%);--bg-summary-top:hsl(25 8% 96%);--baseSize:16px;font-size:var(--baseSize);scroll-behavior:smooth}.material-symbols-rounded{font-variation-settings:"FILL" 0, "wght" 300, "GRAD" 0, "opsz" 20}.material-symbols-rounded{font-size:1rem;color:hsl(25, 4%, 50%)}.SR_hide{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}@keyframes slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:0}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}@keyframes slideOut{0%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}50%{filter:blur(0px)}100%{transform:scale(1) translateY(80px);filter:blur(0px);opacity:1}}@media screen and (max-width: 480px){@keyframes fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:1}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}}.inputGroup{display:flex;flex-direction:column;flex-grow:1;margin:12px 0 0 0;position:relative}.inputGroup label{font-size:0.875rem;line-height:1.25rem;color:hsl(25, 4%, 30%);padding-bottom:4px;text-align:left}.inputGroup .errormsg,.inputGroup .helper{font-size:0.75rem;line-height:1rem;gap:2px;padding:0 0 4px 0;color:hsl(25, 4%, 40%)}.inputGroup .errormsg{display:none;color:hsl(0, 65%, 50%)}.inputGroup .errormsg .material-symbols-rounded{color:hsl(0, 65%, 50%)}.inputGroup input[type],.inputGroup textarea,.inputGroup select{border:1px solid hsl(25, 4%, 50%);font-size:1rem;line-height:1.5rem;box-sizing:border-box;width:100%;min-height:2.5rem;border-radius:8px;padding:4px 12px;margin:0 0 4px 0;transition:all 0.2s ease-in-out;background-color:white}.inputGroup textarea{padding:8px 12px;min-height:60px}.inputGroup select{background:url("../../img/arrow_down.svg") no-repeat calc(100% - 12px) 50%;min-height:2.5rem;padding:4px 12px;-webkit-appearance:none;appearance:none;box-shadow:0px 2px 2px rgba(0, 0, 0, 0.12)}.inputGroup select:autofill{appearance:auto}.inputGroup input[type].error,.inputGroup textarea.error{border:1px solid hsl(0, 65%, 50%) !important}.inputGroup textarea.resizeHorz{resize:horizontal}.inputGroup textarea.resizeVert{resize:vertical}.inputGroup.error .errormsg{display:flex}.inputGroup.error.not-empty .errormsg .empty{display:none}.inputGroup.error.not-empty .errormsg .format{display:flex}.inputGroup.error .errormsg .empty{display:flex}.inputGroup.error .errormsg .format{display:none}.checkboxGroup{padding:2px 0;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-content:center;cursor:pointer;gap:4px;position:relative}.checkboxGroup label{font-size:0.875rem;line-height:1.25rem;color:hsl(25, 4%, 30%);display:flex;align-items:center;flex-direction:row;padding:2px 0;cursor:inherit;gap:4px}.checkboxGroup label span{border-radius:8px}.checkboxGroup label svg{display:flex;align-items:center;filter:drop-shadow(0px 2px 2px hsla(25, 4%, 10%, 0.12));pointer-events:none}.checkboxGroup label svg.checked>rect{fill:var(--theme-primary)}.checkboxGroup input[type=checkbox]{appearance:none;background:#fff url("../../img/checkbox_check.svg") no-repeat center center;background-size:40%;margin:0;cursor:inherit;width:16px;height:16px;margin:4px;border:1px solid hsl(25, 4%, 50%);border-radius:4px;box-shadow:0 2px 4px 0 rgba(0, 0, 0, 0.1);transition:all 0.2s ease-in-out}.checkboxGroup input[type=checkbox]:checked{background-color:var(--theme-primary);background-size:90%;box-sizing:border-box;border:0px solid var(--theme-primary);box-shadow:0 2px 4px 0 0px 2px 2px rgba(0, 0, 0, 0.12)}.inputGroup.error{transition:all 0.25s ease-in-out}.inputGroup.error label{color:hsl(0, 65%, 50%);transition:inherit}.inputGroup.error input[type],.inputGroup.error textarea,.inputGroup.error select{border-color:hsl(0, 65%, 50%);background-color:hsl(0, 65%, 97%);transition:inherit}.inputGroup.error .optional,.inputGroup.error .required,.inputGroup.error .counter,.inputGroup.error .material-symbols-rounded{color:hsl(0, 65%, 50%)}.inputGroup.error .material-symbols-rounded{font-size:1rem !important}.inputGroup.error .helper{display:none}.inputGroup.error .charUsed{font-weight:700}.optional{color:hsl(25, 4%, 40%);font-size:0.875rem !important}.required{color:hsl(25, 4%, 30%);font-size:0.8em;line-height:0.5rem;display:inline-flex;margin-left:-4px}.helper{display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.counter,.numberCounter{font-size:0.75rem;line-height:1rem;color:hsl(25, 4%, 30%);display:flex;flex-direction:row;flex-grow:1;gap:2px;justify-content:flex-start;align-items:center}.counter span,.numberCounter span{display:flex}.counter .condenseCounter,.numberCounter .condenseCounter{flex-grow:1;justify-content:flex-end}.fieldCol2{display:flex;flex-direction:row;gap:8px;flex:0 1 auto}.helper.textarea{display:flex !important}',
  map: null
};
const Textarea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inputId;
  let { label = "Label" } = $$props;
  let { val } = $$props;
  let { required } = $$props;
  let { hideLabel = false } = $$props;
  let { placeholder = "" } = $$props;
  let { limit = 50 } = $$props;
  let { rows = 3 } = $$props;
  let { helperText = "" } = $$props;
  let { patternValidation } = $$props;
  let charactersUsed = 0;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.val === void 0 && $$bindings.val && val !== void 0)
    $$bindings.val(val);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.hideLabel === void 0 && $$bindings.hideLabel && hideLabel !== void 0)
    $$bindings.hideLabel(hideLabel);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.limit === void 0 && $$bindings.limit && limit !== void 0)
    $$bindings.limit(limit);
  if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0)
    $$bindings.rows(rows);
  if ($$props.helperText === void 0 && $$bindings.helperText && helperText !== void 0)
    $$bindings.helperText(helperText);
  if ($$props.patternValidation === void 0 && $$bindings.patternValidation && patternValidation !== void 0)
    $$bindings.patternValidation(patternValidation);
  $$result.css.add(css$4);
  inputId = label.toLowerCase().replaceAll(" ", "");
  return `<div class="inputGroup"><label${add_attribute("for", inputId, 0)}${add_classes((hideLabel === true ? "hideIt" : "").trim())}><span>${escape(label)}</span>
        ${required ? `<sup class="required">﹡</sup>` : `<span class="optional">(optional)</span>`}
        </label>
    <textarea${add_attribute("id", inputId, 0)} ${required ? "required" : ""}${add_attribute("rows", rows, 0)} class="resizeVert hasCounter"${add_attribute("placeholder", placeholder, 0)}${add_attribute("pattern", patternValidation, 0)}${add_attribute("aria-describedby", `${inputId}helper`, 0)}>${val || ""}</textarea>
    
    <div class="helper textarea">${helperText != "" ? `<span style="text-align:left;">${escape(helperText)}</span>` : ``}
        ${limit != 0 ? `<span class="counter">${`<span style="visibility:hidden">You have <span class="charUsed">${escape(limit)}</span> characters left.</span>`}
            <span class="condenseCounter">${escape(charactersUsed)} of ${escape(limit)}</span></span>` : ``}</div></div>`;
});
const LeaveComment_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "#leaveacomment{height:90%}",
  map: null
};
const LeaveComment = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { theComment = "" } = $$props;
  let theSavedComment = theComment;
  let closeModal;
  function saveComment() {
    theSavedComment = theComment;
    console.log("saved");
    closeModal();
  }
  function cancelComment() {
    closeModal();
    console.log("canceled");
    theComment = theSavedComment;
  }
  if ($$props.theComment === void 0 && $$bindings.theComment && theComment !== void 0)
    $$bindings.theComment(theComment);
  $$result.css.add(css$3);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Dialog, "ChildDialog").$$render(
      $$result,
      {
        thename: "comments",
        modalTitle: "Leave a comment",
        saveIt: () => saveComment(),
        cancelIt: () => cancelComment(),
        closeMe: closeModal
      },
      {
        closeMe: ($$value) => {
          closeModal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `
	<div class="dcontent">${validate_component(Textarea, "Textarea").$$render(
            $$result,
            {
              label: "Leave a comment",
              rows: 10,
              required: false,
              limit: 1e3,
              placeholder: "Add a comment up to 1000 characters...",
              hideLabel: true,
              val: theComment
            },
            {
              val: ($$value) => {
                theComment = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div>`;
        }
      }
    )}

<li class="optionItem"><button aria-labelledby="#cmttitle"><div class="icon"><img${add_attribute("src", userHeart, 0)} aria-hidden="true" alt="comment"></div>
	<div id="cmttitle" class="content"><span id="cmt" class="title">${theSavedComment !== "" ? `Your comment` : `Leave a comment`}</span>
		<p class="subtitle">${escape(theSavedComment)}</p></div>
	<div class="action"><img${add_attribute("src", chervon, 0)} alt="chevron" aria-hidden="true"></div>
	</button>
</li>`;
  } while (!$$settled);
  return $$rendered;
});
const Ecard_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20,300,0,0");:root{--theme-primary:hsl(150, 21%, 30%);--theme-primary-light:hsl(150 21% 50%);--theme-primary-lighter:hsl(150 21% 75%);--theme-primary-lightest:hsl(150 21% 90%);--theme-primary-dark:hsl(150, 21%, 20%);--bg-summary-bottom:hsl(25 8% 88%);--bg-summary-top:hsl(25 8% 96%);--baseSize:16px;font-size:var(--baseSize);scroll-behavior:smooth}.material-symbols-rounded{font-variation-settings:"FILL" 0, "wght" 300, "GRAD" 0, "opsz" 20}.material-symbols-rounded{font-size:1rem;color:hsl(25, 4%, 50%)}.SR_hide{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}@keyframes svelte-lvpvh-slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:0}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes svelte-lvpvh-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes svelte-lvpvh-fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}@keyframes svelte-lvpvh-slideOut{0%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}50%{filter:blur(0px)}100%{transform:scale(1) translateY(80px);filter:blur(0px);opacity:1}}@media screen and (max-width: 480px){@keyframes svelte-lvpvh-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes svelte-lvpvh-slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:1}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes svelte-lvpvh-fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}}.ecard.svelte-lvpvh{display:flex;background-color:hsl(25, 4%, 95%);box-sizing:border-box;flex-grow:1;position:relative;cursor:pointer;border-radius:8px;transition:all 0.25s ease-in-out;background-size:cover;background-repeat:no-repeat;background-position:center}.ecard.svelte-lvpvh:has(input[type=radio]:focus-visible){outline:2px dotted blue;outline-offset:1px}.ecard.svelte-lvpvh:has(input[type=radio]:checked){box-shadow:inset 0 0 0 2px var(--theme-primary), inset 0 0 0 3px white}input[type=radio].svelte-lvpvh{position:absolute;top:8px;left:8px;-webkit-appearance:none;appearance:none;background-color:#fff;flex-shrink:0;margin:0;font:inherit;box-shadow:inset 0px -2px 4px 1px hsl(25, 4%, 80%), inset 0px 0px 0px 0px var(--theme-primary);color:currentColor;width:1em;height:1em;border:1px solid hsl(25, 4%, 50%);border-radius:50%;transition:all 0.4s cubic-bezier(0.25, -0.01, 0.03, 1.2)}input[type=radio].svelte-lvpvh:checked{content:"";border-color:hsl(25, 4%, 20%);box-shadow:inset 0px 1px 2px 0px var(--theme-primary-dark), inset 0px 0px 0px 4px var(--theme-primary), 0px 0px 0px 1px white, 0px 0px 8px 0px hsl(25, 4%, 60%)}input[type=radio].svelte-lvpvh:focus{outline:none}',
  map: null
};
const Ecard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inputId;
  let { label = "" } = $$props;
  let { checked = false } = $$props;
  let { name = "ecards" } = $$props;
  let { value = "" } = $$props;
  let { ecards } = $$props;
  let { imgsrc = "https://images.unsplash.com/photo-1560406146-78f8cb5e0fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1275&q=80" } = $$props;
  let { patternValidation = "" } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.ecards === void 0 && $$bindings.ecards && ecards !== void 0)
    $$bindings.ecards(ecards);
  if ($$props.imgsrc === void 0 && $$bindings.imgsrc && imgsrc !== void 0)
    $$bindings.imgsrc(imgsrc);
  if ($$props.patternValidation === void 0 && $$bindings.patternValidation && patternValidation !== void 0)
    $$bindings.patternValidation(patternValidation);
  $$result.css.add(css$2);
  inputId = label.toLowerCase().replaceAll(" ", "");
  return `<label class="ecard svelte-lvpvh"${add_attribute("for", inputId, 0)} style="${"background-image: url(" + escape(imgsrc, true) + ");"}"><input type="radio"${add_attribute("id", inputId, 0)}${add_attribute("name", name, 0)}${add_attribute("value", imgsrc, 0)}${add_attribute("pattern", patternValidation, 0)} class="svelte-lvpvh"${imgsrc === ecards ? add_attribute("checked", true, 1) : ""}>
	
	</label>`;
});
const Dedications_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20,300,0,0");:root{--theme-primary:hsl(150, 21%, 30%);--theme-primary-light:hsl(150 21% 50%);--theme-primary-lighter:hsl(150 21% 75%);--theme-primary-lightest:hsl(150 21% 90%);--theme-primary-dark:hsl(150, 21%, 20%);--bg-summary-bottom:hsl(25 8% 88%);--bg-summary-top:hsl(25 8% 96%);--baseSize:16px;font-size:var(--baseSize);scroll-behavior:smooth}.material-symbols-rounded{font-variation-settings:"FILL" 0, "wght" 300, "GRAD" 0, "opsz" 20}.material-symbols-rounded{font-size:1rem;color:hsl(25, 4%, 50%)}.SR_hide{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}@keyframes svelte-1ddt27z-slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:0}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes svelte-1ddt27z-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes svelte-1ddt27z-fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}@keyframes svelte-1ddt27z-slideOut{0%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}50%{filter:blur(0px)}100%{transform:scale(1) translateY(80px);filter:blur(0px);opacity:1}}@media screen and (max-width: 480px){@keyframes svelte-1ddt27z-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes svelte-1ddt27z-slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:1}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes svelte-1ddt27z-fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}}form.svelte-1ddt27z.svelte-1ddt27z{padding:0 !important;width:100%;overflow:hidden}.divider.svelte-1ddt27z.svelte-1ddt27z{border-top:1px solid hsl(25, 4%, 90%);padding-top:8px;margin-top:20px}.recipientHeader.svelte-1ddt27z.svelte-1ddt27z{padding:16px 0 8px 0}.recipientHeader.svelte-1ddt27z h2.svelte-1ddt27z{font-size:1.125rem;line-height:1.5rem;padding-bottom:2px}.recipientHeader.svelte-1ddt27z p.svelte-1ddt27z{color:hsl(25, 4%, 40%)}.type.svelte-1ddt27z.svelte-1ddt27z{border-radius:8px;background-color:hsl(25, 4%, 95%);padding:12px;text-align:left;display:flex;gap:24px;margin:32px 0 8px;position:relative}.type.svelte-1ddt27z.svelte-1ddt27z:before{content:"Type";position:absolute;top:-24px;left:0px;font-size:0.875rem;line-height:1.25rem}.ecardThumbs.svelte-1ddt27z.svelte-1ddt27z{flex-direction:row;display:flex;gap:8px;height:84px;padding:12px 0;border:none}.printed.svelte-1ddt27z.svelte-1ddt27z{padding-top:8px}.emailGroup.svelte-1ddt27z.svelte-1ddt27z{padding-top:8px}.switchHead.svelte-1ddt27z.svelte-1ddt27z{display:flex;flex-direction:column;align-items:center}h2.svelte-1ddt27z.svelte-1ddt27z{font-size:1rem;line-height:1.5rem;font-weight:600;text-align:left;margin:0}p.svelte-1ddt27z.svelte-1ddt27z{margin:0;font-size:0.875rem;line-height:1.25rem;text-align:left}label.svelte-1ddt27z.svelte-1ddt27z{font-size:1rem;line-height:1.5rem;display:flex;align-items:center;gap:8px}details.svelte-1ddt27z.svelte-1ddt27z{padding:0;box-shadow:none;border-radius:8px;border:1px solid hsl(25, 4%, 95%);background-color:hsl(25, 4%, 95%);transition:all 0.25s ease-in-out;color:var(--theme-primary);overflow:hidden}details.svelte-1ddt27z summary.svelte-1ddt27z{min-height:44px;display:flex;align-items:center;justify-content:center;cursor:pointer}details.svelte-1ddt27z summary .open.svelte-1ddt27z{display:none;position:relative}details.svelte-1ddt27z summary .closed.svelte-1ddt27z{display:inline;position:relative}details.svelte-1ddt27z summary .closed.svelte-1ddt27z:before{content:url(../../img/visible.svg);position:absolute;left:-28px;top:-2px}details[open].svelte-1ddt27z.svelte-1ddt27z{box-shadow:0px 4px 4px rgba(0, 0, 0, 0.04);border-color:hsl(25, 4%, 90%);background-color:hsl(25, 4%, 100%)}details[open].svelte-1ddt27z summary.svelte-1ddt27z{border-bottom:1px solid hsl(25, 4%, 90%)}details[open].svelte-1ddt27z summary .open.svelte-1ddt27z{display:inline}details[open].svelte-1ddt27z summary .open.svelte-1ddt27z:before{content:url(../../img/visible_off.svg);position:absolute;left:-28px;top:-2px}details[open].svelte-1ddt27z summary .closed.svelte-1ddt27z{display:none}.previewImg.svelte-1ddt27z.svelte-1ddt27z{width:100%;min-height:380px;display:flex;align-items:center;justify-content:center;flex-direction:column}.previewImg.svelte-1ddt27z .image.svelte-1ddt27z{padding:0;box-sizing:border-box}.previewImg.svelte-1ddt27z .image img.svelte-1ddt27z{max-height:320px;width:auto;max-width:100%;box-sizing:border-box;padding:16px 16px 0}.previewImg.svelte-1ddt27z p.svelte-1ddt27z{min-height:2rem;text-align:center;background-color:white;padding:8px;font-size:1rem;line-height:1.5rem}.overflowView.svelte-1ddt27z.svelte-1ddt27z{overflow-y:auto;overflow-x:hidden;padding:24px 32px 48px 32px;margin-bottom:16px}input[type=radio].svelte-1ddt27z.svelte-1ddt27z{-webkit-appearance:none;appearance:none;background-color:#fff;flex-shrink:0;margin:0;font:inherit;box-shadow:inset 0px -2px 4px 1px hsl(25, 4%, 80%), inset 0px 0px 0px 0px var(--theme-primary);color:currentColor;width:1em;height:1em;border:1px solid hsl(25, 4%, 50%);border-radius:50%;transition:all 0.4s cubic-bezier(0.25, -0.01, 0.03, 1.2)}input[type=radio].svelte-1ddt27z.svelte-1ddt27z:checked{content:"";border-color:hsl(25, 4%, 20%);box-shadow:inset 0px 1px 2px 0px var(--theme-primary-dark), inset 0px 0px 0px 4px var(--theme-primary), 0px 0px 0px 1px white, 0px 0px 8px 0px hsl(25, 4%, 60%)}@media screen and (max-width: 480px){.overflowView.svelte-1ddt27z.svelte-1ddt27z{padding:20px 20px 48px 20px}}',
  map: null
};
const Dedications = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fullName;
  let closeModal;
  let { firstName = "" } = $$props;
  let { lastName = "" } = $$props;
  let email = "";
  let rec_firstName = "";
  let rec_lastName = "";
  let theMessage = "";
  let { dedicationtype = "In honor of" } = $$props;
  let ecards = "";
  let showDedications = false;
  let showeCard = true;
  let showPrinted = false;
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
  function saveDedication() {
    console.log("saved");
    closeModal();
  }
  function cancelDedication() {
    closeModal();
    console.log("canceled");
  }
  if ($$props.firstName === void 0 && $$bindings.firstName && firstName !== void 0)
    $$bindings.firstName(firstName);
  if ($$props.lastName === void 0 && $$bindings.lastName && lastName !== void 0)
    $$bindings.lastName(lastName);
  if ($$props.dedicationtype === void 0 && $$bindings.dedicationtype && dedicationtype !== void 0)
    $$bindings.dedicationtype(dedicationtype);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    fullName = firstName + " " + lastName;
    $$rendered = `${validate_component(Dialog, "ChildDialog").$$render(
      $$result,
      {
        thename: "dedication",
        modalTitle: "Dedicate a donation",
        saveIt: () => saveDedication(),
        cancelIt: () => cancelDedication(),
        closeMe: closeModal
      },
      {
        closeMe: ($$value) => {
          closeModal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<form novalidate class="svelte-1ddt27z"><div class="dcontent overflowView svelte-1ddt27z"><div class="type svelte-1ddt27z"><label class="svelte-1ddt27z"><input type="radio" id="honorof" name="dedicationtype" value="In honor of" required class="svelte-1ddt27z"${"In honor of" === dedicationtype ? add_attribute("checked", true, 1) : ""}>
				In honor of
			</label>
			<label class="svelte-1ddt27z"><input type="radio" id="memoryof" name="dedicationtype" value="In memory of" class="svelte-1ddt27z"${"In memory of" === dedicationtype ? add_attribute("checked", true, 1) : ""}>
				In memory of
			</label></div>

		<div class="col-2 topEl" style="width:100%;padding-bottom:8px;">${validate_component(Input_Text, "Input").$$render(
            $$result,
            {
              label: "Honoree’s first name",
              required: true,
              patternValidation: ".+",
              val: firstName
            },
            {
              val: ($$value) => {
                firstName = $$value;
                $$settled = false;
              }
            },
            {}
          )}
			${validate_component(Input_Text, "Input").$$render(
            $$result,
            {
              label: "Honoree’s last name",
              required: true,
              patternValidation: "[a-zA-Z0-9]+",
              val: lastName
            },
            {
              val: ($$value) => {
                lastName = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div>
		<div class="divider svelte-1ddt27z"></div>
		<div class="recipientHeader svelte-1ddt27z"><h2 class="svelte-1ddt27z">Recipient options</h2>
		<p class="svelte-1ddt27z">Send someone a message about this donation</p></div>
		
		<div class="switchHead svelte-1ddt27z">${validate_component(Switch, "Switch").$$render(
            $$result,
            { name: "email", checked: showDedications },
            {
              checked: ($$value) => {
                showDedications = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `
				<span id="emailLabel">Email notification</span>
				<p id="emailDesc" class="SR_hide svelte-1ddt27z">Send an email to someone about this dedication, enabling shows additional form fields to complete</p>`;
              }
            }
          )}</div>
		<div class="switchHead svelte-1ddt27z">${validate_component(Switch, "Switch").$$render(
            $$result,
            { name: "printed", checked: showPrinted },
            {
              checked: ($$value) => {
                showPrinted = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `
				<span id="printedLabel">Printed card in the mail</span>
				<p id="printedDesc" class="SR_hide svelte-1ddt27z">Add your address to send a postcard to someone, enabling shows additional form fields to complete</p>`;
              }
            }
          )}</div>
		<div class="divider svelte-1ddt27z"></div>
		${showDedications || showPrinted ? `<section class="emailGroup svelte-1ddt27z">${showDedications ? `<div>${validate_component(Input_Text, "Input").$$render(
            $$result,
            {
              label: "Recipient’s email",
              required: true,
              patternValidation: ".+",
              val: email
            },
            {
              val: ($$value) => {
                email = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div>` : ``}
				
				${showDedications || showPrinted ? `<div class="col-2 topEl" style="width:100%">${validate_component(Input_Text, "Input").$$render(
            $$result,
            {
              label: "Recipient’s first name",
              required: true,
              patternValidation: ".+",
              val: rec_firstName
            },
            {
              val: ($$value) => {
                rec_firstName = $$value;
                $$settled = false;
              }
            },
            {}
          )}
					${validate_component(Input_Text, "Input").$$render(
            $$result,
            {
              label: "Recipient’s last name",
              required: true,
              patternValidation: "[a-zA-Z0-9]+",
              val: rec_lastName
            },
            {
              val: ($$value) => {
                rec_lastName = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div>
				<div>${validate_component(Textarea, "Textarea").$$render(
            $$result,
            {
              label: "Your message to the recipient",
              rows: 3,
              required: false,
              limit: 0,
              helperText: "Please spell check, include how you would like your name(s) signed, mention the amount if desired, and format your message as you would like it delivered.",
              hideLabel: false,
              val: theMessage
            },
            {
              val: ($$value) => {
                theMessage = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div>` : ``}
				
				${showDedications ? `<div class="switchHead svelte-1ddt27z" style="margin-top:8px;">${validate_component(Switch, "Switch").$$render(
            $$result,
            { name: "eCard", checked: showeCard },
            {
              checked: ($$value) => {
                showeCard = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `<span id="printedLabel">Include an eCard</span>
						<p id="printedDesc" class="SR_hide svelte-1ddt27z">Add an ecard image to your email notification</p>`;
              }
            }
          )}</div>
				${showeCard ? `<fieldset class="ecardThumbs svelte-1ddt27z"><legend class="SR_hide">Choose an ecard image</legend>
					${validate_component(Ecard, "Ecard").$$render(
            $$result,
            {
              label: "choice4",
              name: "ecards",
              imgsrc: "https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
              ecards
            },
            {
              ecards: ($$value) => {
                ecards = $$value;
                $$settled = false;
              }
            },
            {}
          )}
					${validate_component(Ecard, "Ecard").$$render(
            $$result,
            {
              label: "choice1",
              name: "ecards",
              imgsrc: "https://images.unsplash.com/photo-1685556636541-b141d0a09746?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
              ecards
            },
            {
              ecards: ($$value) => {
                ecards = $$value;
                $$settled = false;
              }
            },
            {}
          )}
					${validate_component(Ecard, "Ecard").$$render(
            $$result,
            {
              label: "choice2",
              name: "ecards",
              imgsrc: "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
              ecards
            },
            {
              ecards: ($$value) => {
                ecards = $$value;
                $$settled = false;
              }
            },
            {}
          )}
					${validate_component(Ecard, "Ecard").$$render(
            $$result,
            {
              label: "choice3",
              name: "ecards",
              imgsrc: "https://images.unsplash.com/photo-1685810062916-f14fdc0bfa64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80",
              ecards
            },
            {
              ecards: ($$value) => {
                ecards = $$value;
                $$settled = false;
              }
            },
            {}
          )}</fieldset>
				<details class="svelte-1ddt27z"><summary class="svelte-1ddt27z"><span class="closed svelte-1ddt27z">Show </span><span class="open svelte-1ddt27z">Hide </span> Preview</summary>
					<div class="previewImg svelte-1ddt27z"><div class="image svelte-1ddt27z">${ecards !== "" ? `<img${add_attribute("src", ecards, 0)} alt="ecard" class="svelte-1ddt27z">` : `<span style="opacity:.6">You haven&#39;t selected an eCard image</span>`}</div>
						<p class="svelte-1ddt27z">${escape(theMessage)}
							</p></div></details>` : ``}` : ``}</section>` : ``}
		
		
		
				${showPrinted ? `<section class="printed svelte-1ddt27z">${validate_component(Select, "Select").$$render(
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
				${validate_component(Input_Text, "Input").$$render(
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
				
				
				${validate_component(Input_Text, "Input").$$render(
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
				<div class="cityzip col-2" style="width:100%">${validate_component(Select, "Select").$$render(
            $$result,
            {
              label: "State",
              val: "",
              required: true,
              listItems: states,
              autocomplete: "address-line1"
            },
            {},
            {}
          )}
					${validate_component(Input_Text, "Input").$$render(
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
          )}</div></section>` : ``}</div></form>`;
        }
      }
    )}

<li class="optionItem"><button aria-labelledby="#destitle"><div class="icon"><img${add_attribute("src", userHeart$2, 0)} aria-hidden="true" alt="dedications"></div>
		<div class="content"><span id="destitle" class="title">${fullName !== "" ? `Dedicated donation` : `Dedicate my donation`}</span>

			<p class="subtitle svelte-1ddt27z">${fullName !== " " ? `${escape(dedicationtype)}` : ``}
				${escape(fullName)}</p></div>
		<div class="action"><img${add_attribute("src", chervon, 0)} alt="chevron" aria-hidden="true"></div></button>
	
</li>`;
  } while (!$$settled);
  return $$rendered;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20,300,0,0");:root{--theme-primary:hsl(150, 21%, 30%);--theme-primary-light:hsl(150 21% 50%);--theme-primary-lighter:hsl(150 21% 75%);--theme-primary-lightest:hsl(150 21% 90%);--theme-primary-dark:hsl(150, 21%, 20%);--bg-summary-bottom:hsl(25 8% 88%);--bg-summary-top:hsl(25 8% 96%);--baseSize:16px;font-size:var(--baseSize);scroll-behavior:smooth}.material-symbols-rounded{font-variation-settings:"FILL" 0, "wght" 300, "GRAD" 0, "opsz" 20}.material-symbols-rounded{font-size:1rem;color:hsl(25, 4%, 50%)}.SR_hide{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}@keyframes svelte-375fxu-slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:0}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes svelte-375fxu-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes svelte-375fxu-fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}@keyframes svelte-375fxu-slideOut{0%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}50%{filter:blur(0px)}100%{transform:scale(1) translateY(80px);filter:blur(0px);opacity:1}}@media screen and (max-width: 480px){@keyframes svelte-375fxu-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes svelte-375fxu-slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:1}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes svelte-375fxu-fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}}main.checkout.svelte-375fxu.svelte-375fxu.svelte-375fxu{display:flex;flex-grow:1;flex-direction:row;height:calc(100% - 61px);overflow:auto;align-items:stretch}main.checkout.svelte-375fxu .summary.svelte-375fxu.svelte-375fxu,main.checkout.svelte-375fxu form.svelte-375fxu.svelte-375fxu{flex:1 1 auto;display:flex;padding:64px 56px}main.checkout.svelte-375fxu .formcontent.svelte-375fxu.svelte-375fxu{width:400px}main.checkout.svelte-375fxu form.svelte-375fxu.svelte-375fxu{justify-content:flex-end}main.checkout.svelte-375fxu form.svelte-375fxu>section.svelte-375fxu{flex-direction:column}main.checkout.svelte-375fxu div.summary.svelte-375fxu.svelte-375fxu{background:linear-gradient(0deg, var(--bg-summary-bottom) 0%, var(--bg-summary-top) 100%)}main.checkout.svelte-375fxu section.svelte-375fxu>header.svelte-375fxu{padding:0 2px}main.checkout.svelte-375fxu h1.svelte-375fxu.svelte-375fxu{font-size:1.75rem;margin:0 0 8px 0;color:hsl(25, 4%, 10%)}@media screen and (max-width: 1020px){main.checkout.svelte-375fxu>div.svelte-375fxu.svelte-375fxu{padding:48px 32px}main.checkout.svelte-375fxu>form.svelte-375fxu>section.svelte-375fxu{width:100%}}@media only screen and (max-width: 768px){main.checkout.svelte-375fxu.svelte-375fxu.svelte-375fxu{flex-direction:column-reverse}main.checkout.svelte-375fxu>form.svelte-375fxu.svelte-375fxu{padding:32px 20px 16px;flex:1 1 0}main.checkout.svelte-375fxu>div.summary.svelte-375fxu.svelte-375fxu{padding:0;flex:0 1 0}main.checkout.svelte-375fxu>form.svelte-375fxu>section.svelte-375fxu{width:auto;flex:1 0 0}}.details.svelte-375fxu.svelte-375fxu.svelte-375fxu{display:flex;flex-direction:column;position:relative;gap:0.5rem;margin:0;flex-grow:1;padding:32px 0 28px 0}@media only screen and (max-width: 468px){.formcontent.svelte-375fxu.svelte-375fxu.svelte-375fxu{display:flex}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let gift;
  let theOptions;
  options.subscribe((items) => {
    theOptions = items;
  });
  let comments = theOptions.comment;
  let designations = theOptions.designations;
  let dedicationType = theOptions.dedicationType;
  let honoreeFirst = theOptions.honoreeFirst;
  let honoreeLast = theOptions.honoreeLast;
  function updateOptions() {
    options.set({
      comment: comments,
      designations,
      dedicationType,
      honoreeFirst,
      honoreeLast
    });
  }
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
  function nextStep() {
    updateGift();
    updateOptions();
    goto("/information");
  }
  const breadcrumbs = ["previous", "current", "next", "next", "next"];
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `



${$$result.head += `<!-- HEAD_svelte-1tayqcl_START -->${$$result.title = `<title>Santa Pantry - Donation options</title>`, ""}<!-- HEAD_svelte-1tayqcl_END -->`, ""}

<main class="checkout svelte-375fxu"><form id="info" class="svelte-375fxu"><section class="formcontent svelte-375fxu"><header class="svelte-375fxu"><h1 class="svelte-375fxu">Donation options</h1>
				${validate_component(Stepper, "Stepper").$$render($$result, { state: breadcrumbs, hasCC: "none" }, {}, {})}</header>
			<ul class="details svelte-375fxu" aria-label="Donation options">${validate_component(Designation, "Designations").$$render(
      $$result,
      { pdValue: designations },
      {
        pdValue: ($$value) => {
          designations = $$value;
          $$settled = false;
        }
      },
      {}
    )}
				${validate_component(Dedications, "Dedications").$$render(
      $$result,
      {
        firstName: honoreeFirst,
        lastName: honoreeLast,
        dedicationtype: dedicationType
      },
      {
        firstName: ($$value) => {
          honoreeFirst = $$value;
          $$settled = false;
        },
        lastName: ($$value) => {
          honoreeLast = $$value;
          $$settled = false;
        },
        dedicationtype: ($$value) => {
          dedicationType = $$value;
          $$settled = false;
        }
      },
      {}
    )}
				${validate_component(LeaveComment, "Comments").$$render(
      $$result,
      { theComment: comments },
      {
        theComment: ($$value) => {
          comments = $$value;
          $$settled = false;
        }
      },
      {}
    )}
				${validate_component(DoubleDonation, "DoubleDonation").$$render($$result, {}, {}, {})}</ul>
			${validate_component(PrimaryFooter, "PrimaryFooter").$$render(
      $$result,
      {
        ctatext: "information",
        nextStep: () => nextStep()
      },
      {},
      {}
    )}</section></form>
	<div class="summary svelte-375fxu">${validate_component(Cart, "CartSummary").$$render(
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
