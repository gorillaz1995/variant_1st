import React, { useEffect, useRef } from "react";
import Search from "../images/search.svg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(useGSAP, ScrollTrigger, MotionPathPlugin);

function Her1() {
  const imgRef = useGSAP(null);
  const textRef = useGSAP(null);

  useGSAP(() => {
    const img = imgRef.current;
    const text = textRef.current;

    // Animation for the image
    gsap.fromTo(
      img,
      { opacity: 0, scale: 0, x: -400, y: 250, rotation: 0 }, // Start from invisible, scaled down, and not rotated
      {
        scrollTrigger: {
          trigger: img,
          toggleActions: "restart reset restart none",
        },
        duration: 1,
        opacity: 1, // End with full opacity
        scale: 4, // End with full scale
        ease: "sine.inOut",
        x: 200, // End position
        rotation: 180, // First rotation (360 degrees for one full rotation)
        onComplete: () => {
          gsap.to(img, {
            duration: 1,
            rotation: 720, // Second rotation (720 degrees for two full rotations)
            ease: "sine.inOut",
          });
        },
      }
    );

    // Animation for the text
    gsap.fromTo(
      text,
      { opacity: 0, y: -100 }, // Start from invisible and moved up
      {
        scrollTrigger: {
          trigger: text,
          toggleActions: "restart reset restart none",
        },
        duration: 1.8,
        opacity: 1, // End with full opacity
        y: 0, // End with original position
        ease: "slow(0.7,0.7,false)",
      }
    );

    // Cleanup function to remove the animations and ScrollTrigger on unmount
    return () => {
      gsap.killTweensOf([img, text]);
    };
  }, []);

  return (
    <section className="firstH ">
      <div className="h-screen relative flex justify-center items-center text-center">
        <div>
          <img
            ref={imgRef}
            src={Search}
            alt="Search Icon"
            className="w-20 h-20 absolute inset-0 z-0" // Positioned to cover the entire parent container and set to z-index 0
          />
        </div>
        <p
          ref={textRef}
          className="large-text font-bold font-custom_2 relative z-10"
        >
          {" "}
          {/* Positioned on top of the image with a higher z-index */}
          Esti in cautarea resurselor umane potrivite unui mediu competitiv?
        </p>
      </div>
    </section>
  );
}

export default Her1;
