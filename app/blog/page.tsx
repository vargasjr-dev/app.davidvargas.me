import Link from "next/link";
import { posts } from "@/content/posts";

export const metadata = {
  title: "Blog — david vargas",
};

export default function Blog() {
  return (
    <div>
      <h1 className="page-title">Blog</h1>
      <ul className="post-list">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`}>{p.title}</Link>
            <span className="post-date">{p.date}</span>
            {p.description ? <p style={{ margin: "4px 0 0" }}>{p.description}</p> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
