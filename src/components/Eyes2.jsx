import React, { useEffect, useState } from "react";

function Eyes2() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });
  return (
    <div className="w-full h-screen relative bg-[#CDEA68] rounded-t-2xl">
      <div className="flex flex-col  justify-center items-center pt-16">
        <h1 className="text-[17vh] text-black font-bold uppercase leading-none tracking-tight ">
          ready
        </h1>
        <h1 className="text-[17vh] text-black font-bold uppercase leading-none tracking-tight ">
          to start
        </h1>
        <h1 className="text-[17vh] text-black font-bold uppercase leading-none tracking-tight ">
          the project?
        </h1>
        <div className="gap-3 flex flex-col">
          <button className="text-zinc-100 bg-black px-16 py-4 rounded-full ">
            start the project
          </button>
          <button className="text-zinc-100 bg-black px-16 py-4 rounded-full ">
            HELOO@Ibrahim
          </button>
        </div>
      </div>
      <div>
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="w-[15vw] h-[15vw] flex justify-center items-center rounded-full bg-zinc-100">
            <div className="w-2/3 h-2/3 relative  rounded-full bg-black ">
              <div
                style={{
                  transform: ` rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-5"
              >
                <div className="w-5 h-5 absolute  rounded-full bg-zinc-100 "></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] flex justify-center items-center rounded-full bg-zinc-100">
            <div className="w-2/3 h-2/3 relative rounded-full bg-black ">
              <div
                style={{
                  transform: ` rotate(${rotate}deg )`,
                }}
                className="line absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5 "
              >
                <div className="w-5 h-5 absolute  rounded-full bg-zinc-100 "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes2;
