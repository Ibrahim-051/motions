import React from "react";

function About() {
  return (
    <div
      data-scroll
      // data-scroll-section
      data-scroll-speed="-.1"
      className="w-full py-16 px-6 md:px-10 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl max-w-7xl mx-auto"
    >
      <h1 className="text-black text-[6vw] md:text-[4vw] font-['Neue Montreal'] leading-[7vh] md:leading-[7vh] max-w-4xl mx-auto">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>

      <div className="mt-20 border-t border-zinc-400"></div>

      <div className="text-black flex flex-col md:flex-row w-full mt-10 gap-8 md:gap-4">
        <div className="flex-1 p-2">
          <h2 className="text-xl font-semibold mb-3">What you can expect:</h2>
        </div>

        <div className="flex-2 p-2">
          <p>
            We partner with the companies and startups who make the world go
            round — they drive the net-zero economy, revolutionize crypto
            treasury management, build photonic chips, and open Michelin-starred
            restaurants. We believe the mix of strategy and design (with a bit
            of coffee) is what makes your message clear, convincing, and
            captivating.
          </p>
        </div>

        <div className="flex-1 p-2 mb-0">
          <div className="flex flex-col items-center space-y-2 text-center">
            <strong>S:</strong>
            <p>Instagram</p>
            <p>Behance</p>
            <p>Facebook</p>
            <p>LinkedIn</p>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-400 pt-10 mt-16 flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2 text-black">
          <h2 className="text-4xl mb-6">Our approach:</h2>
          <button className="flex items-center gap-5 uppercase text-sm bg-zinc-900 mt-4 px-6 py-3 rounded-xl text-white hover:bg-zinc-800 transition">
            Read More
            <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
          </button>
        </div>

        <div className="w-full md:w-1/2 h-56 md:h-[70vh] bg-[#a1b655] rounded-3xl"></div>
      </div>
    </div>
  );
}

export default About;
