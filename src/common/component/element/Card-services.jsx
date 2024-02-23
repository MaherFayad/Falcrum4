import React from "react";
import ComponentTransition from "./ComponentTransition";
import Image from "./Image";
import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import "./style.css";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';


export default function Card({ Content }) {
  return (
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
              >
      {Content.map((item, index) => (
        <SwiperSlide>        
        <div >
        <ComponentTransition
          delay={index * 0.2}
          key={index}
          className="flex border-[1px] relative group z-[9] bg-white dark:border-white  overflow-hidden rounded-3xl flex-col items-center text-center p-6"
        >
          <div className="absolute w-[100px] h-[100px] left-[-20%] z-[-9] group-hover:lg:w-[100%] group-hover:lg:h-[100%] inset-0 rounded-full group-hover:lg:rounded-none translate-y-[50%] transition-all duration-500 bg-[#BFC7C1] group-hover:lg:translate-y-[0%]"></div>
          <div className="absolute w-[100px] top-0 right-[-10%] h-[100px] z-[-9] group-hover:lg:w-[100%] group-hover:lg:h-[100%]  rounded-full group-hover:lg:rounded-none transition-all duration-500 bg-[#BFC7C1] group-hover:lg:translate-y-[0%]"></div>
          <div className="border-[1px] rounded-full border-[#09162B] py-2 px-5 place-self-start mb-4 text-left">
            <h4 className="text-sm"><b>{item.text1}</b><span>  </span>{item.text2} </h4>
          </div>
          {/* {item.icon} */}
          {item.img && (
            <Image src={item.img} alt={item.title} width={400} heigth={400} />
          )}
          <h1 className="text-2xl dark:text-white text-black  transition-all duration-300 font-semibold text-left w-full">
            {item.title}
          </h1>
          <p className="mt-2 dark:text-white text-black  transition-all duration-300 text-left">
            <b>Goal: </b>{item.Goal}
          </p>
          <p className="mt-2 dark:text-white text-black  transition-all duration-300 text-left">
           <b>Impact: </b> {item.Impact}
          </p> 
        </ComponentTransition>
        </ div>
        </SwiperSlide>
      ))}      </Swiper>

  );
}
