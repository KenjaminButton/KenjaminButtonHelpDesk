"use client"
import AuthForm from "../AuthForm"

export default function Signup() {  

  const handleSubmit = async (evt, email, password) => {
    evt.preventDefault()
    console.log("User signup", email, password)
  }

  return (
    <main>
      <h2 className="text-center">Signup</h2>
      <AuthForm handleSubmit={handleSubmit} />
    </main>
  )
}
