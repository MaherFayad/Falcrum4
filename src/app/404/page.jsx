import { ButtonSpot } from "src/common/component/element/ButtonSpot";
import Image from "src/common/component/element/Image";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import ComponentTransition from "src/common/component/element/ComponentTransition";
import Button from "src/common/component/element/Button";



export const metadata = {
  title: '404',
  description: '404',
  
}

const page = () => {
  return (
    <div className={ `mt-20 flex justify-center md:px-2 py-20 relative`}>
      <div className="max-w-[1500px] w-full relative overflow-hidden flex-col rounded-3xl flex justify-center items-center bg-neutral-300/50 dark:bg-neutral-800/50 lg:py-40 md:py-32 py-20 max-lg:px-10 max-sm:px-8">
        <Image
          src="https://images.unsplash.com/photo-1653302803784-c5b7918dbf43?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image"
          width={400}
          height={400}
          priority
          className="w-full h-full object-cover z-[-9] absolute inset-0"
        />
        <h1 className="text-left text-2xl sm:text-4xl md:text-6xl lg:text-7xl lg:py-5 md:py-3 bg-clip-text bg-gradient-to-r dark:from-white from-black from-50% dark:to-[#b1b1b1] to-[#292929] w-full lg:w-[80%] text-transparent font-bold">
        Error 404
        </h1>
        <h2 className="text-left text-xl sm:text-3xl md:text-4xl lg:text-5xl lg:py-5 md:py-2 bg-clip-text bg-gradient-to-r dark:from-white from-black from-50% dark:to-[#b1b1b1] to-[#292929] w-full lg:w-[80%] text-transparent font-semibold">
        you don't know where you are?
        </h2>
        <h3 className="text-left text-lg md:text-xl lg:text-2xl lg:py-5 md:py-3 bg-clip-text bg-gradient-to-r dark:from-white from-black from-50% dark:to-[#b1b1b1] to-[#292929] w-full lg:w-[80%] text-transparent font-medium">
        neither do we
        </h3>
        <ComponentTransition className="flex flex-wrap gap-3 py-5 w-full lg:w-[80%] justify-items-start items-start content-start place-items-start place-content-start">
          <Link href="/" className="max-sm:w-full">
            <ButtonSpot
              title="Return to Home page"
              className="w-full:flex-1 md:w-full lg:py-4 py-3 px-8" />
          </Link>
        </ComponentTransition>
      </div>
      <div className="absolute  z-[-9] glowbg w-[100%] md:w-[600px] h-[400px] top-[50px]"></div>
    </div>
  );

}

export default page




