import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#F0F0F0] border border-[#2FAAF3] text-white p-4 lg:justify-between lg:items-center grid  lg:grid-cols-3 grid-cols-1">
        <div className="flex-grow">
          <h2 className="lg:text-xl font-medium  mb-2 text-black font-custom_3">
            Contacteaza-ne:
          </h2>
          <p className="text-black font-custom_3">
            <span className="lg:font-medium font-small text-black font-custom_3">
              Dinu Andi:
            </span>{" "}
            (+40) 725-193-181
          </p>
          <p className="text-black font-custom_3">
            <span className="lg:font-medium font-small text-black font-custom_3">
              Rapan Sorin:
            </span>{" "}
            (+40) 724-388-087
          </p>
        </div>
        <div className="items-center justify-center">
          <p>
            <a
              href="mailto:office@sacaexperts.ro"
              className=" text-black font-custom_3 lg:text-center block "
            >
              office@sacaexperts.ro
            </a>
          </p>
          <p className="text-black font-custom_3 lg:text-center block">
            Piata Presei Nr. 3-5, City Gate Building, South Tower, Et. 3,
            Bucuresti, Sector 1
          </p>
        </div>
        <div className="text-right">
          <p className="md:text-sm  text-black font-custom_3">
            © 2024 Usagi Technologies
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
