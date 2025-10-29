// // import { hygraph } from "@/lib/hygraph";
// // import { GET_POSTS } from "@/lib/queries";
import { hygraph } from "../lib/hygraph";
import { GET_POSTS } from "../lib/queries";
import Link from "next/link";

export const revalidate = 60; // ISR: revalidate every 60s

export default async function BlogPage() {
  const { posts } = await hygraph.request(GET_POSTS);

  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-10">Company Blog</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post: any) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.slug}
            className="border rounded-2xl p-4 hover:shadow-lg transition"
          >
            {post.coverImage?.url && (
              <img
                src={post.coverImage.url}
                alt={post.title}
                className="rounded-lg mb-4"
              />
            )}
            <h2 className="text-xl font-semibold mb-1">{post.title}</h2>
            <p className="text-gray-600 mb-2">{post.excerpt.text}</p>
            <p className="text-sm text-gray-500">{post.date}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}

// import React from 'react'

// function BlogPosts() {
//   return (
//     <div>bpage</div>
//   )
// }

// export default BlogPosts