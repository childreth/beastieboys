import { c as create_ssr_component, a as add_attribute, e as escape } from "./index2.js";
/* empty css                                        */const iconInfo = "/_app/immutable/assets/info.3dafd1d3.svg";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20,300,0,0");:root{--theme-primary:hsl(150, 21%, 30%);--theme-primary-light:hsl(150 21% 50%);--theme-primary-lighter:hsl(150 21% 75%);--theme-primary-lightest:hsl(150 21% 90%);--theme-primary-dark:hsl(150, 21%, 20%);--bg-summary-bottom:hsl(25 8% 88%);--bg-summary-top:hsl(25 8% 96%);--baseSize:16px;font-size:var(--baseSize);scroll-behavior:smooth}.material-symbols-rounded{font-variation-settings:"FILL" 0, "wght" 300, "GRAD" 0, "opsz" 20}.material-symbols-rounded{font-size:1rem;color:hsl(25, 4%, 50%)}.SR_hide{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}@keyframes slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:0}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}@keyframes slideOut{0%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}50%{filter:blur(0px)}100%{transform:scale(1) translateY(80px);filter:blur(0px);opacity:1}}@media screen and (max-width: 480px){@keyframes fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:1}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}}.inputGroup{display:flex;flex-direction:column;flex-grow:1;margin:12px 0 0 0;position:relative}.inputGroup label{font-size:0.875rem;line-height:1.25rem;color:hsl(25, 4%, 30%);padding-bottom:4px;text-align:left}.inputGroup .errormsg,.inputGroup .helper{font-size:0.75rem;line-height:1rem;gap:2px;padding:0 0 4px 0;color:hsl(25, 4%, 40%)}.inputGroup .errormsg{display:none;color:hsl(0, 65%, 50%)}.inputGroup .errormsg .material-symbols-rounded{color:hsl(0, 65%, 50%)}.inputGroup input[type],.inputGroup textarea,.inputGroup select{border:1px solid hsl(25, 4%, 50%);font-size:1rem;line-height:1.5rem;box-sizing:border-box;width:100%;min-height:2.5rem;border-radius:8px;padding:4px 12px;margin:0 0 4px 0;transition:all 0.2s ease-in-out;background-color:white}.inputGroup textarea{padding:8px 12px;min-height:60px}.inputGroup select{background:url("../../img/arrow_down.svg") no-repeat calc(100% - 12px) 50%;min-height:2.5rem;padding:4px 12px;-webkit-appearance:none;appearance:none;box-shadow:0px 2px 2px rgba(0, 0, 0, 0.12)}.inputGroup select:autofill{appearance:auto}.inputGroup input[type].error,.inputGroup textarea.error{border:1px solid hsl(0, 65%, 50%) !important}.inputGroup textarea.resizeHorz{resize:horizontal}.inputGroup textarea.resizeVert{resize:vertical}.inputGroup.error .errormsg{display:flex}.inputGroup.error.not-empty .errormsg .empty{display:none}.inputGroup.error.not-empty .errormsg .format{display:flex}.inputGroup.error .errormsg .empty{display:flex}.inputGroup.error .errormsg .format{display:none}.checkboxGroup{padding:2px 0;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;align-content:center;cursor:pointer;gap:4px;position:relative}.checkboxGroup label{font-size:0.875rem;line-height:1.25rem;color:hsl(25, 4%, 30%);display:flex;align-items:center;flex-direction:row;padding:2px 0;cursor:inherit;gap:4px}.checkboxGroup label span{border-radius:8px}.checkboxGroup label svg{display:flex;align-items:center;filter:drop-shadow(0px 2px 2px hsla(25, 4%, 10%, 0.12));pointer-events:none}.checkboxGroup label svg.checked>rect{fill:var(--theme-primary)}.checkboxGroup input[type=checkbox]{appearance:none;background:#fff url("../../img/checkbox_check.svg") no-repeat center center;background-size:40%;margin:0;cursor:inherit;width:16px;height:16px;margin:4px;border:1px solid hsl(25, 4%, 50%);border-radius:4px;box-shadow:0 2px 4px 0 rgba(0, 0, 0, 0.1);transition:all 0.2s ease-in-out}.checkboxGroup input[type=checkbox]:checked{background-color:var(--theme-primary);background-size:90%;box-sizing:border-box;border:0px solid var(--theme-primary);box-shadow:0 2px 4px 0 0px 2px 2px rgba(0, 0, 0, 0.12)}.inputGroup.error{transition:all 0.25s ease-in-out}.inputGroup.error label{color:hsl(0, 65%, 50%);transition:inherit}.inputGroup.error input[type],.inputGroup.error textarea,.inputGroup.error select{border-color:hsl(0, 65%, 50%);background-color:hsl(0, 65%, 97%);transition:inherit}.inputGroup.error .optional,.inputGroup.error .required,.inputGroup.error .counter,.inputGroup.error .material-symbols-rounded{color:hsl(0, 65%, 50%)}.inputGroup.error .material-symbols-rounded{font-size:1rem !important}.inputGroup.error .helper{display:none}.inputGroup.error .charUsed{font-weight:700}.optional{color:hsl(25, 4%, 40%);font-size:0.875rem !important}.required{color:hsl(25, 4%, 30%);font-size:0.8em;line-height:0.5rem;display:inline-flex;margin-left:-4px}.helper{display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.counter,.numberCounter{font-size:0.75rem;line-height:1rem;color:hsl(25, 4%, 30%);display:flex;flex-direction:row;flex-grow:1;gap:2px;justify-content:flex-start;align-items:center}.counter span,.numberCounter span{display:flex}.counter .condenseCounter,.numberCounter .condenseCounter{flex-grow:1;justify-content:flex-end}.fieldCol2{display:flex;flex-direction:row;gap:8px;flex:0 1 auto}',
  map: null
};
const Checkbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inputId;
  let { label = "Label" } = $$props;
  let { checked = false } = $$props;
  let { required = false } = $$props;
  let { placeholder = "" } = $$props;
  let { hideOptional = false } = $$props;
  let { toolTip = "" } = $$props;
  let { patternValidation = "" } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.hideOptional === void 0 && $$bindings.hideOptional && hideOptional !== void 0)
    $$bindings.hideOptional(hideOptional);
  if ($$props.toolTip === void 0 && $$bindings.toolTip && toolTip !== void 0)
    $$bindings.toolTip(toolTip);
  if ($$props.patternValidation === void 0 && $$bindings.patternValidation && patternValidation !== void 0)
    $$bindings.patternValidation(patternValidation);
  $$result.css.add(css);
  inputId = label.toLowerCase().replaceAll(" ", "");
  return `<div class="checkboxGroup"><input type="checkbox"${add_attribute("id", inputId, 0)} ${required ? "required" : ""}${add_attribute("placeholder", placeholder, 0)}${add_attribute("pattern", patternValidation, 0)}${add_attribute("checked", checked, 1)}>
	<label${add_attribute("for", inputId, 0)}>${escape(label)}
		${required ? `<sup class="required">﹡</sup>` : `${hideOptional ? `` : `<span class="optional">(optional)</span>`}`}
		${toolTip !== "" ? `<div class="tooltip" tabindex="0"><img${add_attribute("src", iconInfo, 0)} alt="fees tooltip" role="tooltip">
				<span class="tooltiptext">${escape(toolTip)}</span></div>` : ``}
			
		</label>
</div>`;
});
export {
  Checkbox as C
};
