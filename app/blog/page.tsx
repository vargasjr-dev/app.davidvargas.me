import Link from "next/link";
import { posts } from "@/content/posts";

export const metadata = {
  title: "Blog — david vargas",
};

function blogNote() {
  return (
    <p className="blog-note">
      I&apos;ve paused writing here in favor of tweeting and deferring to my
      assistant&apos;s <Link href="https://vargasjr.dev/blog">blog</Link>.
    </p>
  );
}

export default function Blog() {
  const years = Array.from(new Set(posts.map((p) => p.date.slice(-4)))).sort(
    (a, b) => Number(b) - Number(a)
  );

  return (
    <div>
      <h1 className="page-title">Blog</h1>
      {blogNote()}
      {years.map((year) => (
        <details className="year-toggle" key={year}>
          <summary>{year}</summary>
          <ul className="post-list">
            {posts
              .filter((p) => p.date.endsWith(year))
              .map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                  <span className="post-date">{p.date}</span>
                  {p.description ? (
                    <p style={{ margin: "4px 0 0" }}>{p.description}</p>
                  ) : null}
                </li>
              ))}
          </ul>
        </details>
      ))}
    </div>
  );
}
