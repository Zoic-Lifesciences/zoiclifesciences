"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  const stats = [
    { labelTop: "Present In", number: 20, suffix: "+", labelBottom: "States" },
    { labelTop: "Over", number: 500, suffix: "+", labelBottom: "Clients" },
    {
      labelTop: "Close to",
      number: 1500,
      suffix: "+",
      labelBottom: "Brands",
    },
    {
      labelTop: "More than",
      number: 0,
      suffix: "+",
      labelBottom: "DCGI Approved Products",
    },
  ];

  return (
    <section
      ref={ref}
      className="flex flex-col items-center text-center py-16 bg-gray-800 text-white"
    >
      <h2 className="text-2xl md:text-3xl font-bold  mb-12">
        DRIVEN BY QUALITY,&nbsp; DRIVEN BY TRUST
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center p-6 rounded-xl`}
          >
            <p className=" font-medium mb-2">{stat.labelTop}</p>
            <h3 className="text-[#6FC1C4] text-4xl md:text-5xl font-bold">
              {inView && (
                <CountUp end={stat.number} duration={2} suffix={stat.suffix} />
              )}
            </h3>
            <p className=" font-medium mt-2">{stat.labelBottom}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
