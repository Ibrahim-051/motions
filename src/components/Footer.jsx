import React from "react";

function Footer() {
  return (
    <div className="w-full p-10 relative flex flex-col md:flex-row bg-zinc-900 text-white">
      {/* Left side */}
      <div className="w-full md:w-1/2 relative mb-10 md:mb-0">
        <h1 className="text-4xl font-bold leading-none tracking-tighter uppercase">
          eye-
        </h1>
        <h1 className="text-4xl font-bold leading-none tracking-tighter uppercase">
          opening
        </h1>

        <div className="absolute left-5 bottom-14 w-20 rounded-3xl overflow-hidden">
          <img className="rounded-3xl" src="./motion.jpg" alt="" />
        </div>
      </div>

      {/* Right side */}
      <div className="w-full md:w-1/2 flex flex-col">
        <h1 className="text-4xl font-bold leading-none tracking-tighter uppercase">
          presentations
        </h1>

        <div className="py-5">
          <h1>S:</h1>
          {["Instagram", "Behance", "Facebook", "Linkedin"].map(
            (item, index) => (
              <h1 className="" key={index}>
                {item}
              </h1>
            )
          )}
        </div>

        <div className="flex flex-wrap justify-between pr-2 gap-y-5">
          <div className="py-5 w-full sm:w-auto">
            <h1>L:</h1>
            {[
              "202-1965 W 4th Ave",
              "Lahore, Pakistan",
              "30 Chukarina St",
              "Lahore, Punjab",
            ].map((item, index) => (
              <h1 key={index}>{item}</h1>
            ))}
          </div>

          <div className="py-5 w-full sm:w-auto">
            <h1>M:</h1>
            {[
              "Home",
              "Services",
              "Our work",
              "About us",
              "Insights",
              "Contact us",
            ].map((item, index) => (
              <h1 key={index}>{item}</h1>
            ))}
          </div>
        </div>

        <div className="py-5">
          <h1>E:</h1>
          {["hello@ochi.design"].map((item, index) => (
            <h1 key={index}>{item}</h1>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between opacity-50 text-sm gap-2 sm:gap-0">
          <h1>&copy; ---- design 2025. Legal Terms</h1>
          <h1>Website by Ibrahim</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
