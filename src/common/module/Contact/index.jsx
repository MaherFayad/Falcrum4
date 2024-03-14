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
          <div className="absolute w-[90%] top-1/2 -translate-y-1/2 h-[300px] z-[-99]">
            <Rails />
            <div style={{ backgroundImage: 'linear-gradient(to bottom, #E9ECEA 20%, transparent)' }} className="absolute inset-0"></div>
            <div style={{ backgroundImage: 'linear-gradient(to left, #E9ECEA 1%, transparent 30%)' }} className="absolute inset-0"></div>
            <div style={{ backgroundImage: 'linear-gradient(to right, #E9ECEA 1%, transparent 30%)' }} className="absolute inset-0"></div>
            <div style={{ backgroundImage: 'linear-gradient(to top, #E9ECEA 1%, transparent 30%)' }} className="absolute inset-0"></div>
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
