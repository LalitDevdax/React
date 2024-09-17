import { motion, useAnimation } from "framer-motion";
import React from "react";

const Featured = () => {
  const card = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];
  const imageScale = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];

  const handleHover = (index) => {
    card[index].start({ y: "0" });
    imageScale[index].start({ scale: 1.1 });
  };

  const handleHoverEnd = (index) => {
    card[index].start({ y: "100%" });
    imageScale[index].start({ scale: 1 });
  };

  return (
    <div className="rounded-tl-3xl rounded-tr-3xl w-full py-[4vw]">
      <div className="border-b-[1px] border-zinc-700 pb-[2vw] w-full px-[4vw]">
        <h1 className="text-5xl font-['Neue_Montreal'] tracking-tight">
          Featured projects
        </h1>
      </div>
      <div className="px-[4vw]">
        <div className="cards w-full flex gap-10 mt-[5vw] mb-[5vw]">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="relative card-container w-1/2 h-[80vh]"
          >
            <h1 className="absolute flex overflow-hidden leading-none left-full tracking-tighter font-['Neue_Montreal'] text-[#CDEA68] top-1/2 -translate-y-1/2 -translate-x-1/2 z-[9] text-6xl">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  initial={{ y: "100%" }}
                  animate={card[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div className="card w-full h-full rounded-xl overflow-hidden">
              <motion.img
                initial={{ scale: 1 }}
                animate={imageScale[0]}
                transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              />
            </motion.div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="relative card-container w-1/2 h-[80vh]"
          >
            <h1 className="absolute flex overflow-hidden leading-none right-full tracking-tighter font-['Neue_Montreal'] text-[#CDEA68] top-1/2 -translate-y-1/2 translate-x-1/2 z-[9] text-6xl">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  initial={{ y: "100%" }}
                  animate={card[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div className="card w-full h-full rounded-xl overflow-hidden bg-[#121212]">
              <motion.img
                initial={{ scale: 1 }}
                animate={imageScale[1]}
                transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              />
            </motion.div>
          </motion.div>
        </div>
        <div className="cards w-full flex gap-10 mt-[2vw]">
          <motion.div
            onHoverStart={() => handleHover(2)}
            onHoverEnd={() => handleHoverEnd(2)}
            className="relative card-container w-1/2 h-[80vh]"
          >
            <h1 className="absolute flex overflow-hidden leading-none left-full tracking-tighter font-['Neue_Montreal'] text-[#CDEA68] top-1/2 -translate-y-1/2 -translate-x-1/2 z-[9] text-6xl">
              {"Trawa".split("").map((item, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  initial={{ y: "100%" }}
                  animate={card[2]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div className="card w-full h-full rounded-xl overflow-hidden">
              <motion.img
                initial={{ scale: 1 }}
                animate={imageScale[2]}
                transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
              />
            </motion.div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(3)}
            onHoverEnd={() => handleHoverEnd(3)}
            className="relative card-container w-1/2 h-[80vh]"
          >
            <h1 className="absolute flex overflow-hidden leading-none right-full tracking-tighter font-['Neue_Montreal'] text-[#CDEA68] top-1/2 -translate-y-1/2 translate-x-1/2 z-[9] text-6xl">
              {"Blend".split("").map((item, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  initial={{ y: "100%" }}
                  animate={card[3]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <motion.div className="card w-full h-full rounded-xl overflow-hidden bg-[#121212]">
              <motion.img
                initial={{ scale: 1 }}
                animate={imageScale[3]}
                transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
