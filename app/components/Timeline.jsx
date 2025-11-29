import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LegacyTimeline() {
  const boxRef = useRef(null);
  const boxRef2 = useRef(null);
  const boxRef3 = useRef(null);

  const contentRef1 = useRef(null);
const contentRef2 = useRef(null);
const contentRef3 = useRef(null);

  useEffect(() => {

    const animateBox = (target) => {
    gsap.fromTo(
      target,
      { height: "0vh" },
      {
        height: "20vh",
        scrollTrigger: {
          trigger: target,
          start: "top 60%",
          end: "top 20%",
          scrub: true,
        },
      }
    );
  };
  const animateContent = (target) => {
    gsap.fromTo(
      target,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: target,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );
  };

  animateBox(boxRef.current);
  animateBox(boxRef2.current);
  animateBox(boxRef3.current);

  animateContent(contentRef1.current);
  animateContent(contentRef2.current);
  animateContent(contentRef3.current);


    
  }, []);

  return (
    <section className="py-28 px-10 md:px-32 relative bg-blue-100">
      <h2 className="text-5xl font-semibold text-center mb-20">Our Legacy</h2>

      <div className="w-[80vw] gap-12 flex flex-col justify-between relative">
        <div className="flex flex-row-reverse justify-between h-[35vh]">
          <div className="w-[40%] relative">
            <h1 className="text-6xl absolute left-[-25%]">01</h1>
            <div className="w-[5px] h-[20vh] absolute bg-gray-300 left-[-20%] top-[10vh]"></div>
            <div
              ref={boxRef}
              className="w-[5px] h-[20vh] absolute bg-[#1BA3CD] left-[-20%] top-[10vh] flex"
            />
            <div className="bg-gray-100 p-4 rounded-2xl" ref={contentRef1}>
              <h1 className="text-5xl mb-5">Heading</h1>
              <p>
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
              </p>
            </div>
          </div>
          <div className="w-[40%]"></div>
        </div>

        <div className="flex flex-row h-[35vh] justify-between">
          <div className="w-[40%] relative">
            <div className="bg-gray-100 p-4 rounded-2xl" ref={contentRef2}>
              <h1 className="text-5xl mb-5">Heading</h1>
              <p>
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
              </p>
            </div>
          </div>

          <div className="w-[40%] relative">
            <h1 className="text-6xl absolute left-[-25%]">02</h1>
            <div className="w-[5px] h-[20vh] absolute bg-gray-300 left-[-20%] top-[10vh]"></div>
            <div
              ref={boxRef2}
              className="w-[5px] h-[20vh] absolute bg-[#1BA3CD] left-[-20%] top-[10vh] flex"
            />
          </div>
        </div>

        <div className="flex flex-row-reverse h-[35vh] justify-between">
          <div className="w-[40%] relative">
            <h1 className="text-6xl absolute left-[-25%]">03</h1>
            <div className="w-[5px] h-[20vh] absolute bg-gray-300 left-[-20%] top-[10vh]"></div>
            <div
              ref={boxRef3}
              className="w-[5px] h-[20vh] absolute bg-[#1BA3CD] left-[-20%] top-[10vh] flex"
            />
            <div className="bg-gray-100 p-4 rounded-2xl" ref={contentRef3}>
              <h1 className="text-5xl mb-5">Heading</h1>
              <p>
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
              </p>
            </div>
          </div>
          <div className="w-[40%]"></div>
        </div>
      </div>
    </section>
  );
}
