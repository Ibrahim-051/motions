import { motion } from "framer-motion";
import { useState } from "react";
import { TbPointFilled } from "react-icons/tb";

function Featured() {
  const [hovering, setHovering] = useState(false);
  const [hovering2, setHovering2] = useState(false);

  return (
    <div id="our-work" className="w-full min-h-screen p-6 md:p-10">
      <div className="border-b-[1px] pb-7 border-zinc-600">
        <h1 className="text-4xl md:text-5xl font-bold">Featured projects</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-10 mt-6">
        {/* First Project */}
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <TbPointFilled size={24} />
            <h1 className="text-lg md:text-xl font-semibold">Salience Labs</h1>
          </div>
          <div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="relative w-full h-72 md:h-[30vw] rounded-xl overflow-hidden"
          >
            {/* Animated Text */}
            <div className="absolute text-5xl md:text-6xl z-10 left-full top-1/2 -translate-y-1/2 -translate-x-1/2 leading-none tracking-tight select-none pointer-events-none">
              <h1 className="text-[#CDEA68] flex overflow-hidden">
                {"FYDE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={hovering ? { y: "0%" } : { y: "100%" }}
                    transition={{
                      ease: [0.65, 0, 0.35, 1],
                      delay: index * 0.06,
                    }}
                    key={index}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
            </div>

            {/* Image */}
            <img
              className="w-full h-full object-cover rounded-xl"
              src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png"
              alt="Salience Labs project"
            />

            {/* Buttons */}
            <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
              <button
                type="button"
                className="bg-white text-black px-3 py-1 rounded-xl text-sm font-medium"
              >
                Brand Identity
              </button>
              <button
                type="button"
                className="bg-white text-black px-3 py-1 rounded-xl text-sm font-medium"
              >
                Pitch Deck
              </button>
            </div>
          </div>
        </div>

        {/* Second Project */}
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <TbPointFilled size={24} />
            <h1 className="text-lg md:text-xl font-semibold">
              Cardboard Spaceship
            </h1>
          </div>
          <div
            onMouseEnter={() => setHovering2(true)}
            onMouseLeave={() => setHovering2(false)}
            className="relative w-full h-72 md:h-[30vw] rounded-xl overflow-hidden"
          >
            {/* Animated Text */}
            <div className="absolute text-5xl md:text-6xl z-10 right-full top-1/2 -translate-y-1/2 translate-x-1/2 leading-none tracking-tight select-none pointer-events-none">
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

            {/* Image */}
            <img
              className="w-full h-full object-cover rounded-xl"
              src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png"
              alt="Cardboard Spaceship project"
            />

            {/* Buttons */}
            <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
              <button
                type="button"
                className="bg-white text-black px-3 py-1 rounded-xl text-sm font-medium"
              >
                Brand Identity
              </button>
              <button
                type="button"
                className="bg-white text-black px-3 py-1 rounded-xl text-sm font-medium"
              >
                Pitch Deck
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
