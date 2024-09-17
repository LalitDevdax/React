import React from "react";

const About = () => {
  return (
    <div className=" w-full py-[2vw] text-black rounded-tr-3xl rounded-tl-3xl bg-[#CDEA68]">
      <h1 className="p-[4vw] font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-tight">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      <div className="w-full flex gap-5 p-[4vw] border-t-[1px] pt-[2vw] border-[#a1b562] mt-[3vw] ">
        <div className="w-1/2">
          <h1 className="text-4xl">Our Approach : </h1>
          <button className="uppercase flex gap-10 items-center px-[2vw] mt-[2vw] py-[1vw] bg-zinc-900 rounded-full text-white">
            Read More
            <div className="w-2 h-2 bg-zinc-100  rounded-full"></div>
          </button>
        </div>

        <div className="w-1/2 h-[70vh]">
          <img
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt=""
            className=" w-full h-full rounded-3xl object-cover	object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
