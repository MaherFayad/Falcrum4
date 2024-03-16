import ComponentTransition from "@/common/component/element/ComponentTransition";
import Image from "@/common/component/element/Image";
import { FeedbackItem } from "@/common/constant/Feedback";
import React from "react";

export default function FeedbackCard() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full py-10 max-md:pb-0">
      {FeedbackItem.map((item, index) => (
        <ComponentTransition
          delay={index * 0.2}
          key={index}
          className="flex max-lg:items-center max-lg:text-center bg-neutral-50 dark:bg-neutral-950 border-[1px] relative group z-[9]  hover:lg:border-black overflow-hidden rounded-3xl flex-col items-start text-start p-6"
        >
          {/* <div className="w-24 h-24 overflow-hidden rounded-full">
            <Image className="w-full h-auto object-cover" src={item.img} alt={item.title} width={400} height={400} />
          </div> */}

          <p className="text-sm md:text-base mt-2 py-2 dark:text-white h-full text-black transition-all duration-300">
            {item.desc}
          </p>
          <h1 className="text-xl md:text-2xl md:py-2 dark:text-white text-black  transition-all duration-300 font-medium">
            {item.title}
          </h1>
          <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300">
            {item.comp}
          </p>
        </ComponentTransition>
      ))}
    </div>
  );
}
