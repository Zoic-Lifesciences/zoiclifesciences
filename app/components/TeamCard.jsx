import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

export default function TeamCard({ name, role, image, bio }) {
  return (
    <div
      className="
        flex flex-col md:flex-row
        md:[&:nth-child(even)]:flex-row-reverse
        items-center relative justify-between
        bg-linear-to-l from-[#1BA3CD] to-[#090A69]
        text-white p-8 rounded-2xl shadow-lg
        w-full max-w-7xl mx-auto gap-8
      "
    >
      {/* Left blurb */}
      <div className="relative md:w-[60%] w-[90%]">
        <FaQuoteLeft className="text-white mb-2 text-2xl" />
        <p className="text-lg leading-relaxed">{bio}</p>
      </div>

      {/* Right Info */}
      <div className="flex flex-col items-center w-full md:w-[40%] ml-5 mt-5">
        <div className="w-full h-[30vh] md:h-[60vh] rounded-xl overflow-hidden">
          <Image
            src={image}
            alt={name}
            width={280}
            height={280}
            className="object-cover object-top w-full h-full"
          />
        </div>

        <div className="mt-3 text-center">
          <p className="font-semibold text-2xl uppercase">{name}</p>
          <p className="text-xl opacity-90">{role}</p>
        </div>
      </div>
    </div>
  );
}

