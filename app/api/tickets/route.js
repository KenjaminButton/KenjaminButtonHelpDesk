import { NextResponse } from "next/server"

// Force NEXT JS to re-fetch the data
export const dynamic = 'force-dynamic'

// http://localhost:3000/api/tickets dictated by our project file structure
export async function GET() {
  const res = await fetch('http://localhost:4000/tickets')

  const tickets = await res.json()

  return NextResponse.json(tickets, {
    status: 200
  })
}