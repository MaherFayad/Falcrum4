import Button from "@/common/component/element/Button";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import SectionHeading from "@/common/component/element/SectionHeading";
import Link from "next/link";
import BlogList from "./component/BlogList";

const Blog = ({ BlogContent, className = "" }) => {
  return (
    <div className={`${className} h-auto max-w-[1500px] mx-auto px-5 lg:px-10 xl:px-20 pb-20 lg:mt-20 mt-10`}>
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
      <BlogList BlogContent={BlogContent} />
      <ComponentTransition className="w-full md:flex-row flex-col items-center flex justify-center gap-3">
        <Link href='/blog' className="w-full rounded-full">
          <Button
            title="Read more about our success stories and join the ranks of our satisfied clients"
            className="hover:dark:!bg-neutral-100 transition-colors md:!rounded-full !rounded-3xl duration-300 overflow-hidden !bg-transparent outline outline-1 dark:outline-white outline-neutral-950 dark:!text-white !text-black w-full lg:py-4 py-2 !line-clamp-1"
          />
        </Link>
      </ComponentTransition>

    </div>
  );
};

export default Blog;
