import { createClient } from '@supabase/supabase-js';
export { renderers } from '../../renderers.mjs';

const supabaseUrl = "https://mghqqijimtvnhyywczej.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1naHFxaWppbXR2bmh5eXdjemVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcyNTIzMzQsImV4cCI6MjA0MjgyODMzNH0.jaCIWpROFFrkSZH5Zq_5Qxtl2Cxqg67PEsUIqyldcVs";
const supabase = createClient(supabaseUrl, supabaseKey);
const POST = async () => {
  try {
    const { error } = await supabase.from("tickets").delete().eq("state", 9);
    if (error) throw error;
    return new Response(JSON.stringify({
      success: true,
      message: "All done tickets have been deleted."
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error deleting done tickets:", error);
    return new Response(JSON.stringify({
      success: false,
      message: "There was an error deleting done tickets. Please try again."
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
