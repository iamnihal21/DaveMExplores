// import React from "react";
// import Trophy from "../assets/WorldRecords.jpg"; // Car image

// export default function WorldRecordHolder() {
//   return (
//     <div className="min-h-screen bg-[#E7CDA7] flex flex-col items-center justify-center p-8">
//       {/* Title */}
//       <h1 className="text-4xl md:text-5xl font-bold text-black mb-8">
//         World-record Holder
//       </h1>

//       {/* Main Content */}
//       <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-6xl">
//         {/* Left: Image */}
//         <div className="w-full md:w-1/2 flex justify-center">
//           <img
//             src={Trophy} // Replace with the actual image URL or import
//             alt="World Record Holder"
//             className="rounded-lg shadow-lg max-w-full h-auto"
//           />
//         </div>

//         {/* Right: Details */}
//         <div className="w-full md:w-1/2 text-center md:text-left">
//           <h2 className="text-2xl font-bold mb-4">Details</h2>
//           <ul className="space-y-2 text-lg text-gray-700">
//             <li>Distance : Lorem ipsum dolor sit amet.</li>
//             <li>Time : Lorem ipsum dolor sit amet.</li>
//             <li>Cost : Lorem ipsum dolor sit amet.</li>
//             <li>Breaks : Lorem ipsum dolor sit amet.</li>
//             <li>Traffic Rules : Lorem ipsum dolor sit amet.</li>
//           </ul>
//         </div>
//       </div>

//     </div>
//   );
// }
import React from "react";
import { motion } from "framer-motion"; // Importing Framer Motion
import Trophy from "../assets/WorldRecords.jpg"; // Car image

export default function WorldRecordHolder() {
  return (
    <div className="min-h-screen bg-[#E7CDA7] flex flex-col items-center justify-center p-8">
      {/* Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-black mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        World-record Holder
      </motion.h1>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-6xl">
        {/* Left: Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={Trophy} // Replace with the actual image URL or import
            alt="World Record Holder"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </motion.div>

        {/* Right: Details */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4">Details</h2>
          <ul className="space-y-2 text-lg text-gray-700">
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Distance : Lorem ipsum dolor sit amet.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Time : Lorem ipsum dolor sit amet.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Cost : Lorem ipsum dolor sit amet.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Breaks : Lorem ipsum dolor sit amet.
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Traffic Rules : Lorem ipsum dolor sit amet.
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
