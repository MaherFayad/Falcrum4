import ComponentTransition from "@/common/component/element/ComponentTransition";
import SectionHeading from "@/common/component/element/SectionHeading";
import clsx from "clsx";
import { MdOutlineFeedback } from "react-icons/md";
import FeedbackCard from "./component/FeedbackCard";

export default function Feedback({ className }) {
  return (
    <div className={clsx(className, `h-auto max-w-[1500px] px-5 lg:px-10 md:pb-20 pb-10`)}>
      <ComponentTransition className="flex justify-center lg:py-5">
        <SectionHeading
          title="Testimonials"
          icon={<MdOutlineFeedback size={0} />}
        />
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="flex justify-center items-center flex-col"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:py-5 pt-3 text-center bg-clip-text dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f] bg-text md:w-[50%] text-transparent font-bold">
          What People Say
        </h1>
      </ComponentTransition>
      <FeedbackCard />

    </div>
  );
}
