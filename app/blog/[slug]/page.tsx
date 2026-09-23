import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost, type Block } from "@/content/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — david vargas`,
    description: post.description ?? undefined,
  };
}

const INLINE_LINK = /\[([^\]]+)\]\(([^)]+)\)/g;

function renderInline(text: string) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(INLINE_LINK)) {
    const before = text.slice(last, m.index);
    if (before) parts.push(before);
    parts.push(
      <a key={m.index} href={m[2]} target="_blank" rel="noreferrer">
        {m[1]}
      </a>
    );
    last = m.index + m[0].length;
  }
  const rest = text.slice(last);
  if (rest) parts.push(rest);
  return parts;
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "h2":
      return <h2>{renderInline(block.text)}</h2>;
    case "li":
      return <li>{renderInline(block.text)}</li>;
    case "img":
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={block.src} alt="" />;
    default:
      return <p>{renderInline(block.text)}</p>;
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const idx = posts.findIndex((p) => p.slug === slug);
  const newer = idx > 0 ? posts[idx - 1] : null;
  const older = idx < posts.length - 1 ? posts[idx + 1] : null;

  return (
    <article className="post">
      <h1>{post.title}</h1>
      <span className="post-date">{post.date}</span>
      {post.blocks.map((b, i) =>
        b.type === "li" ? (
          <ul className="plain-list" key={i}>
            <BlockView block={b} />
          </ul>
        ) : (
          <BlockView key={i} block={b} />
        )
      )}
      <nav className="post-nav">
        {older ? <Link href={`/blog/${older.slug}`}>← {older.title}</Link> : <span />}
        {newer ? <Link href={`/blog/${newer.slug}`}>{newer.title} →</Link> : <span />}
      </nav>
    </article>
  );
}
