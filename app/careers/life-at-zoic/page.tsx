"use client";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/NavBar";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";


const lifeEvents = [
  {
    title: "Cricket Tournament",
    subtitle: "Teamwork beyond the boardroom",
    desc: "Every year, ZOICians come together for friendly cricket matches that bring out the true spirit of teamwork, strategy, and fun.",
    images: [
      "/images/cricket1.jpg",
      "/images/cricket2.jpg",
      "/images/cricket3.jpg",
      "/images/cricket4.jpg",
      "/images/cricket5.jpg",
      "/images/cricket6.jpg",
    ],
    gradient: "from-blue-50 to-indigo-100",
  },
  {
    title: "Annual Celebration Night",
    subtitle: "Where achievements meet celebrations",
    desc: "Our Annual Celebration is a night of glamour, performances, and recognition — appreciating the dedication and brilliance of our team.",
    images: [
      "/images/party1.jpg",
      "/images/party2.jpg",
      "/images/party3.jpg",
      "/images/party4.jpg",
      "/images/party5.jpg",
    ],
    gradient: "from-indigo-50 to-pink-100",
  },
  {
    title: "Festive Celebrations",
    subtitle: "Diversity that shines through colors",
    desc: "From Diwali to Holi, ZOIC celebrates every festival with enthusiasm, bonding, and vibrant traditions that unite us all.",
    images: [
      "/images/festive1.jpg",
      "/images/festive2.jpg",
      "/images/festive3.jpg",
      "/images/festive4.jpg",
      "/images/festive5.jpg",
      "/images/festive6.jpg",
    ],
    gradient: "from-orange-50 to-yellow-100",
  },
  {
    title: "Corporate Retreats",
    subtitle: "Recharge. Reconnect. Reimagine.",
    desc: "Our offsites and retreats are all about relaxation, creativity, and fresh perspectives — because happy minds build better futures.",
    images: [
      "/images/outing1.jpg",
      "/images/outing2.jpg",
      "/images/outing3.jpg",
      "/images/outing4.jpg",
      "/images/outing5.jpg",
    ],
    gradient: "from-teal-50 to-cyan-100",
  },
];

export default function LifeAtZoic() {
  const router = useRouter();

  return (
    <main className="bg-white text-gray-800">
      <Header />
      {/* ===== Page Header ===== */}
      <section className="text-center py-48 bg-gradient-to-br from-[#048DB7] to-blue-700 text-white font-[cursive]">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4"
        >
          Life at ZOIC
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-2xl mx-auto text-lg opacity-90"
        >
          A glimpse into our vibrant culture — where innovation, celebration, and collaboration thrive together.
        </motion.p>
      </section>

      {/* ===== Event Sections ===== */}
      {lifeEvents.map((event, index) => (
        <section
          key={index}
          className={`py-20 px-6 md:px-20 bg-gradient-to-br ${event.gradient}`}
        >
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
            {/* ===== Text Content ===== */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex-1 ${index % 2 === 0 ? "order-1" : "order-2"}`}
            >
              <h2 className="text-4xl font-bold text-indigo-700 font-[cursive] mb-3">
                {event.title}
              </h2>
              <h3 className="text-lg font-semibold text-indigo-500 mb-3">
                {event.subtitle}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">{event.desc}</p>
            </motion.div>

            {/* ===== Image Gallery ===== */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid grid-cols-2 sm:grid-cols-3 gap-4 flex-1 ${
                index % 2 === 0 ? "order-2" : "order-1"
              }`}
            >
              {event.images.map((src, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="overflow-hidden rounded-xl shadow-md"
                >
                  <img
                    src={src}
                    alt={`${event.title} ${i + 1}`}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      ))}

      {/* ===== CTA Section ===== */}
      <section className="text-center py-24 bg-[#048DB7] text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-semibold mb-4"
        >
          Be a Part of Our Story
        </motion.h2>
        <p className="max-w-xl mx-auto mb-6 text-indigo-100">
          Join the ZOIC family — where every day is an opportunity to grow, create, and celebrate.
        </p>
        <button 
        onClick={() => router.push("/careers")}
        className="bg-white cursor-pointer text-[#048DB7] hover:shadow-md hover:-translate-y-1 font-semibold px-6 py-3 rounded-xl hover:bg-indigo-100 transition-all">
          Explore Careers
        </button>
      </section>

      <Footer />
    </main>
  );
}
