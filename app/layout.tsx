import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "david vargas",
  description: "Full-Stack Engineer, Founder, and Open Source believer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="site">
          <nav className="nav">
            <Link href="/" className="nav-brand">
              David Vargas
            </Link>
            <div className="nav-links">
              <Link href="/blog">Blog</Link>
            </div>
          </nav>
          <main className="main">{children}</main>
          <footer className="footer">
            <span>© {new Date().getFullYear()} Vargas Jr LLC</span>
          </footer>
        </div>
      </body>
    </html>
  );
}
