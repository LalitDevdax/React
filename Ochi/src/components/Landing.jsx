import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const Landing = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-.3"
      className="w-full h-screen bg-black/5 pt-1"
    >
      <div className="textstructure mt-40 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((items, index) => {
          return (
            <div className="masker ">
              <div className="w-fit flex items-end ">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className=" mr-[1vw] w-[8vw] rounded-md h-[5vw] relative top-[1.2vw] "
                  >
                    <img
                      className="w-full h-full object-cover"
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                      alt=""
                    />
                  </motion.div>
                )}
                <h1
                  key={index + 9}
                  className=" pt-[1vw] -mb-[1vw] uppercase leading-[5.1vw] tracking-tighter font-medium text-[5vw] font-['Founders_Grotesk Text']"
                >
                  {items}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1.5px] border-zinc-800 mt-40 flex justify-between items-center py-3 px-20">
        {[
          "For Public And Private Companies",
          "From The First Pitch To IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}

        <div className="start flex items-center gap-2 cursor-pointer">
          <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full">
            START THE PROJECT
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-[2px] border-zinc-400">
            <span className="rotate-45">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
