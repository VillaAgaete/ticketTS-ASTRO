import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method Not Allowed' })
  }

  const supabase = createClient(supabaseUrl, supabaseKey)

  try {
    const ticket = await request.json()
    ticket.state = 0  // Set initial state to 0 for new tickets

    const { data, error } = await supabase
      .from('tickets')
      .insert([ticket])
      .select()

    if (error) throw error

    return response.status(200).json({
      success: true,
      message: "Your ticket has been sent successfully!",
      ticket: data ? data[0] : null
    })
  } catch (error) {
    console.error('Error submitting ticket:', error)
    return response.status(500).json({
      success: false,
      message: "There was an error submitting your ticket. Please try again."
    })
  }
}