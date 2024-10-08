import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_SrcqTSjU.mjs';
import { manifest } from './manifest_B5AWQQ2D.mjs';

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
    "middlewareSecret": "2b379d1b-e6ec-404b-90c2-09c39cece251",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
