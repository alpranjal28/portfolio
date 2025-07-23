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
          <h1 className="text-4xl md:text-6xl group font-semibold z-10">
            Crafting{" "}
            <span className="group-hover:text-pink-600 transition-all">
              Scalable
            </span>{" "}
            Solutions, One Line of <span className="group-hover:text-orange-400 transition-all">Code</span>{" "}
            at a Time
          </h1>
          <p className="md:text-xl lg:text-2xl">
            Hello! I&apos;m Pranjal, a full-stack web developer passionate about
            building scalable, user-focused web applications. With experience
            across the modern web stack—including TypeScript, Next.js, Node.js,
            Express, PostgreSQL, MongoDB, WebSockets, Tailwind CSS, and Cloud
            solutions like AWS and Utho—I specialize in turning complex ideas
            into performant, real-world solutions. My projects range from
            real-time collaboration tools to healthcare systems and e-commerce
            apps, reflecting my commitment to clean architecture, responsive UI,
            and cloud-native design. Let&apos;s connect and create something
            impactful together!
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4 m-4">
            <Link
              href={"/portfolio"}
              className="px-4 py-2 rounded-lg ring-2 ring-black bg-black text-white"
            >
              view my work
            </Link>
            <Link
              href={"/contact"}
              className="px-4 py-2 rounded-lg ring-2 ring-black"
            >
              contact me
            </Link>
            <Link
              href={"/about"}
              className="px-4 py-2 rounded-lg ring-2 ring-black bg-black text-white"
            >
              About Me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
