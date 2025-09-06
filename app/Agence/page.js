"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiHeart } from "react-icons/hi";
import { motion, useAnimation } from "framer-motion";

const page = () => {
  const team = [
    { role: "Conseillère", name: "Sophie Auger" },
    { role: "Directeur conseil", name: "Carl Godbout" },
    { role: "Conceptrice-rédactrice", name: "Camille Brière" },
    { role: "Conseillère", name: "Claire Robert" },
    { role: "Conseiller Principal", name: "Arnaud Doyon" },
    { role: "Directrice artistique", name: "Mélanie Laviolette" },
    { role: "Directrice de la stratégie", name: "Michèle Riendeau" },
    { role: "Directrice conseil", name: "Meggie Lavoie" },
    { role: "Directeur artistique", name: "Alex Sauvageau" },
    { role: "Conseiller", name: "Philippe Perreault" },
    { role: "Stratège", name: "Béatrice Roussin" },
    { role: "Conseillère", name: "Lou Gravel-Jean" },
    { role: "Planificateur stratégique principal", name: "Olivier Roeyaerts" },
    { role: "Coordonatrice", name: "Lawrence Meunier" },
    { role: "Directrice conseil", name: "Isabelle Beauchemin" },
    { role: "Designer graphique", name: "Olivier Duclos" },
    { role: "Directeur de création adjoint", name: "Joël Letarte" },
    { role: "Directrice de création", name: "Chantal Gobeil" },
    { role: "Conseillère production et opération", name: "Mylène St-Arneault" },
  ];

  const imageArray = [
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
  ];
  const imageRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to(".image-container", {
      scrollTrigger: {
        trigger: ".image-container",
        start: "top 23%",
        end: "bottom -100%",
        pin: true,
        scrub: true,
        onUpdate: function (elem) {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length);
          } else {
            imageIndex = Math.floor(elem.progress * imageArray.length) - 1;
          }

          imageRef.current.src = imageArray[imageIndex];
        },
      },
    });

    gsap.to(".nb", {
      height: 0,
      stagger: 0.5,
      duration: 2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".nb",
        start: "top -10%",
        scrub: 2,
      },
    });

    gsap.to(".head", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".nb",
        start: "top -0.5%",
        scrub: 0.1,
      },
    });

    gsap.to(".main", {
      backgroundColor: "black",
      color: "white",
      scrollTrigger: {
        trigger: ".r-btm",
        start: "bottom 10%",
        scrub: 1,
      },
    });

    gsap.to(".logo-1", {
      fill: "white",
      scrollTrigger: {
        trigger: ".r-btm",
        start: "bottom 10%",
        scrub: 1,
      },
    });

    gsap.to(".image-container-1", {
      scrollTrigger: {
        trigger: ".image-container-1",
        start: "top top",
        pin: true,
        scrub: true,
      },
    });
    gsap.to(".image-container-2", {
      scrollTrigger: {
        trigger: ".image-container-2",
        start: "top top",
        pin: true,
        scrub: true,
      },
    });
    gsap.to(".div1", {
      scrollTrigger: {
        trigger: ".div1",
        start: "top -10%",
        pin: true,
        pinSpacing: false,
        scrub: true,
      },
    });
    gsap.to(".div2", {
      scrollTrigger: {
        trigger: ".div2",
        start: "top top",
        pin: true,
        pinSpacing: false,
        scrub: true,
      },
    });
    gsap.to(".div3", {
      scrollTrigger: {
        trigger: ".div3",
        start: "top -5%",
        pin: true,
        pinSpacing: false,
        scrub: true,
      },
    });

    gsap.to(".div4", {
      scrollTrigger: {
        trigger: ".div4",
        start: "top 36%",
        pin: true,
        pinSpacing: false,
        scrub: true,
      },
    });

    gsap.from(".image-container-overlay", {
      scaleX: 1,
      duration: 0.7,
      ease: "power1.inOut",
      transformOrigin: "right",
    });

    gsap.from(".heading-elem", {
      y: "-100%",
      stagger: 0.2,
      duration: 0.8,
      ease: "power1.inOut",
    });
  });

  const imageCard = useAnimation();
  const elementHovered = () => {
    console.log("hovered");
  };
  return (
    <>
      <div className="main relative">
        <div className="cursor-pointer logo mx-[12px] mt-[12px] fixed z-[99]  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="115"
            height="50"
            viewBox="0 0 103 44"
          >
            <path
              className="logo-1"
              fillRule="evenodd"
              d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
            ></path>
          </svg>
        </div>
        <div className="page1 w-full min-h-screen ">
          <div
            className="image-container absolute w-[230px] h-[295px] 
          
          left-[420px] top-[180px] rounded-[26px] overflow-hidden bg-white border-white border-[1px]
          
          "
          >
            <div
              className="image-container-overlay scale-x-0 w-full h-full absolute border-[1px]  bg-white border-white  overflow-hidden
          
          "
            ></div>
            <img
              ref={imageRef}
              className="w-full h-full z-[999]"
              src="https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg"
              alt=""
            />
          </div>

          <div className="relative ">
            <div className="navbar-container  flex flex-col items-end  ">
              <div
                className="navbar-links fixed flex"
                style={{ fontFamily: "Lausanne_250, sans-serif" }}
              >
                <div className="nav-elem cursor-pointer relative group  h-fit">
                  <div className="absolute top-0 left-0   border-[#d3fd50]  w-[300px] h-[0px] bg-[#d3fd50] group-hover:h-[55px] transition-all duration-300 ease-in-out  "></div>
                  <div className="a nb projectBar border-[1px] border-black flex items-baseline-last w-[300px] h-[55px] bg-black text-white font-[600] text-[19px] pl-[10px]">
                    <h2 className="head uppercase z-[2] group-hover:text-black transition-all duration-300 ease-in-out">
                      projects
                    </h2>
                  </div>
                </div>
                <div className="nav-elem cursor-pointer relative group h-fit">
                  <div className="absolute top-0 left-0  border-[#d3fd50]  w-[450px] h-[0px] bg-[#d3fd50] text-white  font-[600] text-[19px] pl-[10px] group-hover:h-[90px] transition-all duration-300 ease-in-out"></div>
                  <div className="nb agenceBar border-[1px] border-black flex items-baseline-last w-[450px] h-[90px] bg-black text-white  font-[600] text-[19px] pl-[10px]">
                    <h2 className="head uppercase z-[2] group-hover:text-black transition-all duration-300 ease-in-out">
                      agence
                    </h2>
                  </div>
                </div>
                <div className="nav-elem cursor-pointer relative group h-fit ">
                  <div className=" absolute top-0 right-0 z-[999] border-[#d3fd50]  w-[250px] h-[55px] bg-black block  group-hover:hidden "></div>

                  <div className=" absolute top-0 left-0 border-[#d3fd50]  w-[250px] h-[0px] bg-[#d3fd50] text-white  font-[600] text-[19px] pl-[10px] group-hover:h-[130px] transition-all duration-300 ease-in-out"></div>

                  <div className="nb menuBar border-[1px] border-black flex items-baseline-last w-[250px] h-[130px] bg-black text-white  font-[600] text-[19px] pl-[10px]">
                    <h2 className="head uppercase z-[2] group-hover:text-black transition-all duration-300 ease-in-out">
                      menu
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="heading mt-[340px]">
              <div className="  w-full overflow-hidden">
                <h1
                  style={{ fontFamily: "Lausanne_250, sans-serif" }}
                  className="heading-elem text-[300px] uppercase font-[600] leading-none "
                >
                  Soixan7e
                </h1>
              </div>

              <div>
                <div className="  w-full overflow-hidden">
                  <h1
                    style={{ fontFamily: "Lausanne_250, sans-serif" }}
                    className="heading-elem text-[300px] uppercase font-[600] ml-[250px] leading-none "
                  >
                    Douze
                  </h1>
                </div>
              </div>
            </div>

            <div className="heading-desc w-[98%] flex flex-col items-end ">
              <p
                style={{ fontFamily: "Lausanne_250, sans-serif" }}
                className="text-[50px] font-[600] leading-none w-[880px] "
              >
                <span className="ml-[300px]">Notre curiosité nourrit</span>{" "}
                notre créativité. On reste humbles et on dit non aux gros egos,
                même le vôtre. Une marque est vivante. Elle a des valeurs, une
                personnalité, pune histoire. Si on oublie ça, on peut faire de
                bons chiffres à court terme, mais on la tue à long terme. C'est
                pour ça qu'on s'engage à donner de la perspective, pour bâtir
                des marques influentes.
              </p>
            </div>
          </div>

          <div
            style={{ fontFamily: "Lausanne_500, sans-serif" }}
            className="random flex flex-col gap-[150px] items-start mt-[200px] ml-[180px] mr-[150px] text-[20px]"
          >
            <div className="r-top flex items-start gap-[350px] leading-[25px] font-[500]">
              <h2 style={{ fontFamily: "Lausanne_250, sans-serif" }}>
                Expertise
              </h2>
              <div>
                <h2>Stratégie</h2>
                <h2>Publicité</h2>
                <h2>Branding</h2>
                <h2>Design</h2>
                <h2>Contenu</h2>
              </div>
            </div>
            <div className="r-btm  flex items-start gap-[50px] leading-[25px]">
              <p>
                Nos projets_naissent dans l'humilité, grandissent dans la
                curiosité et vivent grâce à la créativité sous toutes ses
                formes.
              </p>
              <p>
                Notre création_bouillonne dans un environnement où le talent a
                le goût d'exploser. Où on se sent libre d'être la meilleure
                version de soi-même.
              </p>
              <p>
                Notre culture_c'est l'ouverture aux autres. Point. Tout
                l'équipage participe à bâtir une agence dont on est fiers.
              </p>
            </div>
          </div>
        </div>
        <div className="page2 w-full min-h-screen flex flex-col justify-center items-center mt-[400px] relative overflow-hidden">
          <div
            style={{ fontFamily: "Lausanne_250, sans-serif" }}
            className="absolute  top-30 left-10 flex flex-col gap-[100px]"
          >
            <motion.div
              initial={{ x: "0%" }}
              animate={{ x: "-100%" }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30, // adjust speed
                  ease: "linear",
                },
              }}
              className="flex items-center  gap-[200px]"
            >
              <h1 className="text-[130px] font-bold   text-[#d2fc50] ">JOEL</h1>
              <h1 className="text-[130px] font-bold   text-[#d2fc50] ml-[1000px]">
                JOEL
              </h1>
              <h1 className="text-[130px] font-bold   text-[#d2fc50] ml-[1000px]">
                JOEL
              </h1>
              <h1 className="text-[130px] font-bold   text-[#d2fc50] ml-[1000px]">
                JOEL
              </h1>
            </motion.div>

            <div className="w-full overflow-hidden relative z-[999]">
              <motion.div
                initial={{ x: "0%" }}
                animate={{ x: "-100%" }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30, // adjust speed
                    ease: "linear",
                  },
                }}
                className="flex z-20 items-baseline "
              >
                <div className="flex z-20 items-baseline gap-[80px] mr-[1000px]">
                  <h1 className="text-[130px] font-bold text-[#d2fc50]  ">
                    LETARTE
                  </h1>
                  <h2 className="uppercase text-[30px] whitespace-nowrap">
                    Directeur de création adjoint
                  </h2>
                </div>
                <div className="flex z-20 items-baseline gap-[80px] mr-[1000px]">
                  <h1 className="text-[130px] font-bold text-[#d2fc50]  ">
                    LETARTE
                  </h1>
                  <h2 className="uppercase text-[30px] whitespace-nowrap">
                    Directeur de création adjoint
                  </h2>
                </div>
                <div className="flex z-20 items-baseline gap-[80px] mr-[1000px]">
                  <h1 className="text-[130px] font-bold text-[#d2fc50]  ">
                    LETARTE
                  </h1>
                  <h2 className="uppercase text-[30px] whitespace-nowrap">
                    Directeur de création adjoint
                  </h2>
                </div>
                <div className="flex z-20 items-baseline gap-[80px] mr-[1000px]">
                  <h1 className="text-[130px] font-bold text-[#d2fc50]  ">
                    LETARTE
                  </h1>
                  <h2 className="uppercase text-[30px] whitespace-nowrap">
                    Directeur de création adjoint
                  </h2>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="image-container-1 w-[480px] h-[720px] bg-red-400  rounded-[20px] overflow-hidden">
            <img
              className="w-full h-full"
              src="https://k72.ca/uploads/teamMembers/Olivier_640X960-640x960.jpg"
              alt=""
            ></img>
          </div>
          <div className="image-container-2 w-[480px] h-[720px] bg-red-400  rounded-[20px] overflow-hidden z-10">
            <img
              className="w-full h-full"
              src="https://k72.ca/uploads/teamMembers/MEL_640X960-640x960.jpg"
              alt=""
            ></img>
          </div>
        </div>
        <div className="page3 w-full min-h-screen relative z-20 bg-black pt-[150px]">
          {team.map((elem, index) => {
            return (
              <div key={index} className="relative group">
                <div className="absolute top-0 left-0 div w-full h-[0px] bg-[#d2fc50]  group-hover:h-[80px] transition-all duration-300 ease-in-out z-[1]"></div>

                <div
                  key={index}
                  style={{ fontFamily: "Lausanne_250, sans-serif" }}
                  className="vertical-divs w-full h-[80px] flex justify-between items-start border-t-[1px]   pt-[10px] px-[18px] group-hover:text-black transition-all duration-300 ease-in-out group-hover:border-none "
                >
                  <p
                    style={{ fontFamily: "Lausanne_500, sans-serif" }}
                    className="font-[500] text-[17.5px] z-[2]"
                  >
                    {elem.role}
                  </p>
                  <h1 className="uppercase font-[600] text-[40px] mt-[5px] z-[2]">
                    {elem.name}
                  </h1>
                </div>
              </div>
            );
          })}
          <motion.div
            onHoverStart={() => {
              console.log("hi");
            }}
            className="relative group "
          >
            <motion.div
              onHoverStart={elementHovered}
              className="absolute top-0 left-0  w-full h-[0px] bg-[#d2fc50]  group-hover:h-[80px] transition-all duration-300 ease-in-out z-[1] pointer-events-none"
            ></motion.div>

            <motion.div
              onHoverStart={elementHovered}
              style={{ fontFamily: "Lausanne_250, sans-serif" }}
              className="vertical-divs w-full h-[80px] flex justify-between items-start border-t-[1px]  border-b-[1px] pt-[10px] px-[18px] group-hover:text-black transition-all duration-300 ease-in-out group-hover:border-none "
            >
              <p
                style={{ fontFamily: "Lausanne_500, sans-serif" }}
                className="font-[500] text-[17.5px] z-[2]"
              >
                Directeur de création adjoint
              </p>
              <h1 className="uppercase font-[600] text-[40px] mt-[5px] z-[2]">
                Sébastien Roy
              </h1>
            </motion.div>
          </motion.div>
        </div>

        <div
          style={{ fontFamily: "Lausanne_250, sans-serif" }}
          className="page4 relative w-full min-h-screen  mt-[400px]"
        >
          <div className="group div1 w-full min-h-screen relative  overflow-hidden rounded-[40px]">
            <div className="desc-top absolute z-10 left-[50%] top-[3.5%] -translate-x-[50%] -translate-y-[50%]">
              <h2 className="uppercase  text-[21px] text-white z-[99]">
                voir tous les projets
              </h2>
            </div>
            <div className="group desc-mid absolute z-10 left-[50%] top-[30%] -translate-x-[50%] -translate-y-[50%] flex flex-col items-center">
              <h3 className="text-[30px] cursor-pointer">Lamajeure</h3>
              <h1 className="text-[75px] cursor-pointer font-bold group-hover:underline">
                Lamajeure
              </h1>
            </div>

            <img
              className=" w-full h-full group-hover:scale-[1.08] transition-transform duration-400 ease-in-out"
              src="https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg"
              alt=""
            />
          </div>
          <div className="group div2 w-full h-screen  relative z-10 overflow-hidden rounded-[40px]">
            <div className="desc-top absolute z-10  left-[50%] top-[3.5%] -translate-x-[50%] -translate-y-[50%]">
              <h2 className="uppercase  text-[21px] text-white z-[99]">
                voir tous les projets
              </h2>
            </div>
            <div className="desc-mid absolute z-10 left-[50%] top-[45%] -translate-x-[50%] -translate-y-[50%] flex flex-col items-center">
              <h3 className="text-[30px] font-bold cursor-pointer">
                GardaWorld
              </h3>
              <h1 className="text-[75px] font-bold cursor-pointer group-hover:underline">
                Crisis24
              </h1>
            </div>

            <img
              className="w-full h-full group-hover:scale-[1.08] transition-transform duration-400 ease-in-out "
              src="https://k72.ca/uploads/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes-1920x.jpg"
              alt=""
            />
          </div>
          <div className="group div3 w-full h-screen  relative z-10 overflow-hidden rounded-tl-[40px] rounded-tr-[40px]">
            <div className="desc-top absolute z-10  left-[50%] top-[3.5%] -translate-x-[50%] -translate-y-[50%]">
              <h2 className="uppercase  text-[21px] text-white z-[99]">
                voir tous les projets
              </h2>
            </div>
            <div className="desc-mid absolute z-10 left-[50%] top-[60%] -translate-x-[50%] -translate-y-[50%] flex flex-col items-center">
              <h3 className="text-[30px] font-bold cursor-pointer">Lassonde</h3>
              <h1 className="text-[75px] cursor-pointer font-bold group-hover:underline">
                Fruite
              </h1>
            </div>

            <img
              className="w-full h-full group-hover:scale-[1.08] transition-transform duration-400 ease-in-out"
              src="https://k72.ca/uploads/caseStudies/FRUITE/Fruite_thumbnail_bbq-1280x960.jpg"
              alt=""
            />
          </div>

          <div
            style={{ fontFamily: "Lausanne_250, sans-serif" }}
            className="div4 w-full h-screen  relative z-10 bg-black"
          >
            <div className="footer-top flex justify-between items-center text-[75px] font-bold pt-[20px] px-[10px] ">
              <div className="social-links flex items-center gap-2 ">
                <div className="cursor-pointer fb ">
                  <h1 className="border-[2px] border-white rounded-[80px] leading-[60px] px-[20px] pt-[10px] hover:text-[#d3fd50] hover:border-[#d3fd50]">
                    FB
                  </h1>
                </div>
                <div className=" cursor-pointer ig">
                  <h1 className="border-[2px] border-white rounded-[80px] leading-[60px] px-[25px] pt-[10px] hover:text-[#d3fd50] hover:border-[#d3fd50]">
                    IG
                  </h1>
                </div>
                <div className="cursor-pointer ln">
                  <h1 className="border-[2px] border-white rounded-[80px] leading-[60px] px-[25px] pt-[10px] hover:text-[#d3fd50] hover:border-[#d3fd50]">
                    IN
                  </h1>
                </div>
                <div className="cursor-pointer be">
                  <h1 className="border-[2px] border-white rounded-[80px] leading-[60px] px-[25px] pt-[10px] hover:text-[#d3fd50] hover:border-[#d3fd50]">
                    BE
                  </h1>
                </div>
              </div>
              <div className="cursor-pointer contact ">
                <h1 className="border-[2px] border-white rounded-[80px] leading-[60px] px-[40px] pt-[10px] hover:text-[#d3fd50] hover:border-[#d3fd50]  flex items-center gap-4">
                  CONTACT
                </h1>
              </div>
            </div>
            <div
              style={{ fontFamily: "Lausanne_250, sans-serif" }}
              className="footer-btm flex items-center mt-[340px] px-[20px] gap-[170px] font-[600] "
            >
              <h1>MONTREAL_11:06:13</h1>
              <div className="flex items-center gap-[20px] ">
                <h1 className="cursor-pointer text-[14px] hover:text-[#d3fd50]">
                  POLITIQUE DE CONFIDENTIALITÉ
                </h1>
                <h1 className="cursor-pointer text-[14px] hover:text-[#d3fd50]">
                  AVIS DE CONFIDENTIALITÉ
                </h1>
                <h1 className=" cursor-pointer text-[14px] hover:text-[#d3fd50]">
                  RAPPORT ÉTHIQUE
                </h1>
                <h1 className="cursor-pointer text-[14px] hover:text-[#d3fd50]">
                  OPTIONS DE CONSENTEMENT
                </h1>
              </div>
              <h1 className="cursor-pointer text-[18px] hover:text-[#d3fd50]">
                RETOUR EN HAUT
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
