// import { hygraph } from "@/lib/hygraph";
// import { GET_POST_BY_SLUG, GET_ALL_SLUGS } from "@/lib/queries";
import { hygraph } from "@/app/lib/hygraph";
import { GET_POST_BY_SLUG, GET_ALL_SLUGS } from "@/app/lib/queries";
import { notFound } from "next/navigation";

export const revalidate = 60; // ISR

export async function generateStaticParams() {
  const { posts } = await hygraph.request(GET_ALL_SLUGS);
  return posts.map((p: any) => ({ slug: p.slug }));
}

export default async function PostPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const { post } = await hygraph.request(GET_POST_BY_SLUG, { slug });


  if (!post) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-6 py-10 prose">
      {post.coverimage?.url && (
        <img
          src={post.coverimage.url}
          alt={post.title}
          className="rounded-lg mb-6"
        />
      )}
      <h1>{post.title}</h1>
      <p className="text-sm text-gray-500">{post.date}</p>
      <article dangerouslySetInnerHTML={{ __html: post.content.html }} />
    </main>
  );
}
