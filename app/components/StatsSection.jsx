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
      className=" flex flex-col items-center text-center py-16 text-black"
    >
      <h2 className="regulator-nova-alts-straight font-bold tracking-wider text-2xl md:text-4xl  mb-12 leading-relaxed">
        Driven By Quality,&nbsp; Driven By Trust
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-2 gap-8">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center p-6 rounded-xl `}
          >
            <p className=" font-medium mb-2 leading-relaxed">{stat.labelTop}</p>
            <h3 className="text-[#6FC1C4] text-4xl md:text-7xl font-bold ">
              {inView && (
                <CountUp end={stat.number} duration={2} suffix={stat.suffix} />
              )}
            </h3>
            <p className=" font-medium mt-2 leading-relaxed">{stat.labelBottom}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
