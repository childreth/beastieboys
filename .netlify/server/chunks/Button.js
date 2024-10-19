import { c as create_ssr_component, h as compute_rest_props, i as spread, j as escape_object, e as escape } from "./index2.js";
const Button_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20,300,0,0");:root{--theme-primary:hsl(150, 21%, 30%);--theme-primary-light:hsl(150 21% 50%);--theme-primary-lighter:hsl(150 21% 75%);--theme-primary-lightest:hsl(150 21% 90%);--theme-primary-dark:hsl(150, 21%, 20%);--bg-summary-bottom:hsl(25 8% 88%);--bg-summary-top:hsl(25 8% 96%);--baseSize:16px;font-size:var(--baseSize);scroll-behavior:smooth}.material-symbols-rounded{font-variation-settings:"FILL" 0, "wght" 300, "GRAD" 0, "opsz" 20}.material-symbols-rounded{font-size:1rem;color:hsl(25, 4%, 50%)}.SR_hide{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}@keyframes svelte-2dbjkt-slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:0}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes svelte-2dbjkt-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes svelte-2dbjkt-fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}@keyframes svelte-2dbjkt-slideOut{0%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}50%{filter:blur(0px)}100%{transform:scale(1) translateY(80px);filter:blur(0px);opacity:1}}@media screen and (max-width: 480px){@keyframes svelte-2dbjkt-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes svelte-2dbjkt-slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:1}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes svelte-2dbjkt-fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}}button.svelte-2dbjkt{border-radius:8px;padding:4px 16px;font-size:0.875rem;line-height:1.25rem;font-weight:400;border:none;display:inline-flex;gap:2px;align-items:center;cursor:pointer}.text.svelte-2dbjkt{background:transparent;text-decoration:underline;color:var(--theme-primary);padding:2px}.primary.svelte-2dbjkt{background:var(--theme-primary);color:white}.large.svelte-2dbjkt{font-size:1.125rem;border-radius:8px;padding:12px 20px}.beforeIcon.svelte-2dbjkt,.afterIcon.svelte-2dbjkt{display:none}.neutral{background:hsl(25, 4%, 95%);color:hsl(25, 4%, 30%)}.dark{background:#fff;color:hsl(25, 4%, 20%)}button.ghost{background:transparent;font-weight:600;font-size:1rem;min-height:44px;box-sizing:border-box;color:var(--theme-primary);border-radius:4px;transition:all 0.3s ease-in-out}button.ghost:hover{color:var(--theme-primary-dark)}',
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["label", "type", "size", "showIcon"]);
  let { label = "default" } = $$props;
  let { type = "neutral" } = $$props;
  let { size = "default" } = $$props;
  let { showIcon = false } = $$props;
  let buttonProps = { class: [$$restProps.class] };
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.showIcon === void 0 && $$bindings.showIcon && showIcon !== void 0)
    $$bindings.showIcon(showIcon);
  $$result.css.add(css);
  return `<button${spread([escape_object(buttonProps)], { classes: "svelte-2dbjkt" })}><span class="beforeIcon material-symbols-rounded svelte-2dbjkt">event </span>
	${escape(label)}
	${showIcon ? `<span class="afterIcon material-symbols-rounded svelte-2dbjkt">event </span>` : ``}
</button>`;
});
export {
  Button as B
};
