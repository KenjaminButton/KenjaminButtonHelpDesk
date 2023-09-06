"use client"
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import AuthForm from "../AuthForm";
import { useRouter } from "next/navigation";


// /auth/login vs /login (without the auth before)
// Accomplish this by having auth folder renamed to (auth)
export default function Login() {  
  const router = useRouter()
  const [formError, setFormError] = useState('')

  const handleSubmit = async (evt, email, password) => {
    evt.preventDefault()
    setFormError('')
    // console.log("User login", email, password)
    const supabase = createClientComponentClient()
    const {error} = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      setFormError(error.message)
    }

    if (!error) {
      router.push('/')
    }

  }

  return (
    <main>
      <h2 className="text-center">Login</h2>
      <AuthForm handleSubmit={handleSubmit} />

      {formError && (
        <div className="error">{formError}</div>
      )}
    </main>
  )
}


