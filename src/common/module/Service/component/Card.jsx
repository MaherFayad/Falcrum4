import Image from "@/common/component/element/Image";
import React from "react";
import { WiDayCloudy } from "react-icons/wi";
import { FaCode } from "react-icons/fa";
import ComponentTransition from "@/common/component/element/ComponentTransition";

const Card = () => {
  return (
    <div className="py-10 flex gap-10 justify-center flex-row flex-wrap relative">
      <div className="absolute  z-[-9] w-[100%] md:w-[500px] h-[400px]  left-0 "></div>

      <ComponentTransition
        delay={0.1}
        className="w-full  px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-[#0a0a0a] border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        {/* <FaCode size={40} /> */}
        <h1 className="text-2xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
        Free Educational Webinars
        </h1>
        <p className="text-base text-neutral-700 dark:text-neutral-400 mt-5 md:line-clamp-2 lg:line-clamp-4 line-clamp-3">
        Dive into the essentials of Fourth Industrial Revolution technologies and their impact on your industry.
        </p>
      </ComponentTransition>
      <ComponentTransition
        delay={0.2}
        className="w-full h-[250px] md:basis-[65%] overflow-hidden bg-neutral-100 border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <Image
          src="/img1.png"
          alt="Header Image"
          width={400}
          height={400}
          loading="lazy"
          className="w-full object-cover scale-110"
        />
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="w-full h-auto object-cover md:basis-[30%] overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <Image
          src="/img.png"
          alt="Header Image"
          width={400}
          height={400}
          loading="lazy"
          className="w-auto h-auto object-cover scale-110"
        />
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        {/* <FaCode size={40} /> */}
        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
        Customized Training Solutions
        </h1>

        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
        Enhance your team's expertise with personalized training programs, crafted to meet your unique business needs.
        </p>
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-[#0a0a0a] border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        {/* <FaCode size={40} /> */}
        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
        Personalized Technology Audits
        </h1>
        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
        Gain deep insights into your current technology usage and uncover potential areas for improvement.
        </p>
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-[#0a0a0a] border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        {/* <FaCode size={40} /> */}
        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
        Strategic Planning and Comprehensive Audits
        </h1>

        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
        Align your business goals with a strategic technology roadmap designed for sustainable growth.
        </p>
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-[#0a0a0a] border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        {/* <FaCode size={40} /> */}
        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
        Team Building and Project Management Services
        </h1>

        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
        Let us lead your strategic projects to success with our expert team building and project management support.
        </p>
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  md:basis-[30%] overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <Image
          src="/img.png"
          alt="Header Image"
          width={400}
          height={400}
          loading="lazy"
          className="w-full h-auto object-cover scale-110"
        />
      </ComponentTransition>
    </div>
  );
};

export default Card;
