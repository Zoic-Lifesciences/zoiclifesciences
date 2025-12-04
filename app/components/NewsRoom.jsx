"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { hygraph } from "../lib/hygraph";
import { GET_POSTS } from "../lib/queries";
import Link from "next/link";

export const revalidate = 60; // ISR: revalidate every 60s

export default function NewRoom() {
  const [posts, setPosts] = useState([]);

  async function get_post() {
    try {
      const { posts } = await hygraph.request(GET_POSTS);
      setPosts(posts.slice(0, 3)); // only take 3 posts
      // console.log(posts[1].coverimage);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
    get_post();
  }, []);

  return (
    <section className="flex justify-center flex-col items-center bg-gray-100">
      <div className="md:w-[80vw] w-[90vw] py-20 px-6 flex flex-col items-center text-center">

        {/* Section Header */}
        <h2 className="md:text-6xl text-5xl md:mt-10 mt-5 mb-5">
          <span className="text-[#04A0D1]">ZOIC’s</span> Newsroom
        </h2>
        <p className="text-gray-600 max-w-3xl mb-12">
          Discover the newest developments, innovations, and announcements from India’s leading
          pharma franchise company. Stay updated with latest news by{" "}
          <span className="text-[#04A0D1] font-semibold">ZOIC</span>.
        </p>

        {/* News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-none md:max-w-7xl w-full">
          {posts.map((item, index) => (
            <div
              key={item.id || index}
              className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              data-aos="fade-right"
              data-aos-delay={index * 150}
            >
              <div className="relative">
                <img
                  src={item.coverimage?.url || "/fallback.jpg"} 
                  alt={item.title}
                  width={400}
                  height={250}
                  className="w-full h-[250px] object-fit"
                />

                <span className="absolute bottom-2 left-2 bg-[#04A0D1] text-white text-xs font-medium px-3 py-1 rounded-md">
                  {item.category || "Category"}
                </span>
              </div>

              <div className="p-5 flex flex-col items-start text-left">
                <div className="text-gray-500 text-xs mb-1">
                  {new Date(item.date).toLocaleString()} &nbsp; | &nbsp; Author:{" "}
                  <span className="font-medium">{item.author?.name}</span>
                </div>

                <h3 className="text-lg font-semibold mb-2 text-gray-800 leading-snug">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {item.excerpt?.text}
                </p>

                <Link
                  href={`/blog/${item.slug}`}
                  className="text-[#04A0D1] text-sm font-semibold hover:underline"
                >
                  Continue Reading
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <a href="/blog">
        <button
          className="mt-12 bg-[#04A0D1] hover:bg-[#0384b0] text-white px-8 py-3 rounded-full font-medium shadow-md transition-all duration-300"
        >
          View all articles
        </button>
        </a>
        
      </div>
    </section>
  );
}
