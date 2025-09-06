"use client";
import React, { useRef } from "react";
import Video from "@/Component/Video";
import Logo from "@/Component/Logo";
import TopText from "@/Component/TopText";
import HomeDesc from "@/Component/HomeDesc";
import Projects from "@/Component/Projects";
import Agence from "@/Component/Agence";
import { motion } from "framer-motion";

const page = () => {
  const menuOverlayRef = useRef(null);
  const showOverlay = () => {
    menuOverlayRef.current.style.display = "none";
  };
  const showOverlayNow = () => {
    menuOverlayRef.current.style.display = "block";
  };
  let btmLinks = ["projects", "agence"];
  return (
    <>
      <>
        <div className="main w-full  relative  h-screen">
          <div
            ref={menuOverlayRef}
            style={{ fontFamily: "Lausanne_250, sans-serif" }}
            className="menu-overlay bg-black w-full h-full absolute top-0 left-0 z-[999] font-bold uppercase
          text-[7.3rem] leading-none  hidden "
          >
            <div onClick={showOverlay} className="absolute top-0 right-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="150"
                height="150"
                viewBox="0 0 256 256"
              >
                <g
                  fill="#ffffff"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                  <g transform="scale(5.12,5.12)">
                    <path d="M7.71875,6.28125l-1.4375,1.4375l17.28125,17.28125l-17.28125,17.28125l1.4375,1.4375l17.28125,-17.28125l17.28125,17.28125l1.4375,-1.4375l-17.28125,-17.28125l17.28125,-17.28125l-1.4375,-1.4375l-17.28125,17.28125z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div className="menu-links-wrapper text-white mt-[9rem]">
              <div className="group w-full h-[120px] relative">
                <div className=" absolute top-0 left-0 z-[999] w-full h-0 bg-[#d3fd50]  group-hover:h-full transition-all duration 3000 ease-in-out overflow-hidden flex ">
                  <motion.div
                    className="flex"
                    initial={{ x: "0%" }}
                    animate={{ x: "-100%" }}
                    transition={{
                      x: { repeat: Infinity, repeatType: "loop", duration: 30 },
                    }}
                  >
                    <div className="flex items-center">
                      <h1 className="text-black leading-none">see</h1>

                      <h1 className="ml-[3rem] mr-[3rem] text-black">
                        everything
                      </h1>
                      <div className="marq-elem w-[250px] overflow-hidden h-[100px] bg-red-500 rounded-[70px] mt-[0.6rem] ml-[2rem] mr-[3rem]">
                        <img
                          className="w-full h-full"
                          src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex items-center">
                      <h1 className="text-black leading-none">see</h1>
                      <h1 className="ml-[3rem] mr-[3rem] text-black">
                        everything
                      </h1>
                      <div className="marq-elem w-[250px] overflow-hidden h-[100px] bg-red-500 rounded-[70px] mt-[0.6rem] ml-[2rem]">
                        <img
                          className="w-full h-full"
                          src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="menu-links w-full border-t-[1px] border-[#d5d5d5] ">
                  <h1 className="text-center">projets</h1>
                </div>
              </div>
              <div className="group w-full h-[120px] relative">
                <div className=" absolute top-0 left-0 z-[999] w-full h-0 bg-[#d3fd50]  group-hover:h-full transition-all duration 3000 ease-in-out overflow-hidden flex ">
                  <motion.div
                    className="flex"
                    initial={{ x: "0%" }}
                    animate={{ x: "-100%" }}
                    transition={{
                      x: { repeat: Infinity, repeatType: "loop", duration: 30 },
                    }}
                  >
                    <div className="flex items-center">
                      <h1 className="text-black leading-none">know</h1>

                      <h1 className="ml-[3rem] mr-[3rem] text-black">us</h1>
                      <div className="marq-elem w-[250px] overflow-hidden h-[100px] bg-red-500 rounded-[70px] mt-[0.6rem] ml-[2rem] mr-[3rem]">
                        <img
                          className="w-full h-full"
                          src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                          alt=""
                        />
                      </div>
                    </div>

                    <div className="flex items-center">
                      <h1 className="text-black leading-none">know</h1>
                      <h1 className="ml-[3rem] mr-[3rem] text-black">us</h1>
                      <div className="marq-elem w-[250px] overflow-hidden h-[100px] bg-red-500 rounded-[70px] mt-[0.6rem] ml-[2rem]">
                        <img
                          className="w-full h-full"
                          src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="menu-links w-full border-t-[1px] border-[#d5d5d5] ">
                  <h1 className="text-center">agence</h1>
                </div>
              </div>
              <div className="group w-full h-[120px] relative">
                <div className=" absolute top-0 left-0 z-[999] w-full h-0 bg-[#d3fd50]  group-hover:h-full transition-all duration 3000 ease-in-out overflow-hidden flex ">
                  <motion.div
                    className="flex"
                    initial={{ x: "0%" }}
                    animate={{ x: "-100%" }}
                    transition={{
                      x: { repeat: Infinity, repeatType: "loop", duration: 30 },
                    }}
                  >
                    <div className="flex items-center">
                      <h1 className="text-black leading-none">send</h1>

                      <h1 className="ml-[3rem] mr-[3rem] text-black">fax</h1>
                      <div className="marq-elem w-[250px] overflow-hidden h-[100px] bg-red-500 rounded-[70px] mt-[0.6rem] ml-[2rem] mr-[3rem]">
                        <img
                          className="w-full h-full"
                          src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                          alt=""
                        />
                      </div>
                    </div>

                    <div className="flex items-center">
                      <h1 className="text-black leading-none">send</h1>
                      <h1 className="ml-[3rem] mr-[3rem] text-black">fax</h1>
                      <div className="marq-elem w-[250px] overflow-hidden h-[100px] bg-red-500 rounded-[70px] mt-[0.6rem] ml-[2rem]">
                        <img
                          className="w-full h-full"
                          src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="menu-links w-full border-t-[1px] border-[#d5d5d5] ">
                  <h1 className="text-center">contact</h1>
                </div>
              </div>
              <div className="group w-full h-[120px] relative">
                <div className=" absolute top-0 left-0 z-[999] w-full h-0 bg-[#d3fd50]  group-hover:h-full transition-all duration 3000 ease-in-out overflow-hidden flex ">
                  <motion.div
                    className="flex"
                    initial={{ x: "0%" }}
                    animate={{ x: "-100%" }}
                    transition={{
                      x: { repeat: Infinity, repeatType: "loop", duration: 30 },
                    }}
                  >
                    <div className="flex items-center">
                      <h1 className="text-black leading-none">read</h1>

                      <h1 className="ml-[3rem] mr-[3rem] text-black">
                        articles
                      </h1>
                      <div className="marq-elem w-[250px] overflow-hidden h-[100px] bg-red-500 rounded-[70px] mt-[0.6rem] ml-[2rem] mr-[3rem]">
                        <img
                          className="w-full h-full"
                          src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                          alt=""
                        />
                      </div>
                    </div>

                    <div className="flex items-center">
                      <h1 className="text-black leading-none">read</h1>
                      <h1 className="ml-[3rem] mr-[3rem] text-black">
                        articles
                      </h1>
                      <div className="marq-elem w-[250px] overflow-hidden h-[100px] bg-red-500 rounded-[70px] mt-[0.6rem] ml-[2rem]">
                        <img
                          className="w-full h-full"
                          src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="menu-links w-full border-t-[1px] border-b-[1px] border-[#d5d5d5] ">
                  <h1 className="text-center">blogue</h1>
                </div>
              </div>
            </div>

            <div className="menu-footer absolute bottom-2 left-0 flex items-center justify-between w-full px-[1.2rem]">
              <div
                style={{ fontFamily: "Lausanne_250, sans-serif" }}
                className="footer-btm flex items-center  px-[20px]  font-[600] text-white justify-between w-full"
              >
                <h1 className="text-[20px]">MONTREAL_11:06:13</h1>
                <div className="flex items-center gap-[20px] mr-[12rem] ">
                  <h1 className="cursor-pointer  hover:text-[#d3fd50] text-[12px]">
                    PRIVACY POLICY
                  </h1>
                  <h1 className="cursor-pointer text-[12px] hover:text-[#d3fd50]">
                    PRIVACY NOTICE
                  </h1>
                  <h1 className=" cursor-pointer text-[12px] hover:text-[#d3fd50]">
                    ETHICS REPORT
                  </h1>
                  <h1 className="cursor-pointer text-[12px] hover:text-[#d3fd50]">
                    CONSENT CHOICES
                  </h1>
                </div>
              </div>

              <div className=" social-links flex items-center gap-2 text-[35px] text-white ">
                <div className="cursor-pointer fb ">
                  <h1 className="border-[2px] border-white rounded-[80px] leading-none px-[10px] py-[2px] hover:text-[#d3fd50] hover:border-[#d3fd50]">
                    FB
                  </h1>
                </div>
                <div className=" cursor-pointer ig">
                  <h1 className="border-[2px] border-white rounded-[80px] leading-none px-[10px] py-[2px] hover:text-[#d3fd50] hover:border-[#d3fd50]">
                    IG
                  </h1>
                </div>
                <div className="cursor-pointer ln">
                  <h1 className="border-[2px] border-white rounded-[80px] leading-none px-[10px] py-[2px] hover:text-[#d3fd50] hover:border-[#d3fd50]">
                    IN
                  </h1>
                </div>
                <div className="cursor-pointer be">
                  <h1 className="border-[2px] border-white rounded-[80px] leading-none px-[10px] py-[2px] hover:text-[#d3fd50] hover:border-[#d3fd50]">
                    BE
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <Video></Video>
          <div className="page1  relative w-full h-screen  text-white">
            <div className="flex justify-between ">
              <Logo></Logo>

              <div
                onClick={showOverlayNow}
                className="menu bg-black h-[50px] w-[250px] flex flex-col justify-center items-end
              pr-[40px]
            "
              ></div>
            </div>

            <TopText></TopText>

            <HomeDesc></HomeDesc>

            <div className="bottom-text flex items-center gap-5 ml-[200px] mt-[30px]">
              <Projects title={btmLinks[0]}></Projects>
              <Agence title={btmLinks[1]}></Agence>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default page;
