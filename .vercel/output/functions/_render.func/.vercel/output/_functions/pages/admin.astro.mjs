import { c as createComponent, r as renderTemplate, f as renderComponent, g as defineScriptVars, m as maybeRenderHead } from '../chunks/astro/server_DXWOZq9s.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CO_Yu_Yk.mjs';
import { s as supabase } from '../chunks/supabase_ChiZJaeq.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Admin = createComponent(async ($$result, $$props, $$slots) => {
  const { data: tickets, error } = await supabase.from("tickets").select("*").order("id", { ascending: false });
  if (error) {
    console.error("Error fetching tickets:", error);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Admin - Ticket Management", "data-astro-cid-2zp6q64z": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<h1 data-astro-cid-2zp6q64z>Ticket Management</h1> <div class="columns" data-astro-cid-2zp6q64z> <div class="column important" id="1" data-astro-cid-2zp6q64z> <h2 data-astro-cid-2zp6q64z>Importante</h2> </div> <div class="column medium" id="2" data-astro-cid-2zp6q64z> <h2 data-astro-cid-2zp6q64z>Medio</h2> </div> <div class="column mild" id="3" data-astro-cid-2zp6q64z> <h2 data-astro-cid-2zp6q64z>Leve</h2> </div> </div> <div id="0" class="column" data-astro-cid-2zp6q64z> <h2 data-astro-cid-2zp6q64z>New Tickets</h2> </div> <div id="9" class="column" data-astro-cid-2zp6q64z> <h2 data-astro-cid-2zp6q64z>Done Tickets</h2> </div> <button id="delete-done-tickets" data-astro-cid-2zp6q64z>Delete All Done Tickets</button> <script>(function(){', "\n    function createTicketElement(ticket) {\n      const ticketEl = document.createElement('div');\n      ticketEl.className = 'ticket';\n      ticketEl.draggable = true;\n      ticketEl.dataset.id = ticket.id;\n\n      let importanceColor;\n      switch (ticket.importancia.toLowerCase()) {\n        case 'importante':\n          importanceColor = '#ff4d4d';\n          break;\n        case 'medio':\n          importanceColor = '#ffd700';\n          break;\n        case 'leve':\n          importanceColor = '#4da6ff';\n          break;\n        default:\n          importanceColor = '#000000';\n      }\n\n      ticketEl.innerHTML = `\n        <h3>${ticket.nombre}</h3>\n        <p class=\"description\">${ticket.descripcion}</p>\n        <p>Departamento: ${ticket.departamento}</p>\n        <p>Importancia: <span class=\"importance-text\" style=\"color: ${importanceColor}; font-weight: bold;\">${ticket.importancia}</span></p>\n        <button class=\"mark-done\">Mark as Done</button>\n      `;\n\n      Object.assign(ticketEl.style, {\n        border: '2px solid #0d0202',\n        borderRadius: '8px',\n        padding: '15px',\n        marginBottom: '10px',\n        backgroundColor: '#ffffff',\n        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',\n        cursor: 'move'\n      });\n\n      return ticketEl;\n    }\n\n    function addTicketToColumn(ticket, columnId) {\n      const column = document.getElementById(columnId.toString());\n      if (column) {\n        const ticketEl = createTicketElement(ticket);\n        column.appendChild(ticketEl);\n      }\n    }\n\n    function displayTickets(tickets) {\n      document.querySelectorAll('.ticket').forEach(t => t.remove());\n      \n      tickets.forEach(ticket => {\n        addTicketToColumn(ticket, ticket.state);\n      });\n    }\n\n    // Display initial tickets from the database\n    displayTickets(tickets);\n\n    let draggedTicket = null;\n\n    document.querySelectorAll('.column').forEach(column => {\n      column.addEventListener('dragover', e => {\n        e.preventDefault();\n        e.dataTransfer.dropEffect = 'move';\n        const afterElement = getDragAfterElement(column, e.clientY);\n        if (draggedTicket) {\n          if (afterElement) {\n            column.insertBefore(draggedTicket, afterElement);\n          } else {\n            column.appendChild(draggedTicket);\n          }\n        }\n      });\n\n      column.addEventListener('drop', e => {\n        e.preventDefault();\n        if (draggedTicket && column instanceof HTMLElement) {\n          updateTicketStatus(draggedTicket.dataset.id, parseInt(column.id));\n        }\n        draggedTicket = null;\n      });\n    });\n\n    document.addEventListener('dragstart', e => {\n      if (e.target instanceof HTMLElement && e.target.classList.contains('ticket')) {\n        draggedTicket = e.target;\n        e.dataTransfer.effectAllowed = 'move';\n        setTimeout(() => {\n          e.target.style.display = 'none';\n        }, 0);\n      }\n    });\n\n    document.addEventListener('dragend', e => {\n      if (e.target instanceof HTMLElement && e.target.classList.contains('ticket')) {\n        e.target.style.display = 'block';\n        draggedTicket = null;\n      }\n    });\n\n    function getDragAfterElement(container, y) {\n      const draggableElements = [...container.querySelectorAll('.ticket:not(.dragging)')];\n\n      return draggableElements.reduce((closest, child) => {\n        const box = child.getBoundingClientRect();\n        const offset = y - box.top - box.height / 2;\n        if (offset < 0 && offset > closest.offset) {\n          return { offset: offset, element: child };\n        } else {\n          return closest;\n        }\n      }, { offset: Number.NEGATIVE_INFINITY }).element;\n    }\n\n    document.addEventListener('click', e => {\n      if (e.target instanceof HTMLElement && e.target.classList.contains('mark-done')) {\n        const ticket = e.target.closest('.ticket');\n        const doneTickets = document.getElementById('9');\n        if (ticket && doneTickets) {\n          doneTickets.appendChild(ticket);\n          updateTicketStatus(ticket.dataset.id || '', 9);\n        }\n      }\n    });\n\n    async function updateTicketStatus(ticketId, newState) {\n      try {\n        const response = await fetch('/api/update-ticket-status', {\n          method: 'POST',\n          headers: {\n            'Content-Type': 'application/json',\n          },\n          body: JSON.stringify({ ticketId, newState }),\n        });\n        if (!response.ok) throw new Error('Failed to update ticket status');\n        console.log(`Updated ticket ${ticketId} to state ${newState}`);\n      } catch (error) {\n        console.error('Error updating ticket status:', error);\n      }\n    }\n\n    document.getElementById('delete-done-tickets')?.addEventListener('click', async () => {\n      if (confirm('Are you sure you want to delete all done tickets?')) {\n        try {\n          const response = await fetch('/api/delete-done-tickets', {\n            method: 'POST',\n          });\n          if (!response.ok) throw new Error('Failed to delete done tickets');\n          const doneTickets = document.getElementById('9');\n          if (doneTickets) doneTickets.innerHTML = '<h2>Done Tickets</h2>';\n        } catch (error) {\n          console.error('Error deleting done tickets:', error);\n        }\n      }\n    });\n  })();<\/script> "], [" ", '<h1 data-astro-cid-2zp6q64z>Ticket Management</h1> <div class="columns" data-astro-cid-2zp6q64z> <div class="column important" id="1" data-astro-cid-2zp6q64z> <h2 data-astro-cid-2zp6q64z>Importante</h2> </div> <div class="column medium" id="2" data-astro-cid-2zp6q64z> <h2 data-astro-cid-2zp6q64z>Medio</h2> </div> <div class="column mild" id="3" data-astro-cid-2zp6q64z> <h2 data-astro-cid-2zp6q64z>Leve</h2> </div> </div> <div id="0" class="column" data-astro-cid-2zp6q64z> <h2 data-astro-cid-2zp6q64z>New Tickets</h2> </div> <div id="9" class="column" data-astro-cid-2zp6q64z> <h2 data-astro-cid-2zp6q64z>Done Tickets</h2> </div> <button id="delete-done-tickets" data-astro-cid-2zp6q64z>Delete All Done Tickets</button> <script>(function(){', "\n    function createTicketElement(ticket) {\n      const ticketEl = document.createElement('div');\n      ticketEl.className = 'ticket';\n      ticketEl.draggable = true;\n      ticketEl.dataset.id = ticket.id;\n\n      let importanceColor;\n      switch (ticket.importancia.toLowerCase()) {\n        case 'importante':\n          importanceColor = '#ff4d4d';\n          break;\n        case 'medio':\n          importanceColor = '#ffd700';\n          break;\n        case 'leve':\n          importanceColor = '#4da6ff';\n          break;\n        default:\n          importanceColor = '#000000';\n      }\n\n      ticketEl.innerHTML = \\`\n        <h3>\\${ticket.nombre}</h3>\n        <p class=\"description\">\\${ticket.descripcion}</p>\n        <p>Departamento: \\${ticket.departamento}</p>\n        <p>Importancia: <span class=\"importance-text\" style=\"color: \\${importanceColor}; font-weight: bold;\">\\${ticket.importancia}</span></p>\n        <button class=\"mark-done\">Mark as Done</button>\n      \\`;\n\n      Object.assign(ticketEl.style, {\n        border: '2px solid #0d0202',\n        borderRadius: '8px',\n        padding: '15px',\n        marginBottom: '10px',\n        backgroundColor: '#ffffff',\n        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',\n        cursor: 'move'\n      });\n\n      return ticketEl;\n    }\n\n    function addTicketToColumn(ticket, columnId) {\n      const column = document.getElementById(columnId.toString());\n      if (column) {\n        const ticketEl = createTicketElement(ticket);\n        column.appendChild(ticketEl);\n      }\n    }\n\n    function displayTickets(tickets) {\n      document.querySelectorAll('.ticket').forEach(t => t.remove());\n      \n      tickets.forEach(ticket => {\n        addTicketToColumn(ticket, ticket.state);\n      });\n    }\n\n    // Display initial tickets from the database\n    displayTickets(tickets);\n\n    let draggedTicket = null;\n\n    document.querySelectorAll('.column').forEach(column => {\n      column.addEventListener('dragover', e => {\n        e.preventDefault();\n        e.dataTransfer.dropEffect = 'move';\n        const afterElement = getDragAfterElement(column, e.clientY);\n        if (draggedTicket) {\n          if (afterElement) {\n            column.insertBefore(draggedTicket, afterElement);\n          } else {\n            column.appendChild(draggedTicket);\n          }\n        }\n      });\n\n      column.addEventListener('drop', e => {\n        e.preventDefault();\n        if (draggedTicket && column instanceof HTMLElement) {\n          updateTicketStatus(draggedTicket.dataset.id, parseInt(column.id));\n        }\n        draggedTicket = null;\n      });\n    });\n\n    document.addEventListener('dragstart', e => {\n      if (e.target instanceof HTMLElement && e.target.classList.contains('ticket')) {\n        draggedTicket = e.target;\n        e.dataTransfer.effectAllowed = 'move';\n        setTimeout(() => {\n          e.target.style.display = 'none';\n        }, 0);\n      }\n    });\n\n    document.addEventListener('dragend', e => {\n      if (e.target instanceof HTMLElement && e.target.classList.contains('ticket')) {\n        e.target.style.display = 'block';\n        draggedTicket = null;\n      }\n    });\n\n    function getDragAfterElement(container, y) {\n      const draggableElements = [...container.querySelectorAll('.ticket:not(.dragging)')];\n\n      return draggableElements.reduce((closest, child) => {\n        const box = child.getBoundingClientRect();\n        const offset = y - box.top - box.height / 2;\n        if (offset < 0 && offset > closest.offset) {\n          return { offset: offset, element: child };\n        } else {\n          return closest;\n        }\n      }, { offset: Number.NEGATIVE_INFINITY }).element;\n    }\n\n    document.addEventListener('click', e => {\n      if (e.target instanceof HTMLElement && e.target.classList.contains('mark-done')) {\n        const ticket = e.target.closest('.ticket');\n        const doneTickets = document.getElementById('9');\n        if (ticket && doneTickets) {\n          doneTickets.appendChild(ticket);\n          updateTicketStatus(ticket.dataset.id || '', 9);\n        }\n      }\n    });\n\n    async function updateTicketStatus(ticketId, newState) {\n      try {\n        const response = await fetch('/api/update-ticket-status', {\n          method: 'POST',\n          headers: {\n            'Content-Type': 'application/json',\n          },\n          body: JSON.stringify({ ticketId, newState }),\n        });\n        if (!response.ok) throw new Error('Failed to update ticket status');\n        console.log(\\`Updated ticket \\${ticketId} to state \\${newState}\\`);\n      } catch (error) {\n        console.error('Error updating ticket status:', error);\n      }\n    }\n\n    document.getElementById('delete-done-tickets')?.addEventListener('click', async () => {\n      if (confirm('Are you sure you want to delete all done tickets?')) {\n        try {\n          const response = await fetch('/api/delete-done-tickets', {\n            method: 'POST',\n          });\n          if (!response.ok) throw new Error('Failed to delete done tickets');\n          const doneTickets = document.getElementById('9');\n          if (doneTickets) doneTickets.innerHTML = '<h2>Done Tickets</h2>';\n        } catch (error) {\n          console.error('Error deleting done tickets:', error);\n        }\n      }\n    });\n  })();<\/script> "])), maybeRenderHead(), defineScriptVars({ tickets })) })} `;
}, "D:/Usuarios/emendez/Desktop/Web Tickets/ticketTS-ASTRO/src/pages/admin.astro", void 0);

const $$file = "D:/Usuarios/emendez/Desktop/Web Tickets/ticketTS-ASTRO/src/pages/admin.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Admin,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };