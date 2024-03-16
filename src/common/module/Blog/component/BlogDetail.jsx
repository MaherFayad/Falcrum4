"use client";
import React from "react";
import { BlogContent } from "@/common/constant/BlogContent";
import { usePathname } from "next/navigation";
import Image from "@/common/component/element/Image";
import Rails from "@/common/component/element/Rails";

const BlogDetail = ({ id }) => {
  const pathname = usePathname();
  const blog = BlogContent.find((item) => item.id === id);
  return (
    <div className="h-auto max-w-[1500px] flex flex-col items-center justify-center mt-20 max-md:px-5 px-10 xl:px-20 pb-10 overflow-hidden">
      <div className="flex justify-center mt-20 relative">
        <h1 className="text-[4.5rem] py-5 leading-[60px] bg-clip-text dark:bg-gradient-to-r from-white from-50% to-black bg-text  w-[70%] text-transparent font-bold">
          {blog.title1}
        </h1>
        <div className=" absolute w-[170%]  h-[250px] z-[-99] top-[-70px]">
          <Rails/>
          <div style={{ backgroundImage: 'linear-gradient(to bottom, #E9ECEA 20%, transparent)' }} className="absolute inset-0"></div>
          <div style={{ backgroundImage: 'linear-gradient(to left, #E9ECEA 1%, transparent 30%)' }} className="absolute inset-0"></div>
          <div style={{ backgroundImage: 'linear-gradient(to right, #E9ECEA 1%, transparent 30%)' }} className="absolute inset-0"></div>
        <div style={{ backgroundImage: 'linear-gradient(to top, #E9ECEA 1%, transparent 30%)' }} className="absolute inset-0"></div>
        </div>
      </div>
      <div className="flex mt-32  w-full justify-center items-center flex-col">
      <Image 
      src={blog.img}
      alt={blog.title1}
      width={400}
      height={400}
      priority
      className="md:h-[600px] w-full rounded-3xl"
      />
      </div>
      <div className="py-10 px-10 max-md:px-5 md:px-32 text-justify">
      <h1>
        {blog.desc}
      </h1>
      <div>
        {blog.content}
      </div>
      </div>
    </div>
  );
};

export default BlogDetail;
