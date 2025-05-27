import { motion } from "framer-motion";
import React from "react";
import { FaLongArrowAltUp } from "react-icons/fa";

function LandingPage() {
  return (
    <>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.4"
        className="bg-zinc-900 w-full h-screen pt-1"
      >
        <div className="textstructure mt-24 px-6 md:px-10 max-w-7xl mx-auto">
          <div className="masker">
            {/* Responsive headline */}
            <div className="uppercase text-[8vw] md:text-[5vw] leading-[7vw] md:leading-[4vw] tracking-tight font-bold font-['Founders_Grotesk_X-Condensed']">
              we create
            </div>
            <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-1 items-center mt-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "15vh" }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                className="w-[15vh] h-[8.5vh] flex-shrink-0"
              >
                <img className="h-11 pt-1" src="./motion.jpg" alt="Logo" />
              </motion.div>
              <div className="uppercase text-[8vw] md:text-[5vw] leading-[7vw] md:leading-[4vw] tracking-tight font-bold font-['Founders_Grotesk_X-Condensed']">
                Eye-opening
              </div>
            </div>
            <div className="uppercase text-[8vw] md:text-[5vw] leading-[7vw] md:leading-[4vw] tracking-tight font-bold font-['Founders_Grotesk_X-Condensed'] mt-1">
              presentations
            </div>
          </div>

          {/* Info & buttons */}
          <div className="border-t border-zinc-800 py-5 px-4 md:px-20 mt-16 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            <div className="flex flex-col md:flex-row gap-3 md:gap-8 text-center md:text-left">
              {[
                "For public and private companies",
                "From the first pitch to IPO",
              ].map((item, index) => (
                <p
                  key={index}
                  className="text-sm md:text-md font-light tracking-tight leading-none"
                >
                  {item}
                </p>
              ))}
            </div>

            <div className="start flex items-center gap-4">
              <button className="px-4 py-1 border border-zinc-700 font-light text-sm uppercase rounded-full hover:bg-zinc-800 transition">
                start the project
              </button>
              <div className="w-8 h-8 flex items-center justify-center border border-zinc-700 rounded-full hover:bg-zinc-800 transition cursor-pointer">
                <span className="rotate-45">
                  <FaLongArrowAltUp />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
