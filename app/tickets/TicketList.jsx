import Link from "next/link"

async function getTickets() {
  // Imitate delay to test loading suspense fallback
  // 3 second delay
  // await new Promise(resolve => setTimeout(resolve, 3000))


  const res = await fetch('http://localhost:4000/tickets', {
    next: {
      revalidate: 0 // Using 0 to opt out of serving data from cache
    }
  })

  return res.json()
}

export default async function TicketList() {
  const tickets = await getTickets()

  return (
    <>
      {tickets.map( (ticket) => (
        <Link href={`/tickets/${ticket.id}`}>
          <div key={ticket.id} className="card my-5">
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </div>
        </Link>
      ))}
      {tickets.length === 0 && (
        <p className="text-center">No open tickets! Yipee!</p>
      )}
    </>
  )
}

