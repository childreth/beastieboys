import { c as create_ssr_component, a as add_attribute, v as validate_component, e as escape } from "../../../chunks/index2.js";
import { B as Badge, s as sheild, g as goto, S as Stepper, C as Cart } from "../../../chunks/Cart2.js";
import { L as Loader, P as Processing } from "../../../chunks/Processing.js";
import { B as Button } from "../../../chunks/Button.js";
import { c as cart } from "../../../chunks/cart.js";
const creditcard = "/_app/immutable/assets/generic_cc.148ef982.svg";
const ccbrands = "/_app/immutable/assets/cc-brands.083824b3.svg";
const applepaylogo = "/_app/immutable/assets/applepay.fd85350b.svg";
const paypallogo$1 = "/_app/immutable/assets/paypal.e62435c7.svg";
const venmologo$1 = "/_app/immutable/assets/venmo.396fe883.svg";
const banklogo = "/_app/immutable/assets/bank.ef43c77c.svg";
const cryptologo = "/_app/immutable/assets/cyrpto.03426e50.svg";
const PaymentMethods_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20,300,0,0");:root{--theme-primary:hsl(150, 21%, 30%);--theme-primary-light:hsl(150 21% 50%);--theme-primary-lighter:hsl(150 21% 75%);--theme-primary-lightest:hsl(150 21% 90%);--theme-primary-dark:hsl(150, 21%, 20%);--bg-summary-bottom:hsl(25 8% 88%);--bg-summary-top:hsl(25 8% 96%);--baseSize:16px;font-size:var(--baseSize);scroll-behavior:smooth}.material-symbols-rounded{font-variation-settings:"FILL" 0, "wght" 300, "GRAD" 0, "opsz" 20}.material-symbols-rounded{font-size:1rem;color:hsl(25, 4%, 50%)}.SR_hide{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}@keyframes svelte-fry3pq-slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:0}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes svelte-fry3pq-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes svelte-fry3pq-fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}@keyframes svelte-fry3pq-slideOut{0%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}50%{filter:blur(0px)}100%{transform:scale(1) translateY(80px);filter:blur(0px);opacity:1}}@media screen and (max-width: 480px){@keyframes svelte-fry3pq-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes svelte-fry3pq-slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:1}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes svelte-fry3pq-fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}}@media screen and (max-width: 1020px){}@media only screen and (max-width: 768px){}fieldset.svelte-fry3pq.svelte-fry3pq.svelte-fry3pq{border:1px solid hsl(25, 4%, 92%);border-radius:12px;padding:0;margin:32px 4px 28px 4px;overflow:hidden}fieldset.svelte-fry3pq>label.svelte-fry3pq.svelte-fry3pq{display:flex}fieldset.svelte-fry3pq label.svelte-fry3pq.svelte-fry3pq{font-size:1rem;line-height:1.5rem;padding:16px 16px;transition:all 0.1s ease-in-out;border-bottom:1px solid hsl(25, 4%, 92%);cursor:pointer;color:hsl(25, 4%, 10%);display:flex;gap:8px;align-items:center;font-weight:400;transition:all 0.2s ease-in-out}fieldset.svelte-fry3pq label.svelte-fry3pq.svelte-fry3pq:hover{box-shadow:inset 0 0 12px 0 var(--bg-summary-top);cursor:pointer}fieldset.svelte-fry3pq label.svelte-fry3pq.svelte-fry3pq:has(input[type=radio]:checked){background-color:var(--bg-summary-top);color:hsl(25, 4%, 10%);font-weight:600}fieldset.svelte-fry3pq label.svelte-fry3pq.svelte-fry3pq:last-child{border:0;border-radius:0 0 12px 12px}fieldset.svelte-fry3pq label.svelte-fry3pq.svelte-fry3pq:first-child{border:0;border-radius:12px 12px 0 0}fieldset.svelte-fry3pq label span.svelte-fry3pq.svelte-fry3pq{padding:2px 0}fieldset.svelte-fry3pq input[type=radio].svelte-fry3pq.svelte-fry3pq{-webkit-appearance:none;appearance:none;background-color:#fff;flex-shrink:0;margin:0;font:inherit;display:flex;box-shadow:inset 0px -2px 4px 1px hsl(25, 4%, 80%), inset 0px 0px 0px 0px var(--theme-primary);color:currentColor;width:1em;height:1em;border:1px solid hsl(25, 4%, 50%);border-radius:50%;transition:all 0.4s cubic-bezier(0.25, -0.01, 0.03, 1.2)}fieldset.svelte-fry3pq input[type=radio].svelte-fry3pq.svelte-fry3pq:checked{content:"";border-color:hsl(25, 4%, 20%);box-shadow:inset 0px 1px 2px 0px var(--theme-primary-dark), inset 0px 0px 0px 4px var(--theme-primary), 0px 0px 0px 1px white, 0px 0px 8px 0px hsl(25, 4%, 60%)}fieldset.svelte-fry3pq input[type=radio].svelte-fry3pq:checked~span.ccbrands.svelte-fry3pq{opacity:1}fieldset.svelte-fry3pq span.ccbrands.svelte-fry3pq.svelte-fry3pq{opacity:0.6}fieldset.svelte-fry3pq .info.svelte-fry3pq.svelte-fry3pq{display:flex;flex-grow:1;justify-content:flex-end;transition:all 0.25s ease-in-out}fieldset.svelte-fry3pq .brandicon.svelte-fry3pq.svelte-fry3pq{width:36px;height:28px;display:flex;padding:0;align-items:center;justify-content:center}',
  map: null
};
const PaymentMethods = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { paymenttype = "creditcard" } = $$props;
  if ($$props.paymenttype === void 0 && $$bindings.paymenttype && paymenttype !== void 0)
    $$bindings.paymenttype(paymenttype);
  $$result.css.add(css$3);
  return `<fieldset class="svelte-fry3pq"><legend class="hideIt"><h2>Choose a payment method</h2></legend>

	<label for="creditcard" class="svelte-fry3pq"><input type="radio" id="creditcard" name="payment" value="creditcard" checked class="svelte-fry3pq"${"creditcard" === paymenttype ? add_attribute("checked", true, 1) : ""}>
		<span class="brandicon svelte-fry3pq"><img${add_attribute("src", creditcard, 0)} alt="credit card" width="32px" height="20px" aria-hidden="true"></span>
		<span class="svelte-fry3pq">Credit Card</span>
		<span class="info ccbrands svelte-fry3pq"><img${add_attribute("src", ccbrands, 0)} alt="Credit card brands" aria-hidden="true"></span></label>

	<label for="applepay" class="svelte-fry3pq"><input type="radio" id="applepay" name="payment" value="applepay" class="svelte-fry3pq"${"applepay" === paymenttype ? add_attribute("checked", true, 1) : ""}>
		<span class="brandicon svelte-fry3pq"><img${add_attribute("src", applepaylogo, 0)} alt="Apple Pay" aria-hidden="true"></span>
		<span class="svelte-fry3pq">Apple Pay</span></label>

	<label for="paypal" class="svelte-fry3pq"><input type="radio" id="paypal" name="payment" value="paypal" class="svelte-fry3pq"${"paypal" === paymenttype ? add_attribute("checked", true, 1) : ""}>
		<img${add_attribute("src", paypallogo$1, 0)} alt="Paypal" aria-hidden="true">
		<span class="svelte-fry3pq">Paypal</span></label>
    <label for="venmo" class="svelte-fry3pq"><input type="radio" id="venmo" name="payment" value="venmo" class="svelte-fry3pq"${"venmo" === paymenttype ? add_attribute("checked", true, 1) : ""}>
		<img${add_attribute("src", venmologo$1, 0)} alt="Paypal" aria-hidden="true">
		<span class="svelte-fry3pq">Venmo</span></label>

	<label for="bank" class="svelte-fry3pq"><input type="radio" id="bank" name="payment" value="bank" class="svelte-fry3pq"${"bank" === paymenttype ? add_attribute("checked", true, 1) : ""}>
		<img${add_attribute("src", banklogo, 0)} alt="Bank Transfer" aria-hidden="true">
		<span class="svelte-fry3pq">Bank Transfer</span>
        <span class="info svelte-fry3pq">${validate_component(Badge, "Badge").$$render($$result, { label: "Low fees" }, {}, {})}</span></label>
	<label for="crypto" class="svelte-fry3pq"><input type="radio" id="crypto" name="payment" value="crypto" class="svelte-fry3pq"${"crypto" === paymenttype ? add_attribute("checked", true, 1) : ""}>
		<img${add_attribute("src", cryptologo, 0)} alt="Cryptocurrency" aria-hidden="true">
		<span class="svelte-fry3pq">Cryptocurrency</span></label>
	
</fieldset>`;
});
const paypallogo = "/_app/immutable/assets/paypal-lg.637d8ea3.svg";
const venmologo = "/_app/immutable/assets/venmo-lg.44615c25.svg";
const PaymentFooter_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20,300,0,0");:root{--theme-primary:hsl(150, 21%, 30%);--theme-primary-light:hsl(150 21% 50%);--theme-primary-lighter:hsl(150 21% 75%);--theme-primary-lightest:hsl(150 21% 90%);--theme-primary-dark:hsl(150, 21%, 20%);--bg-summary-bottom:hsl(25 8% 88%);--bg-summary-top:hsl(25 8% 96%);--baseSize:16px;font-size:var(--baseSize);scroll-behavior:smooth}.material-symbols-rounded{font-variation-settings:"FILL" 0, "wght" 300, "GRAD" 0, "opsz" 20}.material-symbols-rounded{font-size:1rem;color:hsl(25, 4%, 50%)}.SR_hide{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}@keyframes svelte-1ktm2qe-slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:0}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes svelte-1ktm2qe-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes svelte-1ktm2qe-fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}@keyframes svelte-1ktm2qe-slideOut{0%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}50%{filter:blur(0px)}100%{transform:scale(1) translateY(80px);filter:blur(0px);opacity:1}}@media screen and (max-width: 480px){@keyframes svelte-1ktm2qe-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes svelte-1ktm2qe-slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:1}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes svelte-1ktm2qe-fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}}footer.svelte-1ktm2qe.svelte-1ktm2qe{background:#fff;text-align:center;display:grid;height:auto;min-height:auto}footer.svelte-1ktm2qe>div.svelte-1ktm2qe{grid-column-start:1;grid-column-end:1;grid-row-start:1;grid-row-end:1;width:100%}footer.svelte-1ktm2qe a.svelte-1ktm2qe,footer.svelte-1ktm2qe button.svelte-1ktm2qe{font-size:1.125rem;line-height:1.5rem;font-weight:620;letter-spacing:0.3px;color:#fff;text-decoration:none;background-color:hsl(25, 4%, 20%);border-radius:56px;border:0;padding:16px 8px;display:flex;flex-grow:1;width:100%;align-self:stretch;gap:4px;align-items:center;justify-content:center;box-shadow:0px 2px 2px rgba(0, 0, 0, 0.12);transition:all 0.25s cubic-bezier(0.77, 0, 0.25, 1)}footer.svelte-1ktm2qe a.svelte-1ktm2qe:hover,footer.svelte-1ktm2qe button.svelte-1ktm2qe:hover{cursor:pointer;transform:translateY(-1px) scale(1.02);filter:brightness(0.96)}footer.svelte-1ktm2qe a.svelte-1ktm2qe:active,footer.svelte-1ktm2qe button.svelte-1ktm2qe:active{cursor:pointer;background-color:hsl(25, 4%, 20%);transform:translateY(0px) scale(0.98);filter:brightness(1)}footer.svelte-1ktm2qe .helper.svelte-1ktm2qe{font-size:0.875rem;line-height:1.25rem;padding:8px;color:hsl(25, 4%, 30%);justify-content:center}footer.svelte-1ktm2qe .secure.svelte-1ktm2qe{font-size:0.75rem;line-height:1rem;color:hsl(25, 4%, 30%);line-height:1.5rem;display:flex;justify-content:center;gap:4px;padding:12px 0}footer.svelte-1ktm2qe a.paypal.svelte-1ktm2qe{background:#ffc439;color:hsl(25, 4%, 20%)}footer.svelte-1ktm2qe a.paypal .svelte-1ktm2qe:hover{background-color:#ffc439}footer.svelte-1ktm2qe a.venmo.svelte-1ktm2qe{background-color:#3d95ce}footer.svelte-1ktm2qe a.venmo .svelte-1ktm2qe:hover{background-color:#3d95ce}footer.svelte-1ktm2qe a.venmo img.svelte-1ktm2qe{height:18px}footer.svelte-1ktm2qe button.crypto.svelte-1ktm2qe{background-image:linear-gradient(to right, #4776e6 0%, #8e54e9 51%, #4776e6 100%);color:white;background-size:200% auto}footer.svelte-1ktm2qe a.applepay span.svelte-1ktm2qe{font-size:20px;margin-top:-2px;line-height:20px;font-weight:600;padding-left:2px}',
  map: null
};
const PaymentFooter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { helper = "Tim Cook will personally take your money" } = $$props;
  let { ctatext = "Continue" } = $$props;
  let { nextStep = () => {
  } } = $$props;
  if ($$props.helper === void 0 && $$bindings.helper && helper !== void 0)
    $$bindings.helper(helper);
  if ($$props.ctatext === void 0 && $$bindings.ctatext && ctatext !== void 0)
    $$bindings.ctatext(ctatext);
  if ($$props.nextStep === void 0 && $$bindings.nextStep && nextStep !== void 0)
    $$bindings.nextStep(nextStep);
  $$result.css.add(css$2);
  {
    {
      if (ctatext == "paypal") {
        helper = "Finish your donation with Paypal";
      } else if (ctatext == "venmo") {
        helper = "You’ll be shown Venmo QR code next";
      } else if (ctatext == "applepay") {
        helper = "Complete your donation with Apple Pay";
      } else if (ctatext == "bank") {
        helper = "Next you'll add you bank account details";
        ctatext = "Bank transfer";
      } else if (ctatext == "crypto") {
        helper = "This method isn’t available currently";
        ctatext = "crypto";
      } else if (ctatext == "creditcard") {
        helper = "Next you’ll enter your credit card details";
        ctatext = "credit card";
      } else {
        helper = "Next you’ll enter your credit card details";
        ctatext = "credit card";
      }
    }
  }
  return `<footer class="svelte-1ktm2qe">${ctatext == "venmo" ? `<div class="svelte-1ktm2qe"><span class="helper svelte-1ktm2qe">${escape(helper)}</span>
			<a href="/information" class="venmo svelte-1ktm2qe">Donate with <img${add_attribute("src", venmologo, 0)} alt="Venmo" class="svelte-1ktm2qe"></a></div>` : `${ctatext == "paypal" ? `<div class="svelte-1ktm2qe"><span class="helper svelte-1ktm2qe">${escape(helper)}</span>
			<a href="/" class="paypal svelte-1ktm2qe">Donate with <img${add_attribute("src", paypallogo, 0)} alt="PayPal" class="svelte-1ktm2qe"></a></div>` : `${ctatext == "applepay" ? `<div class="svelte-1ktm2qe"><span class="helper svelte-1ktm2qe">${escape(helper)}</span>
			<a href="/" class="applepay svelte-1ktm2qe">Donate with <span class="svelte-1ktm2qe">Pay</span></a></div>` : `${ctatext == "crypto" ? `<div class="svelte-1ktm2qe"><span class="helper svelte-1ktm2qe">${escape(helper)}</span>
			<button href="/information" class="crypto svelte-1ktm2qe">Donate with <img${add_attribute("src", cryptologo, 0)} alt="bitcoin" class="svelte-1ktm2qe"></button></div>` : `${ctatext == "credit card" ? `<div class="svelte-1ktm2qe"><span class="helper svelte-1ktm2qe">${escape(helper)}</span>
			<button class="disabled svelte-1ktm2qe">Continue to card details</button></div>` : `<div class="svelte-1ktm2qe"><span class="helper svelte-1ktm2qe">${escape(helper)}</span>
			<button class="disabled svelte-1ktm2qe">Continue with ${escape(ctatext)}</button></div>`}`}`}`}`}

	<span class="secure svelte-1ktm2qe"><img${add_attribute("src", sheild, 0)} width="24px" height="24px" alt="secure transactions" class="svelte-1ktm2qe">Transactions are
		secure and encrypted</span>
</footer>`;
});
const ApplePay_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20,300,0,0");:root{--theme-primary:hsl(150, 21%, 30%);--theme-primary-light:hsl(150 21% 50%);--theme-primary-lighter:hsl(150 21% 75%);--theme-primary-lightest:hsl(150 21% 90%);--theme-primary-dark:hsl(150, 21%, 20%);--bg-summary-bottom:hsl(25 8% 88%);--bg-summary-top:hsl(25 8% 96%);--baseSize:16px;font-size:var(--baseSize);scroll-behavior:smooth}.material-symbols-rounded{font-variation-settings:"FILL" 0, "wght" 300, "GRAD" 0, "opsz" 20}.material-symbols-rounded{font-size:1rem;color:hsl(25, 4%, 50%)}.SR_hide{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}@keyframes svelte-1cr07t0-slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:0}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes svelte-1cr07t0-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes svelte-1cr07t0-fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}@keyframes svelte-1cr07t0-slideOut{0%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}50%{filter:blur(0px)}100%{transform:scale(1) translateY(80px);filter:blur(0px);opacity:1}}@media screen and (max-width: 480px){@keyframes svelte-1cr07t0-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes svelte-1cr07t0-slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:1}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes svelte-1cr07t0-fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}}dialog.apple.svelte-1cr07t0.svelte-1cr07t0{border:0;position:fixed;padding:0;margin:0;top:0;left:0;z-index:100000;width:100vw;height:100dvh;background:transparent}dialog.apple.svelte-1cr07t0 div.svelte-1cr07t0{width:100%;height:100%;display:flex;justify-content:center;flex-direction:column;align-items:center;text-align:center;box-sizing:border-box}dialog.apple.svelte-1cr07t0 .fakeScreen.svelte-1cr07t0{border:1px solid gray;background-color:white;border-radius:12px;padding:64px}dialog.apple.svelte-1cr07t0 .fakeScreen h2.svelte-1cr07t0{margin-top:0}dialog.apple.svelte-1cr07t0 .scrim.svelte-1cr07t0{background-color:rgba(255, 255, 255, 0.7);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);animation:svelte-1cr07t0-fadeIn 0.5s cubic-bezier(0.03, 0.15, 0.04, 1.1) forwards}dialog.apple.svelte-1cr07t0 section.svelte-1cr07t0{max-width:420px;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:8px 24px}dialog.apple.svelte-1cr07t0 section#appleUI.svelte-1cr07t0,dialog.apple.svelte-1cr07t0 section#theLoader.svelte-1cr07t0{transform:translate(-50%, -50%);position:absolute}dialog.apple.svelte-1cr07t0 section#theLoader.svelte-1cr07t0{max-width:420px;opacity:0;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:8px 48px}dialog.apple.svelte-1cr07t0 .showUI.svelte-1cr07t0{animation:svelte-1cr07t0-showme 0.5s cubic-bezier(0.03, 0.15, 0.04, 1.1) forwards}dialog.apple.svelte-1cr07t0 h2.svelte-1cr07t0{margin:24px 0 16px 0}dialog.apple.svelte-1cr07t0 p.svelte-1cr07t0{margin:0 0 4px 0}.fadeMe{animation:svelte-1cr07t0-fadeOut 0.5s cubic-bezier(0.03, 0.15, 0.04, 1.1) forwards;animation-fill-mode:forwards}.zoomOutMe{animation:svelte-1cr07t0-zoomOut 0.5s cubic-bezier(0.03, 0.15, 0.04, 1.1) forwards;animation-fill-mode:forwards}.showProcessing{animation:svelte-1cr07t0-showme 0.5s cubic-bezier(0.03, 0.15, 0.04, 1.1) forwards;animation-delay:400ms}@keyframes svelte-1cr07t0-showme{0%{transform:scale(0.7);filter:blur(4px);opacity:0}100%{transform:scale(1);filter:blur(0px);opacity:1}}@keyframes svelte-1cr07t0-zoomOut{0%{transform:scale(1);opacity:1}100%{transform:scale(0.7);opacity:0}}@keyframes svelte-1cr07t0-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(255, 255, 255, 0)}100%{backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);background:rgba(255, 255, 255, 0.7)}}@keyframes svelte-1cr07t0-fadeOut{0%{opacity:1;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);background:rgba(255, 255, 255, 0.7)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(255, 255, 255, 0)}}',
  map: null
};
const ApplePay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { paymentMethod = "paypal" } = $$props;
  if ($$props.paymentMethod === void 0 && $$bindings.paymentMethod && paymentMethod !== void 0)
    $$bindings.paymentMethod(paymentMethod);
  $$result.css.add(css$1);
  return `<dialog id="applepayui" class="apple svelte-1cr07t0"><div id="scrim" class="scrim svelte-1cr07t0"><section id="appleUI" class="showUI svelte-1cr07t0"><span class="fakeScreen svelte-1cr07t0"><h2 class="svelte-1cr07t0">Fake ${escape(paymentMethod)} screen</h2>
					<p style="padding-bottom:12px;" class="svelte-1cr07t0">Imagine you are paying with ${escape(paymentMethod)} and going though their screens to complete  a donation payment. You can continue below.</p>
					${validate_component(Button, "Button").$$render(
    $$result,
    {
      label: "Continue finishing test",
      class: "primary large"
    },
    {},
    {}
  )}</span>
				</section>
		<section id="theLoader" class="svelte-1cr07t0">${validate_component(Loader, "Loader").$$render($$result, {}, {}, {})}
			<h2 class="svelte-1cr07t0">Processing your payment (fake)</h2>
			<p class="svelte-1cr07t0"><strong>Please do not leave or refresh the page.</strong></p>
			<p class="svelte-1cr07t0">Once your donation is complete, you’ll be taken to a summary and email receipt.</p></section></div>
</dialog>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20,300,0,0");:root{--theme-primary:hsl(150, 21%, 30%);--theme-primary-light:hsl(150 21% 50%);--theme-primary-lighter:hsl(150 21% 75%);--theme-primary-lightest:hsl(150 21% 90%);--theme-primary-dark:hsl(150, 21%, 20%);--bg-summary-bottom:hsl(25 8% 88%);--bg-summary-top:hsl(25 8% 96%);--baseSize:16px;font-size:var(--baseSize);scroll-behavior:smooth}.material-symbols-rounded{font-variation-settings:"FILL" 0, "wght" 300, "GRAD" 0, "opsz" 20}.material-symbols-rounded{font-size:1rem;color:hsl(25, 4%, 50%)}.SR_hide{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}@keyframes svelte-4l3syq-slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:0}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes svelte-4l3syq-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes svelte-4l3syq-fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}@keyframes svelte-4l3syq-slideOut{0%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}50%{filter:blur(0px)}100%{transform:scale(1) translateY(80px);filter:blur(0px);opacity:1}}@media screen and (max-width: 480px){@keyframes svelte-4l3syq-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes svelte-4l3syq-slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:1}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes svelte-4l3syq-fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}}main.checkout.svelte-4l3syq.svelte-4l3syq.svelte-4l3syq{display:flex;flex-grow:1;flex-direction:row;height:calc(100% - 61px);overflow:auto;align-items:stretch}main.checkout.svelte-4l3syq .summary.svelte-4l3syq.svelte-4l3syq,main.checkout.svelte-4l3syq form.svelte-4l3syq.svelte-4l3syq{flex:1 1 auto;display:flex;padding:64px 56px}main.checkout.svelte-4l3syq .formcontent.svelte-4l3syq.svelte-4l3syq{width:400px}main.checkout.svelte-4l3syq form.svelte-4l3syq.svelte-4l3syq{justify-content:flex-end}main.checkout.svelte-4l3syq form.svelte-4l3syq>section.svelte-4l3syq{flex-direction:column}main.checkout.svelte-4l3syq div.summary.svelte-4l3syq.svelte-4l3syq{background:linear-gradient(0deg, var(--bg-summary-bottom) 0%, var(--bg-summary-top) 100%)}main.checkout.svelte-4l3syq section.svelte-4l3syq>header.svelte-4l3syq{padding:0 2px}main.checkout.svelte-4l3syq h1.svelte-4l3syq.svelte-4l3syq{font-size:1.75rem;margin:0 0 8px 0;color:hsl(25, 4%, 10%)}@media screen and (max-width: 1020px){main.checkout.svelte-4l3syq>div.svelte-4l3syq.svelte-4l3syq{padding:48px 32px}main.checkout.svelte-4l3syq>form.svelte-4l3syq>section.svelte-4l3syq{width:100%}}@media only screen and (max-width: 768px){main.checkout.svelte-4l3syq.svelte-4l3syq.svelte-4l3syq{flex-direction:column-reverse}main.checkout.svelte-4l3syq>form.svelte-4l3syq.svelte-4l3syq{padding:32px 20px 16px;flex:1 1 0}main.checkout.svelte-4l3syq>div.summary.svelte-4l3syq.svelte-4l3syq{padding:0;flex:0 1 0}main.checkout.svelte-4l3syq>form.svelte-4l3syq>section.svelte-4l3syq{width:auto;flex:1 0 0}}',
  map: null
};
function thirdPartyProcessor(evt) {
  const dialog = document.getElementById("applepayui");
  console.log("processDonation", dialog);
  dialog.show();
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let gift;
  let paymentChoosen;
  cart.subscribe((items) => {
    gift = items;
  });
  let donationAmt = gift.myamount;
  let donationFrequency = gift.frequency;
  let dcfVal = gift.dcfAmount;
  let dcfChecked = gift.dcfChecked;
  let totalAmount = gift.totalAmount;
  paymentChoosen = "creditcard";
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
  function nextStep() {
    console.log("nextstep", paymentChoosen);
    updateGift();
    if (paymentChoosen == "creditcard") {
      goto(`/${paymentChoosen}`);
    } else {
      thirdPartyProcessor();
    }
  }
  const breadcrumbs = ["previous", "previous", "previous", "current", "next"];
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `





${$$result.head += `<!-- HEAD_svelte-9v8et4_START -->${$$result.title = `<title>Santa Pantry - Payment method</title>`, ""}<!-- HEAD_svelte-9v8et4_END -->`, ""}
${validate_component(ApplePay, "ApplePay").$$render($$result, { paymentMethod: paymentChoosen }, {}, {})}
${validate_component(Processing, "Processing").$$render($$result, {}, {}, {})}
<main class="checkout svelte-4l3syq"><form class="svelte-4l3syq"><section class="formcontent svelte-4l3syq"><header class="svelte-4l3syq"><h1 id="pagehead" tabindex="0" class="svelte-4l3syq">Payments Method</h1>
				${validate_component(Stepper, "Stepper").$$render($$result, { hasCC: "none", state: breadcrumbs }, {}, {})}</header>
			${validate_component(PaymentMethods, "PaymentMethods").$$render(
      $$result,
      { paymenttype: paymentChoosen },
      {
        paymenttype: ($$value) => {
          paymentChoosen = $$value;
          $$settled = false;
        }
      },
      {}
    )}
			${validate_component(PaymentFooter, "PaymentFooter").$$render(
      $$result,
      {
        ctatext: paymentChoosen,
        nextStep: () => nextStep()
      },
      {},
      {}
    )}</section></form>
	<div class="summary svelte-4l3syq">${validate_component(Cart, "CartSummary").$$render(
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
