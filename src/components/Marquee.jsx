import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full py-18  bg-[rgb(0,77,67)] rounded-tl-3xl rounded-tr-3xl "
    >
      <div className="border-t-2 border-b-2 border-zinc-300 flex  whitespace-nowrap overflow-hidden ">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className=" text-[24vh]  font-bold font-['Founders_Grotesk_X-Condensed'] uppercase pr-2"
        >
          we are designs
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="text-[24vh]  font-bold font-['Founders_Grotesk_X-Condensed'] uppercase pr-2"
        >
          we are designs
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
