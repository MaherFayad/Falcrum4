"use client";
import { ButtonSpot } from "src/common/component/element/ButtonSpot";
import ComponentTransition from "src/common/component/element/ComponentTransition";
import Rails from "src/common/component/element/Rails";
import SectionHeading from "src/common/component/element/SectionHeading";
import { servicesData } from "src/common/constant/ServicesData";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { MdOutlineFeedback } from "react-icons/md";

const DetailsPage = () => {
    const params = useSearchParams()
    const id = params.get("id")

    const itemData = servicesData[1]

    return (
        <ComponentTransition className="h-auto max-w-[1500px] w-full mx-auto px-5 lg:px-10 xl:px-20 py-20 overflow-hidden">

            {/* main heading */}
            <div className="flex justify-center py-3 ">
                <div className="flex justify-center lg:mt-20 mt-10 relative">
                    <h1 className="text-3xl  md:text-6xl lg:text-7xl lg:py-5 md:py-3 px-10 text-center dark:bg-gradient-to-r from-white from-50% to-[#979797] bg-text bg-clip-text text-transparent font-bold">
                        {itemData?.title}
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
            {itemData.subtitle &&
                <div className="flex justify-center items-center flex-col">
                    <p className="text-base md:text-2xl text-neutral-500 md:w-[70%] text-center">
                        {itemData.subtitle}
                    </p>
                </div>
            }
            {/* Description */}
            <ComponentTransition
                delay={0.1}
                className={`lg:py-10 py-4`}
            >
                <p className="text-base md:text-xl text-neutral-500 text-center">

                    {itemData.description}
                </p>
            </ComponentTransition>

            {/* what we offer */}
            {itemData.whatWeOffer &&
                <div className="lg:py-16 py-8">
                    <ComponentTransition className="flex justify-center lg:py-2">
                        <SectionHeading
                            title="What We Offer"
                            icon={<MdOutlineFeedback size={0} />}
                        />
                    </ComponentTransition>
                    <ComponentTransition
                        delay={0.1}
                        className="flex justify-center items-center flex-col"
                    >
                        <h1 className="text-2xl md:text-4xl lg:text-5xl lg:py-5 pt-3 text-center bg-clip-text dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f] bg-text md:w-[50%] text-transparent font-bold lg:pb-12 pb-8">
                            What We Promise
                        </h1>
                    </ComponentTransition>

                    <div className="flex justify-center gap-5 lg:gap-10 flex-wrap">
                        {itemData.whatWeOffer.map((item, index) => (
                            <div className="w-full" key={index}>
                                <h3 className="font-bold text-lg md:text-2xl mb-1">{index + 1}. {item?.title}:</h3>
                                <p className="text-[14px] md:text-base leading-[140%] text-neutral-500">{item?.content}</p>
                            </div>

                        ))}
                    </div>

                </div>
            }
            {/* breakdowns */}
            {itemData.breakdowns &&
                <div className="lg:py-16 py-8">
                    <ComponentTransition className="flex justify-center lg:py-2">
                        <SectionHeading
                            title="breakdowns"
                            icon={<MdOutlineFeedback size={0} />}
                        />
                    </ComponentTransition>
                    <ComponentTransition
                        delay={0.1}
                        className="flex justify-center items-center flex-col"
                    >
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:py-5 pt-3 text-center bg-clip-text dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f] bg-text md:w-[50%] text-transparent font-bold lg:pb-12 pb-8">
                            Comprehensive Service Breakdown
                        </h1>
                    </ComponentTransition>

                    <div className="flex justify-center gap-5 lg:gap-10 flex-wrap">
                        {itemData.breakdowns.map((item, index) => (
                            <div className="w-full" key={index}>
                                <h3 className="font-bold text-base md:text-2xl mb-1">{index + 1}. {item?.heading}</h3>
                                <p className="text-xs md:text-base leading-[140%] text-neutral-500">{item?.description}</p>
                            </div>

                        ))}
                    </div>

                </div>
            }

            {/* why join us */}
            {itemData.whyJoinUs &&
                <div className="lg:py-16 py-8">
                    <ComponentTransition className="flex justify-center lg:py-2">
                        <SectionHeading
                            title="Why Join Us"
                            icon={<MdOutlineFeedback size={0} />}
                        />
                    </ComponentTransition>
                    <ComponentTransition
                        delay={0.1}
                        className="flex justify-center items-center flex-col"
                    >
                        <h1 className="text-2xl md:text-4xl lg:text-5xl lg:py-5 pt-3 text-center bg-clip-text dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f] bg-text md:w-[50%] text-transparent font-bold lg:pb-12 pb-8">
                            Reasons To Join Us
                        </h1>
                    </ComponentTransition>

                    <div className="flex justify-center gap-5 lg:gap-10 flex-wrap">
                        {itemData.whyJoinUs.map((item, index) => (
                            <div className="text-left w-full">
                                <h3 className="font-bold text-lg md:text-2xl mb-1">{index + 1}. {item?.title}:</h3>
                                <p className="text-[14px] md:text-base leading-[140%] text-neutral-500">{item?.content}</p>
                            </div>

                        ))}
                    </div>
                </div>
            }

            {/* what we deliver */}
            {itemData.deliverables &&
                <div className="lg:py-16 py-8">
                    <ComponentTransition className="flex justify-center lg:py-2">
                        <SectionHeading
                            title={id === '3' ? "Service Deep Dive" : "Deliverables"}
                            icon={<MdOutlineFeedback size={0} />}
                        />
                    </ComponentTransition>
                    <ComponentTransition
                        delay={0.1}
                        className="flex justify-center items-center flex-col"
                    >
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:py-5 pt-3 text-center bg-clip-text dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f] bg-text md:w-[50%] text-transparent font-bold lg:pb-12 pb-8">
                            What We Deliver
                        </h1>
                    </ComponentTransition>
                    <div className="flex justify-center gap-5 lg:gap-10 flex-wrap relative">
                        <div className="absolute z-[-9] glowbg w-[100%] md:w-[250px] min-h-[250px]  left-0 top-0"></div>
                        {itemData.deliverables.map((item, index) => (

                            <ComponentTransition key={index}
                                delay={0.1}
                                className="w-full bg-[#e9ecea] lg:min-h-[250px] h-auto lg:px-6 md:px-5 px-4 py-4 sm:basis-[48%] lg:basis-[30%] relative overflow-hidden  border border-neutral-300 dark:border-neutral-700 rounded-3xl"
                            >
                                <div className="absolute  inset-0  left-0 "></div>
                                <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
                                    {item.heading}
                                </h1>
                                <p className="text-sm text-neutral-700 line-clamp-6 dark:text-neutral-400">

                                    {item.description}
                                </p>
                            </ComponentTransition>
                        ))}
                    </div>
                </div>
            }

            {/* models */}
            {itemData.models &&
                <div className="lg:py-16 py-8">
                    <ComponentTransition className="flex justify-center lg:py-2">
                        <SectionHeading
                            title={"Models"}
                            icon={<MdOutlineFeedback size={0} />}
                        />
                    </ComponentTransition>
                    <ComponentTransition
                        delay={0.1}
                        className="flex justify-center items-center flex-col"
                    >
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:py-5 py-3 text-center bg-clip-text dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f] bg-text md:w-[50%] text-transparent font-bold lg:pb-12 pb-8">
                            Diverse Engagement Models to Fit Your Needs
                        </h1>
                    </ComponentTransition>
                    <div className="flex justify-center gap-5 lg:gap-10 flex-wrap relative">
                        <div className="absolute z-[-9] glowbg w-[100%] md:w-[250px] min-h-[250px] opacity-60 left-1/2 -translate-x-1/2 top-0"></div>
                        {itemData.models.map((item, index) => (

                            <ComponentTransition key={index}
                                delay={0.1}
                                className="w-full bg-[#e9ecea] lg:h-[200px] text-center h-auto lg:px-6 md:px-5 px-4 lg:py-8 pt-4 pb-6 md:basis-[47.5%] relative overflow-hidden  border border-neutral-300 dark:border-neutral-700 rounded-3xl"
                            >
                                <div className="absolute  inset-0  left-0 "></div>
                                <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
                                    {item.title}
                                </h1>
                                <p className="text-sm text-neutral-700 line-clamp-6 dark:text-neutral-400">

                                    {item.description}
                                </p>
                            </ComponentTransition>
                        ))}
                    </div>
                </div>
            }

            {/* comprehensivePrice */}
            {itemData.comprehensivePrice &&
                <div className="lg:py-16 py-8 relative">
                    <ComponentTransition className="flex justify-center lg:py-2">
                        <SectionHeading
                            title="Pricing"
                            icon={<MdOutlineFeedback size={0} />}
                        />
                    </ComponentTransition>
                    <ComponentTransition
                        delay={0.1}
                        className="flex justify-center items-center flex-col"
                    >
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:py-5 pt-3 text-center bg-clip-text dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f] bg-text md:w-[50%] text-transparent font-bold lg:pb-12 pb-8">
                            {itemData.comprehensivePrice.title}
                        </h1>
                    </ComponentTransition>
                    <div className="absolute z-[-9] glowbg w-[100%] md:w-[250px] h-[400px] opacity-70 right-0 bottom-0"></div>

                    <ComponentTransition className="w-full relative flex flex-col justify-between gap-10 overflow-hidden md:px-8 px-6 md:py-10 py-7 h-auto bg-neutral-100 dark:bg-neutral-950/50 backdrop-blur-sm border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl shadow-lg">
                        <div className="flex flex-col lg:gap-7 md:gap-5 sm:gap-4 gap-3">
                            <p className="md:text-[18px] text-base text-center text-neutral-700 line-clamp-6 dark:text-neutral-400 leading-[140%]">
                                {itemData.comprehensivePrice.description}
                            </p>
                            <ButtonSpot
                                title="Learn More"
                                className="lg:py-3 py-2 lg:text-[18px] md:text-base text-sm text-white max-w-[200px] w-full mx-auto" />
                        </div>
                    </ComponentTransition>
                </div>
            }

            {/* Pricing */}
            {itemData.pricing &&
                <div className="lg:py-16 py-8">
                    <ComponentTransition className="flex justify-center lg:py-2">
                        <SectionHeading
                            title="Pricing"
                            icon={<MdOutlineFeedback size={0} />}
                        />
                    </ComponentTransition>
                    <ComponentTransition
                        delay={0.1}
                        className="flex justify-center items-center flex-col"
                    >
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:py-5 pt-3 text-center bg-clip-text dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f] bg-text md:w-[50%] text-transparent font-bold lg:pb-12 pb-8">
                            Our Charges
                        </h1>
                    </ComponentTransition>
                    <div className="flex justify-center gap-5 lg:gap-10 flex-wrap">
                        {itemData.pricing.map((item, index) => (

                            <ComponentTransition key={index} className="pricing-card w-full relative flex flex-col justify-between gap-10 overflow-hidden md:px-8 px-6 md:py-10 py-7 sm:basis-[48%] lg:basis-[30%] h-auto bg-neutral-100 dark:bg-neutral-950/50 backdrop-blur-sm border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl shadow-lg">
                                {/* <FaChalkboardTeacher size={50} /> */}
                                <h1 className="text-base md:text-lg xl:text-xl bg-[#e9ecea] text-center font-[500] py-2 text-neutral-800 dark:text-neutral-300 border-[1px] border-neutral-500  rounded-full">
                                    {item.package}</h1>
                                <div className="flex flex-col lg:gap-7 md:gap-5 sm:gap-4 gap-3">
                                    <p className="md:text-[18px] text-base text-center text-neutral-700 line-clamp-6 dark:text-neutral-400 leading-[140%]">
                                        {item.description}
                                    </p>
                                    <h2 className="text-center lg:text-[32px] md:text-2xl text-xl">{item.price}</h2>
                                    <ButtonSpot
                                        title="Learn More"
                                        className="lg:py-3 py-2 lg:text-[18px] md:text-base text-sm text-white max-w-[200px] w-full mx-auto" />
                                </div>
                            </ComponentTransition>
                        ))}
                    </div>
                </div>
            }

            {/* process */}
            {itemData.process &&
                <div className="lg:py-16 py-8">
                    <ComponentTransition className="flex justify-center lg:py-2">
                        <SectionHeading
                            title="process"
                            icon={<MdOutlineFeedback size={0} />}
                        />
                    </ComponentTransition>
                    <ComponentTransition
                        delay={0.1}
                        className="flex justify-center items-center flex-col"
                    >
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:py-5 pt-3 text-center bg-clip-text dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f] bg-text md:w-[50%] text-transparent font-bold lg:pb-12 pb-8">
                            Simple Steps To Proceed
                        </h1>
                    </ComponentTransition>

                    <div className="flex justify-center gap-5 lg:gap-10 flex-wrap">
                        {itemData.process.map((item, index) => (
                            <div className="text-left w-full" key={index}>
                                <h3 className="font-bold text-base md:text-2xl mb-1">Step {index + 1} {item.heading}:</h3>
                                <p className="text-xs md:text-base leading-[140%] text-neutral-500">{item.description}</p>
                            </div>

                        ))}
                    </div>
                </div>
            }

            {/* benefits */}
            {itemData.benefits &&
                <div className="lg:py-16 py-8">
                    <ComponentTransition className="flex justify-center lg:py-2">
                        <SectionHeading
                            title="benefits"
                            icon={<MdOutlineFeedback size={0} />}
                        />
                    </ComponentTransition>
                    <ComponentTransition
                        delay={0.1}
                        className="flex justify-center items-center flex-col"
                    >
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:py-5 pt-3 text-center bg-clip-text dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f] bg-text md:w-[50%] text-transparent font-bold lg:pb-12 pb-8 capitalize">
                            {id === "4" ? "Tailored Benefits for Your Organization" : ` Benefits of ${itemData?.title}`}
                        </h1>
                    </ComponentTransition>

                    <div className="flex justify-center gap-5 lg:gap-10 flex-wrap">
                        {itemData.benefits.map((item, index) => (

                            <ComponentTransition key={index}
                                delay={0.1}
                                className="w-full lg:min-h-[200px] h-auto lg:px-6 md:px-5 px-4 py-4 sm:basis-[48%] lg:basis-[30%] relative overflow-hidden  border border-neutral-300 dark:border-neutral-700 rounded-3xl"
                            >
                                <div className="absolute  inset-0  left-0 "></div>
                                <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
                                    {item.heading}
                                </h1>
                                <p className="text-sm text-neutral-700 line-clamp-6 dark:text-neutral-400">

                                    {item.description}
                                </p>
                            </ComponentTransition>

                        ))}
                    </div>
                </div>
            }


            {/* cta */}
            {itemData.cta &&
                <div className="lg:pt-16 pt-8 lg:pb-8 pb-6 text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:py-5 pt-3 font-bold"> {itemData.cta?.title}</h1>
                    <p className="text-[14px] md:text-base md:max-w-6xl mx-auto">{itemData.cta?.content}</p>
                </div>
            }

            {/* joinTheRevolution */}
            {itemData?.joinTheRevolution &&
                <div className={`relative`}>
                    <div className="max-w-[1500px] w-full max-xl:px-10 max-md:px-5 px-2 relative overflow-hidden flex-col rounded-3xl flex justify-center items-center bg-neutral-300/50 dark:bg-neutral-800/50 xl:py-40 md:30 sm:py-20 py-12">
                        <Image
                            src="https://firebasestorage.googleapis.com/v0/b/falcrum4-7eb0b.appspot.com/o/photo-1653302803784-c5b7918dbf43.webp?alt=media&token=dc147be9-7dbf-459d-83fa-f2a9d4fc5602"
                            alt="image"
                            width={400}
                            height={400}
                            priority
                            className="w-full h-full object-cover z-[-9] absolute inset-0"
                        />
                        <h1 className="text-left w-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:py-3 bg-clip-text bg-gradient-to-r dark:from-white from-black from-50% dark:to-[#b1b1b1] to-[#292929] xl:w-[80%] text-transparent font-bold">
                            {itemData.joinTheRevolution?.title}
                        </h1>
                        <h3 className="lg:text-xl md:text-lg sm:text-base text-sm lg:py-5 bg-clip-text bg-gradient-to-r dark:from-white from-black from-50% dark:to-[#b1b1b1] to-[#292929] xl:w-[80%] text-transparent font-medium">
                            {itemData.joinTheRevolution?.content}
                        </h3>
                        <ComponentTransition className="w-full md:flex-row flex-col flex gap-3 py-5 xl:w-[80%] justify-items-start items-start content-start place-items-start place-content-start">
                            <Link href="/contact" className="max-md:w-full block">
                                <ButtonSpot
                                    title="Register Now"
                                    className="w-full md:w-full lg:py-3 py-2 px-8 xl:text-xl md:text-lg sm:text-base text-sm" />
                            </Link>
                            <Link href="/contact" className="max-md:w-full block">
                                <ButtonSpot
                                    title="Download Workbook"
                                    className="w-full md:w-full lg:py-3 py-2 px-8 xl:text-xl md:text-lg sm:text-base text-sm" />
                            </Link>
                        </ComponentTransition>
                    </div>
                    <div className="absolute  z-[-9] glowbg w-[100%] md:w-[600px] h-[400px] top-[50px]"></div>
                </div>
            }
            {/* cta */}
            {typeof (itemData.cta) === 'string' && itemData.cta ?
                <div className={`relative`}>
                    <div className="max-w-[1500px] w-full max-xl:px-10 max-md:px-5 px-2 relative overflow-hidden flex-col rounded-3xl flex justify-center items-center bg-neutral-300/50 dark:bg-neutral-800/50 xl:py-40 md:30 sm:py-20 py-12">
                        <Image
                            src="https://firebasestorage.googleapis.com/v0/b/falcrum4-7eb0b.appspot.com/o/photo-1653302803784-c5b7918dbf43.webp?alt=media&token=dc147be9-7dbf-459d-83fa-f2a9d4fc5602"
                            alt="image"
                            width={400}
                            height={400}
                            priority
                            className="w-full h-full object-cover z-[-9] absolute inset-0"
                        />
                        <h1 className="text-left w-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:py-3 bg-clip-text bg-gradient-to-r dark:from-white from-black from-50% dark:to-[#b1b1b1] to-[#292929] xl:w-[80%] text-transparent font-bold">
                            Ready to Transform Your Business?
                        </h1>
                        <h3 className="lg:text-xl md:text-lg sm:text-base text-sm lg:py-5 bg-clip-text bg-gradient-to-r dark:from-white from-black from-50% dark:to-[#b1b1b1] to-[#292929] xl:w-[80%] text-transparent font-medium">
                            {itemData.cta}
                        </h3>
                        <ComponentTransition className="w-full md:flex-row flex-col flex gap-3 py-5 xl:w-[80%] justify-items-start items-start content-start place-items-start place-content-start">
                            <Link href="/contact" className="max-md:w-full block">
                                <ButtonSpot
                                    title="Register Now"
                                    className="w-full md:w-full lg:py-3 py-2 px-8 xl:text-xl md:text-lg sm:text-base text-sm" />
                            </Link>
                        </ComponentTransition>
                    </div>
                    <div className="absolute  z-[-9] glowbg w-[100%] md:w-[600px] h-[400px] top-[50px]"></div>
                </div> : null
            }

        </ComponentTransition>
    );
};

export default DetailsPage;
