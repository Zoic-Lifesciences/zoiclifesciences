"use client";
import Image from "next/image";

export default function NewRoom() {
  const news = [
    {
      img: "/product.png", // replace with your actual image paths
      date: "Oct 30, 2025, 2:00 AM IST",
      author: "Rohit Mamgain",
      title: "Top 10 Manufacturers in Pharma Industry",
      desc: "In today's global pharmaceutical and healthcare landscape, ensuring the safety, quality, and efficacy of products ...",
    },
    {
      img: "/product.png",
      date: "Oct 30, 2025, 2:00 AM IST",
      author: "Rohit Mamgain",
      title: "Top 10 Manufacturers in Pharma Industry",
      desc: "In today's global pharmaceutical and healthcare landscape, ensuring the safety, quality, and efficacy of products ...",
    },
    {
      img: "/product.png",
      date: "Oct 30, 2025, 2:00 AM IST",
      author: "Rohit Mamgain",
      title: "Top 10 Manufacturers in Pharma Industry",
      desc: "In today's global pharmaceutical and healthcare landscape, ensuring the safety, quality, and efficacy of products ...",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#F6FBFF] to-white flex justify-center flex-col items-center">
        <div className="w-[80vw]  py-20 px-6 flex flex-col items-center text-center ">
            {/* Section Header */}
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        <span className="text-[#04A0D1]">ZOIC’s</span> Newsroom
      </h2>
      <p className="text-gray-600 max-w-3xl mb-12">
        Discover the newest developments, innovations, and announcements from India’s leading
        pharma franchise company. Stay updated with latest news by{" "}
        <span className="text-[#04A0D1] font-semibold">ZOIC</span>.
      </p>

      {/* News Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl w-full">
        {news.map((item, index) => (
          <div
            key={index}
            className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
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
      <button className="mt-12 bg-[#04A0D1] hover:bg-[#0384b0] text-white px-8 py-3 rounded-full font-medium shadow-md transition-all duration-300">
        View all articles
      </button>
        </div>
      
    </section>
  );
}
