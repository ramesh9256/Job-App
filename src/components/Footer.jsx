import React from "react";
import { SiGoogledataproc } from "react-icons/si";
import { FaFacebook, FaInstagramSquare, FaTwitter, FaGithub } from "react-icons/fa";
import { RiVercelFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Top Section: Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-center border-b border-gray-700 pb-8">
          <div className="mb-6 lg:mb-0">
            <h1 className="text-3xl font-bold mb-3 flex items-center">
              <SiGoogledataproc className="text-green-500 mr-2" /> Get the latest news!
            </h1>
            <p className="text-gray-400">
              Subscribe to our newsletter to stay updated on the latest trends and offers.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-auto px-4 py-3 text-black rounded-md focus:ring-2 focus:ring-green-500 outline-none"
            />
            <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-md text-white font-medium transition">
              SIGN UP
            </button>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mt-10">
          {/* Services */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Services</h2>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-green-500 transition">
                  1on1 Coaching
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition">
                  Company Review
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition">
                  Accounts Review
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition">
                  HR Consulting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition">
                  SEO Optimization
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Company</h2>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-green-500 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition">
                  Meet the Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Helpful Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Helpful Links</h2>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-green-500 transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition">
                  Live Chat
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Legal</h2>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-green-500 transition">
                  Accessibility
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition">
                  Returns Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>

          {/* Downloads */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Downloads</h2>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-green-500 transition">
                  Marketing Calendar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition">
                  SEO Infographics
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Socials */}
        <div className="mt-10 flex flex-col lg:flex-row justify-between items-center border-t border-gray-700 pt-8">
          <p className="text-gray-400 text-center lg:text-left mb-4 lg:mb-0">
            &copy; 2025 Miracle InfoSoft. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-green-500 transition">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500 transition">
              <FaInstagramSquare className="text-2xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500 transition">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500 transition">
              <FaGithub className="text-2xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500 transition">
              <RiVercelFill className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
