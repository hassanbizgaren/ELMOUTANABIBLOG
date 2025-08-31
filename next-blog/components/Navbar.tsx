import Link from 'next/link';
import { ModeToggle } from './ModeToggel';

export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center justify-between max-w-2xl mx-auto px-4 py-5">
      <Link href="/" className="text-3xl font-bold">
        ELMOUTANABI<span className="text-blue-500">BLOG</span>
      </Link>
      < ModeToggle />
    </nav>
  );
}