import Image from 'next/image'
import Link from "next/link"
import Logo from './kenjamin-dojo.png'

export default function AuthLayout({children}) {
  return (
    <>
      <nav>
        <Image 
          src={Logo}
          alt="Kenjamin Button Help Desk Logo"
          width={70}
          quality={100}
          placeholder='blur'
        />
        <h1>Ken Help Desk</h1>
        <Link href="/signup">Sign up</Link>
        <Link href="/login">Login</Link>
      </nav>
      {children}
    </>
  )
}
