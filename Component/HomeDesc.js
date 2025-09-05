import React from "react";

const HomeDesc = () => {
  return (
    <>
      <div className="home-desc ml-[1200px] mt-[380px] ">
        <p
          style={{ fontFamily: "Lausanne_500, sans-serif" }}
          className="w-[95%] text-[15px] font-[500]  leading-[20px] selection:bg-[#d3fd50] selection:text-black "
        >
          <span className="ml-[80px]">K72 est une agence qui pense</span> chaque
          action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On
          cherche la friction qui crée l’étincelle pour générer de l’émotion.
          Pour assurer une relation honnête, on est sans filtre, on dit ce qui
          doit être dit, on fait ce qui doit être fait.
        </p>
      </div>
    </>
  );
};

export default HomeDesc;
