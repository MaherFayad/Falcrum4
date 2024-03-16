"use client";
import { translateInViewVariant } from "src/common/component/element/Transition";
import { motion } from "framer-motion";
import Card from "./component/Card";

const Service = ({ className }) => {
  return (
    <div className={`h-auto pb-20 max-w-[1500px]  px-10 xl:px-20 ${className}`}>
      <div>
        <motion.div
          className="flex justify-center py-5"
          initial="initial"
          whileInView="whileInview"
          variants={translateInViewVariant}
          transition={{
            ease: [0.2, 0.65, 0.3, 0.9],
            duration: 1.5,
          }}
          viewport={{ once: true }}
        >
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl py-5 text-center dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f] bg-text bg-clip-text  md:w-[100%] text-transparent font-bold">
            Our Values and Approach
          </h1>
          {/* <p className="text-base md:text-2xl text-neutral-500 dark:text-neutral-300 text-center">
        Our comprehensive suite of services is designed to guide your business through every step of technological adoption and strategic implementation:
        </p> */}
        </motion.div>
      </div>
      <Card />
      {/* <ComponentTransition className="w-full md:flex-row flex-col items-center flex justify-center gap-3">
        <Link href='/services' className="w-full rounded-full">
        <Button
          title="View All Service"
          className="hover:dark:!bg-neutral-100 transition-colors !rounded-full duration-300 overflow-hidden !bg-transparent outline outline-1 dark:outline-white outline-neutral-950 dark:!text-white !text-black w-full py-5"
          />
        </Link>
      </ComponentTransition> */}
    </div>
  );
};

export default Service;
