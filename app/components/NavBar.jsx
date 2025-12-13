"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Phone, Mail, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleMouseEnter = (menu) => setOpenMenu(menu);
  const handleMouseLeave = () => setOpenMenu(null);

  const isActive = (path) => pathname === path;

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (pathname === "/contact") {
      setScrolled(true);
      return;
    }
    if (pathname === "/products" || pathname.startsWith("/products") ){
      setScrolled(true);
      return;
    }
    if (pathname === "/blog " || pathname.startsWith("/blog/")) {
      setScrolled(true);
      return;
    }
    if (pathname === "/careers/life-at-zoic") {
      setScrolled(true);
      return;
    }
    if (pathname === "/careers/life-at-zoic") {
      setScrolled(true);
      return;
    }
    if (pathname === "/about/team") {
      setScrolled(true);
      return;
    }
    if (pathname === "/careers") {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <div className="relative">

      <div className="w-screen h-[10vh] z-50 fixed bg-white text-black md:hidden items-center justify-between px-5 flex">
        <div>
          <Image src="/logo.png" alt="Zoic Logo" width={45} height={45} />
        </div>
        <div className="">
          {isOpen ? (
          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        ) : (
          <button onClick={() => setIsOpen(true)}>
            <Menu size={28} />
          </button>
        )}
        </div>
        
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
              className="fixed inset-0 z-40"
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
              <div className="flex justify-end items-center mb-6 ">
                <button onClick={() => setIsOpen(false)}>
                  <X size={28} className="text-gray-700 hover:text-[#048DB7]" />
                </button>
              </div>

              {/* Links */}
              <ul className="space-y-6 text-lg text-gray-800 bg-white">
                <li>
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className={isActive("/") ? "text-[#048DB7]" : ""}
                  >
                    Home
                  </Link>
                </li>

                {["About", "Services", "Careers"].map((menu) => (
                  <li
                    key={menu}
                    className={`relative cursor-pointer flex items-center gap-1 ${
                      pathname.startsWith(`/${menu.toLowerCase()}`)
                        ? "text-[#048DB7]"
                        : "text-gray-800 hover:text-[#048DB7]"
                    }`}
                    onMouseEnter={() => handleMouseEnter(menu)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {menu === "Services" ? (
                      <Link href="/services/third-party-manufacturing">Services</Link>
                    ) : (
                      <Link href={`/${menu.toLowerCase()}`}>{menu}</Link>
                    )}

                    {openMenu === menu ? <ChevronUp size={16} /> : <ChevronDown size={16} />}

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
                                ["/about", "Overview"],
                                ["/about/awards", "Award Achievement"],
                                ["/about/team", "Our Team"],
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
                                ["/services/pcd-pharma-franchise", "PCD Pharma Franchise"],
                                ["/services/third-party-manufacturing", "Third-Party Manufacturing"],
                                ["/services/oversees-business", "Oversees Business"],
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
                                ["/careers/", "Apply"],
                                ["/careers/life-at-zoic", "Life At Zoic"],
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
                    href="/services/pcd-pharma-franchise"
                    onClick={() => setIsOpen(false)}
                    className={isActive("/pcd-pharma-franchise") ? "text-[#048DB7]" : ""}
                  >
                    PCD Franchise
                  </Link>
                </li>

                <li>
                  <Link
                    href="/blog"
                    onClick={() => setIsOpen(false)}
                    className={isActive("/blog") ? "text-[#048DB7]" : ""}
                  >
                    Blog
                  </Link>
                </li>


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
      <header
      className={`fixed w-screen z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white text-black backdrop-blur-sm shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      {/* Top Bar */}
      <div
        className={`${scrolled ? "hidden" : ""} transition-all max-w-7xl mx-auto flex justify-center w-full`}
      >
        <div className="hidden md:flex w-full text-[12px] items-center justify-between py-3 text-sm border-b border-gray-300">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+(91) 7060249961</span>
            </div>
            <div className="flex items-center gap-2 border-r-2 pr-2 border-gray-300">
              <Mail size={16} />
              <span>zoiclifesciences.med@gmail.com</span>
            </div>
          </div>
          <p className="text-[12px]">
            Delivering trusted pharmaceutical excellence — because your health
            deserves the best. Happy to serve you!
          </p>
        </div>
      </div>

      

      

      {/* Desktop Version */}
      <div className="max-w-7xl mx-auto flex justify-center">
        <nav className="hidden md:flex md:flex-row flex-col py-2 items-center relative w-full justify-between md:w-[100%]">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src={scrolled ? "/logo.png" : "/logo2.png"}
              alt="Zoic Logo"
              width={scrolled ? 50 : 100}
              height={scrolled ? 50 : 100}
              className="transition-all duration-500"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex md:flex-row flex-col w-[85%] md:justify-between font-bold">
            <ul className="flex md:flex-row flex-col md:items-center items-start gap-5 text-lg">
              <li
                className={`${
                  isActive("/") ? "text-[#048DB7]" : "hover:text-white hover:bg-[#048DB7] py-2 rounded-xl px-4"
                }`}
              >
                <Link href="/">Home</Link>
              </li>

              {["About", "Services", "Careers"].map((menu) => (
                <li
                  key={menu}
                  className={`relative cursor-pointer flex items-center gap-1 ${
                    pathname.startsWith(`/${menu.toLowerCase()}`)
                      ? "text-[#048DB7]"
                      : "hover:text-white hover:bg-[#048DB7] py-2 rounded-xl px-4"
                  }`}
                  onMouseEnter={() => handleMouseEnter(menu)}
                  onMouseLeave={handleMouseLeave}
                >
                  {menu === "Services" ? (
                    <Link href="/services/third-party-manufacturing">Services</Link>
                  ) : (
                    <Link href={`/${menu.toLowerCase()}`}>{menu}</Link>
                  )}

                  {openMenu === menu ? <ChevronUp size={16} /> : <ChevronDown size={16} />}

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
                              ["/about/", "Overview"],
                              ["/about/awards", "Award Achievement"],
                              ["/about/team", "Our Team"],
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
                              ["/services/pcd-pharma-franchise", "PCD Pharma Franchise"],
                              ["/services/third-party-manufacturing", "Third-Party Manufacturing"],
                              ["/services/oversees-business", "Oversees Business"],
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
                              ["/careers/", "Apply For Job"],
                              ["/careers/life-at-zoic", "Life At Zoic"],
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
                  pathname.startsWith("/pcd-pharma-franchise")
                    ? "text-[#048DB7]"
                    : "hover:text-white hover:bg-[#048DB7] py-2 rounded-xl px-4"
                }`}
              >
                <Link href="/services/pcd-pharma-franchise">PCD Franchise</Link>
              </li>
              <li
                className={`cursor-pointer ${
                  pathname.startsWith("/products")
                    ? "text-[#048DB7]"
                    : "hover:text-white hover:bg-[#048DB7] py-2 rounded-xl px-4"
                }`}
              >
                <Link href="/products">Products</Link>
              </li>
              <li
                className={`cursor-pointer ${
                  pathname.startsWith("/blog")
                    ? "text-[#048DB7]"
                    : "hover:text-white hover:bg-[#048DB7] py-2 rounded-xl px-4"
                }`}
              >
                <Link href="/blog">Blogs</Link>
              </li>
            </ul>

            {/* Contact Button */}
            <button className="bg-[#048DB7] md:mt-0 mt-5 text-white px-4 py-2 rounded-xl hover:bg-[#03779A] transition">
              <Link href="/contact">Contact</Link>
            </button>
          </div>
        </nav>
      </div>
    </header>
    </div>
    
  );
}
