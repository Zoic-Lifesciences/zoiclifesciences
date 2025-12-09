"use client";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/NavBar";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useEffect,useState } from "react";

const lifeEvents = [
  {
    title: "Cricket Tournament",
    subtitle: "Teamwork beyond the boardroom",
    desc: "Every year, ZOICians come together for friendly cricket matches that bring out the true spirit of teamwork, strategy, and fun.",
    images: [
      "/life/1.jpg",
      "/life/2.jpg",
      "/life/3.jpg",
      "/life/4.jpg",
      "/life/5.jpg",
      "/life/6.jpg",
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
  const [currentIndex, setCurrentIndex] = useState(0);
    const total = 5;
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % total);
      }, 1500); // rotate every 1.5s
      return () => clearInterval(interval);
    }, [total]);

  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const router = useRouter();
  const stats = [
    { labelTop: "Over", number: 100, suffix: "+", labelBottom: "Employees" },
    { labelTop: "Over", number: 10, suffix: "+", labelBottom: "Teams" },
    {
      labelTop: "Close to",
      number: 500,
      suffix: "+",
      labelBottom: "Brands",
    },
    {
      labelTop: "Export to",
      number: 6,
      suffix: "+",
      labelBottom: "Countries",
    },
  ];
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
    
    <main className="bg-gray-100 text-gray-800 pt-[10vh]">

      {/* ===== Page Header ===== */}
      <section className="bg-gray-100  pb-16">
        <div className="w-screen flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl pt-10 mb-10">At Zoic We bring Vision<br></br>Expertise and Dedication</h1>
          
        </div>
          <section
            ref={ref}
            className=" flex flex-col items-center text-center  text-black"
          >
      
            <div className="w-[80vw] mx-auto grid grid-cols-2  md:grid-cols-4 gap-6 bg-[#1BA3CD]/50 text-white rounded-2xl p-4 md:p-8">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col items-center justify-center p-6 rounded-xl `}
                >
                  <p className=" font-medium mb-2 leading-relaxed">{stat.labelTop}</p>
                  <h3 className="text-white text-4xl md:text-7xl font-bold ">
                    {inView && (
                      <CountUp end={stat.number} duration={2} suffix={stat.suffix} />
                    )}
                  </h3>
                  <p className=" font-medium mt-2 leading-relaxed">{stat.labelBottom}</p>
                </div>
              ))}
            </div>
          </section>
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
              <h2 className="text-4xl font-bold text-[#1BA3CD] mb-3">
                {event.title}
              </h2>
              <h3 className="text-lg font-semibold text-[#1BA3CD]mb-3">
                {event.subtitle}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">{event.desc}</p>
            </motion.div>

            {/* ===== Image Gallery ===== */}
            {/* RIGHT COLUMN: Carousel */}
                    <div className="w-full md:w-[60%] flex justify-center items-center relative h-[60vh]">
                      {event.images.map((item, index) => {
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
                            key={index}
                            animate={{ scale, x, opacity }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            style={{ zIndex }}
                            className="absolute w-[350px] h-[450px] flex items-center justify-center"
                          >
                            <div className="relative w-full h-full shadow-2xl rounded-xl overflow-hidden">
                              <img
                                src={item}
                                className="w-full h-full object-cover rounded-xl"
                              />
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
          </div>
        </section>
      ))}

      {/* ===== CTA Section ===== */}
      <section className="text-center py-24 bg-linear-to-b from-[#1BA3CD] to-[#090A69] text-white">
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
