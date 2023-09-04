import CreateForm from "./CreateForm";

// nesting client component (CreateForm) inside server component (this page.jsx)

// In the future, we might have code that doesn't necessarily need to be in the client component (read NEXT JS docs regarding theory of making as many server components, instead of client components, as possible)
export default function CreateTicket() {
  return (
    <main>
      <h2 className="text-primary text-center">
        Add a New Ticket
      </h2>
      <CreateForm />
    </main>
  )
}


