import React from "react";

const TopText = () => {
  return (
    <>
      <div className="top-text  absolute left-[50%] top-[29%] -translate-x-[50%] -translate-y-[50%] w-[1150px]">
        <h1
          style={{ fontFamily: "Lausanne_250, sans-serif" }}
          className="uppercase text-[140px] font-['Lausanne_250'] leading-none text-center selection:bg-[#d3fd50] selection:text-black"
        >
          L'étincelle qui
          <span>
            <div className="w-[235px] h-[105px]  inline-block rounded-[50px] overflow-hidden">
              <video autoPlay muted loop src="/video.mp4"></video>
            </div>
          </span>
          génère la créativité
        </h1>
      </div>
    </>
  );
};

export default TopText;
