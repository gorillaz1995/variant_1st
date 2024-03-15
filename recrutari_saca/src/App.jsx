import "./tailwind.css";
import "./assets/animation/custom.css";
import Hero from "./Hero";
import Objectives from "./Objectives";
import Whowe from "./Whowe";
import Footer from "./Footer";
import Her1 from "./assets/heroSec/Her1";
import Her2 from "./assets/heroSec/Her2";
import Her3 from "./assets/heroSec/Her3";
import Her4 from "./assets/heroSec/Her4";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { animateScroll } from "react-scroll";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const scrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 100,
      smooth: true,
      touch: true,
    });
  };

  return (
    <ReactLenis
      className="lenis lenis-smooth"
      root
      options={{
        lerp: 0.2, // Adjust smoothness (lower for smoother, 0-1)
        duration: 1.5, // Adjust animation duration in seconds
        smoothWheel: true,
        syncTouch: true,
        syncTouchLerp: 0.08,
      }}
    >
      <div>
        <button
          className="fixed bottom-8 right-8 bg-transparent text-blue-500 px-4 py-2 rounded-full shadow-md border border-blue-500"
          onClick={scrollToTop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>

        <Hero />
        <div>
          <section>
            <Her1 />
          </section>
          <section>
            <Her2 />
          </section>
          <section>
            <Her3 />
          </section>
          <section>
            <Her4 />
          </section>
        </div>

        <Objectives />
        <Whowe />
        <Footer />

        {/* Scroll To Top Button */}
      </div>
    </ReactLenis>
  );
}

export default App;
