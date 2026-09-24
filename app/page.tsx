import Link from "next/link";
import HeadlineCarousel from "./HeadlineCarousel";

export default function Home() {
  return (
    <div className="hero">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="hero-avatar" src="/assets/github-avatar.jpg" alt="David Vargas" />
      <h1>👋 Hey, I&apos;m Vargas</h1>
      <HeadlineCarousel />
      <p className="padawan-note">
        For more information about what I&apos;m working on, visit my padawan&apos;s{" "}
        <Link href="https://vargasjr.dev">homepage</Link>
      </p>
    </div>
  );
}
