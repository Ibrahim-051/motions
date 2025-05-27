import React, { useEffect, useState } from "react";

function Eyes2() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup listener on unmount
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-full min-h-screen relative bg-[#CDEA68] rounded-t-2xl px-4 sm:px-8 md:px-16">
      <div className="flex flex-col justify-center items-center pt-16 space-y-2 sm:space-y-4">
        <h1 className="text-[12vw] sm:text-[10vw] md:text-[8vw] text-black font-bold uppercase leading-none tracking-tight">
          ready
        </h1>
        <h1 className="text-[12vw] sm:text-[10vw] md:text-[8vw] text-black font-bold uppercase leading-none tracking-tight">
          to start
        </h1>
        <h1 className="text-[12vw] sm:text-[10vw] md:text-[8vw] text-black font-bold uppercase leading-none tracking-tight">
          the project?
        </h1>
        <div className="gap-3 flex flex-col sm:flex-row sm:gap-6 mt-6">
          <button className="text-zinc-100 bg-black px-12 sm:px-16 py-4 rounded-full text-lg sm:text-xl">
            start the project
          </button>
          <button className="text-zinc-100 bg-black px-12 sm:px-16 py-4 rounded-full text-lg sm:text-xl">
            HELOO@Ibrahim
          </button>
        </div>
      </div>

      <div className="absolute flex gap-6 sm:gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[25vw] max-w-[150px] h-[25vw] max-h-[150px] flex justify-center items-center rounded-full bg-zinc-100">
          <div className="w-2/3 h-2/3 relative rounded-full bg-black">
            <div
              style={{ transform: `rotate(${rotate}deg)` }}
              className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-5"
            >
              <div className="w-5 h-5 absolute rounded-full bg-zinc-100"></div>
            </div>
          </div>
        </div>
        <div className="w-[25vw] max-w-[150px] h-[25vw] max-h-[150px] flex justify-center items-center rounded-full bg-zinc-100">
          <div className="w-2/3 h-2/3 relative rounded-full bg-black">
            <div
              style={{ transform: `rotate(${rotate}deg)` }}
              className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-5"
            >
              <div className="w-5 h-5 absolute rounded-full bg-zinc-100"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes2;
