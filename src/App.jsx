import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import bg from "/bg.png";
import sky from "/sky.png";
import girl from "/girlbg.png";
import ps5 from "/ps5.png";
import "remixicon/fonts/remixicon.css";

const App = () => {
  const [ShowContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      ease: "power4.easeInOut",
      transformOrigin: "50% 50%",
      duration: 2,
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!ShowContent) return;

    gsap.to('.main', {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    })
   gsap.to(".sky", {
    scale: 1.2,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
   })
   gsap.to(".bg", {
      scale: 1.2,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
   })
   gsap.to(".bg", {
      scale: 1.2,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
   })
   gsap.to(".girlChar", {
      scale: 0.8,
      rotate: 0,
      duration: 2,
      bottom: "-50%",
      delay: "-.8",
      ease: "Expo.easeInOut",
   })
   gsap.to(".texts", {
      scale: 1,
      rotate: 0,
      duration: 2,
      bottom: "-50%",
      delay: "-.8",
      ease: "Expo.easeInOut",
   })


    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;

      gsap.to(".main .texts", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 0.5,
      });
    });
  }, [ShowContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {ShowContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing w-full overflow-hidden relative h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[5] w-full py-5 px-10">
              <div className="logo flex gap-7 items-center">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-12 h-1 bg-white"></div>
                  <div className="line w-8 h-1 bg-white"></div>
                  <div className="line w-4 h-1 bg-white"></div>
                </div>
                <h3 className="text-3xl -mt-[7px] leading-none text-white">
                  Rockstar
                </h3>
              </div>
            </div>
            <div className="images overflow-hidden relative w-full h-screen">
              <img
                className="sky scale-[1.5] rotate-[-20deg] w-full h-full absolute top-0 left-0 object-cover"
                src={sky}
                alt=""
              />
              <img
                className="bg scale-[1.8] rotate-[-3deg] w-full h-full absolute top-0 left-0 object-cover"
                src={bg}
                alt=""
              />

              <div className="texts absolute top-5 left-143 scale-[1.4] rotate-[-10deg]">
                <h1 className="text-[10rem] leading-none text-white -ml-20">
                  grand
                </h1>
                <h1 className="text-[10rem] leading-none text-white ml-20">
                  theft
                </h1>
                <h1 className="text-[10rem] leading-none text-white -ml-20">
                  auto
                </h1>
              </div>

              <img
                className="girlChar absolute -bottom-[150%] left-1/4 scale-[2.5] rotate-[-20deg]"
                src={girl}
                alt=""
              />
            </div>
            <div className="btmbar w-full px-10 py-7 absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center text-white">
                <i className="ri-arrow-down-line text-2xl"></i>
                <h3 className="font-[Helvetica_Now_Display] text-lg">
                  Scroll Down
                </h3>
              </div>
              <img
                className="absolute top-1/6 left-160 h-[45px]"
                src={ps5}
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-screen flex items-center justify-center bg-black overflow-hidden">
            <div className="cntnr flex text-white w-full h-[80%]">
              <div className="ls w-1/2 h-full relative">
                <img
                  className="absolute -top-35 scale-[0.9]"
                  src="./imag.png"
                  alt=""
                />
              </div>
              <div className="rs w-[30%] py-5">
                <h1 className="text-6xl">Still Running,</h1>
                <h1 className="text-6xl">Not Hunting</h1>
                <p className="mt-10 font-[Helvetica_Now_Display] text-xl">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque maxime labore autem vero sunt dolorem nemo
                  aspernatur, accusantium nisi reiciendis commodi eaque sequi.
                </p>
                <p className="mt-3 font-[Helvetica_Now_Display] text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique, nihil maxime fugiat totam sapiente rerum!
                </p>
                <p className="mt-10 font-[Helvetica_Now_Display] text-xl">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nostrum, cupiditate. Similique, nisi veritatis modi nam
                  aliquam expedita, placeat illo ut officiis non, est ullam quae
                  laborum in asperiores esse. Quae fugiat labore minima corporis
                  tempore?
                </p>
                <button className="bg-yellow-500 px-6 py-4 mt-5 text-black text-xl">
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
