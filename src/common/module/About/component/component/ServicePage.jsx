import ComponentTransition from "src/common/component/element/ComponentTransition";
import Image from "src/common/component/element/Image";
import Rails from "src/common/component/element/Rails";
import React from "react";
import { FaCode } from "react-icons/fa6";
import { WiDayCloudy } from "react-icons/wi";
import Feedback from "../../Feedback";
import CardOffer from "src/common/component/element/CardOffer";

export default function ServicePage() {
  return (
    <ComponentTransition className="h-auto max-w-[1500px] px-10 xl:px-20 pb-20">
      <div className="flex justify-center py-5 ">
        <div className="flex justify-center mt-20 relative ">
          <h1 className="text-4xl md:text-7xl py-5 px-10 text-center dark:bg-gradient-to-r from-white from-50% to-[#979797] bg-text bg-clip-text  text-transparent font-bold">
            Service & Expertise
          </h1>
          <div className="absolute w-[90%] top-1/2 -translate-y-1/2 h-[300px] z-[-99]">
            <Rails />
            <div style={{ backgroundImage: 'linear-gradient(to bottom, #E9ECEA 20%, transparent)' }} className="absolute inset-0"></div>
            <div style={{ backgroundImage: 'linear-gradient(to left, #E9ECEA 1%, transparent 30%)' }} className="absolute inset-0"></div>
            <div style={{ backgroundImage: 'linear-gradient(to right, #E9ECEA 1%, transparent 30%)' }} className="absolute inset-0"></div>
            <div style={{ backgroundImage: 'linear-gradient(to top, #E9ECEA 1%, transparent 30%)' }} className="absolute inset-0"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <p className="text-base md:text-2xl text-neutral-500 md:w-[70%] text-center">
          Websites / Applications / Web3 / Blockchain
        </p>
      </div>
      <div className="py-10 mt-20 flex gap-10 justify-center flex-row flex-wrap relative">
        <div className="absolute  z-[-9] glowbg w-[100%] md:w-[500px] h-[400px]  left-0 "></div>
        <ComponentTransition className="w-full overflow-hidden px-10 py-5 md:basis-[30%] h-[300px] bg-neutral-100 dark:bg-neutral-950/50 backdrop-blur-sm border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl">
          <WiDayCloudy size={50} />
          <h1 className="text-2xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
            Lorem Ipsum
          </h1>
          <h2 className="text-sm text-neutral-800 dark:text-neutral-300">
            Create Fast And Simple
          </h2>
          <p className="text-base text-neutral-700 dark:text-neutral-400 mt-5 md:line-clamp-2 lg:line-clamp-4 line-clamp-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eos
            voluptatem quo laborum perferendis eligendi voluptas nam dignissimos
            hic dolorem inventore optio. Eaque, deserunt.
          </p>
        </ComponentTransition>
        <ComponentTransition
          delay={0.2}
          className="w-full h-auto md:h-[300px] md:basis-[65%] overflow-hidden bg-neutral-100 border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/falcrum4-7eb0b.appspot.com/o/img1.webp?alt=media&token=d307a8f5-60fd-4266-a4f8-8a4289e1bc88"
            alt="Header Image"
            width={400}
            height={400}
            loading="lazy"
            className="w-full object-cover scale-110"
          />
        </ComponentTransition>
        <ComponentTransition
          delay={0.1}
          className="w-full h-[250px]  md:basis-[30%] overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/falcrum4-7eb0b.appspot.com/o/img.webp?alt=media&token=7c78aad3-4d53-49dc-9795-0a954f08e55c"
            alt="Header Image"
            width={400}
            height={400}
            loading="lazy"
            className="w-full h-[280px] object-cover scale-110"
          />
        </ComponentTransition>
        <ComponentTransition
          delay={0.1}
          className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-neutral-950 border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <FaCode size={40} />
          <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
            Custom Web Development
          </h1>
          <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
            SPA / MPA
          </h2>
          <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
            Tailored website solutions to meet specific business needs and
            goals.
          </p>
        </ComponentTransition>

        <ComponentTransition
          delay={0.1}
          className="w-full h-[250px]  px-10 py-5 md:basis-[30%] relative overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <div className="absolute  glowbg inset-0  left-0 "></div>
          <FaCode size={40} />
          <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
            Custom Web Development
          </h1>
          <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
            SPA / MPA
          </h2>
          <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
            Tailored website solutions to meet specific business needs and
            goals.
          </p>
        </ComponentTransition>
        <ComponentTransition
          delay={0.2}
          className="w-full h-auto md:h-[300px] md:basis-[65%] overflow-hidden bg-neutral-100 border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/falcrum4-7eb0b.appspot.com/o/img1.webp?alt=media&token=d307a8f5-60fd-4266-a4f8-8a4289e1bc88"
            alt="Header Image"
            width={400}
            height={400}
            loading="lazy"
            className="w-full object-cover scale-110"
          />
        </ComponentTransition>
        <ComponentTransition className="w-full overflow-hidden px-10 py-5 md:basis-[30%] h-[300px] bg-neutral-100 dark:bg-neutral-950/50 backdrop-blur-sm border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl">
          <WiDayCloudy size={50} />
          <h1 className="text-2xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
            Lorem Ipsum
          </h1>
          <h2 className="text-sm text-neutral-800 dark:text-neutral-300">
            Create Fast And Simple
          </h2>
          <p className="text-base text-neutral-700 dark:text-neutral-400 mt-5 md:line-clamp-2 lg:line-clamp-4 line-clamp-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eos
            voluptatem quo laborum perferendis eligendi voluptas nam dignissimos
            hic dolorem inventore optio. Eaque, deserunt.
          </p>
        </ComponentTransition>


        <ComponentTransition
          delay={0.1}
          className="w-full h-[250px]  md:basis-[30%] overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/falcrum4-7eb0b.appspot.com/o/img.webp?alt=media&token=7c78aad3-4d53-49dc-9795-0a954f08e55c"
            alt="Header Image"
            width={400}
            height={400}
            loading="lazy"
            className="w-full h-[280px] object-cover scale-110"
          />
        </ComponentTransition>
        <ComponentTransition
          delay={0.1}
          className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-neutral-950 border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <FaCode size={40} />
          <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
            Custom Web Development
          </h1>
          <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
            SPA / MPA
          </h2>
          <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
            Tailored website solutions to meet specific business needs and
            goals.
          </p>
        </ComponentTransition>

        <ComponentTransition
          delay={0.1}
          className="w-full h-[250px]  px-10 py-5 md:basis-[30%] relative overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <div className="absolute  glowbg inset-0  left-0 "></div>
          <FaCode size={40} />
          <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
            Custom Web Development
          </h1>
          <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
            SPA / MPA
          </h2>
          <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
            Tailored website solutions to meet specific business needs and
            goals.
          </p>
        </ComponentTransition>


        <Feedback className='!px-0' />
      </div>
      <CardOffer title='Ready To Get Started!' className="!px-0" />
    </ComponentTransition>
  );
}
