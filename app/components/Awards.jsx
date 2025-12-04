"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const data = [
  { id: 7, img: "/awards/7.jpg", category: "Injectables" },
  { id: 6, img: "/awards/8.jpg", category: "Capsules" },
  { id: 3, img: "/awards/9.jpg", category: "Soft Gel" },
  { id: 1, img: "/awards/10.jpg", category: "Tablets" },
  { id: 8, img: "/awards/11.jpg", category: "Ointments" },
  { id: 4, img: "/awards/12.jpg", category: "Powder" },
  // { id: 2, img: "/awards/14.jpg", category: "Syrup" },
  { id: 5, img: "/awards/15.webp", category: "Oil" },
];

export default function AwardsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = data.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 2000); // rotate every 1.5s
    return () => clearInterval(interval);
  }, [total]);

  return (
    <div className="bg-linear-to-r from-[#1BA3CD] to-[#090A69] text-white min-h-screen flex items-center justify-center py-16 px-8">
      <div className="max-w-7xl flex flex-col mx-auto">

        {/* LEFT COLUMN: Heading + Tagline */}
        <div className="w-[80vw] md:w-full flex flex-col justify-center">
          <h1 className="regulator-nova-alts tracking-widest md:text-6xl text-4xl font-bold mb-6">Awards & Achievements</h1>
        </div>

        {/* RIGHT COLUMN: Carousel */}
        <div className="w-full md:w-full flex justify-center items-center relative h-[60vh] mt-10">
          {data.map((item, index) => {
            // Calculate position relative to currentIndex
            const position = (index - currentIndex + total) % total;

            // Card animation logic
            let scale = 0.7;
            let x = 0;
            let opacity = 0.5;
            let zIndex = 1;

            if (position === 0) {
              scale = 1;
              x = 0;
              opacity = 1;
              zIndex = 3;
            } else if (position === 1) {
              scale = 0.85;
              x = 120;
              opacity = 0.5;
              zIndex = 2;
            } else if (position === total - 1) {
              scale = 0.85;
              x = -120;
              opacity = 0.5;
              zIndex = 2;
            } else if (position === 2) {
              scale = 0.7;
              x = 240;
              opacity = 0.2;
              zIndex = 1;
            } else if (position === total - 2) {
              scale = 0.7;
              x = -240;
              opacity = 0.2;
              zIndex = 1;
            }

            return (
              <motion.div
                key={item.id}
                animate={{ scale, x, opacity }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{ zIndex }}
                className="absolute md:w-[750px] w-[300px] md:h-full h-[80%] flex items-center justify-center "
              >
                <div className="relative w-full h-full shadow-2xl rounded-xl overflow-hidden">
                  <img
                    src={item.img}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  {/* <div
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 
                      bg-[#048DB7] px-6 py-2 rounded-lg text-lg font-semibold shadow-md regulator-nova-alts tracking-wider"
                  >
                    {item.category}
                  </div> */}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
