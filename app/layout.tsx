import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "👋 Hey, I'm Vargas",
  description: "Evangelist of Personal Intelligence, Open Source Maximalist, Tinkerer of Games",
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/logo.png" alt="David Vargas" />
            </Link>
            <div className="nav-links">
              <Link href="/blog">Blog</Link>
            </div>
          </nav>
          <main className="main">{children}</main>
          <footer className="footer">
            <span>© {new Date().getFullYear()} Vargas Jr LLC</span>
            <div className="socials">
              <a
                href="https://github.com/dvargasfuertes"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/dvargasfuertes"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.95 4.57a10 10 0 0 1-2.82.77 4.96 4.96 0 0 0 2.16-2.72c-.95.56-2.01.96-3.13 1.18a4.92 4.92 0 0 0-8.38 4.48A13.94 13.94 0 0 1 1.64 3.16a4.92 4.92 0 0 0 1.52 6.57 4.9 4.9 0 0 1-2.23-.61v.06a4.92 4.92 0 0 0 3.95 4.83 4.96 4.96 0 0 1-2.22.08 4.93 4.93 0 0 0 4.6 3.42A9.87 9.87 0 0 1 0 19.54a13.9 13.9 0 0 0 7.55 2.21c9.06 0 14.01-7.5 14.01-14.01 0-.21 0-.42-.02-.63a10 10 0 0 0 2.41-2.54z" />
                </svg>
              </a>
              <a
                href="mailto:dvargasfuertes@gmail.com"
                aria-label="Email"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 5L2 7" />
                </svg>
              </a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
