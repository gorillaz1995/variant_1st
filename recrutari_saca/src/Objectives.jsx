import React from "react";
import twoBusi from "./assets/images/twoBusi.png";
import { ReactTyped } from "react-typed";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Objectives() {
  const quoteRef = useGSAP(null);

  useGSAP(() => {
    const el = quoteRef.current;
    // Create a GSAP context for cleanup
    const ctx = gsap.context(() => {
      // Animation for the quote
      gsap.fromTo(
        el,
        { opacity: 0, x: -700 }, // Start from invisible
        {
          x: 0,
          duration: 6,
          opacity: 1, // End with fully visible
          ease: "bounce.out(i,1)",
          y: 0,

          scrollTrigger: { trigger: el },
        }
      );
    });

    // Cleanup function to remove the animation and ScrollTrigger on unmount
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div className="w-full overscroll-auto bg-[#2d3a65] py-16 px-4">
      <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 grid-cols-1">
        <img
          ref={quoteRef}
          className="w-[500px] rounded-full lg:mx-auto my-4 justify-center items-center"
          src={twoBusi}
          alt="paine"
        />
        <div className="flex flex-col justify-center">
          <ReactTyped
            strings={[
              "DESPRE NOI",
              "ABOUT US",
              "CHI SIAMO",
              "SOBRE NOSOTROS",
              "UBER UNS",
              "A PROPOS DE NOUS",
            ]}
            typeSpeed={80}
            backSpeed={40}
            loop
            className="self-center lg:text-2xl md:text-xl text-xl font-custom_1 text-[#f2f2f2] pt-5 pb-10"
          ></ReactTyped>
          <ReactTyped
            startWhenVisible
            strings={[
              "Fondata in 2023 de doi profesionisti cu peste 12 ani de experienta in Logistica si Procese Operationale, Saca Experts, isi propune sa schimbe paradigma recrutarii si plasarii de personal in Romania.<br></br>Din propria experienta suntem constienti de provocarile recrutarii: stresul de a gasi candidati potriviti, dificultatea de a eficientiza procesul si nu in ultimul rand mentinerea personalului existent.<br></br>Ne propunem abordarea provocarilor cu un inceput diferit, care pune accent pe nevoile si dorintele atat ale companiilor partenere, cat si ale candidatilor.",
            ]}
            typeSpeed={4}
            className="self-center md:text-2xl sm:text-xl py-2 px-2 font-custom_3 text-[#f2f2f2]"
          />
        </div>
      </div>
    </div>
  );
}

export default Objectives;
