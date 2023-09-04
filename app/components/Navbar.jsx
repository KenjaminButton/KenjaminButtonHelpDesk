import Image from 'next/image'
import Link from 'next/link'
import Logo from './kenjamin-dojo.png'

export default function Navbar() {
  return (
    <nav>
      <Image 
        src={Logo}
        alt="Kenjamin Button Help Desk Logo"
        width={70}
        quality={100}
        placeholder='blur'
      />
      <h1>Kenjamin Button Help Desk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  )
}
