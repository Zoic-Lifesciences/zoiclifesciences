// components/Footer.jsx
import Image from "next/image";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0474A7] to-[#121C92] text-white py-12 px-6 md:px-20 rounded-t-3xl shadow-[0_0_40px_rgba(0,0,0,0.3)]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16 mb-8">
        {/* --- Logo & Description --- */}
        <div>
          <Image src="/logo.png" alt="Zoic Logo" width={120} height={80} />
          <p className="text-sm mt-4 leading-relaxed text-gray-200">
            Zoic Life Sciences has earned a reputation as Top Pharma Company in Dehradun 
            with complete customer satisfaction, accredited by ISO 9001:2008, WHO, GMP, 
            and FDI specialized agencies.
          </p>
          <p className="text-sm mt-4 text-gray-200">
            The organization is also known as the best PCD Pharma Franchise Company in India.
          </p>
        </div>

        {/* --- Quick Links --- */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-cyan-300">Home</a></li>
            <li><a href="#" className="hover:text-cyan-300">About</a></li>
            <li><a href="#" className="hover:text-cyan-300">Services</a></li>
            <li><a href="#" className="hover:text-cyan-300">Products</a></li>
            <li><a href="#" className="hover:text-cyan-300">Contact Us</a></li>
          </ul>
        </div>

        {/* --- Our Products --- */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Our Products</h3>
          <ul className="space-y-2 text-sm">
            <li>Tablets</li>
            <li>Capsules</li>
            <li>Syrup</li>
            <li>Oil</li>
            <li>Injections</li>
          </ul>
        </div>

        {/* --- Contact Info --- */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
          <div className="space-y-3 text-sm text-gray-200">
            <p className="flex items-start gap-2">
              <HiOutlineLocationMarker className="text-xl text-cyan-300" />
              Plot No.72/1 Tyagi Road, Dehradun-248001, Uttarakhand, India
            </p>
            <p className="flex items-center gap-2">
              <HiOutlinePhone className="text-xl text-cyan-300" /> 
              +91 7088014041, +91 7060249961
            </p>
            <p className="flex items-center gap-2">
              <HiOutlineMail className="text-xl text-cyan-300" /> 
              zoiclifesciences.sales@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <HiOutlineMail className="text-xl text-cyan-300" /> 
              zoiclifesciences.med@gmail.com
            </p>
          </div>

          {/* --- Social Icons --- */}
          <div className="flex gap-4 mt-4">
            {[
              { Icon: FaTwitter, href: "#" },
              { Icon: FaFacebookF, href: "#" },
              { Icon: FaInstagram, href: "#" },
              { Icon: FaLinkedinIn, href: "#" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-black/20 hover:bg-cyan-500 transition-colors"
              >
                <Icon className="text-white" size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* --- Copyright --- */}
      <div className="border-t border-white/30 pt-6 text-center text-sm text-gray-200">
        Copyright ©2025, <span className="font-semibold text-white">Zoic Life Sciences</span>
      </div>
    </footer>
  );
}
