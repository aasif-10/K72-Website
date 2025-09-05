import React from "react";

const Projects = ({ title }) => {
  return (
    <>
      <div
        className="group projects  border-[3px] border-white rounded-[60px] pt-[15px] px-[40px] pb-0 hover:border-[#d3fd50] cursor-pointer
      
      "
      >
        <h1
          style={{ fontFamily: "Lausanne_250, sans-serif" }}
          className="uppercase text-[90px] font-[600]  leading-none
          
          group-hover:text-[#d3fd50] select-none

          "
        >
          {title}
        </h1>
      </div>
    </>
  );
};

export default Projects;
