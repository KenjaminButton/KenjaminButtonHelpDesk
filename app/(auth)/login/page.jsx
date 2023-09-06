"use client"
import AuthForm from "../AuthForm";


// /auth/login vs /login (without the auth before)
// Accomplish this by having auth folder renamed to (auth)
export default function Login() {  

  const handleSubmit = async (evt, email, password) => {
    evt.preventDefault()
    console.log("User login", email, password)
  }

  return (
    <main>
      <h2 className="text-center">Login</h2>
      <AuthForm handleSubmit={handleSubmit} />
    </main>
  )
}


