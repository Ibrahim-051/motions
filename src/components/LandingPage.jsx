import { motion } from "framer-motion";
import React from "react";
import { FaLongArrowAltUp } from "react-icons/fa";
function LandingPage() {
  return (
    <>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.7"
        className="bg-zinc-900 w-full h-screen pt-1"
      >
        <div className="textstructure mt-30 px-10">
          <div className="masker">
            <div className="uppercase text-[5vw] leading-[4vw]  tracking-tight font-bold font-['Founders_Grotesk_X-Condensed'] ">
              we create
            </div>
            <div className="flex  gap-1 items-center">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "15vh" }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                className=" w-[15vh] h-[8.5vh]"
              >
                <img className="h-11 pt-1" src="./motion.jpg" alt="" />
              </motion.div>
              <div className="uppercase text-[5vw] leading-[4vw] tracking-tight font-bold font-['Founders_Grotesk_X-Condensed'] ">
                Eye-opening
              </div>
            </div>
            <div className="uppercase text-[5vw] leading-[4vw]  tracking-tight font-bold font-['Founders_Grotesk_X-Condensed'] ">
              presentations
            </div>
          </div>
          <div className="border-t-[1px] py-5 px-20 border-zinc-800 mt-24 flex justify-between items-center">
            {[
              "For public and private companies",
              "From the first pitch to IPO",
            ].map((item, index) => (
              <p
                key={index}
                className="text-md font-light tracking-tight leading-none "
              >
                {item}
              </p>
            ))}

            <div className="start flex items-center  gap-4">
              <button className="px-4 py-1 border-[1px]  font-light text-sm uppercase  border-zinc-700 rounded-full">
                start the project
              </button>
              <div className="w-8 h-8 flex items-center justify-center border-[1px] rounded-full">
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
