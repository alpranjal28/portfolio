"use client";
import { PortfolioItem, projects } from "@/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const PortfolioPage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  // Add state for modal/expanded view
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.5 }}
      ref={ref}
    >
      {/* container */}
      <div
        className="relative h-full overflow-y-scroll lg:flex flex-col select-none scrollbar-hide snap-y snap-mandatory scroll-smooth"
        ref={ref}
      >
        {/* <div ref={ref} className="h-[600vh] relative"> */}
        <div className="min-h-[60vh] flex justify-center items-center snap-start gap-4">
          <h1 className="text-8xl text-center">My Works</h1>
        </div>

        {projects.map((item, index) => (
          <div className="snap-start h-[calc(100vh-6rem)] m-2 md:m-8" key={index}>
            <div
              className={`h-[calc(100vh-8rem)] flex items-center justify-center bg-gradient-to-r rounded-xl ${item.color}`}
            >
              <div className="flex flex-col gap-8 text-white">
                <h1 className="text-5xl font-bold lg:text-5xl xl:text-7xl">
                  {item.title}
                </h1>

                <div className="lg:grid lg:grid-cols-2">
                  <div className="">
                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                      <Image src={item.img} alt={item.title} fill />
                    </div>
                  </div>
                  <div className="py-8 lg:px-8">
                    <p className="text-wrap w-80 md:w-96 lg:w-[500px] lg:text-lg  xl:w-[600px] max-w-[600px]">
                      {item.desc}
                    </p>
                    <div className="flex justify-end lg:justify-start ">
                      <Link href={item.link} target="_blank">
                        <button className="p-2 lg:ml-0 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-500 font-semibold m-4 rounded">
                          Visit Project
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* footer */}
        <div className="relative w-full min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-center snap-start">
          <h2 className="text-6xl">Do you have a project ?</h2>
          <div className="relative">
            {/* SVG */}
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{
                duration: 8,
                ease: "linear",
                repeat: Infinity,
              }}
              viewBox="0 0 300 300"
              className="w-64 h-64 md:w-[400px] md:h-[400px] "
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                />
              </defs>
              <text fill="#000">
                <textPath xlinkHref="#circlePath" className="text-xl">
                  Full-stack, Typescript, MERN, Next.js,
                </textPath>
              </text>
            </motion.svg>
            <Link
              href="/contact"
              className="w-16 h-16 md:h-28 md:w-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
