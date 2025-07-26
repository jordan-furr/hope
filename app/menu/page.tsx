import Link from 'next/link';
import '../styles/menu.css'

export default function MenuPage() {
  return (
    <div className='menuCont'>
        <Link href="/retreats" className='menuItem'>Upcoming Retreats</Link>
        <Link href="/inspiration" className='menuItem'>Inspiration</Link>
        <Link href="/about" className='menuItem'>About Hope Acclerator</Link>
        <Link href="/faq" className='menuItem'>FAQ</Link>
        <Link href="/contact" className='menuItem'>Contact Us</Link>
    </div>
  );
}