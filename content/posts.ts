import { postsData, type Post } from "@/content/posts-data";

export type { Block } from "@/content/types";
export type { Post } from "@/content/posts-data";

export const posts: Post[] = postsData;

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
