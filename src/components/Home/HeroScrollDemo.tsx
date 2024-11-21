"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Let us do your Full Time <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Job Applications
              </span>
            </h1>
          </>
        }
      >
<Image
  src="/LinkedinJobs.png" // Add leading slash
  alt="hero"
  height={720}
  width={1400}
  className="mx-auto rounded-2xl object-cover h-full object-left-top"
  draggable={false}
/>

      </ContainerScroll>
    </div>
  );
}

export default HeroScrollDemo;