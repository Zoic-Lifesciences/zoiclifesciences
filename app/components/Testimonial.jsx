// components/ClientTestimonials.js
import Image from "next/image";

const topTestimonials = [
  {
    name: "John Doe",
    role: "Head of Customer Experience, Pharma",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, reprehenderit.",
    image: "/person.png",
  },
  {
    name: "Jane Smith",
    role: "CEO, MedLife",
    text: "Their services have been exceptional and consistent throughout.",
    image: "/person.png",
  },
  {
    name: "Alex Johnson",
    role: "Marketing Manager, HealthCorp",
    text: "Highly recommend their PCD franchise solutions.",
    image: "/person.png",
  },
  // add more as needed
];

const bottomTestimonials = [
  {
    name: "Emily Davis",
    role: "Director, PharmaPlus",
    text: "Professional and reliable partnership from day one.",
    image: "/person.png",
  },
  {
    name: "Michael Brown",
    role: "COO, MedZone",
    text: "Excellent quality and support. Truly a trusted partner.",
    image: "/person.png",
  },
  {
    name: "Sarah Wilson",
    role: "Founder, HealthPro",
    text: "Seamless experience working with this team.",
    image: "/person.png",
  },
  // add more as needed
];

export default function Testimonial() {
  return (
    <section className="relative overflow-hidden py-16 bg-linear-to-b from-[#FFFFFF] to-[#D3EDFF]">
      <div className="text-start mb-10 flex justify-center">
        <div className="flex md:flex-row flex-col justify-between w-[80%] items-center">
          <div>
            <h2 className="md:text-6xl text-5xl text-[#090A69]">
              What <span className="text-[#048DB7]">Our Clients</span> Say
            </h2>
            <p className="text-gray-600 mt-2">
              Hear Directly From Our Satisfied Partners
            </p>
          </div>

          <button className="px-6 py-4 md:mt-0 mt-10 min-h-0 bg-[#048DB7] hover:bg-sky-600 text-white rounded-full shadow-md transition">
            Review us on Google
          </button>
        </div>
      </div>

      {/* Upper Row - Marquee Left */}
      <div className="overflow-hidden whitespace-nowrap mb-8">
        <div className="inline-flex animate-marqueeLeft gap-6">
          {[...topTestimonials, ...topTestimonials].map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>

      {/* Lower Row - Marquee Right */}
      <div className="overflow-hidden whitespace-nowrap">
        <div className="inline-flex animate-marqueeRight gap-6">
          {[...bottomTestimonials, ...bottomTestimonials].map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ name, role, text, image }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 md:w-[400px] w-[300px] shrink-0 overflow-hidden">
      <div className="text-gray-500 text-2xl mb-2">“</div>
      <p className="text-gray-600 text-sm mb-4 break-words whitespace-normal">{text}</p>
      <div className="flex items-center gap-3 mt-4 min-w-0">
        <Image
          src={image}
          alt={name}
          width={40}
          height={40}
          className="rounded-full flex-shrink-0"
        />
        <div className="min-w-0">
          <p className="font-bold text-sm truncate">{name}</p>
          <p className="text-gray-500 text-xs truncate">{role}</p>
        </div>
      </div>
    </div>
  );
}
