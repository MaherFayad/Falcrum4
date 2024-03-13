import SectionHeading from "@/common/component/element/SectionHeading";
import React from "react";
import { FaUmbrella } from "react-icons/fa";
import CardSolution from "./component/Card";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import Link from "next/link";
import Buttons from "@/common/component/element/Buttons";
import Button from "@/common/component/element/Button";

const Solution = ({ className = "" }) => {
  return (
    <div className={`${className} h-auto max-w-[1500px] px-5 lg:px-10 xl:px-20 pb-20`}>
      <ComponentTransition className="flex justify-center md:py-3 lg:py-5">
        <SectionHeading title="Latest Insights" />
      </ComponentTransition>
      <ComponentTransition delay={0.1} className="flex justify-center items-center flex-col">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:py-5 py-3 text-center bg-clip-text dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f]  bg-text md:w-[50%] text-transparent font-bold">
          Stay Ahead of the Curve
        </h1>
        <p className="text-base md:text-2xl text-center text-neutral-500 dark:text-neutral-300">
          Knowledge is power, especially in the fast-evolving tech landscape. Our insights section is a treasure trove of articles, blog posts, and updates designed to keep you informed and inspired.
        </p>
      </ComponentTransition>
      <CardSolution />
      <ComponentTransition className="w-full md:flex-row flex-col items-center flex justify-center gap-3">
        <Link href='/solution' className="w-full rounded-full">
          <Button
            title="Dive into our latest insights and fuel your strategic decisions with expert analysis and forecasts."
            className="hover:dark:!bg-neutral-100 transition-colors md:!rounded-full !rounded-3xl duration-300 overflow-hidden !bg-transparent outline outline-1 dark:outline-white outline-neutral-950 dark:!text-white !text-black w-full lg:py-4 py-3 leading-tight"
          />
        </Link>
        {/* <Link href="/contact">
      <Buttons title="Start Your Project" className="" textColor="!text-white "  />
        </Link> */}
      </ComponentTransition>
    </div>
  );
};

export default Solution;
