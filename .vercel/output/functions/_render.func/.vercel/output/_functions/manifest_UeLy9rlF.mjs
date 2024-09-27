import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_D3pyEqXt.mjs';
import 'es-module-lexer';
import { h as decodeKey } from './chunks/astro/server_DXWOZq9s.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/Usuarios/emendez/Desktop/Web%20Tickets/ticketTS-ASTRO/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":":root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% )}html{font-family:system-ui,sans-serif;background:#dfe1e7;background-size:224px}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}\n.columns[data-astro-cid-2zp6q64z]{display:flex;justify-content:space-between;gap:1rem}.column[data-astro-cid-2zp6q64z]{flex:1;min-height:300px;border:1px solid #ccc;padding:1rem;border-radius:8px}.important[data-astro-cid-2zp6q64z]{background-color:#fee}.medium[data-astro-cid-2zp6q64z]{background-color:#fff5ee}.mild[data-astro-cid-2zp6q64z]{background-color:#eef6ff}#0,#9{margin-top:1rem}#delete-done-tickets[data-astro-cid-2zp6q64z]{margin-top:1rem;background-color:#f44336;color:#fff;border:none;padding:.5rem 1rem;cursor:pointer;border-radius:4px}h2[data-astro-cid-2zp6q64z]{margin-top:0}.ticket[data-astro-cid-2zp6q64z]{margin-bottom:10px}\n"}],"routeData":{"route":"/admin","isIndex":false,"type":"page","pattern":"^\\/admin\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin.astro","pathname":"/admin","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/delete-done-tickets","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/delete-done-tickets\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"delete-done-tickets","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/delete-done-tickets.ts","pathname":"/api/delete-done-tickets","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/submit-ticket","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/submit-ticket\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"submit-ticket","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/submit-ticket.ts","pathname":"/api/submit-ticket","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/update-ticket-status","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/update-ticket-status\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"update-ticket-status","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/update-ticket-status.ts","pathname":"/api/update-ticket-status","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const t=document.getElementById(\"ticketForm\"),r=document.getElementById(\"message\");t&&r?t.addEventListener(\"submit\",async s=>{s.preventDefault();const n=new FormData(t),a=Object.fromEntries(n);try{const e=await fetch(\"/api/submit-ticket\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(a)});if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const o=await e.json();r.textContent=o.message,o.success&&t.reset()}catch(e){console.error(\"Error:\",e),r.textContent=\"An error occurred. Please try again.\"}}):console.error(\"Form or message div not found\");\n"}],"styles":[{"type":"inline","content":":root{--accent: 136, 58, 234;--accent-light: 224, 204, 250;--accent-dark: 49, 10, 101;--accent-gradient: linear-gradient( 45deg, rgb(var(--accent)), rgb(var(--accent-light)) 30%, white 60% )}html{font-family:system-ui,sans-serif;background:#dfe1e7;background-size:224px}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}\nform[data-astro-cid-j7pv25f6]{display:flex;flex-direction:column;gap:1rem;max-width:500px;margin:0 auto}label[data-astro-cid-j7pv25f6]{font-weight:700}input[data-astro-cid-j7pv25f6],select[data-astro-cid-j7pv25f6],textarea[data-astro-cid-j7pv25f6]{width:100%;padding:.5rem}button[data-astro-cid-j7pv25f6]{padding:.5rem 1rem;background-color:#4caf50;color:#fff;border:none;cursor:pointer}#message[data-astro-cid-j7pv25f6]{margin-top:1rem;font-weight:700}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/Usuarios/emendez/Desktop/Web Tickets/ticketTS-ASTRO/src/pages/admin.astro",{"propagation":"none","containsHead":true}],["D:/Usuarios/emendez/Desktop/Web Tickets/ticketTS-ASTRO/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/api/delete-done-tickets@_@ts":"pages/api/delete-done-tickets.astro.mjs","\u0000@astro-page:src/pages/api/submit-ticket@_@ts":"pages/api/submit-ticket.astro.mjs","\u0000@astro-page:src/pages/api/update-ticket-status@_@ts":"pages/api/update-ticket-status.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/admin@_@astro":"pages/admin.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","D:/Usuarios/emendez/Desktop/Web Tickets/ticketTS-ASTRO/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_UeLy9rlF.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.vG0aNEbQ.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/favicon.svg"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"Gkre9VeLn65/hR/qIzusZcvw22T5w+IGAAW5TcQuypc=","experimentalEnvGetSecretEnabled":false});

export { manifest };
