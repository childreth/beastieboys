import { c as create_ssr_component, s as setContext, v as validate_component, m as missing_component } from "./index2.js";
let base = "";
let assets = base;
const initial = { base, assets };
function reset() {
  base = initial.base;
  assets = initial.assets;
}
function set_assets(path) {
  assets = initial.assets = path;
}
let public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function afterUpdate() {
}
function set_building() {
}
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0)
    $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      stores.page.set(page);
    }
    $$rendered = `


${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}

${``}`;
  } while (!$$settled);
  return $$rendered;
});
const options = {
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="' + assets2 + `/favicon.png" />
		<meta name="viewport" content="width=device-width" />
		<title>Checkout prototype</title>
		<script>
			(function (m, a, z, e) {
			  var s, t;
			  try {
				t = m.sessionStorage.getItem('maze-us');
			  } catch (err) {}
			
			  if (!t) {
				t = new Date().getTime();
				try {
				  m.sessionStorage.setItem('maze-us', t);
				} catch (err) {}
			  }
			
			  s = a.createElement('script');
			  s.src = z + '?t=' + t + '&apiKey=' + e;
			  s.async = true;
			  a.getElementsByTagName('head')[0].appendChild(s);
			  m.mazeUniversalSnippetApiKey = e;
			})(window, document, 'https://snippet.maze.co/maze-universal-loader.js', '2fdec492-e2a5-4031-9780-a8b88d5bac96');
			<\/script>
		` + head + '\n	</head>\n	<body data-sveltekit-preload-data="hover">\n		<div style="display: contents">' + body + "</div>\n	</body>\n</html>\n\n    <script>\n    ;(function (win) {\n      win.egProps = {\n        campaigns: [\n          {\n            campaignId: '447313',\n	    customDomain: 'events.classy.org',\n            donation: {\n              inline: {\n                urlParams: { },\n                elementSelector: 'SELECTOR FROM YOUR WEBSITE'\n              }\n            }\n          }\n        ]\n      }\n  \n      win.document.body.appendChild(makeEGScript())\n  \n      /**\n       * Create the embed script\n       */\n      function makeEGScript() {\n        var egScript = win.document.createElement('script')\n        egScript.setAttribute('type', 'text/javascript')\n        egScript.setAttribute('async', 'true')\n        egScript.setAttribute('src', 'https://sdk.classy.org/embedded-giving.js')\n  \n        return egScript\n      }\n  \n      /**\n       * Read URL Params from your website. This could potentially\n       * be included in the embed snippet\n       */\n      function readURLParams() {\n        const searchParams = new URLSearchParams(location.search)\n  \n        const validUrlParams = ['c_src', 'c_src2']\n  \n        return validUrlParams.reduce(function toURLParamsMap(urlParamsSoFar, validKey) {\n          const value = searchParams.get(validKey)\n          return value === null ? urlParamsSoFar : { ...urlParamsSoFar, [validKey]: value }\n        }, {})\n      }\n    })(window)\n    <\/script>\n    \n\n\n    <script>\n    ;(function (win) {\n      win.egProps = {\n        campaigns: [\n          {\n            campaignId: '4473rr13',\n	    customDomain: 'events.classy.org',\n            donation: {\n              inline: {\n                urlParams: { },\n                elementSelector: 'SELECTOR FROM YOUR WEBSITE'\n              }\n            }\n          }\n        ]\n      }\n  \n      win.document.body.appendChild(makeEGScript())\n  \n      /**\n       * Create the embed script\n       */\n      function makeEGScript() {\n        var egScript = win.document.createElement('script')\n        egScript.setAttribute('type', 'text/javascript')\n        egScript.setAttribute('async', 'true')\n        egScript.setAttribute('src', 'https://sdk.classy.org/embedded-giving.js')\n  \n        return egScript\n      }\n  \n      /**\n       * Read URL Params from your website. This could potentially\n       * be included in the embed snippet\n       */\n      function readURLParams() {\n        const searchParams = new URLSearchParams(location.search)\n  \n        const validUrlParams = ['c_src', 'c_src2']\n  \n        return validUrlParams.reduce(function toURLParamsMap(urlParamsSoFar, validKey) {\n          const value = searchParams.get(validKey)\n          return value === null ? urlParamsSoFar : { ...urlParamsSoFar, [validKey]: value }\n        }, {})\n      }\n    })(window)\n    <\/script>\n    ",
    error: ({ status, message }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
					Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid #ccc;
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "12t5t90"
};
function get_hooks() {
  return {};
}
export {
  assets as a,
  base as b,
  set_assets as c,
  set_building as d,
  set_private_env as e,
  get_hooks as g,
  options as o,
  public_env as p,
  reset as r,
  set_public_env as s
};
