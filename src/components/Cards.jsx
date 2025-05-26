import React from "react";

function Cards() {
  return (
    <div
      id="about"
      className="w-full h-screen flex items-center px-16 bg-zinc-900"
    >
      <div className="cardcontainer h-[60vh]  flex  gap-5 w-full">
        <div className="card relative flex items-center justify-center w-full h-full rounded-xl bg-[#004D43]">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-2 py-1 rounded-xl border-[1px]">
            &copy; 2024-2025
          </button>
        </div>
        <div className=" cardcontainer flex gap-5 w-full h-[60vh]">
          <div className="card relative flex items-center justify-center w-1/2 h-full rounded-xl bg-[#202b29]">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
              alt=""
            />
            <button className="absolute left-10 bottom-10 px-2 py-1 rounded-xl border-[1px]">
              Give Us five Stars
            </button>
          </div>
          <div className="card relative flex items-center justify-center w-1/2 h-full rounded-xl bg-[#202b29]">
            <img
              className="bg-cover w-28 h-28"
              src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
              alt=""
            />
            <button className="absolute left-10 bottom-10 px-2 py-1 rounded-xl border-[1px]">
              Branded
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
