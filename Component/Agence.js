import React from "react";
import Link from "next/link";
const Agence = ({ title }) => {
  return (
    <>
      <div className="group agence border-[3px] border-white rounded-[60px] pt-[15px] px-[40px] pb-0 hover:border-[#d3fd50] cursor-pointer">
        <Link href="/Agence">
          <h1
            style={{ fontFamily: "Lausanne_250, sans-serif" }}
            className="uppercase text-[90px] font-[600] leading-none group-hover:text-[#d3fd50] select-none"
          >
            {title}
          </h1>
        </Link>
      </div>
    </>
  );
};

export default Agence;
