"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Homepage() {
  return (
    <motion.div
      className="h-full overflow-scroll lg:overflow-hidden"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col lg:flex-row h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="lg:h-full lg:w-1/2 flex items-center justify-center">
          <Image
            src={"/hero.png"}
            alt="image"
            width={200}
            height={200}
            className="object-contain"
            priority={true}
            style={{
              height: "auto",
              width: "auto",
            }}
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center ">
          {/* TITLE  */}
          <h1 className="text-4xl md:text-6xl font-semibold z-10">
            Crafting Digital Experiences, Designing Tomorrow
          </h1>
          <p className="md:text-xl">
            Hello! I&apos;m Pranjal, an aspiring full-stack web developer
            enthusiastic about crafting digital experiences. Specializing in the
            MERN &#40;MongoDB, Express.js, React, Node.js&#41; stack, I bring a
            passion for clean coding and user-centric solutions. Explore my
            portfolio to see projects that reflect my commitment to turning
            ideas into impactful web applications. Let&apos;s connect and
            explore the possibilities of working together!
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4 m-4">
            <Link href={"/portfolio"}>
              <button className="px-4 py-2 rounded-lg ring-2 ring-black bg-black text-white">
                view my work
              </button>
            </Link>
            <Link href={"/contact"}>
              <button className="px-4 py-2 rounded-lg ring-2 ring-black">
                contact me
              </button>
            </Link>
            <Link href={"/about"}>
              <button className="px-4 py-2 rounded-lg ring-2 ring-black bg-black text-white">
                About Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
