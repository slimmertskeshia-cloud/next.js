import Link from "next/link";



export default function HomePage() {

  return (

    <div className="p-8 flex flex-col gap-4">

      <h1 className="text-2xl font-bold">Home Page</h1>

      <nav className="flex gap-4">

        <Link href="/" className="btn btn-primary">Home</Link>

        <Link href="/about" className="btn btn-secondary">About</Link>

        <Link href="/about/contact" className="btn btn-accent">Contact</Link>

      </nav>

    </div>

  );

} 