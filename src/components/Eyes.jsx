import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.7"
        className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]"
      >
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {[0, 1].map((_, i) => (
            <div
              key={i}
              className="w-[15vw] h-[15vw] flex justify-center items-center rounded-full bg-zinc-100"
            >
              <div className="w-2/3 h-2/3 relative rounded-full bg-black">
                <div
                  style={{
                    transform: `rotate(${rotate}deg)`,
                  }}
                  className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-5"
                >
                  <div className="w-5 h-5 absolute rounded-full bg-zinc-100"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Eyes;
