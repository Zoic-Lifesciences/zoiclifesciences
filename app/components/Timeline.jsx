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
    { year: "2000", text: "The company was established in Uttarakhand with the strong commitment to ethical practices." },
    { year: "2004", text: "Expanded operation to himachal pradesh with an ethical practices." },
    { year: "2009", text: "Landed in western UP with ethical presence." },
    { year: "2014", text: "Launched the PCD PHARMA FRANCHISE, first franchise was started in Guwahati Assam. Currently we are successfully covering 20+ states through growing pcd franchsie network." },
    { year: "2021", text: "Set up our first in house manufacturing unit in the liquid and ointment section" },
    { year: "2023", text: "ZOIC Lifesciences Did it's first export, setting up a benchmark for generations to come." },
    { year: "2025", text: "Planning to establish another manufacturing unit for tablets and capsules section" },
  ];
    

  return (
    <section className="py-28 px-10 md:px-32 relative bg-linear-to-b from-[#1BA3CD]/10 to-[#090A69]/90">
      <h2 className="md:text-6xl text-5xl  text-center mb-20">Our Legacy</h2>

      <div className="w-[80vw] gap-12 flex flex-col justify-between relative">

        { milestones.map((obj,index)=>{
          return index%2===0 ? (
          <div key={index} className="flex flex-row-reverse justify-between h-[35vh]">
            <div className="w-[40%] relative">
              <h1 className="md:text-6xl text-3xl absolute left-[-25%]">0{index+1}</h1>
              <div className="w-[5px] h-[20vh] absolute bg-gray-300 left-[-20%] top-[10vh]"></div>
              <div
                ref={(el) => (boxRefs.current[index] = el)}
                className="w-[5px] h-[20vh] absolute bg-[#1BA3CD] left-[-20%] top-[10vh] flex"
              />
              <div className="bg-gray-100 p-4 rounded-2xl" ref={(el) => (contentRefs.current[index] = el)}>
                <h1 className="md:text-5xl text-2xl mb-5">{obj.year}</h1>
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
                <h1 className="md:text-5xl text-2xl mb-5">{obj.year}</h1>
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
