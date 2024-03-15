import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Whowe() {
  const quoteRef = useGSAP(null);

  useGSAP(() => {
    const el = quoteRef.current;
    // Create a GSAP context for cleanup
    const ctx = gsap.context(() => {
      // Animation for the quote
      gsap.fromTo(
        el,
        { opacity: 0 }, // Start from invisible
        {
          duration: 2,
          opacity: 1, // End with fully visible
          ease: "power3.inOut",
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
    <div className="w-full  font-custom_3">
      <div className="flex justify-center items-center">
        <h1 className="center justify-center xl:text-3xl  md:text-2xl sm:text-xl text-xl text-[#03093B] flex p-2 mt-10 pt-20  font-custom_2">
          Obiectivele noastre
        </h1>
      </div>
      <div className=" flex justify-center items-center pt-16 lg:pb-12 pb-6 ">
        <section className="gap-6 lg:gap-12 grid  lg:grid-cols-2 grid-cols-1 ">
          <div className="p-4  rounded-3xl justify-center text-[#03093B]  xl:h-[120px] xl:w-[700px] lg:h-[90px] lg:w-[500px] bg-[#F0F0F0] border border-[#2FAAF3] flex items-center font-custom_3">
            <p>
              Reactie instantanee: Solutii prompte si eficiente pentru nevoile
              tale!<br></br>Suntem dedicati raspunsului rapid la orice tip de
              cerere.<br></br>O echipa dinamica si proactiva, dedicata
              succesului tau.
            </p>
          </div>
          <div className="p-4 rounded-3xl justify-center text-[#03093B]    xl:h-[120px] xl:w-[700px] lg:h-[90px] lg:w-[500px] bg-[#F0F0F0] border border-[#2FAAF3] flex items-center font-custom_3">
            <p>
              Rezultate rapide: Livram primul rezultat la maxim 72h de la
              lansarea cererii!<br></br> Asiguram un flux continuu de candidati
              relevanti sau job-uri potentiale.<br></br>Economisesti timp si
              resurse.
            </p>
          </div>
          <div className="p-4 rounded-3xl justify-center text-[#03093B]   xl:h-[120px] xl:w-[700px] lg:h-[90px] lg:w-[500px] bg-[#F0F0F0] border border-[#2FAAF3] flex items-center font-custom_3">
            <p>
              Suport 24/7 pentru succesul tau pe termen lung!<br></br> Asistenta
              contractuala completa.<br></br> Monitorizare si motivare continua
              a personalului recrutat.<br></br> Contributie activa la
              performanta si satisfactia partenerilor nostri.
            </p>
          </div>
          <div className="p-4 rounded-3xl justify-center text-[#03093B]    xl:h-[120px] xl:w-[700px] lg:h-[90px] lg:w-[500px] bg-[#F0F0F0] border border-[#2FAAF3] flex items-center font-custom_3">
            <p>
              Angajament pentru atingerea si depasirea obiectivelor
              partenerilor!<br></br>Colaboram strans pentru a depasi cu
              eficienta si sustenabilitate obiectivele tale.<br></br>Dezvoltam
              solutii adaptate nevoilor specifice ale partenerilor.
            </p>
          </div>
        </section>
      </div>
      <div className="flex justify-center items-center ">
        <div className="p-4 rounded-3xl text-[#03093B]  xl:h-[120px] xl:w-[700px] lg:h-[90px] lg:w-[500px] bg-[#F0F0F0] border border-[#2FAAF3] flex items-center font-custom_3 ">
          <p>
            Dedicare 100% obiectivelor tale!<br></br>Pe baza aspiratiilor tale,
            construim un plan personalizat care va fi fundatia unui viitor
            prosper si motivant pentru tine.
          </p>
        </div>
      </div>
      <div className="flex justify-center md:py-20 py-10">
        <h1
          ref={quoteRef}
          className="center justify-center xl:text-3xl  md:text-2xl  text-sm text-[#03093B] flex items-center font-custom_1 pt-5"
        >
          ONE STEP CLOSER TO SUCCESS
        </h1>
      </div>
    </div>
  );
}

export default Whowe;
