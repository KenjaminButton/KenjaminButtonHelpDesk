import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";

export const metadata = {
  title: 'KenjaminButton Help Desk | Tickets',
}

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p><small>Currently Open Tickets</small></p>
        </div>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  )
}

// /news/latest