import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_SrcqTSjU.mjs';
import { manifest } from './manifest_m4B5Q25o.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin.astro.mjs');
const _page2 = () => import('./pages/api/delete-done-tickets.astro.mjs');
const _page3 = () => import('./pages/api/submit-ticket.astro.mjs');
const _page4 = () => import('./pages/api/update-ticket-status.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/admin.astro", _page1],
    ["src/pages/api/delete-done-tickets.ts", _page2],
    ["src/pages/api/submit-ticket.ts", _page3],
    ["src/pages/api/update-ticket-status.ts", _page4],
    ["src/pages/index.astro", _page5]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "aef3a7ac-6144-4bda-896c-4b57479a9f4b",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
