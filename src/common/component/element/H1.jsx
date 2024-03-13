"use client";
import { motion } from "framer-motion";
import React from "react";

export default function H1({ title, className }) {
  return (
    <div className="overflow-hidden relative flex justify-center ">
      <motion.h1
        initial={{ y: "95%" }}
        whileInView={{ y: "0%" }}
        transition={{
          type: "tween",
          ease: [0.8, 0.2, 0, 1],
          duration: 1,
        }}
        viewport={{ once: true }}
        className={`${className} relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl`}
      >
        {title}
      </motion.h1>
    </div>
  );
}
