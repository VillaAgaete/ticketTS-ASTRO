import { c as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DXWOZq9s.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CO_Yu_Yk.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Submit a Ticket", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-j7pv25f6>Submit a Ticket</h1> <form id="ticketForm" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <label for="nombre" data-astro-cid-j7pv25f6>Nombre:</label> <input type="text" id="nombre" name="nombre" required data-astro-cid-j7pv25f6> </div> <div data-astro-cid-j7pv25f6> <label for="departamento" data-astro-cid-j7pv25f6>Departamento:</label> <input type="text" id="departamento" name="departamento" required data-astro-cid-j7pv25f6> </div> <div data-astro-cid-j7pv25f6> <label for="descripcion" data-astro-cid-j7pv25f6>Descripción:</label> <textarea id="descripcion" name="descripcion" required data-astro-cid-j7pv25f6></textarea> </div> <div data-astro-cid-j7pv25f6> <label for="importancia" data-astro-cid-j7pv25f6>Importancia:</label> <select id="importancia" name="importancia" required data-astro-cid-j7pv25f6> <option value="leve" data-astro-cid-j7pv25f6>Leve</option> <option value="medio" data-astro-cid-j7pv25f6>Medio</option> <option value="importante" data-astro-cid-j7pv25f6>Importante</option> </select> </div> <button type="submit" data-astro-cid-j7pv25f6>Submit Ticket</button> </form> <div id="message" data-astro-cid-j7pv25f6></div>  ` })} `;
}, "D:/Usuarios/emendez/Desktop/Web Tickets/ticketTS-ASTRO/src/pages/index.astro", void 0);

const $$file = "D:/Usuarios/emendez/Desktop/Web Tickets/ticketTS-ASTRO/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
