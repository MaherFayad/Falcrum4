import { BlogContent } from 'src/common/constant/BlogContent'
// import Blog from 'src/common/module/Blog'
import FeedbackCard from 'src/common/module/Feedback/component/FeedbackCard'
import { MdOutlineFeedback } from 'react-icons/md'

export const metadata = {
  title: 'success-stories',
  description: 'success-stories',

}

import Button from "src/common/component/element/Button";
import ComponentTransition from "src/common/component/element/ComponentTransition";
import SectionHeading from "src/common/component/element/SectionHeading";
import Link from "next/link";
import BlogList from "../../common/module/Blog/component/BlogList";
import Rails from "src/common/component/element/Rails";

const Blog = ({ BlogContent, className = "" }) => {
  return (
    <div className={`${className} h-auto max-w-[1500px] mx-auto px-5 lg:px-10 xl:px-20 pb-20 lg:mt-20 mt-10`}>
      <div className="relative mb-6">
        <ComponentTransition className="flex justify-center md:py-3 lg:py-5">
          <SectionHeading title="Success Stories" />
        </ComponentTransition>
        <ComponentTransition delay={0.1} className="flex justify-center items-center flex-col">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:py-5 py-3 text-center bg-clip-text dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f] bg-text md:w-[100%] text-transparent font-bold">
            Real Impact for Real Businesses
          </h1>
          <p className="lg:text-2xl md:text-xl text-base text-neutral-500 dark:text-neutral-300 md:w-[100%] text-center w-full">
            Our clients are our best advocates. Discover how Fulcrum Services has helped businesses like yours navigate the complexities of the Fourth Industrial Revolution and emerge stronger, more agile, and ready for the future.
          </p>
        </ComponentTransition>
        <div className="absolute w-[90%] top-1/2 -translate-y-1/2 h-[300px] z-[-99]">
          <Rails />
          <div style={{ backgroundImage: 'linear-gradient(to bottom, #E9ECEA 20%, transparent)' }} className="absolute inset-0"></div>
          <div style={{ backgroundImage: 'linear-gradient(to left, #E9ECEA 1%, transparent 30%)' }} className="absolute inset-0"></div>
          <div style={{ backgroundImage: 'linear-gradient(to right, #E9ECEA 1%, transparent 30%)' }} className="absolute inset-0"></div>
          <div style={{ backgroundImage: 'linear-gradient(to top, #E9ECEA 1%, transparent 30%)' }} className="absolute inset-0"></div>
        </div>
      </div>
      <BlogList BlogContent={BlogContent} />

    </div>
  );
};


const Blogpost = () => {
  return (
    <div className='my-20 sm:mt-32 mt-28 max-w-[1500px] mx-auto'>
      <Blog BlogContent={BlogContent} className='lg:pb-20 pb-14' />

      {/* feedback */}
      <div className="lg:mt-20 mt-10 px-5 lg:px-10">
        <ComponentTransition delay={0.1} className="flex justify-center lg:py-5">
          <SectionHeading
            title="Testimonials"
            icon={<MdOutlineFeedback size={0} />}
          />
        </ComponentTransition>
        <ComponentTransition
          delay={0.1}
          className="flex justify-center items-center flex-col"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:py-5 py-4 pt-3 text-center bg-clip-text dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f] bg-text md:w-[50%] text-transparent font-bold">
            What People Say
          </h1>
          <p className="text-xxl text-center text-neutral-500 dark:text-neutral-300 mb-5">These success stories highlight Fulcrum Services' commitment to delivering cutting-edge technological solutions that drive significant improvements in operational efficiency, strategic decision-making, and market competitiveness across various industries.
          </p>
        </ComponentTransition>
        <FeedbackCard />

      </div>
    </div>
  )
}

export default Blogpost



