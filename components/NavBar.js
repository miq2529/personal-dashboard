import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-indigo-600 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Mustaqeem&apos;s Dashboard</div>
      <div className="space-x-6">
        <Link href="/profile" className="hover:text-indigo-300">Profile</Link>
        <Link href="/skills" className="hover:text-indigo-300">Skills</Link>
        <Link href="/academics" className="hover:text-indigo-300">Academics</Link>
        <Link href="/about" className="hover:text-indigo-300">About</Link>
      </div>
    </nav>
  );
}
