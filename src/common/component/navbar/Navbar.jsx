"use client";
import { NavigationItem } from "@/common/constant/NavigationItem";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ButtonSpot } from "../element/ButtonSpot";
import NavMobile from "./NavMobile";

// const Logos = dynamic(() => import('./Logo'), {
//   ssr: false
// })

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scroll, setScrolled] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const close = () => {
    setOpen(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 10);
    });
  }, []);

  return (
    <motion.div
      className={clsx(
        scroll ? "backdrop-blur-sm" : "",
        `w-full transition-all duration-300 mx-auto bg-[#E9ECEAfffd0] dark:bg-[#000000d0]  max-w-[1500px]  border-b-[1px] border-neutral-300 dark:border-neutral-800 lg:py-5 md:py-4 sm:py-3 px-5 2xl:rounded-3xl lg:px-10 fixed top-0 right-0 left-0 z-[99]`
      )}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="flex z-[999] items-start justify-start">
          <Link
            href="/"
            className="group relative w-auto flex justify-start items-start"
          >
            {/* <Logos /> */}
            {/* <h1
              className={`${
                open ? "text-white" : ""
              }  text-3xl tracking-[-0.10em] font-bold`}
            >
              Teaser
            </h1> */}
            <img src="/Logo-Light.svg" className={`lg:h-[70px] md:h-[62px] h-[54px] ${open ? "brightness-[200] filter" : " transition delay-500"}`} alt="Logo" style={{ maxHeight: '72px' }} />
          </Link>
        </div>
        <div className="lg:flex hidden justify-center gap-10 items-center w-full">
          {NavigationItem.map((item, index) => (
            <Link
              href={item.src}
              className={`group flex justify-center gap-5 items-center relative`}
              key={index}
            >
              <h1 className="text-base font-medium text-black dark:text-white line-clamp-1">
                {item.title}
              </h1>
              <div
                className={clsx(
                  pathname === item.src
                    ? "absolute top-[23px] h-[2px] flex items-center w-[50%]  bg-[#000] dark:bg-white  transition-transform duration-300 "
                    : "absolute top-[23px] h-[2px] w-[0%]  bg-[#000] dark:bg-white  transition-all duration-300 group-hover:w-[50%]"
                )}
              ></div>
            </Link>
          ))}
        </div>

        <div className="lg:hidden flex  items-center">
          {/* <div className="px-2">
            <DarkmodeSwitch />
          </div> */}
          <NavMobile open={open} handleOpen={handleOpen} close={close} />
        </div>

        <div className="lg:flex hidden w-[35%] items-center justify-end">
          {/* <div className="px-2">
            <DarkmodeSwitch />
          </div> */}
          <Link href={`/contact`} className="block w-full h-full" >
            <ButtonSpot title="Contact Us" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
