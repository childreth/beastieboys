import { c as create_ssr_component, a as add_attribute, e as escape } from "./index2.js";
const Input_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20,300,0,0");:root{--theme-primary:hsl(150, 21%, 30%);--theme-primary-light:hsl(150 21% 50%);--theme-primary-lighter:hsl(150 21% 75%);--theme-primary-lightest:hsl(150 21% 90%);--theme-primary-dark:hsl(150, 21%, 20%);--bg-summary-bottom:hsl(25 8% 88%);--bg-summary-top:hsl(25 8% 96%);--baseSize:16px;font-size:var(--baseSize);scroll-behavior:smooth}.material-symbols-rounded{font-variation-settings:"FILL" 0, "wght" 300, "GRAD" 0, "opsz" 20}.material-symbols-rounded{font-size:1rem;color:hsl(25, 4%, 50%)}.SR_hide{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}@keyframes slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:0}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}@keyframes slideOut{0%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}50%{filter:blur(0px)}100%{transform:scale(1) translateY(80px);filter:blur(0px);opacity:1}}@media screen and (max-width: 480px){@keyframes fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:1}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}}.inputGroup{display:flex;flex-direction:column;flex-grow:1;margin:12px 0 0 0;position:relative}.inputGroup label{font-size:0.875rem;line-height:1.25rem;color:hsl(25, 4%, 30%);padding-bottom:4px;text-align:left}.inputGroup .errormsg,.inputGroup .helper{font-size:0.75rem;line-height:1rem;gap:2px;padding:0 0 4px 0;color:hsl(25, 4%, 40%)}.inputGroup .errormsg{display:none;color:hsl(0, 65%, 50%)}.inputGroup .errormsg .material-symbols-rounded{color:hsl(0, 65%, 50%)}.inputGroup input[type],.inputGroup textarea,.inputGroup select{border:1px solid hsl(25, 4%, 50%);font-size:1rem;line-height:1.5rem;box-sizing:border-box;width:100%;min-height:2.5rem;border-radius:8px;padding:4px 12px;margin:0 0 4px 0;transition:all 0.2s ease-in-out;background-color:white}.inputGroup textarea{padding:8px 12px;min-height:60px}.inputGroup select{background:url("../../img/arrow_down.svg") no-repeat calc(100% - 12px) 50%;min-height:2.5rem;padding:4px 12px;-webkit-appearance:none;appearance:none;box-shadow:0px 2px 2px rgba(0, 0, 0, 0.12)}.inputGroup select:autofill{appearance:auto}.inputGroup input[type].error,.inputGroup textarea.error{border:1px solid hsl(0, 65%, 50%) !important}.inputGroup textarea.resizeHorz{resize:horizontal}.inputGroup textarea.resizeVert{resize:vertical}.inputGroup.error .errormsg{display:flex}.inputGroup.error.not-empty .errormsg .empty{display:none}.inputGroup.error.not-empty .errormsg .format{display:flex}.inputGroup.error .errormsg .empty{display:flex}.inputGroup.error .errormsg .format{display:none}.checkboxGroup{padding:2px 0;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-content:center;cursor:pointer;gap:4px;position:relative}.checkboxGroup label{font-size:0.875rem;line-height:1.25rem;color:hsl(25, 4%, 30%);display:flex;align-items:center;flex-direction:row;padding:2px 0;cursor:inherit;gap:4px}.checkboxGroup label span{border-radius:8px}.checkboxGroup label svg{display:flex;align-items:center;filter:drop-shadow(0px 2px 2px hsla(25, 4%, 10%, 0.12));pointer-events:none}.checkboxGroup label svg.checked>rect{fill:var(--theme-primary)}.checkboxGroup input[type=checkbox]{appearance:none;background:#fff url("../../img/checkbox_check.svg") no-repeat center center;background-size:40%;margin:0;cursor:inherit;width:16px;height:16px;margin:4px;border:1px solid hsl(25, 4%, 50%);border-radius:4px;box-shadow:0 2px 4px 0 rgba(0, 0, 0, 0.1);transition:all 0.2s ease-in-out}.checkboxGroup input[type=checkbox]:checked{background-color:var(--theme-primary);background-size:90%;box-sizing:border-box;border:0px solid var(--theme-primary);box-shadow:0 2px 4px 0 0px 2px 2px rgba(0, 0, 0, 0.12)}.inputGroup.error{transition:all 0.25s ease-in-out}.inputGroup.error label{color:hsl(0, 65%, 50%);transition:inherit}.inputGroup.error input[type],.inputGroup.error textarea,.inputGroup.error select{border-color:hsl(0, 65%, 50%);background-color:hsl(0, 65%, 97%);transition:inherit}.inputGroup.error .optional,.inputGroup.error .required,.inputGroup.error .counter,.inputGroup.error .material-symbols-rounded{color:hsl(0, 65%, 50%)}.inputGroup.error .material-symbols-rounded{font-size:1rem !important}.inputGroup.error .helper{display:none}.inputGroup.error .charUsed{font-weight:700}.optional{color:hsl(25, 4%, 40%);font-size:0.875rem !important}.required{color:hsl(25, 4%, 30%);font-size:0.8em;line-height:0.5rem;display:inline-flex;margin-left:-4px}.helper{display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.counter,.numberCounter{font-size:0.75rem;line-height:1rem;color:hsl(25, 4%, 30%);display:flex;flex-direction:row;flex-grow:1;gap:2px;justify-content:flex-start;align-items:center}.counter span,.numberCounter span{display:flex}.counter .condenseCounter,.numberCounter .condenseCounter{flex-grow:1;justify-content:flex-end}.fieldCol2{display:flex;flex-direction:row;gap:8px;flex:0 1 auto}',
  map: null
};
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inputId;
  let { label = "Label" } = $$props;
  let { val } = $$props;
  let { required } = $$props;
  let { placeholder = "" } = $$props;
  let { readOnly = false } = $$props;
  let { type = "text" } = $$props;
  let { disabled = false } = $$props;
  let { patternValidation = "" } = $$props;
  let { autocomplete = "on" } = $$props;
  let { helper = "" } = $$props;
  let { invalidMsg = "" } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.val === void 0 && $$bindings.val && val !== void 0)
    $$bindings.val(val);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.readOnly === void 0 && $$bindings.readOnly && readOnly !== void 0)
    $$bindings.readOnly(readOnly);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.patternValidation === void 0 && $$bindings.patternValidation && patternValidation !== void 0)
    $$bindings.patternValidation(patternValidation);
  if ($$props.autocomplete === void 0 && $$bindings.autocomplete && autocomplete !== void 0)
    $$bindings.autocomplete(autocomplete);
  if ($$props.helper === void 0 && $$bindings.helper && helper !== void 0)
    $$bindings.helper(helper);
  if ($$props.invalidMsg === void 0 && $$bindings.invalidMsg && invalidMsg !== void 0)
    $$bindings.invalidMsg(invalidMsg);
  $$result.css.add(css$1);
  inputId = label.toLowerCase().replaceAll(" ", "");
  return `<div class="inputGroup"><label${add_attribute("for", inputId, 0)}><span>${escape(label)}</span>
    ${required ? `<sup class="required" aria-hidden="true">﹡</sup>` : `<span class="optional">(optional)</span>`}</label>
<input${add_attribute("type", type, 0)}${add_attribute("id", inputId, 0)}${add_attribute("value", val, 0)} ${required ? "required" : ""}${add_attribute("placeholder", placeholder, 0)}${add_attribute("autocomplete", autocomplete, 0)}${add_attribute("pattern", patternValidation !== "" ? patternValidation : void 0, 0)}${add_attribute("aria-describedby", `${inputId}helper`, 0)} ${readOnly ? "readonly" : ""} ${disabled ? "disabled" : ""}>
${helper ? `<span${add_attribute("id", `${inputId}helper`, 0)} class="helper">${escape(helper)}</span>` : ``}
<span${add_attribute("id", `${inputId}helper`, 0)} class="errormsg"><span class="material-symbols-rounded" aria-hidden="true" style="font-size:16px;">error</span> 
    <span class="empty" aria-live="assertive">${escape(label)} is required.</span>
    <span class="format">${escape(invalidMsg)}</span></span></div>`;
});
const Alert_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20,300,0,0");:root{--theme-primary:hsl(150, 21%, 30%);--theme-primary-light:hsl(150 21% 50%);--theme-primary-lighter:hsl(150 21% 75%);--theme-primary-lightest:hsl(150 21% 90%);--theme-primary-dark:hsl(150, 21%, 20%);--bg-summary-bottom:hsl(25 8% 88%);--bg-summary-top:hsl(25 8% 96%);--baseSize:16px;font-size:var(--baseSize);scroll-behavior:smooth}.material-symbols-rounded{font-variation-settings:"FILL" 0, "wght" 300, "GRAD" 0, "opsz" 20}.material-symbols-rounded{font-size:1rem;color:hsl(25, 4%, 50%)}.SR_hide{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}@keyframes svelte-qy3wty-slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:0}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes svelte-qy3wty-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes svelte-qy3wty-fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}@keyframes svelte-qy3wty-slideOut{0%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}50%{filter:blur(0px)}100%{transform:scale(1) translateY(80px);filter:blur(0px);opacity:1}}@media screen and (max-width: 480px){@keyframes svelte-qy3wty-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes svelte-qy3wty-slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:1}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes svelte-qy3wty-fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}}.alert.svelte-qy3wty.svelte-qy3wty{border-radius:8px;padding:0 4px 0 8px;font-size:1rem;line-height:1.5rem;font-weight:400;box-sizing:border-box;border:1px solid hsl(0, 65%, 50%);display:inline-flex;gap:8px;z-index:1000;font-weight:400;align-items:center;justify-content:center;max-width:932px;width:calc(100% - 24px);box-shadow:0px 8px 12px rgba(0, 0, 0, 0.12);position:fixed;animation:svelte-qy3wty-showme 0.75s cubic-bezier(0.03, 0.67, 0.26, 1.08) forwards}.alert.svelte-qy3wty .msgcontent.svelte-qy3wty{display:flex;flex-grow:1;padding:12px 0;gap:4px}.alert.svelte-qy3wty .icon.svelte-qy3wty{display:flex;padding:4px}.alert.svelte-qy3wty .fields.svelte-qy3wty{font-weight:600}.alert.svelte-qy3wty .message.svelte-qy3wty{flex-grow:1;color:hsl(25, 4%, 10%);padding:4px 0}.alert.svelte-qy3wty button.svelte-qy3wty{border:0;background-color:transparent;padding:8px 8px;font-size:0.875rem;line-height:1.25rem;display:flex;align-items:center;justify-content:center}.alert.svelte-qy3wty button svg.svelte-qy3wty{transform:scale(1.2);display:flex;padding:2px}@media only screen and (max-width: 480px){.alert.svelte-qy3wty.svelte-qy3wty{transform:translate(0px, 52px) !important;border-radius:0;border:0;align-items:flex-start;border-bottom:1px solid hsl(0, 65%, 50%);width:100%}.alert.svelte-qy3wty button.svelte-qy3wty{transform:translateY(6px)}}.hidebanner.svelte-qy3wty.svelte-qy3wty{animation:svelte-qy3wty-hideme 0.5s cubic-bezier(0.03, 0.67, 0.26, 1.08) forwards}.icon.svelte-qy3wty.svelte-qy3wty{font-size:1.5rem;color:hsl(0, 65%, 50%)}.neutral.svelte-qy3wty.svelte-qy3wty{background:hsl(25, 4%, 95%);color:hsl(25, 4%, 30%)}.error.svelte-qy3wty.svelte-qy3wty{background:hsl(0, 65%, 97%);color:hsl(0, 65%, 50%)}.dark.svelte-qy3wty.svelte-qy3wty{background:#fff;color:hsl(25, 4%, 20%)}.large.svelte-qy3wty.svelte-qy3wty{border-radius:8px}@keyframes svelte-qy3wty-showme{0%{opacity:0;transform:translateY(100px) scale(0.98)}100%{opacity:1;transform:translateY(60px) scale(1)}}@keyframes svelte-qy3wty-hideme{0%{opacity:1;transform:translateY(60px) scale(1)}100%{opacity:0;transform:translateY(40px) scale(1)}}',
  map: null
};
const Alert = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label = "default" } = $$props;
  let { status = "neutral" } = $$props;
  let { size = "default" } = $$props;
  let { showIcon = true } = $$props;
  let { closeMe = () => {
  } } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.showIcon === void 0 && $$bindings.showIcon && showIcon !== void 0)
    $$bindings.showIcon(showIcon);
  if ($$props.closeMe === void 0 && $$bindings.closeMe && closeMe !== void 0)
    $$bindings.closeMe(closeMe);
  $$result.css.add(css);
  return `<div class="${"alert " + escape(status, true) + " " + escape(size, true) + " svelte-qy3wty"}" aria-live="assertive"><span class="msgcontent svelte-qy3wty">${showIcon ? `<span class="material-symbols-rounded icon svelte-qy3wty">error </span>` : ``}
	<span class="message svelte-qy3wty">Please complete the following fields below: <span class="fields svelte-qy3wty">${escape(label)}</span> before donating.
	</span></span>
    <button class="svelte-qy3wty"><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-qy3wty"><path d="m12 12.94-4.165 4.165a.601.601 0 0 1-.456.187.662.662 0 0 1-.463-.208.645.645 0 0 1 0-.94l4.144-4.145-4.165-4.165a.614.614 0 0 1-.188-.466.673.673 0 0 1 .209-.475.645.645 0 0 1 .94 0l4.145 4.165 4.165-4.165a.65.65 0 0 1 .466-.198.635.635 0 0 1 .474.198.645.645 0 0 1 0 .941l-4.165 4.165 4.165 4.165c.13.13.195.281.198.456a.623.623 0 0 1-.198.464.645.645 0 0 1-.94 0L12 12.94z" fill="#000"></path></svg></button>
</div>`;
});
export {
  Alert as A,
  Input as I
};