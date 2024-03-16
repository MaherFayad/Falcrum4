import Image from "src/common/component/element/Image";
import React from "react";
import { TbDeviceVisionPro } from "react-icons/tb";
import { FaBullseye } from "react-icons/fa6";
import ComponentTransition from "src/common/component/element/ComponentTransition";
import OurTeam from "./OurTeam";

const CardAbout = () => {
  return (
    <>
      <div className="py-10 w-full flex gap-5 lg:gap-10 justify-center lg:flex-row flex-col-reverse flex-wrap relative">
        <ComponentTransition delay={0.1} className="w-full flex lg:flex-col flex-col-reverse h-[20%] max-lg:gap-5 lg:basis-[50%] xl:basis-[60%] overflow-hidden rounded-3xl">
          <div className="w-full lg:h-[720px] xl:h-[840px] max-lg:h-96 rounded-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1637836375461-197de8876f90?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Header Image"
              width={400}
              height={400}
              priority
              className="w-full object-cover rounded-3xl object-center"
            />
          </div>
          <div className="lg:mt-5 py-5 gap-5 h-full grow">
            <div className="w-full px-6 sm:px-8 lg:px-10 py-6 sm:py-8 lg:py-10 h-full bg-neutral-100 dark:bg-neutral-950/50 backdrop-blur-sm border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl">
              <FaBullseye size={50} />
              {/* <h1 className="text-2xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
              Mission
            </h1> */}
              <p className="text-base text-neutral-800 dark:text-neutral-300 mt-5 ">
                Understanding the monumental impact of 4IR technologies, Daniel set out to ensure that businesses—especially professional service firms and startups—aren't just participants in this new era but are at its forefront, leading the charge. His mission with Fulcrum Services is clear: to empower businesses to harness the transformative power of technologies such as IoT, Web3, blockchain, and artificial intelligence, ensuring they not only thrive but also drive positive change in this new revolution.
              </p>
            </div>
          </div>
        </ComponentTransition>
        <ComponentTransition delay={0.1} className="lg:basis-[45%] xl:basis-[35%] gap-5 h-full grow">
          <div className="w-full px-6 sm:px-8 lg:px-10 py-4 sm:py-6 md:py-8 lg:py-10 h-full grow bg-neutral-100 dark:bg-neutral-950/50 backdrop-blur-sm border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl">
            <TbDeviceVisionPro size={50} />
            <h1 className="text-2xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
              Vision
            </h1>
            <p className="text-base text-neutral-800 dark:text-neutral-300 my-4 grow">
              Fulcrum Services wasn't just born from a fascination with technology; it was ignited by a profound realization: the Fourth Industrial Revolution (4IR) represents the most transformative era in our lifetimes. Daniel Bron, our founder, recognized early on—not merely as a visionary but as an ardent believer in the power of 4IR technologies—that this revolution has the potential to redefine the very fabric of society, business, and the global economy. From his initial forays into the world of crypto and Java, sparked by his passion for video games at a young age, Daniel saw more than just the technology; he saw a future where businesses leveraged these innovations to create a world of endless possibilities.
            </p>
          </div>
          <div className=" overflow-hidden mt-10 bg-neutral-100 dark:bg-neutral-950/50 backdrop-blur-sm border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl">
            <div className=" rounded-3xl overflow-hidden max-xl:h-[530px] max-lg:h-auto">
              <Image
                src="https://images.unsplash.com/photo-1637792566284-67454a001370?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Header Image"
                width={400}
                height={200}
                priority
                className="w-full h-full object-cover rounded-3xl object-center"
              />
            </div>
          </div>
        </ComponentTransition>
      </div>

      <OurTeam />
    </>
  );
};

export default CardAbout;
