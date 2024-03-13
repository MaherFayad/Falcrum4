import Blog from '@/common/module/Blog'

export const metadata = {
  title: 'Blog - Teaser',
  description: 'Blog',

}

const Blogpost = () => {
  return (
    <div className='mt-20 flex justify-center'>
      <Blog />

      {/* feedback */}
      <div className="mt-20">
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
