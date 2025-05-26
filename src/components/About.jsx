import React from "react";

function About() {
  return (
    <div
      data-scroll
      // data-scroll-section
      data-scroll-speed="-.3"
      className="w-full py-20 px-10 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl"
    >
      <h1 className="text-black text-[4vw]  font-['Neue Montreal'] leading-[7vh]">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      <div className="mt-28 border-t-[1px] border-zinc-400"></div>
      <div className="text-black flex w-full ">
        <div className=" flex-2 p-2">
          <h1>What you can expect:</h1>
        </div>
        <div className=" flex-1 p-2">
          <h1>
            We partner with the companies and startups who make the world go
            round — they drive the net-zero economy, revolutionize crypto
            treasury management, build photonic chips, and open Michelin-starred
            restaurants. We believe the mix of strategy and design (with a bit
            of coffee) is what makes your message clear, convincing, and
            captivating.
          </h1>
        </div>
        <div className=" flex-1 p-2 mb-0">
          <div className="flex flex-col  items-center">
            S:
            <p>Instagram</p>
            <p>Behance</p>
            <p>Facebook</p>
            <p>Linkedin</p>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] pt-10 mt-16 flex gap-5 border-zinc-400">
        <div className="w-1/2 text-black">
          <h1 className="text-4xl">Our approch:</h1>
          <button className="flex items-center  gap-5 uppercase text-sm bg-zinc-900 mt-10 px-4 py-2 rounded-xl text-white">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] bg-[#a1b655] rounded-3xl"></div>
      </div>
    </div>
  );
}

export default About;
