import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-speed=".1"
      data-scroll-section
      className="w-full py-[5vw]  rounded-tl-3xl rounded-tr-3xl bg-[#004043] "
    >
      <div className="text border-t-2 pl-[5vw] border-b-2 border-zinc-300 flex   overflow-hidden whitespace-nowrap pt-[3vw] pb-[5vw] ">
        <motion.h2
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[17vw] tracking-tighter leading-none font-['Founders_Grotesk Text'] pr-[29vw] font-semibold pt-[0.5vw] -m-[4.5vw] uppercase"
        >
          we are ochi
        </motion.h2>
        <motion.h2
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[17vw] tracking-tighter font-semibold  leading-none pr-[20vw] font-['Founders_Grotesk Text']  pt-[0.5vw] -m-[4.5vw] uppercase "
        >
          we are ochi
        </motion.h2>
      </div>
    </div>
  );
};

export default Marquee;
