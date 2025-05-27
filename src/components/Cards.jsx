import React from "react";

function Cards() {
  return (
    <div
      id="about"
      className="w-full min-h-screen flex items-center px-6 md:px-16 bg-zinc-900"
    >
      <div className="flex flex-col md:flex-row gap-5 w-full h-[60vh]">
        {/* Left large card */}
        <div className="relative flex items-center justify-center w-full md:w-1/2 h-1/2 md:h-full rounded-xl bg-[#004D43]">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt="Ochi Design Logo"
            className="max-w-3/4 max-h-3/4"
          />
          <button className="absolute left-6 bottom-6 px-3 py-1 rounded-xl border border-zinc-300 text-zinc-300 text-sm">
            &copy; 2024-2025
          </button>
        </div>

        {/* Right two stacked cards */}
        <div className="flex flex-col md:flex-col gap-5 w-full md:w-1/2 h-1/2 md:h-full">
          <div className="relative flex items-center justify-center w-full h-1/2 rounded-xl bg-[#202b29]">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
              alt="Give Us Five Stars Logo"
              className="sm:w-16  max-w-3/4 max-h-3/4"
            />
            <button className="absolute left-6 bottom-6 px-3 py-1 rounded-xl border border-zinc-300 text-zinc-300 text-sm">
              Give Us five Stars
            </button>
          </div>
          <div className="relative flex items-center justify-center w-full h-1/2 rounded-xl bg-[#202b29]">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
              alt="Branded Logo"
              className="w-16 h-16 object-contain"
            />
            <button className="absolute left-6 bottom-6 px-3 py-1 rounded-xl border border-zinc-300 text-zinc-300 text-sm">
              Branded
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
