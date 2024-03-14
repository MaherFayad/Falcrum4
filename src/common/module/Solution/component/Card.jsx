import ComponentTransition from "@/common/component/element/ComponentTransition";
import Image from "@/common/component/element/Image";

const CardSolution = ({ CardItem, className = "", cardClassName = "" }) => {
  return (
    <div className={`py-10 flex gap-5 lg:gap-10 flex-row justify-center relative flex-wrap ${className}`}>
      <div className="absolute  z-[-9]  w-[100%] md:w-[600px] h-[400px] top-[50px]"></div>
      {CardItem?.map((item, index) => (
        <ComponentTransition
          className={`w-full md:min-h-[350px] max-md:pb-2 group md:basis-[31%] overflow-hidden bg-neutral-50 dark:bg-[#0a0a0a] border-[1px] dark:border-neutral-700 border-neutral-300 rounded-3xl ${cardClassName}`}
          key={index}
          delay={index * 0.1}
        >
          <div className="w-full h-[190px] overflow-hidden">
            <Image
              src={item.img}
              alt="Header Image"
              width={240}
              height={400}
              loading="lazy"
              className="w-full h-auto group-hover:scale-125 transition-all duration-300  object-cover scale-110"
            />
          </div>

          <div className="px-5 py-5">
            <h1 className="text-xl md:text-2xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
              {item.title}
            </h1>
            <p className="text-sm md:text-base max-sm:mb-0 text-neutral-700 line-clamp-2 dark:text-neutral-300">
              {item.content}
            </p>
          </div>
        </ComponentTransition>
      ))}
    </div>
  );
};

export default CardSolution;
