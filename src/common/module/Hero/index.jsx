"use client";
import { ButtonSpot } from "src/common/component/element/ButtonSpot";
import ComponentTransition from "src/common/component/element/ComponentTransition";
import H1 from "src/common/component/element/H1";
import Image from "src/common/component/element/Image";
import Rails from "src/common/component/element/Rails";
import { HeroImage } from "src/common/constant/HeroImage";
import { Parallax } from "src/common/constant/Parallax";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";



export const translateVariantText = {
  initial: {
    opacity: 0,
    y: 150,
    height: "10px",
  },
  animate: {
    opacity: 1,
    y: 0,
    height: "250px",
    transition: {
      ease: [0.2, 0.65, 0.3, 0.9],
      duration: 3,
    },
  },
};

export const tranlateVariant = {
  initial: {
    opacity: 0,
    y: 150,
    // height: '10px'
  },
  animate: {
    opacity: 1,
    y: 0,
    // height: 'auto',
    transition: {
      delay: 0.5,
      ease: [0.2, 0.65, 0.3, 0.9],
      duration: 2,
    },
  },
};

const Hero = () => {
  const { scrollY } = useScroll();
  const { c, r, ry, rz, scale, t, y } = Parallax(scrollY);

  return (
    <div className="h-auto max-w-[1500px] md:mb-20 screen-w px-5 lg:px-10 md:mt-20 sm:mt-16 mt-12 relative ">
      <div className="flex flex-col justify-center md:top-0 mt-28 lg:mt-36 relative items-center">
        <div className="flex flex-col items-center justify-center relative">
          <div className="flex flex-col items-center justify-center">
            <div className="border-[1px] rounded-full border-[#09162B] py-2 px-5 md:mt-20 sm:mt-10 mt-24">
              <h1 className="lg:text-xl md:text-lg sm:text-base text-sm">Make Your Startup </h1>
            </div>
            <H1
              className="text-3xl md:text-4xl lg:text-5xl xl:w-[80%] 2xl:w-[80%] !leading-[110%] items-center flex overflow-hidden dark:bg-gradient-to-r from-white from-50% to-[#9c9c9c] bg-text bg-clip-text text-transparent text-center min-w-max font-bold pb-3 md:pt-8 pt-4"
              title="Bridging the Talent-Tech Gap"
            />

            <p className="lg:w-[70%] text-center lg:py-8 md:py-6 py-3 lg:mt-2 lg:text-2xl md:text-xl text-lg dark:text-neutral-300 text-neutral-700">
              Shaping the Future: Fulcrum Services' Pioneering Role in the Fourth Industrial Revolution
            </p>

            <motion.div className="flex max-md:flex-col w-full items-center justify-center gap-5 py-5">
            <Link href='/contact'>
              <ButtonSpot
                title="Get your Free Consultation"
                className="!rounded-full !w-auto !py-2"
              />
            </Link>
            </motion.div>
          </div>
          <div className="absolute w-[90%] top-1/2 -translate-y-1/2 h-[300px] z-[-99]">
            <Rails />
            <div style={{ backgroundImage: 'linear-gradient(to bottom, #E9ECEA 20%, transparent)' }} className="absolute inset-0"></div>
            <div style={{ backgroundImage: 'linear-gradient(to left, #E9ECEA 1%, transparent 30%)' }} className="absolute inset-0"></div>
            <div style={{ backgroundImage: 'linear-gradient(to right, #E9ECEA 1%, transparent 30%)' }} className="absolute inset-0"></div>
            <div style={{ backgroundImage: 'linear-gradient(to top, #E9ECEA 1%, transparent 30%)' }} className="absolute inset-0"></div>
          </div>
        </div>

        <motion.div
          className="w-full h-full xl:mt-10 mt-32 sm:mt-28 flex gap-1 lg:px-10 overflow-hidden "
          style={{
            translateY: t,
            translateX: c,
            rotateX: r,
            position: "relative",
            transformPerspective: 819,
            rotateZ: rz,
            rotateY: ry,
          }}
        >
          {HeroImage.map((item, index) => (
            <ComponentTransition
              delay={index * 0.1}
              key={index}
              className=" overflow-hidden rounded-xl w-full"
            >
              <Image
                alt="Hero"
                className="overflow-hidden w-full md:h-auto h-[220px]"
                height={550}
                src={item.img}
                width={550}
                priority
              />
            </ComponentTransition>
          ))}
        </motion.div>

        {/* <ImgScale /> */}
      </div>
    </div>
  );
};

export default Hero;
