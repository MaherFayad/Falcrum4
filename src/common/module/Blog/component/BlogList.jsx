import { ButtonSpot } from "@/common/component/element/ButtonSpot";
import Image from "@/common/component/element/Image";
import { BlogContent } from "@/common/constant/BlogContent";
import Link from "next/link";

const BlogList = () => {
  return (
    <div className="py-10 flex gap-5 lg:gap-10 justify-center flex-col md:flex-row md:flex-wrap">
      {BlogContent?.map((item, index) => (
        <div
          className="w-full  gap-5 flex h-auto md:h-[400px] lg:flex-row md:flex-col flex-col bg-neutral-100 dark:bg-neutral-950 border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <div className="md:basis-[60%] w-full py-5 px-5 lg:px-10">
            <div className="group"> <Link
              href={`/blog/${item.slug}`}
            >
              <h1 className="text-xl md:text-2xl font-bold md:py-2 group-hover:underline transition-all duration-300 text-neutral-800 dark:text-neutral-100">
                {item.title}
              </h1>
              <p className="text-sm md:text-base max-sm:mb-0 text-neutral-700 dark:text-neutral-300 mt-5 max-xl:line-clamp-4 line-clamp-5">
                {item.desc}
              </p></Link></div>
            <Link
              href={`/blog/${item.slug}`}
            >
              <ButtonSpot title="Learn More" className="mt-3 overflow-hidden bgslate max-w-fit px-8 py-2" />
            </Link>
          </div>
          <div className="w-full overflow-hidden border-[1px] max-md:rounded-b-3xl rounded-b-3xl lg:rounded-3xl">
            <Image
              src={item.img}
              alt="Header Image"
              width={400}
              height={400}
              loading="lazy"
              className="w-full object-cover sm:scale-150 xl:top-[-100px] scale-125 relative"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
