"use client";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function NewRoom() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const news = [
    {
      img: "/blog1.jpg",
      date: "Oct 30, 2025, 2:00 AM IST",
      author: "Rohit Mamgain",
      title: "Top 10 Manufacturers in Pharma Industry",
      desc: "In today's global pharmaceutical and healthcare landscape, ensuring the safety, quality, and efficacy of products ...",
    },
    {
      img: "/blog2.jpg",
      date: "Oct 30, 2025, 2:00 AM IST",
      author: "Rohit Mamgain",
      title: "Top 10 Manufacturers in Pharma Industry",
      desc: "In today's global pharmaceutical and healthcare landscape, ensuring the safety, quality, and efficacy of products ...",
    },
    {
      img: "/blog3.jpg",
      date: "Oct 30, 2025, 2:00 AM IST",
      author: "Rohit Mamgain",
      title: "Top 10 Manufacturers in Pharma Industry",
      desc: "In today's global pharmaceutical and healthcare landscape, ensuring the safety, quality, and efficacy of products ...",
    },
  ];

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
          {news.map((item, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              data-aos="fade-right"
              data-aos-delay={index * 150} // stagger animation
            >
              <div className="relative">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="w-full h-[250px] object-cover"
                />
                <span className="absolute bottom-2 left-2 bg-[#04A0D1] text-white text-xs font-medium px-3 py-1 rounded-md">
                  Category
                </span>
              </div>

              <div className="p-5 flex flex-col items-start text-left">
                <div className="text-gray-500 text-xs mb-1">
                  {item.date} &nbsp; | &nbsp; Author:{" "}
                  <span className="font-medium">{item.author}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800 leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                <a
                  href="#"
                  className="text-[#04A0D1] text-sm font-semibold hover:underline"
                >
                  Continue Reading
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <button
          className="mt-12 bg-[#04A0D1] hover:bg-[#0384b0] text-white px-8 py-3 rounded-full font-medium shadow-md transition-all duration-300"
        >
          View all articles
        </button>
      </div>
    </section>
  );
}
