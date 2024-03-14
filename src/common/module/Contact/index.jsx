import ComponentTransition from "@/common/component/element/ComponentTransition";
import Rails from "@/common/component/element/Rails";
import CardContact from "./component/CardContact";

const Contactus = () => {
  return (
    <ComponentTransition className="h-auto max-w-[1500px] w-full lg:px-10 px-5 xl:px-20 pb-20">
      <div className="flex justify-center py-5 md:mt-10 mt-4">
        <div className="flex justify-center mt-20 relative ">
          <h1 className="text-4xl md:text-7xl lg:py-5 py-3 px-10 text-center dark:bg-gradient-to-r from-white from-50% to-[#979797] bg-text bg-clip-text  text-transparent font-bold">
            Contact Us
          </h1>
          <div className=" absolute w-[80%] md:h-[180px] sm:h-[140px] h-[120px] z-[-99] sm:top-[-10px] top-0">
            <Rails />
            <div className="bg-gradient-to-b from-white dark:from-black from-20% to-transparent absolute inset-0 "></div>
            <div className="bg-gradient-to-l from-white dark:from-black from-1% to-transparent to-30% absolute inset-0"></div>
            <div className="bg-gradient-to-r from-white dark:from-black from-1% to-transparent to-30% absolute inset-0"></div>
            <div className="bg-gradient-to-t from-white dark:from-black from-1% to-transparent to-30% absolute inset-0"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <p className="text-base md:text-2xl text-neutral-500 md:w-[70%] text-center">
          Engage with Fulcrum Services
        </p>
      </div>
      <CardContact />
    </ComponentTransition>
  );
};

export default Contactus;
