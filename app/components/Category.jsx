"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = [
  { id: 1, img: "/haldi.jpeg" },
  { id: 2, img: "/Aloevera.jpeg" },
  { id: 3, img: "/gulabjal.jpeg" },
  { id: 4, img: "/footcream.jpeg" },
  { id: 5, img: "/suncreen.jpeg" },
];

export default function Category() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    gsap.fromTo(
      container,
      { x: 1000 }, // start fully right
      {
        x: 0, // end at center
        scrollTrigger: {
          trigger: container,
          start: "top bottom",    // start when container enters viewport
          end: "bottom-=650 top",  // finish animation when container center reaches viewport center
          scrub: true,
        },
      }
    );
  }, []);

  const total = data.length;
  const startAngle = -20;
  const endAngle = 20;

  return (
    <div className="flex flex-col overflow-x-hidden items-center">
         <h1 className="text-5xl text-center my-10 ">Categories</h1>
        <p className="w-[40vw] mb-10 text-center">Owning ISO GMP manufacturing infrastructure facilities benefits associates with in-house services of drug formulations sourced from trusted and credible vendors.</p>
        <div className="w-screen h-[80vh] justify-center items-center">
<div
        ref={containerRef}
        className="flex flex-row gap-8 items-end mt-5"
      >
        {data.map((item, index) => {
          const angle =
            startAngle + ((endAngle - startAngle) / (total - 1)) * index;

          const mid = (total - 1) / 2;
          const mb = -Math.pow(index - mid, 2) + Math.pow(mid, 2);
          const scaledMb = (mb / Math.pow(mid, 2)) * 100;

          return (
            <div
              key={item.id}
              className="w-[18vw] bg-black h-[50vh] bg-cover bg-center rounded-xl shadow-lg"
              style={{
                backgroundImage: `url(${item.img})`,
                transform: `rotate(${angle}deg)`,
                marginBottom: `${scaledMb}px`,
              }}
            >
                <h2 className="w-full bg-gray-400/60 font-semibold text-2xl text-center absolute bottom-0">OIL</h2>
            </div>
          );
        })}
      </div>
        </div>
       
    </div>
  );
}
