"use client";
import { useState } from "react";
import { Phone, Mail, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
      {/* Top bar */}
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

      {/* Navbar */}
      <div className="w-screen flex justify-center">
        <nav className="flex w-[95vw] justify-between py-2">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Zoic Logo" width={50} height={50} />
          </div>

          {/* Menu */}
          <ul className="flex items-center gap-10 text-lg">
            <li className="text-[#048DB7] font-semibold">Home</li>
            {["About", "Services", "Products"].map((menu) => (
              <li
                key={menu}
                className="hover:text-[#048DB7] cursor-pointer flex items-center gap-1 relative"
                onMouseEnter={() => handleMouseEnter(menu)}
                onMouseLeave={() => handleMouseLeave(null)}
              >
                {menu}
                {openMenu === menu ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </li>
            ))}
            <li className="hover:text-[#048DB7] cursor-pointer">Blogs</li>
            <li className="hover:text-[#048DB7] cursor-pointer">Careers</li>
          </ul>

          <button className="bg-[#048DB7] text-white px-5 py-2 rounded-full hover:bg-[#048DB7] transition">
            Contact Us
          </button>
        </nav>
      </div>

      {/* Animated Dropdown Panel */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            key={openMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "50vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-screen bg-gray-50 border-t border-gray-300 shadow-lg flex justify-center items-center z-10 overflow-hidden"
          >
            {openMenu === "About" && (
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-[#048DB7] mb-4">
                  About Us
                </h2>
                <p className="text-gray-600 max-w-xl">
                  We are a trusted pharmaceutical company committed to improving
                  lives through quality healthcare products and innovation.
                </p>
              </div>
            )}

            {openMenu === "Services" && (
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-[#048DB7] mb-4">
                  Our Services
                </h2>
                <ul className="text-gray-600 space-y-2">
                  <li>🔹 Contract Manufacturing</li>
                  <li>🔹 Third-Party Pharmaceutical Solutions</li>
                  <li>🔹 Research & Development</li>
                  <li>🔹 Distribution & Supply Chain</li>
                </ul>
              </div>
            )}

            {openMenu === "Products" && (
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-[#048DB7] mb-4">
                  Our Products
                </h2>
                <div className="grid grid-cols-3 gap-6 text-gray-600">
                  <div>
                    <h3 className="font-semibold text-teal-600">Tablets</h3>
                    <p>
                      High-quality formulations for various health conditions.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-teal-600">Capsules</h3>
                    <p>
                      Safe and effective dosages for better patient outcomes.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-teal-600">Syrups</h3>
                    <p>
                      Trusted liquid solutions suitable for all age groups.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
