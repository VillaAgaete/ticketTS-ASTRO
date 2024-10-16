import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const supabase = createClient(supabaseUrl, supabaseKey)

  try {
    const ticket = req.body
    ticket.state = 0  // Set initial state to 0 for new tickets

    const { data, error } = await supabase
      .from('tickets')
      .insert([ticket])
      .select()

    if (error) throw error

    return res.status(200).json({
      success: true,
      message: "Your ticket has been sent successfully!",
      ticket: data ? data[0] : null
    })
  } catch (error) {
    console.error('Error submitting ticket:', error)
    return res.status(500).json({
      success: false,
      message: "There was an error submitting your ticket. Please try again."
    })
  }
}