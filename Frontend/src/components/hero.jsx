import React from "react";
import Heroimg from "../assets/heroImg.png"; // Car image
import { motion } from "framer-motion"; // Importing Framer Motion

export default function Hero() {
  return (
    <>
      {/* Hero Section - Page Load Animation */}
      <motion.div
        className="hero min-h-screen bg-[#E4D7C3]"
        initial={{ opacity: 0 }} // Initial state (fully transparent)
        animate={{ opacity: 1 }} // Final state (fully visible)
        transition={{ duration: 1 }} // Duration of the animation
      >
        <div className="hero-content flex-col lg:flex-row gap-10">
          {/* Left Section - Text Content */}
          <motion.div
            className="lg:w-1/2 w-full px-4"
            initial={{ x: -100, opacity: 0 }} // Initial position (to the left, transparent)
            animate={{ x: 0, opacity: 1 }} // Move to normal position and become visible
            transition={{ duration: 1 }} // Duration of the animation
          >
            <h4 className="text-sm font-semibold text-gray-600 mb-2">
              Enhance your travell experience
            </h4>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4">
              We are Explorer
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="btn bg-black text-white hover:text-black hover:bg-white">
              Read More
            </button>
          </motion.div>

          {/* Right Section - Car Image */}
          <motion.div
            className="lg:w-1/2 w-full relative"
            initial={{ opacity: 0 }} // Initial opacity (transparent)
            animate={{ opacity: 1 }} // Final opacity (fully visible)
            transition={{ duration: 1, delay: 0.5 }} // Slight delay for the image to appear after the text
          >
            {/* Car Image */}
            <img
              src={Heroimg}
              alt="Car"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Subscribe Section */}
      <div className="flex items-center justify-center bg-[#E7CDA7] h-auto py-6">
        <div className="flex flex-col sm:flex-row bg-[#F9E1BE] gap-6 p-6 rounded-[15px] w-full max-w-4xl">
          {/* Left Section: Heading and Subheading */}
          <div className="flex-1">
            <h2 className="text-xl font-bold text-black mb-1">
              Subscribe to our newsletter...
            </h2>
            <p className="text-gray-600 text-sm">
              Elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          {/* Right Section: Input and Button */}
          <div className="flex items-center w-full sm:w-auto">
            <div className="join w-full sm:w-auto">
              <input
                className="input bg-base-200 join-item rounded-l-md w-full sm:w-[250px]"
                placeholder="Email"
              />
              <button className="btn join-item rounded-r-md bg-black text-white hover:text-black hover:bg-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}