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
        { opacity: 0, scale: 5.5, y: -200 }, // Start from invisible
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            toggleActions: "restart reset restart none",
          },
          duration: 1.5,
          opacity: 1, // End with fully visible
          ease: "sine.inOut",
          y: 0,
        }
      );
    });

    // Cleanup function to remove the animation and ScrollTrigger on unmount
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div className="fourthH section">
      <div className="h-screen flex justify-center items-center text-center">
        <p ref={quoteRef} className="large-text-fin font-custom_2 font-bold">
          Noi avem solutii pentru afacerea ta!
        </p>
      </div>
    </div>
  );
}

export default Her1;
