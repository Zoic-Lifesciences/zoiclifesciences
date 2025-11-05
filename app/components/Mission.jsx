"use client";
import { Target, Eye, Gem, ShieldCheck } from "lucide-react";

export default function MissionSection() {
  return (
    <section className="w-screen h-screen flex items-center justify-center bg-linear-to-br">
      <div className="flex flex-row items-center justify-between w-[75%]">
        {/* Left Section - Cards */}
        <div className="grid grid-cols-2 gap-6 w-[50%]">
          {/* Mission */}
          <div className="group bg-[#04A0D1] text-white p-6 rounded-2xl shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-300">
            <Target className="w-10 h-10 mb-3 group-hover:text-white transition-colors duration-300" />
            <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
            <p>
              We at Zoic Life Sciences believe that complete customer
              satisfaction is the key to expanding business everywhere.
            </p>
          </div>

          {/* Vision */}
          <div className="group bg-white text-gray-800 p-6 rounded-2xl shadow-xl transform hover:bg-[#04A0D1] hover:text-white transition-transform duration-300">
            <Eye className="w-10 h-10 mb-3 text-gray-700 group-hover:text-white transition-colors duration-300" />
            <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
            <p>
              To uphold our social responsibilities by delivering the highest
              standard of healthcare services.
            </p>
          </div>

          {/* Value */}
          <div className="group bg-white text-gray-800 p-6 rounded-2xl shadow-xl transform hover:bg-[#04A0D1] hover:text-white transition-transform duration-300">
            <Gem className="w-10 h-10 mb-3 text-gray-700 group-hover:text-white transition-colors duration-300" />
            <h2 className="text-xl font-semibold mb-2">Our Value</h2>
            <p>
              Our business values with clients are as simple as lifelong
              “business relations”.
            </p>
          </div>

          {/* Quality Control */}
          <div className="group bg-white text-gray-800 p-6 rounded-2xl shadow-xl transform hover:bg-[#04A0D1] hover:text-white transition-transform duration-300">
            <ShieldCheck className="w-10 h-10 mb-3 text-gray-700 group-hover:text-white transition-colors duration-300" />
            <h2 className="text-xl font-semibold mb-2">Quality Control</h2>
            <p>
              Our medicines are developed under the strict guidance of renowned
              healthcare professionals.
            </p>
          </div>
        </div>

        {/* Right Section - Heading */}
        <div className="w-[45%] pl-12 relative">
          <div className="absolute -z-10 w-[900px] h-[500px] rounded-full ml-[-450px] mt-[-250px] blur-3xl bg-[radial-gradient(circle_at_center,rgba(4,160,209,0.3)_0%,rgba(255,255,255,0)_70%)]"></div>

          <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Our Mission, Vision, <br /> and Values
          </h1>
          <p className="text-gray-600">
            We strive to deliver excellence in every aspect of healthcare,
            combining integrity, innovation, and compassion.
          </p>
        </div>
      </div>
    </section>
  );
}
