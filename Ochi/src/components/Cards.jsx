import React from "react";

const Cards = () => {
  return (
    <div className="w-full flex gap-[1vw]  h-screen bg-zinc-500 items-center px-[2.5vw]">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card w-full relative flex items-center justify-center rounded-xl h-full bg-[#004D43]">
          <img
            className="w-32 relative"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          />
          <button className="absolute text-[0.8rem] left-[1.5vw] bottom-[1.5vw] border-2 border-yellow-500 text-yellow-500 rounded-full px-[1vw] py-[0.3vw]">
            &copy; 2023-27
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-[1vw] h-[50vh] w-1/2">
        <div className="card w-1/2 flex items-center justify-center rounded-xl h-full bg-[#212121]">
          <img
            className="w-32 relative"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
          />
          <button className="absolute text-[0.8rem] left-[1.2vw] bottom-[1.5vw] border-2 text-white rounded-full px-[1vw] py-[0.3vw]">
            Rating 5.0 on clutch
          </button>
        </div>
        <div className="card w-1/2 rounded-xl flex items-center justify-center h-full bg-[#212121]">
          <img
            className="w-32 relative"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
          />
          <button className="uppercase absolute left-[1.5vw] bottom-[1.5vw] border-2 text-white rounded-full px-[1vw] py-[0.3vw] text-[0.8rem]">
            Business bootcamp alumni
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
