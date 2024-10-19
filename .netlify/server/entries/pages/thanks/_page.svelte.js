import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
/* empty css                      */import { B as Button } from "../../../chunks/Button.js";
import { c as cart } from "../../../chunks/cart.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20,300,0,0");:root{--theme-primary:hsl(150, 21%, 30%);--theme-primary-light:hsl(150 21% 50%);--theme-primary-lighter:hsl(150 21% 75%);--theme-primary-lightest:hsl(150 21% 90%);--theme-primary-dark:hsl(150, 21%, 20%);--bg-summary-bottom:hsl(25 8% 88%);--bg-summary-top:hsl(25 8% 96%);--baseSize:16px;font-size:var(--baseSize);scroll-behavior:smooth}.material-symbols-rounded{font-variation-settings:"FILL" 0, "wght" 300, "GRAD" 0, "opsz" 20}.material-symbols-rounded{font-size:1rem;color:hsl(25, 4%, 50%)}.SR_hide{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}@keyframes svelte-i9img7-slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:0}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes svelte-i9img7-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes svelte-i9img7-fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}@keyframes svelte-i9img7-slideOut{0%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}50%{filter:blur(0px)}100%{transform:scale(1) translateY(80px);filter:blur(0px);opacity:1}}@media screen and (max-width: 480px){@keyframes svelte-i9img7-fadeIn{0%{backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}50%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)}100%{backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0, 0, 0, 0.6)}}@keyframes svelte-i9img7-slideIn{0%{transform:scale(1) translateY(80px);filter:blur(4px);opacity:1}50%{filter:blur(0px);opacity:1}100%{transform:scale(1) translateY(0px);filter:blur(0px);opacity:1}}@keyframes svelte-i9img7-fadeOut{0%{opacity:1;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0.6)}100%{opacity:0;backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);background:rgba(0, 0, 0, 0)}}}#social.svelte-i9img7,#info.svelte-i9img7{min-height:360px;display:flex;align-items:center;justify-content:center;flex-direction:column}#info.svelte-i9img7{background:hsl(25, 8%, 92%)}@media only screen and (min-width: 1020px){}@media only screen and (min-width: 1440px){}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  cart.subscribe((items) => {
  });
  $$result.css.add(css);
  return `<main><section id="thankyou"><div><span class="bigemoji">👏</span>
			<h1>Thank you <span style="white-space: nowrap;">for giving!
					<svg width="326" height="16" viewBox="0 0 326 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="underline"><path d="M313.001 2.9999C315.001 1.99953 317.167 4.16667 318 5.5C320 3.99953 325.001 4.00037 324.001 8.50037C323.201 12.1004 317.667 12.667 315.001 12.5004C312 9.49995 309.154 4.9238 313.001 2.9999Z" fill="#F4775E"></path><path d="M1.59517 9.29789C60.2071 7.29519 202.437 4.26672 302.459 8.17438" stroke="var(--theme-primary)" stroke-width="3" stroke-linecap="round"></path></svg></span></h1>
			<p>Thank you so much for your gift this will help our community you&#39;ll receive an email receipt as well details below. Your efforts to provide food and resources to those in need are truly appreciated..
			</p></div></section>
    <section id="social" class="svelte-i9img7"><h2>Social links area</h2>
		<p>This is a prototype area where you would see a list of links to share your donation.</p></section>
    <section id="info" class="svelte-i9img7"><h2>Receipt and info area</h2>
		<p>This is a prototype area where you would see a donation receipt and login to manage your account.</p>
		${validate_component(Button, "Button").$$render($$result, { label: "Manage Account", class: "dark" }, {}, {})}</section></main>

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
