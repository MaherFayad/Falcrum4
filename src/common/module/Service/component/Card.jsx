import { ButtonSpot } from "src/common/component/element/ButtonSpot";
import Button from "src/common/component/element/Button";
import ComponentTransition from "src/common/component/element/ComponentTransition";
import Image from "src/common/component/element/Image";
import Link from "next/link";


const Card = () => {
  return (
    <div className="py-10 flex gap-5 md:gap-8 lg:gap-10 justify-center flex-row flex-wrap relative">
      <div className="absolute z-[-9] w-[100%] md:w-[500px] h-[400px] left-0 "></div>

      <ComponentTransition
        delay={0.1}
        className="w-full px-5 lg:px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-[#0a0a0a] border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        {/* <FaCode size={40} /> */}
        <h1 className="text-2xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
          Free Educational Webinars
        </h1>
        <p className="text-base text-neutral-700 dark:text-neutral-400 md:mt-5 mt-3 md:line-clamp-2 lg:line-clamp-4 line-clamp-3">
          Dive into the essentials of Fourth Industrial Revolution technologies and their impact on your industry.
        </p>
        <Link href='/services/Free-Educational-Webinars' className="w-full rounded-full">
          <Button
            title="Discover More"
            className="hover:dark:!bg-neutral-100 transition-colors !rounded-full duration-300 overflow-hidden !bg-transparent outline outline-1 dark:outline-white outline-neutral-950 dark:!text-white !text-black md:mt-5 mt-3 bgslate max-w-fit px-8 py-0"
          />
        </Link>
      </ComponentTransition>
      <ComponentTransition
        delay={0.2}
        className="w-full md:h-[250px] md:basis-[65%] overflow-hidden bg-neutral-100 border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/falcrum4-7eb0b.appspot.com/o/img1.webp?alt=media&token=d307a8f5-60fd-4266-a4f8-8a4289e1bc88"
          alt="Header Image"
          width={400}
          height={400}
          loading="lazy"
          className="w-full object-cover scale-110"
        />
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="w-full h-auto object-cover md:basis-[30%] overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/falcrum4-7eb0b.appspot.com/o/img.webp?alt=media&token=7c78aad3-4d53-49dc-9795-0a954f08e55c"
          alt="Header Image"
          width={400}
          height={400}
          loading="lazy"
          className="w-auto h-auto object-cover scale-110"
        />
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="w-full md:h-[250px] px-5 lg:px-10 py-5 md:basis-[30%] overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        {/* <FaCode size={40} /> */}
        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
          Customized Training Solutions
        </h1>

        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
          Enhance your team's expertise with personalized training programs, crafted to meet your unique business needs.
        </p>
        <Link href='/services/Customized-Training-Solutions' className="w-full rounded-full">
          <Button
            title="Learn How"
            className="hover:dark:!bg-neutral-100 transition-colors !rounded-full duration-300 overflow-hidden !bg-transparent outline outline-1 dark:outline-white outline-neutral-950 dark:!text-white !text-black md:mt-5 mt-3 bgslate max-w-fit px-8 py-0"
          />
        </Link>
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="w-full md:h-[250px] px-5 lg:px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-[#0a0a0a] border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        {/* <FaCode size={40} /> */}
        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
          Personalized Technology Audits
        </h1>
        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
          Gain deep insights into your current technology usage and uncover potential areas for improvement.
        </p>
        <Link href='/services/Personalized-Technology-Audits' className="w-full rounded-full">
          <Button
            title="Book Your Audit"
            className="hover:dark:!bg-neutral-100 transition-colors !rounded-full duration-300 overflow-hidden !bg-transparent outline outline-1 dark:outline-white outline-neutral-950 dark:!text-white !text-black md:mt-5 mt-3 bgslate max-w-fit px-8 py-0"
          />
        </Link>
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="w-full md:h-[250px] px-5 lg:px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-[#0a0a0a] border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        {/* <FaCode size={40} /> */}
        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
          Strategic Planning and Comprehensive Audits
        </h1>

        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
          Align your business goals with a strategic technology roadmap designed for sustainable growth.
        </p>
        <Link href='/services/Strategic-Planning-and-Comprehensive-Audits' className="w-full rounded-full">
          <Button
            title="Start Planning"
            className="hover:dark:!bg-neutral-100 transition-colors !rounded-full duration-300 overflow-hidden !bg-transparent outline outline-1 dark:outline-white outline-neutral-950 dark:!text-white !text-black md:mt-5 mt-3 bgslate max-w-fit px-8 py-0"
          />
        </Link>
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="w-full md:h-[250px] px-5 lg:px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-[#0a0a0a] border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        {/* <FaCode size={40} /> */}
        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
          Team Building and Project Management Services
        </h1>

        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
          Let us lead your strategic projects to success with our expert team building and project management support.
        </p>
        <Link href='/services/Team-Building-and-Project-Management-Services' className="w-full rounded-full">
          <Button
            title="Explore Services"
            className="hover:dark:!bg-neutral-100 transition-colors !rounded-full duration-300 overflow-hidden !bg-transparent outline outline-1 dark:outline-white outline-neutral-950 dark:!text-white !text-black md:mt-5 mt-3 bgslate max-w-fit px-8 py-0"
          />
        </Link>
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  md:basis-[30%] overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/falcrum4-7eb0b.appspot.com/o/img.webp?alt=media&token=7c78aad3-4d53-49dc-9795-0a954f08e55c"
          alt="Header Image"
          width={400}
          height={400}
          loading="lazy"
          className="w-full h-auto object-cover scale-110"
        />
      </ComponentTransition>
    </div>
  );
};

export default Card;
