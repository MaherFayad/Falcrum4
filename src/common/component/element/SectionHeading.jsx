import React from "react";

const SectionHeading = ({
  title,
  icon,
  className,
}) => {
  return (
    <h2 className={`${`flex items-center lg:text-xl md:text-lg sm:text-base text-sm font-medium py-2 px-5 rounded-full text-neutral-800 dark:text-neutral-300 border-[1px] border-neutral-900 dark:border-neutral-700 ${className}`} capitalize`}>{title}</h2>
  );
};

export default SectionHeading;
