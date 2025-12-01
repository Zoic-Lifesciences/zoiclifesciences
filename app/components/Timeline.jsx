import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LegacyTimeline() {
  const boxRefs = useRef([]);
  const contentRefs = useRef([]);

  useEffect(() => {
    boxRefs.current.forEach((box) => {
      if (!box) return;
      gsap.fromTo(
        box,
        { height: "0vh" },
        {
          height: "20vh",
          scrollTrigger: {
            trigger: box,
            start: "top 60%",
            end: "top 20%",
            scrub: true,
          },
        }
      );
    });

    contentRefs.current.forEach((content) => {
      if (!content) return;
      gsap.fromTo(
        content,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: content,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const milestones = [
    { year: "2000", text: "ZOIC founded with a focus on ethical pharma solutions." },
    { year: "2002", text: "First international partnership established." },
    { year: "2005", text: "Expanded manufacturing capabilities." },
    { year: "2010", text: "Entered 15+ countries with R&D centers." },
    { year: "2012", text: "Received multiple pharma quality certifications." },
    { year: "2015", text: "Launched biotechnology division." },
    { year: "2017", text: "Introduced sustainable pharma initiatives." },
    { year: "2020", text: "Adopted AI & digital therapeutics in operations." },
    { year: "2022", text: "Global expansion into 40+ countries." },
    { year: "2025", text: "Future-focused initiatives for precision medicine." },
  ];
    

  return (
    <section className="py-28 px-10 md:px-32 relative bg-linear-to-b from-[#1BA3CD]/10 to-[#090A69]/90">
      <h2 className="text-6xl font- text-center mb-20">Our Legacy</h2>

      <div className="w-[80vw] gap-12 flex flex-col justify-between relative">

        { milestones.map((obj,index)=>{
          return index%2===0 ? (
          <div key={index} className="flex flex-row-reverse justify-between h-[35vh]">
            <div className="w-[40%] relative">
              <h1 className="text-6xl absolute left-[-25%]">0{index+1}</h1>
              <div className="w-[5px] h-[20vh] absolute bg-gray-300 left-[-20%] top-[10vh]"></div>
              <div
                ref={(el) => (boxRefs.current[index] = el)}
                className="w-[5px] h-[20vh] absolute bg-[#1BA3CD] left-[-20%] top-[10vh] flex"
              />
              <div className="bg-gray-100 p-4 rounded-2xl" ref={(el) => (contentRefs.current[index] = el)}>
                <h1 className="text-5xl mb-5">{obj.year}</h1>
                <p>
                  {obj.text}
                </p>
              </div>
            </div>
            <div className="w-[40%]"></div>
          </div>
          ):(
          <div key={index} className="flex flex-row h-[35vh] justify-between">
            <div className="w-[40%] relative">
              <div className="bg-gray-100 p-4 rounded-2xl" ref={(el) => (contentRefs.current[index] = el)}>
                <h1 className="text-5xl mb-5">{obj.year}</h1>
                <p>
                  {obj.text}
                </p>
              </div>
            </div>

            <div className="w-[40%] relative">
              <h1 className="text-6xl absolute left-[-25%]">0{index+1}</h1>
              <div className="w-[5px] h-[20vh] absolute bg-gray-300 left-[-20%] top-[10vh]"></div>
              <div
                ref={(el) => (boxRefs.current[index] = el)}
                className="w-[5px] h-[20vh] absolute bg-[#1BA3CD] left-[-20%] top-[10vh] flex"
              />
            </div>
          </div>)
        })
      }
      </div>
    </section>
  );
}
