import Image from "@/common/component/element/Image";
import React from "react";
import { WiDayCloudy } from "react-icons/wi";
import { FaCode } from "react-icons/fa";
import ComponentTransition from "@/common/component/element/ComponentTransition";

const Card = () => {
  return (
    <div className="py-10 grow relative flex gap-6 lg:gap-10 flex-col">

      <div className="flex gap-6 lg:gap-10 justify-center flex-row flex-wrap">
        <ComponentTransition
          delay={0.1}
          className="w-full px-6 lg:px-10 py-5 lg:basis-[30%] overflow-hidden dark:bg-[#0a0a0a] border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          {/* <FaCode size={40} /> */}
          <h1 className="text-2xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
            Our values—innovation
          </h1>
          <p className="text-base text-neutral-700 dark:text-neutral-400 mt-5 md:line-clamp-2 lg:line-clamp-4 line-clamp-3">
            integrity, collaboration, and excellence—are the cornerstones upon which Fulcrum Services is built. These values reflect our collective ambition to not just participate in the Fourth Industrial Revolution but to lead it. Our approach is holistic and forward-thinking, grounded in the belief that 4IR offers an unprecedented opportunity for businesses to innovate, grow, and redefine their impact on the world.
          </p>
        </ComponentTransition>
        <ComponentTransition
          delay={0.2}
          className="w-full h-[250px] lg:basis-[65%] overflow-hidden bg-neutral-100 border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <Image
            src="/img1.png"
            alt="Header Image"
            width={400}
            height={400}
            loading="lazy"
            className="w-full object-cover scale-110 max-lg:w-full max-lg:h-80"
          />
        </ComponentTransition>
      </div>
      <div className="flex gap-6 lg:gap-10 justify-center lg:flex-row flex-col-reverse flex-wrap">
        <ComponentTransition
          delay={0.1}
          className="w-full h-auto object-cover lg:basis-[30%] overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <Image
            src="/img.png"
            alt="Header Image"
            width={400}
            height={400}
            loading="lazy"
            className="w-auto h-auto object-cover scale-110 max-lg:w-full max-lg:h-80"
          />
        </ComponentTransition>
        <ComponentTransition
          delay={0.1}
          className=" grow h-[250px] px-6 lg:px-10 py-5 lg:basis-[30%] overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          {/* <FaCode size={40} /> */}
          <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
            Vision
          </h1>

          <p className="text-base text-neutral-700 dark:text-neutral-400 mt-5 md:line-clamp-2 lg:line-clamp-4 line-clamp-3">
            We see 4IR as a unique convergence of digital, physical, and biological realms, a fusion that offers boundless opportunities for businesses ready to embrace change. Our role at Fulcrum Services is to be the catalyst for this transformation, providing the insight, strategy, and execution needed to turn potential into reality.
          </p>
        </ComponentTransition>
      </div>
    </div>
  );
};

export default Card;
