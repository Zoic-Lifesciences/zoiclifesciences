"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Phone, Mail, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [isOpen,setIsOpen] =useState(false)
  const pathname = usePathname();

  const handleMouseEnter = (menu) => setOpenMenu(menu);
  const handleMouseLeave = () => setOpenMenu(null);

  const isActive = (path) => pathname === path;

  return (
    <header className="fixed w-screen bg-white z-50 shadow-sm">
      {/* Top Bar */}
      <div className="flex justify-center w-full">
        <div className="hidden md:flex w-[95%] text-[12px] items-center justify-between py-3 text-sm text-gray-600 border-b border-gray-300">
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
      <div className="w-screen h-[10vh] md:hidden justify-end pr-5 flex">
        {isOpen ? <>
<button onClick={() => setIsOpen(false)}>
  <X size={28} />      {/* Close (cross) icon */}
</button></>:<>
        <button onClick={() => setIsOpen(true)}>
  <Menu size={28} />   {/* Hamburger icon */}
</button></> }
      </div>

      {/* Slide-in Mobile Navbar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-white z-50 shadow-2xl p-6 flex flex-col"
            >
              {/* Header with Logo & Close */}
              <div className="flex justify-between items-center mb-6">
                <Image src="/logo.png" alt="Zoic Logo" width={45} height={45} />
                <button onClick={() => setIsOpen(false)}>
                  <X size={28} className="text-gray-700 hover:text-[#048DB7]" />
                </button>
              </div>

              {/* Links */}
              <ul className="space-y-6 text-lg text-gray-800">
                <li>
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className={isActive("/") ? "text-[#048DB7] font-semibold" : ""}
                  >
                    Home
                  </Link>
                </li>
                {["About", "Services", "Careers"].map((menu) => (
              <li
                key={menu}
                className={`relative cursor-pointer flex items-center gap-1 ${
                  pathname.startsWith(`/${menu.toLowerCase()}`)
                    ? "text-[#048DB7] font-semibold"
                    : "text-gray-800 hover:text-[#048DB7]"
                }`}
                onMouseEnter={() => handleMouseEnter(menu)}
                onMouseLeave={handleMouseLeave}
              >
                <Link href={`/${menu.toLowerCase()}`}>{menu}</Link>
                {openMenu === menu ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}

                {/* Dropdown */}
                <AnimatePresence>
                  {openMenu === menu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-full -left-2 mt-2 w-64 bg-white shadow-lg rounded-lg border border-gray-200 p-4 z-50"
                    >
                      {menu === "About" && (
                        <ul className="text-gray-600 space-y-2 text-lg">
                          {[
                            ["/about/director-message", "Director's Message"],
                            ["/about/award-achievement", "Award Achievement"],
                            ["/about/our-team", "Our Team"],
                          ].map(([href, label]) => (
                            <li key={href}>
                              <Link
                                href={href}
                                className={`hover:text-[#048DB7] transition-colors duration-300 ${
                                  isActive(href) ? "text-[#048DB7]" : ""
                                }`}
                              >
                                {label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}

                      {menu === "Services" && (
                        <ul className="text-gray-600 space-y-2 text-lg">
                          {[
                            ["/services/contract-manufacturing", "Contract Manufacturing"],
                            ["/services/third-party", "Third-Party Pharmaceutical Solutions"],
                            ["/services/research-development", "Research & Development"],
                            ["/services/distribution", "Distribution & Supply Chain"],
                          ].map(([href, label]) => (
                            <li key={href}>
                              <Link
                                href={href}
                                className={`hover:text-[#048DB7] transition-colors duration-300 ${
                                  isActive(href) ? "text-[#048DB7]" : ""
                                }`}
                              >
                                {label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}

                      {menu === "Careers" && (
                        <ul className="text-gray-600 space-y-2 text-lg">
                          {[
                            ["/careers/life-at-zoic", "Life At Zoic"],
                            ["/careers/apply", "Apply"],
                          ].map(([href, label]) => (
                            <li key={href}>
                              <Link
                                href={href}
                                className={`hover:text-[#048DB7] transition-colors duration-300 ${
                                  isActive(href) ? "text-[#048DB7]" : ""
                                }`}
                              >
                                {label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
                <li>
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="bg-[#048DB7] text-white px-4 py-2 rounded-full block text-center mt-4"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="w-full flex justify-center">
        <nav className="hidden md:flex md:flex-row flex-col py-2 items-center relative w-full justify-between md:w-[95%]">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Zoic Logo" width={50} height={50} />
          </div>

          {/* Navigation Links */}
          <div className="flex md:flex-row flex-col w-[70%] md:justify-between"> 
            <ul className="flex md:flex-row flex-col md:items-center items-start gap-10 text-lg">
            <li
              className={`${
                isActive("/") ? "text-[#048DB7] font-semibold" : "text-gray-800 hover:text-[#048DB7]"
              }`}
            >
              <Link href="/">Home</Link>
            </li>

            {["About", "Services", "Careers"].map((menu) => (
              <li
                key={menu}
                className={`relative cursor-pointer flex items-center gap-1 ${
                  pathname.startsWith(`/${menu.toLowerCase()}`)
                    ? "text-[#048DB7] font-semibold"
                    : "text-gray-800 hover:text-[#048DB7]"
                }`}
                onMouseEnter={() => handleMouseEnter(menu)}
                onMouseLeave={handleMouseLeave}
              >
                <Link href={`/${menu.toLowerCase()}`}>{menu}</Link>
                {openMenu === menu ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}

                {/* Dropdown */}
                <AnimatePresence>
                  {openMenu === menu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-full -left-2 mt-2 w-64 bg-white shadow-lg rounded-lg border border-gray-200 p-4 z-50"
                    >
                      {menu === "About" && (
                        <ul className="text-gray-600 space-y-2 text-lg">
                          {[
                            ["/about/director-message", "Director's Message"],
                            ["/about/award-achievement", "Award Achievement"],
                            ["/about/our-team", "Our Team"],
                          ].map(([href, label]) => (
                            <li key={href}>
                              <Link
                                href={href}
                                className={`hover:text-[#048DB7] transition-colors duration-300 ${
                                  isActive(href) ? "text-[#048DB7]" : ""
                                }`}
                              >
                                {label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}

                      {menu === "Services" && (
                        <ul className="text-gray-600 space-y-2 text-lg">
                          {[
                            ["/services/contract-manufacturing", "Contract Manufacturing"],
                            ["/services/third-party", "Third-Party Pharmaceutical Solutions"],
                            ["/services/research-development", "Research & Development"],
                            ["/services/distribution", "Distribution & Supply Chain"],
                          ].map(([href, label]) => (
                            <li key={href}>
                              <Link
                                href={href}
                                className={`hover:text-[#048DB7] transition-colors duration-300 ${
                                  isActive(href) ? "text-[#048DB7]" : ""
                                }`}
                              >
                                {label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}

                      {menu === "Careers" && (
                        <ul className="text-gray-600 space-y-2 text-lg">
                          {[
                            ["/careers/life-at-zoic", "Life At Zoic"],
                            ["/careers/apply", "Apply"],
                          ].map(([href, label]) => (
                            <li key={href}>
                              <Link
                                href={href}
                                className={`hover:text-[#048DB7] transition-colors duration-300 ${
                                  isActive(href) ? "text-[#048DB7]" : ""
                                }`}
                              >
                                {label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}

            <li
              className={`cursor-pointer ${
                pathname.startsWith("/products")
                  ? "text-[#048DB7] font-semibold"
                  : "text-gray-800 hover:text-[#048DB7]"
              }`}
            >
              <Link href="/products">Products</Link>
            </li>
          </ul>

          {/* Contact Button */}
          <button className="bg-[#048DB7] md:mt-0 mt-5 text-white px-5 py-2 rounded-full hover:bg-[#03779A] transition">
            <Link href="/contact">Contact Us</Link>
          </button>
          </div>
          
        </nav>
      </div>

      {/* Navbar */}
      
    </header>
  );
}
