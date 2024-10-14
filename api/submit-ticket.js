import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

export default async function handler(request, response) {
  console.log('API route hit')
  
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method Not Allowed' })
  }

  if (!supabaseUrl || !supabaseKey) {
    console.error('Supabase credentials are missing')
    return response.status(500).json({ error: 'Server configuration error' })
  }

  const supabase = createClient(supabaseUrl, supabaseKey)

  try {
    console.log('Parsing request body')
    const ticket = await request.json()
    ticket.state = 0

    console.log('Inserting ticket into Supabase')
    const { data, error } = await supabase
      .from('tickets')
      .insert([ticket])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      throw error
    }

    console.log('Ticket inserted successfully')
    return response.status(200).json({
      success: true,
      message: "Your ticket has been sent successfully!",
      ticket: data ? data[0] : null
    })
  } catch (error) {
    console.error('Error submitting ticket:', error)
    return response.status(500).json({
      success: false,
      message: "There was an error submitting your ticket. Please try again.",
      error: error.message
    })
  }
}