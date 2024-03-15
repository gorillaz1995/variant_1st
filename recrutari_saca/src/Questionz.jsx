import React from "react";
import { ReactTyped } from "react-typed";

function Questionz() {
  return (
    <div className="text-text-[#2FAAF3] overscroll-contain font-custom_3">
      <div className="max-w-[1600px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col">
        <p className="xl:text-5xl md:text-4xl sm:text-3xl text-xl font-bold md:py-8 text-[#03093B]">
          Esti in cautarea resurselor umane potrivite unui mediu competitiv?{" "}
        </p>
        <h1 className="xl:text-5xl md:text-4xl sm:text-3xl text-xl font-bold md:py-8 text-[#03093B]">
          Ai dificultati in identificarea specialistilor de care afacerea ta are
          nevoie?
        </h1>
        <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-xl font-bold md:py-8  text-[#03093B]">
          Esti antreprenor si simti ca timpul tau este limitat pentru
          gestionarea afacerii?
        </h1>

        <ReactTyped
          startWhenVisible
          strings={["Noi avem solutii pentru tine si afacerea ta."]}
          typeSpeed={30}
          className="xl:text-5xl md:text-5xl sm:text-4xl text-xl text-[#03093B] font-bold md:py-8 py-4"
        />
        <ReactTyped
          strings={[
            "Excelenta",
            "Profesionalism",
            "<strong>Expertii</strong> tai in HR",
          ]}
          typeSpeed={80}
          backSpeed={40}
          loop
          className="mt-[40px] xl:text-5xl  md:text-4xl sm:text-3xl text-xl text-[#03093B]"
        ></ReactTyped>
      </div>
    </div>
  );
}

export default Questionz;
