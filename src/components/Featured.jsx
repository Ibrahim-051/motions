import { motion } from "framer-motion";
import { tr } from "framer-motion/client";
import { useState } from "react";
import { TbPointFilled } from "react-icons/tb";

function Featured() {
  const [hovering, setHovering] = useState(false);
  const [hovering2, setHovering2] = useState(false);
  return (
    <div id="our-work" className="w-full h-screen p-10">
      <div className="border-b-[1px] pb-7 border-zinc-600">
        <h1 className="text-5xl">Featured projects</h1>
      </div>
      <div className="flex gap-10 p-5">
        <div className="w-1/2 flex flex-col  gap-5">
          <div className=" flex  items-center justify-center gap-2">
            <div>
              <TbPointFilled />
            </div>
            <h1>Salience Labs</h1>
          </div>
          <div
            onMouseEnter={() => {
              setHovering(true);
            }}
            onMouseLeave={() => {
              setHovering(false);
            }}
            className="cardContainer relative w-full h-[30vw] rounded-xl"
          >
            <div className="absolute text-6xl z-10 left-full -translate-y-1/2 top-1/2 -translate-x-1/2 leading-none tracking-tight">
              <h1 className="text-[#CDEA68] flex overflow-hidden">
                {"FYDE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={hovering ? { y: " 0" } : { y: "100%" }}
                    transition={{
                      ease: [0.65, 0, 0.35, 1],
                      delay: index * 0.06,
                    }}
                    key={index}
                    className="inline-block "
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
            </div>
            <div className="card w-full h-full  rounded-xl  overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png"
                alt=""
              />
            </div>
            <button className="bg-white text-black px-2 py-1 mt-1 rounded-xl">
              Brand Identity
            </button>
            <button className="bg-white text-black ml-1 px-2 py-1 mt-1 rounded-xl">
              Pitch Deck
            </button>
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-center gap-5">
          <div className="flex  items-center gap-2">
            <div>
              <TbPointFilled />
            </div>
            <div>
              <h1>Cardboard Spaceship</h1>
            </div>
          </div>
          <div
            onMouseEnter={() => {
              setHovering2(true);
            }}
            onMouseLeave={() => {
              setHovering2(false);
            }}
            className="cardContainer relative w-full h-[30vw] rounded-xl"
          >
            <div className="absolute text-6xl right-full z-10 -translate-y-1/2 top-1/2 translate-x-1/2 leading-none tracking-tight">
              <h1 className="text-[#CDEA68] flex">
                {"VISE".split("").map((item, index) => (
                  <span className="inline-block overflow-hidden" key={index}>
                    <motion.span
                      initial={{ x: "100%" }}
                      animate={hovering2 ? { x: "0%" } : { x: "100%" }}
                      transition={{
                        ease: [0.65, 0, 0.35, 1],
                        delay: index * 0.06,
                      }}
                      className="inline-block"
                    >
                      {item}
                    </motion.span>
                  </span>
                ))}
              </h1>
            </div>

            <div className="card w-full h-full  rounded-xl overflow-hidden  ">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png"
                alt=""
              />
            </div>
            <button className="bg-white text-black px-2 py-1 mt-1 rounded-xl">
              Brand Identity
            </button>
            <button className="bg-white text-black ml-1 px-2 py-1 mt-1 rounded-xl">
              Pitch Deck
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
