import Rails from "@/common/component/element/Rails";
import React from "react";
import CardAbout from "./component/CardAbout";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import Feedback from "../Feedback";
import CardOffer from "@/common/component/element/CardOffer-about";
import Service from "./component/Service";

const About = () => {
  return (
    <ComponentTransition className="h-auto max-w-[1500px] px-10 xl:px-20 pb-20">
      <div className="flex justify-center py-5 ">
        <div className="flex justify-center mt-20 relative ">
          <h1 className="text-4xl md:text-7xl py-5 px-10 text-center dark:bg-gradient-to-r from-white from-50% to-black bg-text bg-clip-text  text-transparent font-bold">
            About Us
          </h1>
          <div className="absolute w-[90%] top-[20%] h-[300px] z-[-99]">
          <Rails />
          <div style={{backgroundImage: 'linear-gradient(to bottom, #E9ECEA 20%, transparent)'}} className="absolute inset-0"></div>
          <div style={{backgroundImage: 'linear-gradient(to left, #E9ECEA 1%, transparent 30%)'}} className="absolute inset-0"></div>
          <div style={{backgroundImage: 'linear-gradient(to right, #E9ECEA 1%, transparent 30%)'}} className="absolute inset-0"></div>
          <div style={{backgroundImage: 'linear-gradient(to top, #E9ECEA 1%, transparent 30%)'}} className="absolute inset-0"></div>
        </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <p className="text-base md:text-2xl text-neutral-500 md:w-[70%] text-center">
        Shaping the Future: Fulcrum Services and the Vanguard of the Fourth Industrial Revolution
        </p>
      </div>
      <CardAbout />
      <Service />
      <Feedback />
      <CardOffer title='Let&rsquo;s Get Started With Us' className="!px-0" />
    </ComponentTransition>
  );
};

export default About;
