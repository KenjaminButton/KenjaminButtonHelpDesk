"use client"
import { useState } from "react"

export default function AuthForm({handleSubmit}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form onSubmit={ (evt) => handleSubmit(evt, email, password)}>
      <label>
        <span>Email: </span>
        <input 
          type="email"
          onChange={ (evt) => setEmail(evt.target.value)}
          value={email}
          required
        />
      </label>
      <label>
        <span>Password: </span>
        <input 
          type="password"
          onChange={ (evt) => setPassword(evt.target.value)}
          value={password}
          required
        />
      </label>
      <button className="btn-primary">Submit</button>
    </form>
  )
}

