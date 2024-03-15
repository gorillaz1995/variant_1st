import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Her1() {
  const quoteRef = useGSAP(null);

  useGSAP(() => {
    const el = quoteRef.current;
    // Create a GSAP context for cleanup
    const ctx = gsap.context(() => {
      // Animation for the quote
      gsap.fromTo(
        el,
        { opacity: 0, x: 600 }, // Start from invisible
        {
          scrollTrigger: {
            trigger: el,
            toggleActions: "restart reset restart none",
          },
          duration: 1.25,
          opacity: 1, // End with fully visible
          ease: "slow(0.7,0.7,false)",
          x: 0,
        }
      );
    });

    // Cleanup function to remove the animation and ScrollTrigger on unmount
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div className="thirdH section">
      <div className="h-screen flex justify-center items-center text-center">
        <p ref={quoteRef} className="large-text font-custom_2 font-bold">
          Esti antreprenor si simti ca timpul tau este limitat pentru
          gestionarea afacerii?
        </p>
      </div>
    </div>
  );
}

export default Her1;
