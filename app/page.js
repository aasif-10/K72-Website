import React from "react";
import Video from "@/Component/Video";
import Logo from "@/Component/Logo";
import TopText from "@/Component/TopText";
import HomeDesc from "@/Component/HomeDesc";
import Projects from "@/Component/Projects";
import Agence from "@/Component/Agence";

const page = () => {
  let btmLinks = ["projects", "agence"];
  return (
    <>
      <>
        <div className="main w-full  relative  h-screen">
          <Video></Video>
          <div className="page1  relative w-full h-screen  text-white">
            <div className="flex justify-between ">
              <Logo></Logo>

              <div
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
