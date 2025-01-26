import React from "react";
import Trophy from "../assets/WorldRecords.jpg";
import { motion } from "framer-motion"; // Import Framer Motion

export default function WrMain() {
  return (
    <>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col items-center">
          {/* Image Section */}
          <motion.img
            src={Trophy}
            alt="World Record Holder"
            className="max-w-md rounded-lg shadow-2xl mb-8 w-full sm:max-w-lg md:max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          />

          {/* Text Section */}
          <div className="px-4 sm:px-6 md:px-8">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Fastest Car Ride Record: Highest to Lowest Altitude Motorable Road
            </motion.h1>

            <motion.h2
              className="text-lg sm:text-xl font-bold text-center py-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              MAULIK MAHENDRAKUMAR DAVE – World Record Holder
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg py-6 text-justify"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Experience the thrilling achievement of Maulik Mahendrakumar Dave, a passionate car rider from Ahmedabad, Gujarat, India, who set a phenomenal world record. Driving a KIA SONET Manual Car, Maulik achieved the fastest ride from the highest altitude motorable road to the lowest altitude motorable road in India. His unparalleled journey showcases courage, determination, and precision driving.
            </motion.p>

            <motion.h3
              className="text-lg font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Journey Highlights: 
            </motion.h3>
            <motion.ul
              className="list-disc pl-6 py-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <li>Starting Point: Spiti Valley, Kaza, Himachal Pradesh – 14,000 feet above sea level.</li>
              <li>Date & Time: Began on 2nd November 2024 at 3:03 PM.</li>
              <li>Distance Covered: 1729 km of challenging terrain.</li>
              <li>End Point: Ahmedabad, Gujarat, India.</li>
              <li>Completion Date & Time: Reached the destination on 4th November 2024 at 1:22 AM.</li>
              <li>Duration: Completed the drive in an astounding 34 hours and 20 minutes without stopping.</li>
            </motion.ul>

            <motion.h3
              className="text-lg font-semibold pt-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              A New Record Set:
            </motion.h3>
            <motion.p
              className="py-6 text-justify"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              On 5th November 2024, Maulik’s extraordinary feat was officially recognized in Ahmedabad, Gujarat, marking a proud moment in the world of automobile adventures.
            </motion.p>

            <motion.h3
              className="text-lg font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              Why Is This Record Remarkable?
            </motion.h3>
            <motion.p
              className="py-6 text-justify"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              Maulik’s journey combined the unpredictable challenges of high-altitude driving, extreme weather conditions, and long hours of non-stop driving. Starting from the picturesque Spiti Valley, known for its rugged terrain and serene beauty, to the bustling city of Ahmedabad, this journey tested both man and machine to their limits. His accomplishment is a testament to endurance and the spirit of adventure.
            </motion.p>

            <motion.h3
              className="text-lg font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2 }}
            >
              About the Car – KIA SONET Manual:
            </motion.h3>
            <motion.p
              className="py-6 text-justify"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.2 }}
            >
              The record-breaking ride was achieved using a KIA SONET Manual Car, known for its reliability, performance, and efficiency. The car’s advanced features made it the perfect companion for this daring journey.
            </motion.p>

            <motion.h3
              className="text-lg font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.4 }}
            >
              Explore More:
            </motion.h3>
            <motion.p
              className="py-6 text-justify"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.6 }}
            >
              Visit our website to learn more about Maulik Mahendrakumar Dave and his incredible world record journey. Discover exclusive photos, videos, and behind-the-scenes stories of this monumental ride. Join us in celebrating this historic achievement and be inspired to push boundaries in your own life.
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
}
