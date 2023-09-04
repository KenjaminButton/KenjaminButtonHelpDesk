
import {notFound} from 'next/navigation'

// if a request comes in for a ticket id that hasn't been rendered, we can return a 404 page
export const dynamicParams = true

// Get a list of all id (tickets) at build time and generate a static page (and generate all the routes) for all of them pre-rendered during build
export async function generateStaticParams() {
  // [{id: '1'}, {id: '2'}, ...]
  const res = await fetch('http://localhost:4000/tickets')
  const tickets = await res.json()

  return tickets.map( (ticket) => ({
    id: ticket.id
  }))
}

async function getTicket(id) {
  // Imitate delay to test loading suspense fallback
  // 3 second delay
  // await new Promise(resolve => setTimeout(resolve, 3000))

  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60
    }
  })

  if (!res.ok) {
    notFound()
  }

  return res.json()
}

export default async function TicketDetails({params}) {

  const ticket = await getTicket(params.id)

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by: {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
          </div>
      </div>
    </main>
  )
}
