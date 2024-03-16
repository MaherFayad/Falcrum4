"use client";
import SectionHeading from "src/common/component/element/SectionHeading";
import React from "react";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import Card from "./component/Card";
import { motion } from "framer-motion";
import { translateInViewVariant } from "src/common/component/element/Transition";
import Buttons from "src/common/component/element/Buttons";
import Link from "next/link";
import ComponentTransition from "src/common/component/element/ComponentTransition";
import Button from "src/common/component/element/Button";

const Service = ({ className = "" }) => {
  return (
    <div className={`${className} h-auto max-w-[1500px] px-5 lg:px-10 xl:px-20 pb-20 max-md:pt-5`}>
      <div>
        <motion.div
          className="flex justify-center lg:py-5 md:py-3"
          initial="initial"
          whileInView="whileInview"
          variants={translateInViewVariant}
          transition={{
            ease: [0.2, 0.65, 0.3, 0.9],
            duration: 1.5,
          }}
          viewport={{ once: true }}
        >
          <SectionHeading
            title="Our Services"
          // icon={<MdOutlineMiscellaneousServices size={30} />}
          />
        </motion.div>
        <motion.div
          className="flex justify-center items-center flex-col"
          initial="initial"
          whileInView="whileInview"
          variants={translateInViewVariant}
          transition={{
            delay: 0.20,
            ease: [0.2, 0.65, 0.3, 0.9],
            duration: 1.5,
          }}
          viewport={{ once: true }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:py-5 py-3 text-center dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f] bg-text bg-clip-text  md:w-[100%] text-transparent font-bold">
            Tailored Solutions for Revolutionary Results
          </h1>
          <p className="text-base md:text-2xl text-neutral-500 dark:text-neutral-300 text-center">
            Our comprehensive suite of services is designed to guide your business through every step of technological adoption and strategic implementation:
          </p>
        </motion.div>
      </div>
      <Card />
      <ComponentTransition className="w-full md:flex-row flex-col items-center flex justify-center gap-3">
        <Link href='/services' className="w-full rounded-full">
          <Button
            title="View All Service"
            className="hover:dark:!bg-neutral-100 transition-colors !rounded-full duration-300 overflow-hidden !bg-transparent outline outline-1 dark:outline-white outline-neutral-950 dark:!text-white !text-black w-full lg:py-4 py-3"
          />
        </Link>
      </ComponentTransition>
    </div>
  );
};

export default Service;
