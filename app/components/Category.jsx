"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const data = [
  { id: 7, img: "/injectables.jpeg", category: "Injectables" },
  { id: 6, img: "/capsules-1.jpg", category: "Capsules" },
  { id: 3, img: "/softgel-cover.jpg", category: "Soft Gel" },
  { id: 1, img: "/tablets-cover.jpg", category: "Tablets" },
  { id: 8, img: "/ointments-cover.jpg", category: "Ointments" },
  { id: 4, img: "/powder-cover.jpg", category: "Powder" },
  { id: 2, img: "/syrups-1.jpg", category: "Syrup" },
  { id: 5, img: "/suspensions-3.jpg", category: "Oil" },
];

export default function CategoriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = data.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 1500); // rotate every 1.5s
    return () => clearInterval(interval);
  }, [total]);

  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint
  };

  checkMobile();
  window.addEventListener("resize", checkMobile);
  return () => window.removeEventListener("resize", checkMobile);
}, []);

  return (
    <div className="bg-linear-to-r from-[#1BA3CD] to-[#090A69] text-white min-h-screen flex items-center justify-center py-16 px-8">
      <div className="max-w-7xl flex md:flex-row flex-col">

        {/* LEFT COLUMN: Heading + Tagline */}
        <div className="w-full md:w-[40%] flex flex-col  justify-start">
          <h1 className="regulator-nova-alts tracking-widest md:text-6xl text-3xl font-bold mb-6">Categories</h1>
          <div className="regulator-nova-alts-straight md:text-lg text-base text-white/90 ">
            Our state-of-the-art manufacturing infrastructure allows us to provide a wide variety of pharmaceutical products. From injectables to tablets, every category is crafted with precision, quality, and compliance in mind.
            <ul className="regulator-nova-alts-straight md:text-lg text-base text-white/90 leading-relaxed list-disc list-inside space-y-0">
              <li>
                Injectables
              </li>
              <li>
                Capsules
              </li>
              <li>
                Soft Gel
              </li>
              <li>
                Tablets
              </li>
              <li>
                Ointments
              </li>
              <li>
                Powder
              </li>
              <li>
                Syrup
              </li>
              <li>
                Suspensions
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT COLUMN: Carousel */}
        <div className="w-full md:w-[60%] flex justify-center items-center relative h-[60vh] md:mt-0 mt-[10vh]">
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
            }
            if (!isMobile) {
  if (position === 1) {
    scale = 0.85;
    x = 120;
    opacity = 0.8;
    zIndex = 2;
  } else if (position === total - 1) {
    scale = 0.85;
    x = -120;
    opacity = 0.8;
    zIndex = 2;
  } else if (position === 2) {
    scale = 0.7;
    x = 240;
    opacity = 0.5;
    zIndex = 1;
  } else if (position === total - 2) {
    scale = 0.7;
    x = -240;
    opacity = 0.5;
    zIndex = 1;
  }
}

            return (
              <motion.div
                key={item.id}
                animate={{ scale, x, opacity }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{ zIndex }}
                className="absolute md:w-[25vw] md:h-[60vh] w-[80vw] h-[50vh] flex items-center justify-center"
              >
                <div className="relative w-full h-full shadow-2xl rounded-xl overflow-hidden">
                  <img
                    src={item.img}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 
                      bg-[#048DB7] px-6 py-2 rounded-lg text-lg font-semibold shadow-md regulator-nova-alts tracking-wider"
                  >
                    {item.category}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
