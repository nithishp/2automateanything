"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import React from "react";
import Sidebar from "./sidebar/Sidebar";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import { NavbarDemo } from "./navbar/Navbar";
import Image from "next/image";



export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <GradualSpacing
          delayMultiple={0.1}
          className="font-display text-center text-4xl font-bold tracking-[-0.1em]  text-black dark:text-white md:text-7xl md:leading-[5rem]"
          text="2AutomateAnything"
        />

        <div className="font-bsemibold text-center text-base md:text-4xl dark:text-neutral-200 py-4">
          “Experts in Intelligent Automation and Software Product development”
        </div>
        <div className="flex justify-center items-center gap-10">
          <button
            onClick={() => {
              const element = document.getElementById("whyus");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer  z-10 group"
          >
            Get Started
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-amber-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-amber-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
            <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
              View
            </span>
          </button>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
