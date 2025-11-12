"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Phone, Mail, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const pathname = usePathname();

  const handleMouseEnter = (menu) => setOpenMenu(menu);
  const handleMouseLeave = () => setOpenMenu(null);

  const isActive = (path) => pathname === path;

  return (
    <header className="fixed w-full bg-white z-50 shadow-sm">
      {/* Top Bar */}
      <div className="flex justify-center w-full">
        <div className="flex w-[95%] text-[12px] items-center justify-between py-3 text-sm text-gray-600 border-b border-gray-300">
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
      <div className="w-full flex justify-center">
        <nav className="flex w-[95vw] justify-between py-2 items-center relative">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Zoic Logo" width={50} height={50} />
          </div>

          {/* Navigation Links */}
          <ul className="flex items-center gap-10 text-lg">
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
          <button className="bg-[#048DB7] text-white px-5 py-2 rounded-full hover:bg-[#03779A] transition">
            <Link href="/contact">Contact Us</Link>
          </button>
        </nav>
      </div>
    </header>
  );
}
