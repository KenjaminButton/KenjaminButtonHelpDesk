import { NextResponse } from "next/server"

// Force NEXT JS to re-fetch the data
export const dynamic = 'force-dynamic'

// http://localhost:3000/api/tickets dictated by our project file structure
export async function GET(_, { params }) {
  const id = params.id

  const res = await fetch(`http://localhost:4000/tickets/${id}`)

  const ticket = await res.json()

  if (!res.ok) {
    return NextResponse.json({error: 'Cannot find the specific ticket'}, {
      status: 404
    })
  }

  return NextResponse.json(ticket, {
    status: 200
  })
}