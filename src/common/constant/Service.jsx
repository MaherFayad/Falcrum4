import { CiShop } from "react-icons/ci";
import { FaConnectdevelop, FaPager, FaPiedPiper } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { IoIosSchool } from "react-icons/io";
import { IoDiamondOutline } from "react-icons/io5";
import { MdAnimation } from "react-icons/md";
import { MdOutlineAutoAwesomeMotion } from "react-icons/md";

const size = 35

export const Services = [
  {
    icon: (
      <FaConnectdevelop
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
        
      />
    ),
    title: "Free Educational Webinars",
    desc: "Dive into the essentials of Fourth Industrial Revolution technologies and their impact on your industry.",
  },
  {
    icon: (
      <MdAnimation
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "Customized Training Solutions",
    desc: "Enhance your team's expertise with personalized training programs, crafted to meet your unique business needs.",
  },
  {
    icon: (
      <MdOutlineAutoAwesomeMotion
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "Personalized Technology Audits",
    desc: "Gain deep insights into your current technology usage and uncover potential areas for improvement.",
  },
  {
    icon: (
      <MdOutlineAutoAwesomeMotion
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "Strategic Planning and Comprehensive Audits",
    desc: "Align your business goals with a strategic technology roadmap designed for sustainable growth.",
  },
  {
    icon: (
      <MdOutlineAutoAwesomeMotion
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "Team Building and Project Management Services",
    desc: "Let us lead your strategic projects to success with our expert team building and project management support.",
  },
];

export const ServiceItem = [
  {
    text1: 'Initiate:',
    text2: 'Awareness and Foundational Education',
    title: 'Educational Webinars',
    Goal: 'Experience an intuitive dashboard design that simplifies navigation and provides at-a-glance insights',
    Impact: 'Establishes a baseline of tech literacy, sparking curiosity and readiness for deeper learning.',
    icon : <FaPager className="h-8 w-8 mb-4 dark:text-white text-black place-self-start " />
  },
  {
    text1: 'Empower:',
    text2: 'Targeted Skills Development',
    title: 'Customized Training Solutions',
    Goal: `Elevate team capabilities with tailored training in key technologies identified as strategic to the business's future`,
    Impact: 'Creates a skilled workforce that can actively contribute to tech-driven initiatives and innovation.',
    icon : <ImProfile className="h-8 w-8 mb-4 dark:text-white text-black place-self-start  " />
  },
  {
    text1: 'Strategize:',
    text2: 'Visionary Planning and Alignment',
    title: 'Strategic Planning and Comprehensive Audits',
    Goal: `Align technology adoption with business goals through strategic planning, facilitated by comprehensive audits and leadership workshops.`,
    Impact: 'Ensures commitment from top management, aligning the entire organization under a unified strategic technology vision.',
    icon : <IoDiamondOutline className="h-8 w-8 mb-4 dark:text-white text-black place-self-start  " />
  },
  {
    text1: 'Implement:',
    text2: 'Project Execution and Integration',
    title: 'Team Building and Project Management Services',
    Goal: `Turn strategy into action by executing key technology projects, guided by expert project management to ensure alignment with the strategic vision.`,
    Impact: 'Tangible improvements and innovations are implemented, demonstrating the value and effectiveness of strategic technology integration.',
    icon : <CiShop className="h-8 w-8 mb-4 dark:text-white text-black place-self-start  " />
  },
  {
    text1: 'Optimize:',
    text2: 'Continuous Support and Evolution',
    title: 'Support Services (Insights Subscription, Client Portal Access)',
    Goal: `Maintain momentum by staying informed on the latest tech trends and best practices, and efficiently managing ongoing technology initiatives.`,
    Impact: 'Keeps the organization at the cutting edge, ready to adapt and evolve as new technologies and opportunities arise.',
    icon : <IoIosSchool className="h-8 w-8 mb-4 dark:text-white text-black place-self-start  " />
  },
  {
    text1: 'Iterate:',
    text2: 'Feedback Loop for Improvement',
    title: 'Post-Implementation Reviews and Continuous Engagement',
    Goal: `Leverage insights from completed projects and ongoing operations to refine strategies, training programs, and project execution methods.`,
    Impact: `Cultivates a culture of continuous improvement, where each cycle of the flywheel enhances the organization's efficiency, innovation, and competitive edge.`,
    icon : <IoIosSchool className="h-8 w-8 mb-4 dark:text-white text-black place-self-start  " />
  },
  

];

