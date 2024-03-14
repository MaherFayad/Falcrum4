import ComponentTransition from '@/common/component/element/ComponentTransition'
import SectionHeading from '@/common/component/element/SectionHeading'
import { BlogContent } from '@/common/constant/BlogContent'
import Blog from '@/common/module/Blog'
import FeedbackCard from '@/common/module/Feedback/component/FeedbackCard'
import { MdOutlineFeedback } from 'react-icons/md'

export const metadata = {
  title: 'Blog - Teaser',
  description: 'Blog',

}

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
