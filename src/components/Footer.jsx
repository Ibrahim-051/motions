import { h1 } from "framer-motion/client";
import React from "react";

function Footer() {
  return (
    <div className="w-full h-auto p-10 relative flex bg-zinc-900">
      <div className="w-1/2 h-full ">
        <h1 className="text-[14vh] font-bold leading-none tracking-tighter uppercase">
          eye-
        </h1>
        <h1 className="text-[14vh] font-bold leading-none tracking-tighter uppercase">
          opening
        </h1>

        <div className="absolute left-5 bottom-14 w-20">
          <img className="rounded-3xl" src="./motion.jpg" alt="" />
        </div>
      </div>
      <div className="w-1/2 h-full flex flex-col">
        <h1 className="text-[14vh] font-bold leading-none tracking-tighter uppercase">
          presentations
        </h1>
        <div className=" py-5">
          <h1>S:</h1>
          {["Instagram", "Behance", "Facebook", "Linkedin"].map(
            (item, index) => (
              <h1 className="" key={index}>
                {item}
              </h1>
            )
          )}
        </div>

        <div className="flex  justify-between pr-2">
          <div className=" py-5">
            <h1>L:</h1>

            {[
              "202-1965 W 4th Ave",
              "Lahore, Pakistan",
              "30 Chukarina St",
              "Lahore, Punjab",
            ].map((item, index) => (
              <h1 className="" key={index}>
                {item}
              </h1>
            ))}
          </div>
          <div className=" py-5">
            <h1>M:</h1>

            {[
              "Home",
              "Services",
              "Our work",
              "About us",
              "Insights",
              "Contact us",
            ].map((item, index) => (
              <h1 className="" key={index}>
                {item}
              </h1>
            ))}
          </div>
        </div>
        <div className=" py-5">
          <h1>E:</h1>

          {["hello@ochi.design"].map((item, index) => (
            <h1 className="" key={index}>
              {item}
            </h1>
          ))}
        </div>
        <div className="flex justify-between opacity-50">
          <h1>&copy; ---- design 2025. Legal Terms</h1>
          <h1>Website by Ibrahim</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
