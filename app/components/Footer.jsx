'use client'

import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#252526] text-gray-300 pt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Contact Us */}
        <div>
          <h2 className="text-md text-gray-200 mb-4">CONTACT US</h2>
          <p className="flex items-center space-x-2 text-sm text-gray-400 mb-5">
            <FaMapMarkerAlt className="text-gray-400" />
            <a 
              href="https://www.google.com/maps?q=123+Street,+City,+Country" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Plot No.72/1 Tyagi Road, Dehradun-248001, Uttarakhand, India
            </a>
          </p>
          <p className="flex items-center space-x-2 text-sm text-gray-400 mb-5">
            <FaPhoneAlt className="text-gray-400" />
            <a href="tel:+917088014041" className="hover:text-white">
                +917088014041,<br/> +917060249961
            </a>
          </p>
          <p className="flex items-center space-x-2 mt-2 text-sm text-gray-400">
            <FaEnvelope className="text-gray-400" />
            <a href="mailto:zoiclifesciences.sales@gmail.com" className="hover:text-white">
                zoiclifesciences.sales@gmail.com, zoiclifesciences.med@gmail.com
            </a>
          </p>
        </div>

        {/* Products + Quick Links */}
        <div className="flex flex-row justify-between gap-10">
          <div>
            <h2 className="text-md text-gray-200 mb-4">PRODUCTS</h2>
            <ul className="space-y-1 text-sm text-gray-400">
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-md text-gray-200 mb-4">QUICK LINKS</h2>
            <ul className="space-y-1 text-sm text-gray-400">
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Follow Us + Logo */}
        <div>
          <div className="border-t border-gray-600 pt-6">
            <div className="flex flex-row items-center justify-between">
              
              {/* Logo in white rounded bg */}
              <div className="bg-white rounded-lg p-2 flex items-center justify-center w-[80px] h-[50px]">
                <Image
                  src="/logo.png"
                  alt="Zoic Logo"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>

              {/* Social Icons */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="bg-white text-gray-900 rounded-full p-2 hover:bg-gray-200 transition"
                >
                  <FaFacebookF className="h-3 w-3" />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="bg-white text-gray-900 rounded-full p-2 hover:bg-gray-200 transition"
                >
                  <FaTwitter className="h-3 w-3" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="bg-white text-gray-900 rounded-full p-2 hover:bg-gray-200 transition"
                >
                  <FaInstagram className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-black pb-5 border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Zoic Life Sciences. All rights reserved.
      </div>
    </footer>
  );
}