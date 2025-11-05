// components/ClientTestimonials.js
import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="relative overflow-hidden py-16 bg-gradient-to-b from-[#FFFFFF] to-[#D3EDFF]">
      <div className="text-start mb-10 flex justify-center">
        <div className="flex justify-between w-[80%] items-center">
            <div>
                <h2 className="text-6xl font-bold">
          What <span className="text-[#048DB7]">Our Clients</span> Say
        </h2>
        <p className="text-gray-600 mt-2">
          Hear Directly From Our Satisfied Partners
        </p>
            </div>

            <button className="px-6 py-4 min-h-0 bg-[#048DB7] hover:bg-sky-600 text-white rounded-full shadow-md transition">
          Review us on Google
        </button>
        </div>
        
        
      </div>

      {/* Upper Row - Marquee Left */}
      <div className="overflow-hidden whitespace-nowrap mb-8">
        <div className="inline-flex animate-marqueeLeft gap-6">
          {[...Array(6)].map((_, i) => (
            <TestimonialCard key={i} />
          ))}
        </div>
      </div>

      {/* Lower Row - Marquee Right */}
      <div className="overflow-hidden whitespace-nowrap">
        <div className="inline-flex animate-marqueeRight gap-6">
          {[...Array(6)].map((_, i) => (
            <TestimonialCard key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard() {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-[400px] flex-shrink-0 overflow-hidden">
      <div className="text-gray-500 text-2xl mb-2">“</div>
      <p className="text-gray-600 text-sm mb-4 break-words whitespace-normal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
        reprehenderit. Lorem ipsum dolor sit amet consectetur.
      </p>
      <div className="flex items-center gap-3 mt-4 min-w-0">
        <Image
          src="/product.png"
          alt="Client"
          width={40}
          height={40}
          className="rounded-full flex-shrink-0"
        />
        <div className="min-w-0">
          <p className="font-bold text-sm truncate">John Doe</p>
          <p className="text-gray-500 text-xs truncate">
            Head of Customer Experience, Pharma
          </p>
        </div>
      </div>
    </div>
  );
}

