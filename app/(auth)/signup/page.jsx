"use client"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import AuthForm from "../AuthForm"
import { useState } from "react"
import { useRouter } from "next/navigation"



export default function Signup() {  
  const router = useRouter()
  const [formError, setFormError] = useState('')

  const handleSubmit = async (evt, email, password) => {
    evt.preventDefault()
    // console.log("User signup", email, password)

    const supabase = createClientComponentClient()
    const {error} = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`
      }
    })

    if (error) {
      // error from supabase
      setFormError(error.message)
    }
    if (!error) {
      router.push(`/verify`)
    }
  }

  return (
    <main>
      <h2 className="text-center">Signup</h2>
      <AuthForm handleSubmit={handleSubmit} />
      {formError && (
        <div className="error">{formError}</div>
      )}
    </main>
  )
}
