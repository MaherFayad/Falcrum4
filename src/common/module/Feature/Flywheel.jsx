import * as d3 from "d3";
import { useEffect, useMemo, useRef, useState } from "react";
import "./style.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';


const MARGIN_X = 0;
const MARGIN_Y = 80;
const INFLEXION_PADDING = 0; // Space between donut and label inflexion point

const colors = [
  "#696763",
  "#858681",
  "#999E98",
  "#ADB2AD",
  "#B7BDB7",
  "#BFC6C0",
];


const DonutChart = ({ width, height, data, Content }) => {
  const swiperRef = useRef(null); // Holds the Swiper instance
  const [activeIndex, setActiveIndex] = useState(0); // null when no active element
  const [isAutoScroll, setIsAutoScroll] = useState(false);
  const [userInitiatedSlideChange, setUserInitiatedSlideChange] = useState(false);



  const handleClick = (index) => {
    setActiveIndex(index); // Set the clicked segment as active
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    } else if (swiperRef.current) {
      // Directly calling slideTo for Swiper instances without nested swiper property
      swiperRef.current.slideTo(index);
    }
  };


  useEffect(() => {
    // Function to be executed every 30 seconds
    setIsAutoScroll(true); // Indicate this update is from auto-scroll

    const cycleIndex = () => {
      setActiveIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % data.length; // Calculate next index

        // If Swiper instance is accessible, move to the corresponding slide
        if (swiperRef.current?.slideTo) {
          swiperRef.current.slideTo(nextIndex);
        }
        return nextIndex; // Update state to reflect the new active index
      });
    };

    // Set up an interval for cycling through indices
    const intervalId = setInterval(cycleIndex, 5000); // 30 seconds interval

    // Cleanup on component unmount
    return () => clearInterval(intervalId);
  }, [data.length]); // Rerun effect if the length of data changes

  const radius = Math.min(width - 2 * MARGIN_X, height - 2 * MARGIN_Y) / 2;
  const innerRadius = radius / 1.2;

  const pie = useMemo(() => d3.pie().value((d) => d.value)(data), [data]);
  const arcGenerator = useMemo(() => d3.arc().innerRadius(innerRadius).outerRadius(radius), [innerRadius, radius]);

  const shapes = pie.map((slice, i) => {
    const slicePath = arcGenerator(slice);
    const centroid = arcGenerator.centroid(slice);
    const isRightLabel = centroid[0] > 0;
    const isTopLabel = centroid[1] < 0;
    const isMiddleLabel = Math.abs(centroid[1]) < 10; // You can adjust the threshold as needed

    let labelPosX = centroid[0] + (isRightLabel ? 1 : -1) * 50;
    let labelPosY = centroid[1];

    // Adjustment for Y position
    if ((isTopLabel && isRightLabel) || (!isTopLabel && !isRightLabel)) {
      labelPosY -= 15; // Top-right and bottom-right labels
    } else if (isMiddleLabel) {
      labelPosY += 5; // Adjust for middle labels
    } else {
      labelPosY += 15; // Top-left and bottom-left labels
    }

    // Additional adjustment for Y position
    if (!isRightLabel && isTopLabel) {
      labelPosY -= 30; // Adjust for top-left labels
    } else if (!isRightLabel && !isTopLabel) {
      labelPosY += 30; // Adjust for bottom-left labels
    }

    // Adjustment for X position
    if (!isRightLabel && isTopLabel) {
      labelPosX -= 10; // Adjust for top-left labels
    }

    const textAnchor = isRightLabel ? "start" : "end";
    const label = `${slice.data.name}`;

    return (
      <g
        key={i}
        onClick={() => handleClick(i)}
        className={`segment cursor-pointer ${i === activeIndex ? '' : 'inactive'}`}
        style={{ opacity: i === activeIndex ? 1 : 0.25 }}
      >
        <path d={slicePath} fill={colors[i % colors.length]} />
        <text x={labelPosX} y={labelPosY} textAnchor={textAnchor} dominantBaseline="middle" fontSize="16" fill="black">
          {label}
        </text>
      </g>
    );
  });






  return (

    <div style={{ position: "relative", width: width, height: height }}>
      <svg width={width} height={height}>
        <g transform={`translate(${width / 2}, ${height / 2})`}>
          {shapes}
        </g>
      </svg>
      {/* {openStates !== null && ( */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <Swiper
          loop={true}
          onSwiper={(swiper) => swiperRef.current = swiper}
          onSlideChange={(swiper) => {
            if (!isAutoScroll) {
              setActiveIndex(swiper.realIndex);
              setUserInitiatedSlideChange(true); // Mark this change as user-initiated
            }
          }}
          onSlideChangeTransitionEnd={() => {
            if (userInitiatedSlideChange) {
              setUserInitiatedSlideChange(false); // Reset flag after transition ends
            } else if (isAutoScroll) {
              // Ensure this runs only if the transition end was not already handled
              setIsAutoScroll(false); // Reset after auto-scroll transition ends
            }
          }}

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
                    <h4 className="text-sm"><b>{item.text1}</b><span> </span>{item.text2}</h4>
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


      </div>


    </div>

  );
};

export default DonutChart;




