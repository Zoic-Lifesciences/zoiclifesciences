"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const data = [
  { id: 1, img: "/haldi.jpeg" },
  { id: 2, img: "/Aloevera.jpeg" },
  { id: 3, img: "/gulabjal.jpeg" },
  { id: 4, img: "/footcream.jpeg" },
  { id: 5, img: "/suncreen.jpeg" },
];

export default function Category() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const rotate = useTransform(scrollYProgress, [0, 1], [10, 0]);
  const x = useTransform(scrollYProgress, [0, 1], ["40%", "-10%"]);
  const total = data.length;
  const startAngle = -20;
  const endAngle = 20;

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-6xl text-center my-10">Categories</h1>
      <p className="w-[40vw] mb-10 text-center">
        Owning ISO GMP manufacturing infrastructure facilities benefits
        associates with in-house services of drug formulations sourced from
        trusted and credible vendors.
      </p>

      <div className="w-screen h-[300vh] flex" ref={ref}>
        <div className="sticky top-[20vh] h-screen overflow-hidden">
          <motion.div
            className="flex flex-row gap-8 items-end mt-5"
            style={{
              rotate,
              x
            }}
          >
            {data.map((item, index) => {
              const angle =
                startAngle +
                ((endAngle - startAngle) / (total - 1)) * index;
              const mid = (total - 1) / 2;
              const mb = -Math.pow(index - mid, 2) + Math.pow(mid, 2);
              const scaledMb = (mb / Math.pow(mid, 2)) * 100;

              return (
                <div
                  key={item.id}
                  className="relative w-[18vw] h-[50vh] bg-black bg-cover bg-center rounded-xl shadow-lg"
                  style={{
                    backgroundImage: `url(${item.img})`,
                    transform: `rotate(${angle}deg)`,
                    marginBottom: `${scaledMb}px`,
                  }}
                >
                  <h2 className="w-full bg-gray-400/60 font-semibold text-2xl text-center absolute bottom-0">
                    OIL
                  </h2>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
