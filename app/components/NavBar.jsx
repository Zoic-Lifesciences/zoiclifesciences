"use client";
import { useState } from "react";
import { Phone, Mail, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);

  const handleMouseEnter = (menu) => {
    setOpenMenu(menu);
  };

  const handleMouseLeave = (menu) => {
    setOpenMenu(null);
  };

  return (
    <header className="fixed bg-white z-50">
      <div className="flex justify-center w-screen">
        <div className="flex w-[95%] text-[12px] items-center justify-between px-6 py-3 text-sm text-gray-600 border-b border-gray-300">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+(91)98736 12234</span>
            </div>
            <div className="flex items-center gap-2 border-r-2 pr-2 border-gray-300">
              <Mail size={16} />
              <span>info@zoiclifesciences.com</span>
            </div>
          </div>
          <p className="text-gray-500 text-[12px]">
            Delivering trusted pharmaceutical excellence — because your health
            deserves the best. Happy to serve you!
          </p>
        </div>
      </div>

      <div className="w-screen flex justify-center">
        <nav className="flex w-[95vw] justify-between py-2">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Zoic Logo" width={50} height={50} />
          </div>

          <ul className="flex items-center gap-10 text-lg">
            <li className="text-[#048DB7] font-semibold">
              <Link href="/">Home</Link>
            </li>
            {["About", "Services", "Products"].map((menu) => (
              <li
                key={menu}
                className="hover:text-[#048DB7] cursor-pointer flex items-center gap-1 relative"
                onMouseEnter={() => handleMouseEnter(menu)}
              >
                <Link href={`/${menu.toLowerCase()}`}>{menu}</Link>
                {openMenu === menu ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </li>
            ))}
            <li className="hover:text-[#048DB7] cursor-pointer">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-[#048DB7] cursor-pointer">
              <Link href="/careers">Careers</Link>
            </li>
          </ul>

          <button className="bg-[#048DB7] text-white px-5 py-2 rounded-full hover:bg-[#048DB7] transition">
            <Link href="/contact">Contact Us</Link>
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {openMenu && (
          <motion.div
            key={openMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "50vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-screen bg-gray-50 border-t border-gray-300 shadow-lg flex z-10 overflow-hidden justify-center items-center"
          >
            {openMenu === "About" && (
              <div className="text-start " onMouseLeave={() => handleMouseLeave(null)}>
                <h2 className="text-2xl font-semibold text-[#048DB7] mb-4">
                  About Us
                </h2>
                <ul className="text-gray-600 space-y-2 text-xl">
                  <li><Link className="hover:text-[#048DB7] transition-colors duration-300 hover:font-bold" href="/about/director-message">Director's Message</Link></li>
                  <li><Link className="hover:text-[#048DB7] transition-colors duration-300 hover:font-bold" href="/about/award-achievement">Award Achievement</Link></li>
                  <li><Link className="hover:text-[#048DB7] transition-colors duration-300 hover:font-bold" href="/about/our-team">Our Team</Link></li>
                </ul>
              </div>
            )}

            {openMenu === "Services" && (
              <div className="text-start " onMouseLeave={() => handleMouseLeave(null)}>
                <h2 className="text-2xl font-semibold text-[#048DB7] mb-4">
                  Our Services
                </h2>
                <ul className="text-gray-600 space-y-2  text-xl">
                  <li><Link className="hover:text-[#048DB7] transition-colors duration-300 hover:font-bold" href="/services/contract-manufacturing">Contract Manufacturing</Link></li>
                  <li><Link className="hover:text-[#048DB7] transition-colors duration-300 hover:font-bold" href="/services/third-party">Third-Party Pharmaceutical Solutions</Link></li>
                  <li><Link className="hover:text-[#048DB7] transition-colors duration-300 hover:font-bold" href="/services/research-development">Research & Development</Link></li>
                  <li><Link className="hover:text-[#048DB7] transition-colors duration-300 hover:font-bold" href="/services/distribution">Distribution & Supply Chain</Link></li>
                </ul>
              </div>
            )}

            {openMenu === "Products" && (
              <div className="text-center " onMouseLeave={() => handleMouseLeave(null)}>
                <h2 className="text-2xl font-semibold text-[#048DB7] mb-4">
                  Our Products
                </h2>
                <div className="space-y-2 text-gray-600 text-xl">
                  <ul>
                    <li><Link className="hover:text-[#048DB7] transition-colors duration-300 hover:font-bold" href="/products/tablets">Tablets</Link></li>
                    <li><Link className="hover:text-[#048DB7] transition-colors duration-300 hover:font-bold" href="/products/capsules">Capsules</Link></li>
                    <li><Link className="hover:text-[#048DB7] transition-colors duration-300 hover:font-bold" href="/products/soap">Soap</Link></li>
                    <li><Link className="hover:text-[#048DB7] transition-colors duration-300 hover:font-bold" href="/products/syrup">Syrup</Link></li>
                    <li><Link className="hover:text-[#048DB7] transition-colors duration-300 hover:font-bold" href="/products/drop">Drop</Link></li>
                    <li><Link className="hover:text-[#048DB7] transition-colors duration-300 hover:font-bold" href="/products/tube">Tube</Link></li>
                  </ul>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
