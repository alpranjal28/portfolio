"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

// Define the type for a portfolio item
export interface PortfolioItem {
  color: string;
  title: string;
  desc: string;
  img: string;
  link: string;
}
const projects: PortfolioItem[] = [
  {
    color: "from-blue-300 to-violet-300",
    title: "Draw.app",
    desc: "This project is a collaborative MS Paint clone built with a Turbo monorepo. It features a Next.js frontend, Express and WebSocket backends, and a PostgreSQL database managed via Prisma ORM. Real-time drawing sync is achieved using WebSockets, with scalable, modular code structure.",
    img: "https://res.cloudinary.com/dn0nsms3w/image/upload/v1751719298/projects/Screenshot_2025-07-05_181119_s60woh.png",
    link: "https://draw.altherius.in/",
  },
  {
    color: "from-violet-300 to-purple-300",
    title: "Portfolio 2",
    desc: "This portfolio uses Next.js, React, and TypeScript for a performant, SEO-friendly SPA. Tailwind CSS powers the responsive UI. Features include animated components (Framer Motion), a 3D globe (Three.js), parallax effects, and Sentry integration for error monitoring.",
    img: "https://res.cloudinary.com/dn0nsms3w/image/upload/v1751717662/projects/Screenshot_2025-07-05_174402_vvxndk.png",
    link: "https://refresh.altherius.in/",
  },
  {
    color: "from-purple-300 to-red-300",
    title: "Multistep Form",
    desc: "A modern React/Next.js application featuring a centered, card-style form UI built with Tailwind CSS. The project uses modular components for maintainability and Lucide icons for visual clarity. The main page displays a shadowed, rounded form container with a close icon and integrates custom form logic, providing a clean, interactive user experience.",
    img: "https://res.cloudinary.com/dn0nsms3w/image/upload/v1751716050/projects/Screenshot_2025-07-05_171620_igtasa.png",
    link: "https://nablasol.altherius.in/",
  },
  {
    color: "from-red-300 to-blue-300",
    title: "Airbnb clone",
    desc: "Engineered a feature-rich Airbnb clone, leveraging HTML, CSS, JavaScript, MongoDB, Node.js, and Express with MVC architecture, showcasing adeptness in full-stack development, database integration, and system design.",
    img: "https://res.cloudinary.com/dn0nsms3w/image/upload/v1714991378/projects/airlust_new_p2idmx.png",
    link: "https://airlust.altherius.in",
  },
  {
    color: "from-blue-300 to-violet-300",
    title: "Food App",
    desc: "Built a dynamic food ordering application with Next.js, MongoDB, Tailwind CSS, Amazon S3, and Google Authentication. Features include user authentication, menu browsing, cart management, and order processing. Demonstrated proficiency in full-stack development, RESTful API integration, and deployment.",
    img: "https://res.cloudinary.com/dn0nsms3w/image/upload/v1714972797/projects/food-app_fydlxj.png",
    link: "https://food-app.altherius.in/",
  },
  {
    color: "from-violet-300 to-purple-300",
    title: "Car Showcase",
    desc: "Developed a comprehensive car deals website using Next.js, Tailwind CSS, and various APIs. The site features real-time data updates and a responsive design, providing an optimal user experience for browsing and managing car listings.",
    img: "https://res.cloudinary.com/dn0nsms3w/image/upload/v1719927625/projects/car-deals.png",
    link: "https://car-deals-ruddy.vercel.app/",
  },
  {
    color: "from-purple-300 to-red-300",
    title: "Spotify Clone",
    desc: "Developed my first project—a Spotify-inspired clone—using raw HTML and CSS. Designed and implemented user interface components from scratch, demonstrating foundational skills in front-end web development and design.",
    img: "https://res.cloudinary.com/dn0nsms3w/image/upload/v1714991241/projects/spotifyclone_ujkoky.png",
    link: "https://spot.altherius.in",
  },
];

const PortfolioPage = () => {
  const ref = useRef(null);

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
          <h1 className="text-8xl text-center tracking-wider">My Works</h1>
        </div>

        {projects.map((item, index) => (
          <div
            className="snap-start h-[calc(100vh-6rem)] m-2 md:m-8"
            key={index}
          >
            <div
              className={`h-[calc(100vh-8rem)] flex items-center justify-center bg-gradient-to-r rounded-xl ${item.color}`}
            >
              <div className="flex flex-col gap-6 text-white lg:px-20">
                <h1 className="text-5xl font-bold lg:text-5xl xl:text-7xl tracking-wide">
                  {item.title}
                </h1>

                <div className="lg:grid lg:grid-cols-2">
                  <div className="">
                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                      <Image
                        src={item.img}
                        alt={item.title}
                        loading="eager"
                        placeholder="blur"
                        blurDataURL={item.img}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="py-8 lg:px-8">
                    <p className="text-wrap w-80 md:w-96 lg:w-[500px] lg:text-xl xl:w-[600px] max-w-[600px]">
                      {item.desc}
                    </p>
                    <div className="flex justify-end lg:justify-start ">
                      <Link
                        href={item.link}
                        target="_blank"
                        className="p-2 lg:ml-0 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-700 font-semibold m-4 rounded"
                      >
                        Visit Project
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
