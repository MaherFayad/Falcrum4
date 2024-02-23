'use client'

import Button from "@/common/component/element/Button";
import Card from "@/common/component/element/Card-services";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import SectionHeading from "@/common/component/element/SectionHeading";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import { AiFillSliders } from "react-icons/ai";
import { ServiceItem } from "@/common/constant/Service";
import DonutChart from "./Flywheel";
import { data } from "./data";
import DonutChartMobile from "./Flywheel-mobile"


const useWindowSize = () => {
  const [size, setSize] = useState({ width: 0, height: 1 });

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      // Set window width/height to state
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return size;
};


export default function Feature() {
  const { width } = useWindowSize();
  console.log(width);
  
  
  // Define a breakpoint for desktop devices, e.g., 1024px
  const desktopBreakpoint = 1360;

  // Determine if the current device is considered desktop based on the window width
  const isDesktop = width >= desktopBreakpoint;

  return (
    <div className="h-auto max-w-[1500px] px-10 xl:px-20 pb-20 -my-16">
      <ComponentTransition
        delay={0.1}
        className="flex justify-center items-center flex-col"
      >
        <h1 className="text-3xl md:text-5xl py-5 text-center bg-clip-text dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f] bg-text md:w-[100%] text-transparent font-bold">
          Pioneering the Fourth Industrial Revolution
        </h1>
        <p className="text-base md:text-2xl text-center text-neutral-500 dark:text-neutral-300">
          In today's rapidly evolving tech landscape, Fulcrum Services propels businesses to the forefront of the Fourth Industrial Revolution. Specializing in transforming firms and startups into industry leaders, we harness the power of AI, Blockchain, and IoT to not only address today's challenges but to shape tomorrow's opportunities. Our strategy is clear: drive unparalleled efficiency, innovation, and growth. We're not just adapting to change; we're setting the pace, committed to excellence and redefining the future of business.
        </p>
        {/* Conditionally render based on isDesktop */}
        <div className="h-auto">{isDesktop ? (
          <DonutChart data={data} width={width*0.8} height={1000} Content={ServiceItem} />
        ) : (
          <DonutChartMobile data={data} Content={ServiceItem} />
        )}</div>
      </ComponentTransition>

      <ComponentTransition className="w-full md:flex-row flex-col items-center flex justify-center gap-3">
        <Link href="/solution" className="w-full rounded-full">
          <Button
            title="View All Solution"
            className="hover:!bgslate hover:dark:!bg-neutral-100 transition-colors !rounded-full duration-300 overflow-hidden !bg-transparent outline outline-1 dark:outline-white outline-neutral-950 dark:!text-white !text-black w-full py-5"
          />
        </Link>
      </ComponentTransition>
    </div>
  );
}

