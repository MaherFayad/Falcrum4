import { ButtonSpot } from "@/common/component/element/ButtonSpot";
import Image from "@/common/component/element/Image";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import Button from "@/common/component/element/Button";



export default function CardOffer({ title, className = '' }) {
  return (
    <div className={clsx(className, `xl:py-20 lg:py-10 py-8 relative`)}>
      <div className="max-w-[1500px] w-full max-xl:px-12 px-5 relative overflow-hidden flex-col rounded-3xl flex justify-center items-center bg-neutral-300/50 dark:bg-neutral-800/50 xl:py-40 md:30 py-20">
        <Image
          src="https://images.unsplash.com/photo-1653302803784-c5b7918dbf43?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image"
          width={400}
          height={400}
          priority
          className="w-full h-full object-cover z-[-9] absolute inset-0"
        />
        <h1 className="text-left w-full text-2xl sm:text-4xl md:text-5xl min-[1620px]:text-7xl lg:py-5 md:py-3 bg-clip-text bg-gradient-to-r dark:from-white from-black from-50% dark:to-[#b1b1b1] to-[#292929] xl:w-[80%] text-transparent font-bold">
          Join Us in Shaping the Future
        </h1>
        <h2 className="min-[1620px]:text-5xl lg:text-2xl sm:text-2xl text-lg py-5 lg:py-5 bg-clip-text bg-gradient-to-r dark:from-white from-black from-50% dark:to-[#b1b1b1] to-[#292929] xl:w-[80%] text-transparent font-semibold">
          Welcome to Fulcrum Services, where the future is not just something we predict—it's something we create.        </h2>
        <h3 className="min-[1620px]:text-5xl lg:text-2xl sm:text-2xl text-lg lg:py-5 bg-clip-text bg-gradient-to-r dark:from-white from-black from-50% dark:to-[#b1b1b1] to-[#292929] xl:w-[80%] text-transparent font-medium">
          At Fulcrum Services, we are more than consultants; we are partners in revolutionizing your business for a new era. Led by Daniel Bron and supported by a team of visionaries, we invite you to explore the limitless possibilities of the Fourth Industrial Revolution with us. Together, we can redefine what it means to be a business in the 21st century, creating a legacy of innovation, growth, and transformative success.
        </h3>
        <ComponentTransition className="w-full md:flex-row flex-col flex gap-3 py-5 xl:w-[80%] justify-items-start items-start content-start place-items-start place-content-start">
          <Link href="/contact" className="max-md:w-full block">
            <ButtonSpot
              title="Register Now"
              className="w-full md:w-full lg:py-4 py-3 px-8 xl:text-2xl md:text-xl sm:text-lg text-base" />
          </Link>
          <Link href="/contact" className="max-md:w-full block">
            <ButtonSpot
              title="Download Workbook"
              className="w-full md:w-full lg:py-4 py-3 px-8 xl:text-2xl md:text-xl sm:text-lg text-base" />
          </Link>
        </ComponentTransition>
      </div>
      <div className="absolute  z-[-9] glowbg w-[100%] md:w-[600px] h-[400px] top-[50px]"></div>
    </div>
  );
}
