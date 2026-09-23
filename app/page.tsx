import Link from "next/link";

export default function Home() {
  return (
    <div className="hero">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/avatar.png" alt="David Vargas" />
      <h1>david vargas</h1>
      <h3>Independent Open-Source Engineer</h3>
      <p style={{ marginTop: 32 }}>
        <Link href="/projects">Projects</Link>
        {" · "}
        <Link href="/blog">Blog</Link>
        {" · "}
        <Link href="/predictions">Predictions</Link>
      </p>
    </div>
  );
}
