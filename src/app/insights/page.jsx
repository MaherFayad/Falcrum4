import Button from 'src/common/component/element/Button'
import ComponentTransition from 'src/common/component/element/ComponentTransition'
import Rails from 'src/common/component/element/Rails'
import SectionHeading from 'src/common/component/element/SectionHeading'
import { FeaturedItems } from 'src/common/constant/CardItem'
import CardSolution from 'src/common/module/Solution/component/Card'
import Link from 'next/link'
import { MdOutlineFeedback } from 'react-icons/md'

const Insight = () => {
    return (
        <div className={`h-auto max-w-[1500px] mx-auto px-5 lg:px-10 xl:px-20 pb-20 lg:mt-28 md:mt-20 sm:mt-12 mt-8`}>
            <div className="flex justify-center md:py-5 py-2">
                <div className="flex justify-center mt-20 relative">
                    <ComponentTransition
                        delay={0.1} className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl md:py-3 px-10 text-center dark:bg-gradient-to-r from-white from-50% to-[#979797] bg-text bg-clip-text  text-transparent font-bold">
                        Insights
                    </ComponentTransition>
                    <div className="absolute w-[90%] top-1/2 -translate-y-1/2 h-[300px] z-[-99]">
                        <Rails />
                        <div style={{ backgroundImage: 'linear-gradient(to bottom, #E9ECEA 20%, transparent)' }} className="absolute inset-0"></div>
                        <div style={{ backgroundImage: 'linear-gradient(to left, #E9ECEA 1%, transparent 30%)' }} className="absolute inset-0"></div>
                        <div style={{ backgroundImage: 'linear-gradient(to right, #E9ECEA 1%, transparent 30%)' }} className="absolute inset-0"></div>
                        <div style={{ backgroundImage: 'linear-gradient(to top, #E9ECEA 1%, transparent 30%)' }} className="absolute inset-0"></div>
                    </div>
                </div>
            </div>
            <ComponentTransition
                delay={0.1} className="flex justify-center items-center flex-col mb-10">
                <p className="text-base md:text-2xl text-neutral-500 md:w-[70%] text-center">
                    Empowering Your Business Journey with 4IR Insights
                </p>
            </ComponentTransition>



            <ComponentTransition
                delay={0.1} className="flex justify-center items-center flex-col py-10">
                <p className="text-base md:text-xl text-neutral-500 text-center">
                    At Fulcrum Services, our mission extends beyond providing services; we aim to be a beacon of knowledge in the rapidly evolving landscape of the Fourth Industrial Revolution. Our "Insights" section is a curated hub of articles, news, thought leadership pieces, and practical resources designed to equip businesses with the knowledge and tools they need to thrive.
                </p>
            </ComponentTransition>

            <div className="lg:py-16 py-8">
                <ComponentTransition className="flex justify-center lg:py-2">
                    <SectionHeading
                        title="Blog"
                        icon={<MdOutlineFeedback size={0} />}
                    />
                </ComponentTransition>
                <ComponentTransition
                    delay={0.1}
                    className="flex justify-center items-center flex-col"
                >
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:py-5 pt-3 text-center bg-clip-text dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f] bg-text md:w-[50%] text-transparent font-bold lg:pb-12 pb-8">
                        Chain Reaction
                    </h1>
                </ComponentTransition>
                <ComponentTransition
                    delay={0.1} className="flex justify-center items-center flex-col">
                    <p className="text-base md:text-xl text-neutral-500 text-center">
                        Our blog features a series of in-depth articles and analysis, covering a wide range of topics from the core technologies driving the 4IR to their practical applications in various industries. Each piece is carefully crafted to not only inform but also inspire action and innovation within your organization.
                    </p>
                </ComponentTransition>
            </div>


            <CardSolution CardItem={FeaturedItems} className='pt-0' />

            <div className="lg:py-16 py-8">
                <ComponentTransition
                    delay={0.1}
                    className="flex justify-center items-center flex-col"
                >
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:py-5 pt-3 text-center bg-clip-text dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f] bg-text md:w-[50%] text-transparent font-bold lg:pb-12 pb-8">
                        Resources
                    </h1>
                </ComponentTransition>
                <ComponentTransition
                    delay={0.1} className="flex justify-center items-center flex-col">
                    <p className="text-base md:text-xl text-neutral-500 text-center">
                        Gain access to an exclusive collection of whitepapers, ebooks, and industry reports that delve deeper into the strategies, trends, and case studies surrounding 4IR technologies. These resources are designed to provide you with a comprehensive understanding of how these innovations can be integrated and optimized within your business operations.
                    </p>
                </ComponentTransition>
            </div>

            <div className="lg:py-16 py-8">
                <ComponentTransition
                    delay={0.1}
                    className="flex justify-center items-center flex-col"
                >
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:py-5 pt-3 text-center bg-clip-text dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f] bg-text md:w-[50%] text-transparent font-bold lg:pb-12 pb-8">
                        Exclusive Access
                    </h1>
                </ComponentTransition>
                <ComponentTransition
                    delay={0.1} className="flex justify-center flex-col">
                    <h3 className='text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100'>1. Free Workbook:</h3>
                    <p className="text-base md:text-lg text-neutral-500">
                        Gain access to an exclusive collection of whitepapers, ebooks, and industry reports that delve deeper into the strategies, trends, and case studies surrounding 4IR technologies. These resources are designed to provide you with a comprehensive understanding of how these innovations can be integrated and optimized within your business operations.
                    </p>
                </ComponentTransition>
                <ComponentTransition
                    delay={0.1} className="flex justify-center flex-col">
                    <h3 className='text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100'>2. Latest Newsletters:</h3>
                    <p className="text-base md:text-lg text-neutral-500">
                        Stay ahead of the curve with our recent newsletters, offering expert analyses on current affairs, groundbreaking innovations, and their intersection in shaping our future.
                    </p>
                </ComponentTransition>


                <ComponentTransition
                    delay={0.1} className="flex justify-center items-center flex-col py-10">
                    <p className="text-base md:text-xl text-neutral-500 text-center">
                        Subscribe Today: Don't miss out on the wealth of knowledge and insights available in our "Insights" section. Subscribe now to get exclusive access to our latest articles, resources, and the free workbook that will guide your business through the complexities of the Fourth Industrial Revolution.
                    </p>
                </ComponentTransition>
                <Link href='/contact' className="w-full rounded-full">
                    <Button
                        title="Subscribe and Download the Free Workbook"
                        className="hover:dark:!bg-neutral-100 transition-colors md:!rounded-full !rounded-3xl duration-300 overflow-hidden !bg-transparent outline outline-1 dark:outline-white outline-neutral-950 dark:!text-white !text-black w-full lg:py-4 py-3 leading-tight"
                    />
                </Link>
            </div>

        </div>
    )
}

export default Insight