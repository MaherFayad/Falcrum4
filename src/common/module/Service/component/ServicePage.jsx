import { ButtonSpot } from "@/common/component/element/ButtonSpot";
import CardOffer from "@/common/component/element/CardOffer";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import Image from "@/common/component/element/Image";
import Rails from "@/common/component/element/Rails";
import SectionHeading from "@/common/component/element/SectionHeading";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaCode, FaShieldHeart } from "react-icons/fa6";
import { GrAnalytics, GrCertificate, GrResources } from "react-icons/gr";
import { MdModelTraining, MdOutlineAppRegistration, MdOutlineFeedback } from "react-icons/md";
import { SiCodereview } from "react-icons/si";

export default function ServicePage() {
  return (
    <ComponentTransition className="h-auto max-w-[1500px] px-5 lg:px-10 xl:px-20 pb-20">
      <div className="flex justify-center py-5 ">
        <div className="flex justify-center mt-20 relative ">
          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl lg:py-5 md:py-3 px-10 text-center dark:bg-gradient-to-r from-white from-50% to-[#979797] bg-text bg-clip-text  text-transparent font-bold">
            Service & Expertise
          </h1>
          <div className=" absolute w-[80%] h-[250px] z-[-99] top-[-70px]">
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
          Websites / Applications / Web3 / Blockchain
        </p>
      </div>
      <div className="py-10 mt-20 flex gap-5 lg:gap-10 justify-center flex-row flex-wrap relative">
        <div className="absolute  z-[-9] glowbg w-[100%] md:w-[500px] h-[400px]  left-0 "></div>
        <ComponentTransition className="w-full overflow-hidden px-8 py-5 lg:basis-[30%] h-[320px] bg-neutral-100 dark:bg-neutral-950/50 backdrop-blur-sm border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl">
          <FaChalkboardTeacher size={50} />
          <h1 className="text-2xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
            Free Educational Webinars
          </h1>
          <h2 className="text-lg text-neutral-800 dark:text-neutral-300">
            Empowering Transformation Through Knowledge
          </h2>
          <p className="text-base text-neutral-700 dark:text-neutral-400 mt-3 md:line-clamp-2 lg:line-clamp-4 line-clamp-4">
            At Fulcrum Services, we believe that knowledge is the first step towards embracing the potential of the Fourth Industrial Revolution. Our free educational webinars are meticulously designed to cater to a wide audience, from tech enthusiasts to seasoned industry professionals. Each session is crafted to unveil the intricacies and opportunities presented by emerging technologies such as AI, IoT, blockchain, and more.

          </p>
        </ComponentTransition>
        <ComponentTransition
          delay={0.2}
          className="w-full h-[250px] lg:h-[300px] md:basis-[48%] lg:basis-[65%] overflow-hidden bg-neutral-100 border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <Image
            src="/img1.png"
            alt="Header Image"
            width={400}
            height={400}
            loading="lazy"
            className="w-full object-cover scale-110"
          />
        </ComponentTransition>
        <ComponentTransition
          delay={0.1}
          className="w-full h-[250px] md:basis-[48%] lg:basis-[30%] overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <Image
            src="/img.png"
            alt="Header Image"
            width={400}
            height={400}
            loading="lazy"
            className="w-full h-[280px] object-cover scale-110"
          />
        </ComponentTransition>
        <ComponentTransition
          delay={0.1}
          className="w-full h-[250px] px-8 py-5 md:basis-[48%] lg:basis-[30%] overflow-hidden dark:bg-neutral-950 border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <SiCodereview size={40} />
          <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
            Overview and Topics
          </h1>

          <p className="text-sm text-neutral-700 line-clamp-6 dark:text-neutral-400">
            Our webinar series covers a diverse range of subjects, including introductory sessions on blockchain technology, deep dives into artificial intelligence applications, explorations of IoT in modern industry, and the impact of Web3 on digital transactions. We also tailor sessions based on emerging trends and audience interests, ensuring relevance and immediate applicability.
          </p>
        </ComponentTransition>
        <ComponentTransition
          delay={0.1}
          className="w-full h-[250px] px-8 py-5 md:basis-[48%] lg:basis-[30%] relative overflow-hidden  bord border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <div className="absolute glowbg inset-0  left-0 "></div>
          <FaShieldHeart size={40} />
          <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
            Benefits of Attending
          </h1>
          <p className="text-sm text-neutral-700 line-clamp-6 dark:text-neutral-400">
            Participants will not only gain a solid understanding of 4IR technologies but also learn how these innovations can be leveraged to drive business growth, enhance operational efficiency, and foster a culture of innovation. Attendees will leave with actionable insights, inspired by real-world examples and case studies from businesses that have successfully integrated these technologies.
          </p>
        </ComponentTransition>
        <ComponentTransition
          delay={0.2}
          className="w-full h-[200px] md:h-[300px] md:basis-[48%] lg:basis-[65%] overflow-hidden bg-neutral-100 border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <Image
            src="/img1.png"
            alt="Header Image"
            width={400}
            height={400}
            loading="lazy"
            className="w-full object-cover scale-110"
          />
        </ComponentTransition>
        <ComponentTransition className="w-full overflow-hidden px-10 py-5 md:basis-[48%] lg:basis-[30%] h-[300px] bg-neutral-100 dark:bg-neutral-950/50 backdrop-blur-sm border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl">
          <MdOutlineAppRegistration size={50} />
          <h1 className="text-2xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
            CTA
          </h1>
          <p className="text-base text-neutral-700 dark:text-neutral-400 md:line-clamp-2 lg:line-clamp-4 line-clamp-4">
            Dive into the future with us. Register for our upcoming webinar and start your journey towards technological mastery and innovation.
          </p>
        </ComponentTransition>
        <ComponentTransition
          delay={0.1}
          className="w-full h-[250px]  md:basis-[35%] lg:basis-[30%] overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <Image
            src="/img.png"
            alt="Header Image"
            width={400}
            height={400}
            loading="lazy"
            className="w-full h-[280px] object-cover scale-110"
          />
        </ComponentTransition>
        <ComponentTransition
          delay={0.1}
          className="w-full h-[250px] px-8 py-5 md:basis-[61%] lg:basis-[65%] relative overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <div className="absolute glowbg inset-0 left-0 "></div>
          <FaCode size={40} />
          <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
            Customized Training Solutions
          </h1>
          <p className="text-sm text-neutral-700 line-clamp-6 dark:text-neutral-400">
            At Fulcrum Services, we recognize the unique challenges and objectives each organization faces. Our Customized Training Solutions are meticulously crafted to ensure your team not only understands but excels in leveraging 4IR technologies for sustained competitive advantage.
          </p>
        </ComponentTransition>
      </div>


      {/* ------------- */}
      <div className="lg:py-16 py-8">
        <ComponentTransition className="flex justify-center lg:py-2">
          <SectionHeading
            title="Deliverables"
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
        <div className="flex justify-center gap-5 lg:gap-10 flex-wrap">

          <ComponentTransition
            delay={0.1}
            className="w-full lg:h-[250px] h-auto lg:px-6 md:px-5 px-3 py-5 sm:basis-[48%] lg:basis-[30%] relative overflow-hidden  border border-neutral-300 dark:border-neutral-700 rounded-3xl"
          >
            <div className="absolute glowbg inset-0  left-0 "></div>
            <FaShieldHeart size={40} />
            <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
              Needs Assessment Report
            </h1>
            <p className="text-sm text-neutral-700 line-clamp-6 dark:text-neutral-400">
              A comprehensive evaluation of your team's current skills and technological proficiency, aligned with your business goals.
            </p>
          </ComponentTransition>
          <ComponentTransition
            delay={0.1}
            className="w-full lg:h-[250px] h-auto lg:px-6 md:px-5 px-3 py-5 sm:basis-[48%] lg:basis-[30%] relative overflow-hidden  border border-neutral-300 dark:border-neutral-700 rounded-3xl"
          >
            <div className="absolute  inset-0  left-0 "></div>
            <MdModelTraining size={40} />
            <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
              Customized Training Program
            </h1>
            <p className="text-sm text-neutral-700 line-clamp-6 dark:text-neutral-400">
              A curriculum tailored to your needs, covering essential 4IR technologies relevant to your industry. This includes interactive lectures, practical workshops, and hands-on projects.
            </p>
          </ComponentTransition>
          <ComponentTransition
            delay={0.1}
            className="w-full lg:h-[250px] h-auto lg:px-6 md:px-5 px-3 py-5 sm:basis-[48%] lg:basis-[30%] relative overflow-hidden  border border-neutral-300 dark:border-neutral-700 rounded-3xl"
          >
            <div className="absolute glowbg inset-0  left-0 "></div>
            <GrResources size={40} />
            <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
              Resource Access
            </h1>
            <p className="text-sm text-neutral-700 line-clamp-6 dark:text-neutral-400">
              Unlimited access to our digital learning materials and resources for the duration of the training program.
            </p>
          </ComponentTransition>
          <ComponentTransition
            delay={0.1}
            className="w-full lg:h-[250px] h-auto lg:px-6 md:px-5 px-3 py-5 sm:basis-[48%] lg:basis-[30%] relative overflow-hidden  border border-neutral-300 dark:border-neutral-700 rounded-3xl"
          >
            <div className="absolute inset-0  left-0 "></div>
            <GrAnalytics size={40} />
            <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
              Performance Analytics
            </h1>
            <p className="text-sm text-neutral-700 line-clamp-6 dark:text-neutral-400">
              Detailed reports on team progress, strengths, and areas for improvement.
            </p>
          </ComponentTransition>
          <ComponentTransition
            delay={0.1}
            className="w-full lg:h-[250px] h-auto lg:px-6 md:px-5 px-3 py-5 sm:basis-[48%] lg:basis-[30%] relative overflow-hidden  border border-neutral-300 dark:border-neutral-700 rounded-3xl"
          >
            <div className="absolute glowbg inset-0  left-0 "></div>
            <GrCertificate size={40} />
            <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
              Certification
            </h1>
            <p className="text-sm text-neutral-700 line-clamp-6 dark:text-neutral-400">
              Fulcrum Services Certification upon successful completion, validating your team's expertise in 4IR technologies.
            </p>
          </ComponentTransition>
          <ComponentTransition
            delay={0.1}
            className="w-full lg:h-[250px] h-auto sm:basis-[48%] lg:basis-[30%] overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
          >
            <Image
              src="/img.png"
              alt="Header Image"
              width={400}
              height={400}
              loading="lazy"
              className="w-full h-[280px] object-cover scale-110"
            />
          </ComponentTransition>
        </div>
      </div>

      {/* ------------ */}
      <div className="lg:py-16 py-8">
        <ComponentTransition className="flex justify-center lg:py-2">
          <SectionHeading
            title="Prices"
            icon={<MdOutlineFeedback size={0} />}
          />
        </ComponentTransition>
        <ComponentTransition
          delay={0.1}
          className="flex justify-center items-center flex-col"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:py-5 pt-3 text-center bg-clip-text dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f] bg-text md:w-[50%] text-transparent font-bold lg:pb-12 pb-8">
            Our Pricing
          </h1>
        </ComponentTransition>
        <div className="flex justify-center items-stretch gap-5 flex-wrap">
          <ComponentTransition className="w-full relative flex flex-col justify-between gap-10 overflow-hidden md:px-8 px-6 md:py-10 py-7 sm:basis-[48%] lg:basis-[30%] h-auto bg-neutral-100 dark:bg-neutral-950/50 backdrop-blur-sm border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl shadow-lg">
            {/* <FaChalkboardTeacher size={50} /> */}
            <h1 className="text-base md:text-lg xl:text-xl bg-[#e9ecea] text-center font-[500] py-2 text-neutral-800 dark:text-neutral-300 border-[1px] border-neutral-500  rounded-full">
              Standard Package</h1>
            <div className="flex flex-col  gap-7">
              <p className="text-[18px] text-center text-neutral-700 line-clamp-6 dark:text-neutral-400 leading-7">
                For teams up to 20 participants, including 4 comprehensive modules
              </p>
              <h2 className="text-center lg:text-[32px] md:text-2xl text-xl">$4,000</h2>
              <ButtonSpot
                title="Learn More"
                className="lg:py-3 py-2 lg:text-[18px] md:text-base text-sm text-white max-w-[200px] w-full mx-auto" />
            </div>
          </ComponentTransition>
          <ComponentTransition className="w-full relative flex flex-col justify-between gap-10 overflow-hidden md:px-8 px-6 md:py-10 py-7 sm:basis-[48%] lg:basis-[30%] h-auto bg-neutral-100 dark:bg-neutral-950/50 backdrop-blur-sm border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl shadow-lg">
            {/* <FaChalkboardTeacher size={50} /> */}
            <h1 className="text-base md:text-lg xl:text-xl bg-[#e9ecea] text-center font-[500] py-2 text-neutral-800 dark:text-neutral-300 border-[1px] border-neutral-500  rounded-full">
              Premium Package</h1>
            <div className="flex flex-col lg:gap-7 md:gap-5 sm:gap-4 gap-3">
              <p className="text-[18px] text-center text-neutral-700 line-clamp-6 dark:text-neutral-400 leading-7">
                For teams up to 50 participants, includes 8 modules covering advanced topics, plus guest expert sessions
              </p>
              <h2 className="text-center lg:text-[32px] md:text-2xl text-xl">$7,500</h2>
              <ButtonSpot
                title="Learn More"
                className="lg:py-3 py-2 lg:text-[18px] md:text-base text-sm text-white max-w-[200px] w-full mx-auto" />
            </div>
          </ComponentTransition>
          <ComponentTransition className="w-full relative flex flex-col justify-between gap-10 overflow-hidden md:px-8 px-6 md:py-10 py-7 sm:basis-[48%] lg:basis-[30%] h-auto bg-neutral-100 dark:bg-neutral-950/50 backdrop-blur-sm border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl shadow-lg">
            {/* <FaChalkboardTeacher size={50} /> */}
            <div className="absolute glowbg inset-0  left-0 "></div>
            <h1 className="text-base md:text-lg xl:text-xl bg-[#ffffff] relative text-center font-[500] py-2 text-neutral-800 dark:text-neutral-300 border-[1px] border-neutral-500  rounded-full">
              Elite Package</h1>
            <div className="flex flex-col lg:gap-7 md:gap-5 sm:gap-4 gap-3">
              <p className="text-[18px] text-center text-neutral-700 line-clamp-6 dark:text-neutral-400 leading-7">
                Customized entirely to your organization's needs, with flexible participant numbers, advanced modules, and ongoing support
              </p>
              <h2 className="text-center lg:text-[22px] md:text-xl text-base leading-[140%]">Pricing varies based on scope</h2>
              <ButtonSpot
                title="Learn More"
                className="lg:py-3 py-2 lg:text-[18px] md:text-base text-sm text-white max-w-[200px] w-full mx-auto" />
            </div>
          </ComponentTransition>
        </div>
      </div>

      <CardOffer title='Ready To Get Started!' className="!px-0" />
    </ComponentTransition>
  );
}
