import { s as supabase } from '../../chunks/supabase_ChiZJaeq.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const ticket = await request.json();
    ticket.state = 0;
    const { data, error } = await supabase.from("tickets").insert([ticket]).select();
    if (error) throw error;
    return new Response(JSON.stringify({
      success: true,
      message: "Your ticket has been sent successfully!",
      ticket: data ? data[0] : null
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error submitting ticket:", error);
    return new Response(JSON.stringify({
      success: false,
      message: "There was an error submitting your ticket. Please try again."
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
