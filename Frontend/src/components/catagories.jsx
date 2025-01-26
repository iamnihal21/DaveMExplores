// import React from "react";
// import Advertise from "../assets/Advertising.png";
// import Design from "../assets/Design.png";
// import Film from "../assets/Film.png";

// export default function Categories() {
//   return (
//     <div className="bg-[#F9E1BE] min-h-screen flex flex-col items-center justify-center py-10">
//       <h2 className="text-4xl font-bold text-black mb-8 ml-6">Popular Categories</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-6xl w-full">
//         {/* Design Card */}
//         <div className="card bg-base-100 shadow-xl flex flex-col">
//           <figure>
//             <img
//               src={Design}
//               alt="Design"
//               className="w-full h-[300px] object-cover rounded-t-lg"
//             />
//           </figure>
//           <div className="card-body flex-grow flex items-center justify-center">
//             <h2 className="card-title text-center">Design</h2>
//           </div>
//         </div>

//         {/* Advertising Card */}
//         <div className="card bg-base-100 shadow-xl flex flex-col">
//           <figure>
//             <img
//               src={Advertise}
//               alt="Advertising"
//               className="w-full h-[300px] object-cover rounded-t-lg"
//             />
//           </figure>
//           <div className="card-body flex-grow flex items-center justify-center">
//             <h2 className="card-title text-center">Advertising</h2>
//           </div>
//         </div>

//         {/* Film Card */}
//         <div className="card bg-base-100 shadow-xl flex flex-col">
//           <figure>
//             <img
//               src={Film}
//               alt="Film"
//               className="w-full h-[300px] object-cover rounded-t-lg"
//             />
//           </figure>
//           <div className="card-body flex-grow flex items-center justify-center">
//             <h2 className="card-title text-center">Film</h2>
//           </div>
//         </div>
//       </div>

//       <button className="btn mt-10 bg-black text-white hover:text-black hover:bg-white">
//         Explore More
//       </button>
//     </div>
//   );
// }

import React from "react";
import { motion } from "framer-motion"; // Importing Framer Motion
import Advertise from "../assets/Advertising.png";
import Design from "../assets/Design.png";
import Film from "../assets/Film.png";

export default function Categories() {
  return (
    <div className="bg-[#F9E1BE] min-h-screen flex flex-col items-center justify-center py-10">
      <h2 className="text-4xl font-bold text-black mb-8 ml-6">Popular Categories</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-6xl w-full">
        {/* Design Card */}
        <motion.div
          className="card bg-base-100 shadow-xl flex flex-col"
          initial={{ opacity: 0, y: 20 }} // Starting position
          animate={{ opacity: 1, y: 0 }} // Final position
          transition={{ duration: 0.6, delay: 0.2 }} // Animation duration and delay
        >
          <figure>
            <img
              src={Design}
              alt="Design"
              className="w-full h-[300px] object-cover rounded-t-lg"
            />
          </figure>
          <div className="card-body flex-grow flex items-center justify-center">
            <h2 className="card-title text-center">Design</h2>
          </div>
        </motion.div>

        {/* Advertising Card */}
        <motion.div
          className="card bg-base-100 shadow-xl flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <figure>
            <img
              src={Advertise}
              alt="Advertising"
              className="w-full h-[300px] object-cover rounded-t-lg"
            />
          </figure>
          <div className="card-body flex-grow flex items-center justify-center">
            <h2 className="card-title text-center">Advertising</h2>
          </div>
        </motion.div>

        {/* Film Card */}
        <motion.div
          className="card bg-base-100 shadow-xl flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <figure>
            <img
              src={Film}
              alt="Film"
              className="w-full h-[300px] object-cover rounded-t-lg"
            />
          </figure>
          <div className="card-body flex-grow flex items-center justify-center">
            <h2 className="card-title text-center">Film</h2>
          </div>
        </motion.div>
      </div>

      {/* Explore More Button Animation */}
      <motion.button
        className="btn mt-10 bg-black text-white hover:text-black hover:bg-white"
        whileHover={{
          scale: 1.1,
          transition: { type: "spring", stiffness: 300, damping: 20 },
        }}
      >
        Explore More
      </motion.button>
    </div>
  );
}
