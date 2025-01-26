import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion"; // Importing Framer Motion

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-base-100">
        <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center py-4">
          {/* Welcome message, only visible on small screens */}
          <div className="text-2xl font-bold text-black block lg:hidden">
            Welcome!!
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden block text-black p-2"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center justify-center flex-grow">
            <ul className="menu menu-horizontal flex space-x-6 text-black">
              {location.pathname !== "/" && (
                <li className="hover:text-gray transition duration-200">
                  <Link to="/" className="px-4 py-2 rounded-md text-black">
                    Home
                  </Link>
                </li>
              )}
              {/* Other menu items */}
              <motion.li
                className="hover:text-gray transition duration-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Link to="/worldRecordMain">World Record</Link>
              </motion.li>
              <motion.li
                className="hover:text-gray transition duration-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Link to="/detailing">Detailing Products</Link>
              </motion.li>
              <motion.li
                className="hover:text-gray transition duration-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Link to="/WallpaperTool">Wallpapers</Link>
              </motion.li>
              <motion.li
                className="hover:text-gray transition duration-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <Link to="/podcasts">Podcast</Link>
              </motion.li>
              {/* Add Blog link here */}
              <motion.li
                className="hover:text-gray transition duration-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <Link to="/blogsSection">Blogs</Link>
              </motion.li>
              <motion.li
                className="hover:text-gray transition duration-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <Link to="/videoDownloader">Video Downloader</Link>
              </motion.li>
              <motion.li
                className="hover:text-gray transition duration-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                <Link to="/about">About</Link>
              </motion.li>
              <motion.li
                className="hover:text-gray transition duration-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
              >
                <Link to="/contact">Contact</Link>
              </motion.li>
            </ul>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <motion.div
            className="lg:hidden bg-base-100"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{ duration: 0.5 }}
          >
            <ul className="flex flex-col divide-y divide-gray-300">
              {/* Mobile blog section link */}
              <motion.li
                className="hover:bg-base-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                <Link to="/blogsSection" className="block px-4 py-2 text-black">
                  Blogs
                </Link>
              </motion.li>
              {/* Other mobile links */}
              <motion.li
                className="hover:bg-base-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
              >
                <Link to="/worldRecordMain" className="block px-4 py-2 text-black">
                  World Record
                </Link>
              </motion.li>
              <motion.li
                className="hover:bg-base-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
              >
                <Link to="/detailing" className="block px-4 py-2 text-black">
                  Detailing Products
                </Link>
              </motion.li>
              <motion.li
                className="hover:bg-base-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                <Link to="/WallpaperTool" className="block px-4 py-2 text-black">
                  Wallpapers
                </Link>
              </motion.li>
              <motion.li
                className="hover:bg-base-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
              >
                <Link to="/podcasts" className="block px-4 py-2 text-black">
                  Podcast
                </Link>
              </motion.li>
              <motion.li
                className="hover:bg-base-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.4 }}
              >
                <Link to="/videoDownloader" className="block px-4 py-2 text-black">
                  Video Downloader
                </Link>
              </motion.li>
              <motion.li
                className="hover:bg-base-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.6 }}
              >
                <Link to="/about" className="block px-4 py-2 text-black">
                  About
                </Link>
              </motion.li>
              <motion.li
                className="hover:bg-base-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.8 }}
              >
                <Link to="/contact" className="block px-4 py-2 text-black">
                  Contact
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </nav>
    </>
  );
}

export default Nav;
