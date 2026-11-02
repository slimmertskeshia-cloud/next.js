import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Greg's Portfolio of Small Bets",
  description: "My Next.js portfolio project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="navbar bg-base-100 shadow-sm mb-8">
          <div className="flex-1">
            <Link href="/" className="btn btn-ghost text-xl">
              Greg's Portfolio
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/about/contact">Contact</Link></li>
              <li><Link href="/github-users">GitHub Users</Link></li>
            </ul>
          </div>
        </div>
        
        <main>{children}</main>
      </body>
    </html>
  );
}