import { React, useEffect, useState, useRef } from "react";

const Eyes = () => {
  const [rotate, setrRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mousex = e.clientX;
      let mousey = e.clientY;

      //difference in center of widht , height and position of mouse

      let deltax = mousex - window.innerWidth / 2;
      let deltay = mousey - window.innerHeight / 2;

      //now find angle of difference
      var angle = Math.atan2(deltay, deltax) * (180 / Math.PI);
      setrRotate(angle - 180);
    });
  });

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-0.7"
        className="relative w-full h-full bg-cover bg-center  bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]"
      >
        <div className="flex gap-10 absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
          <div className="w-[15vw] flex items-center justify-center h-[15vw] rounded-full bg-zinc-100">
            <div className="w-2/3 h-2/3 relative rounded-full bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50% , -50%) rotate(${rotate}deg) `,
                }}
                className=" absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full  h-10"
              >
                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] flex items-center justify-center h-[15vw] rounded-full bg-zinc-100">
            <div className="w-2/3 h-2/3 relative rounded-full bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50% , -50%) rotate(${rotate}deg) `,
                }}
                className=" absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10"
              >
                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
