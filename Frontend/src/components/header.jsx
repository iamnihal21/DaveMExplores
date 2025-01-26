// import React from "react";
// import Logo from "../assets/Logo.png";
// function Head() {
//   return (
//     <>
//       <div
//         className="rounded navbar flex items-center justify-center"
//         style={{ backgroundColor: "#E4D7C3" }}
//       >
//         <div className="h-28 avatar">
//           <img src={Logo} className="rounded" />
//           <a className="btn btn-ghost text-xl text-black">DaveMExplorer</a>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Head;
import React from "react";
import Logo from "../assets/Logo.png";
import { motion } from "framer-motion"; // Importing Framer Motion

function Head() {
  return (
    <>
      <div
        className="rounded navbar flex items-center justify-center"
        style={{ backgroundColor: "#E4D7C3" }}
      >
        {/* Animated Logo and Text */}
        <motion.div
          className="h-28 avatar"
          initial={{ opacity: 0, y: -50 }} // Initial state (invisible, slightly above)
          animate={{ opacity: 1, y: 0 }} // Final state (fully visible, at normal position)
          transition={{ duration: 1 }} // Duration of the animation
        >
          <motion.img
            src={Logo}
            className="rounded"
            initial={{ opacity: 0 }} // Initial state (invisible)
            animate={{ opacity: 1 }} // Final state (fully visible)
            transition={{ duration: 1 }} // Duration of the animation
          />
          <motion.a
            className="btn btn-ghost text-xl text-black"
            initial={{ opacity: 0, y: 50 }} // Initial state (invisible, slightly below)
            animate={{ opacity: 1, y: 0 }} // Final state (fully visible, at normal position)
            transition={{ duration: 1, delay: 0.5 }} // Delay for the text to appear after the logo
          >
            DaveMExplorer
          </motion.a>
        </motion.div>
      </div>
    </>
  );
}

export default Head;
