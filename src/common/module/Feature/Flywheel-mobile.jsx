import "./style.css";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';



const DonutChartMobile = ({ Content }) => {

  return (
    <div className="scale-container screen-w">
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <Swiper
          loop={true}
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper w-2xl h-2xl"
        >

          {Content.map((item, index) => (
            <SwiperSlide key={index} className="w-2xl h-2xl">
              <div className="h-2xl w-2xl bg-white rounded-3xl">
                <div
                  className="h-2xl w-2xl flex flex-col items-start border-[1px] z-[9] bg-white dark:border-white overflow-hidden rounded-3xl p-6"
                >
                  {/* <div className="relative left-[-20%] z-[-9] rounded-full transition-all duration-500 bg-[#BFC7C1] group-hover:rounded-none group-hover:translate-y-[0%]"></div>
                <div className="relative top-0 right-[-10%] h-[100px] z-[-9] rounded-full transition-all duration-500 bg-[#BFC7C1] group-hover:rounded-none group-hover:translate-y-[0%]"></div> */}

                  <div className="border-[1px] rounded-full border-[#09162B] py-2 px-5 mb-4 text-left">
                    <h4 className="sm:text-sm text-[14px]"><b>{item.text1}</b><span> </span>{item.text2}</h4>
                  </div>
                  <h1 className="text-2xl dark:text-white text-black transition-all duration-300 font-semibold text-left w-full">
                    {item.title}
                  </h1>
                  <p className="mt-2 dark:text-white text-black transition-all duration-300 text-left">
                    <b>Goal: </b>{item.Goal}
                  </p>
                  <p className="mt-2 dark:text-white text-black transition-all duration-300 text-left">
                    <b>Impact: </b> {item.Impact}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div></div>

  );
};

export default DonutChartMobile;




