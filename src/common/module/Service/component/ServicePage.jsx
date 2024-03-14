import CardOffer from "@/common/component/element/CardOffer";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import Image from "@/common/component/element/Image";
import Rails from "@/common/component/element/Rails";
import { servicesData } from "@/common/constant/ServicesData";
import Link from "next/link";
import { AiOutlineAudit, AiOutlineTeam } from "react-icons/ai";
import { BsWebcam } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GrPlan } from "react-icons/gr";
import { IoIosPricetags } from "react-icons/io";

export default function ServicePage() {

  const Icons = [
    <BsWebcam size={50} className="h-12" />,
    <FaChalkboardTeacher size={50} className="h-12" />,
    <AiOutlineAudit size={50} className="h-12" />,
    <GrPlan size={50} className="h-12" />,
    <IoIosPricetags size={50} className="h-12" />,
    <AiOutlineTeam size={50} className="h-12" />,

  ]

  return (
    <ComponentTransition className="h-auto max-w-[1500px] px-5 lg:px-10 xl:px-20 md:pb-20 pb-10">
      <div className="flex justify-center py-5 ">
        <div className="flex justify-center mt-20 relative ">
          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl lg:py-5 md:py-3 px-10 text-center dark:bg-gradient-to-r from-white from-50% to-[#979797] bg-text bg-clip-text  text-transparent font-bold">
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
      <div className="relative">
        <div className="absolute  z-[-9] glowbg w-[100%] md:w-[500px] h-[400px]  left-0"></div>
        <div className="absolute  z-[-9] glowbg w-[100%] md:w-[500px] h-[400px]  right-0 bottom-0"></div>
        <div className="py-10 mt-20 flex gap-5 lg:gap-10 justify-center flex-row flex-wrap">
          {servicesData?.map((item, index) => (
            <ComponentTransition key={index} className={`services-card lg:first:!basis-[64%] lg:!basis-[47.5%] md:basis-[48%] md:h-[320px] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-950/50 rounded-3xl`}>
              <Link href={`/services/details?title=${item.title.replace(/ /g, "-")}&id=${index}`} className="block w-full h-full px-8 py-6 backdrop-blur-sm border border-neutral-300 dark:border-neutral-700 rounded-3xl border-transparent hover:border-black">
                {Icons[index]}
                <h1 className="text-base md:text-lg lg:text-[22px] font-bold py-2 text-neutral-800 dark:text-neutral-100">
                  {item.title}
                </h1>
                {item?.subtitle && <h2 className="text-sm md:text-base font-medium text-neutral-800 dark:text-neutral-300">
                  {item.subtitle}
                </h2>}
                <p className="text-sm md:text-base text-neutral-700 font-light dark:text-neutral-400 mt-3 md:line-clamp-2 lg:line-clamp-3 line-clamp-4">
                  {item.description}
                </p>
              </Link>
            </ComponentTransition>
          ))}
          <ComponentTransition
            delay={0.2}
            className="w-full md:h-[320px] md:flex hidden md:basis-[47.5%] lg:basis-[64%] overflow-hidden bg-neutral-100 border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
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

        </div>
      </div>


      <CardOffer title='Ready To Get Started!' className="!px-0 md:py-20 py-0" />
    </ComponentTransition>
  );
}
