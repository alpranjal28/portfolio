"use client";
import { Close } from "@/components/icons";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

// Define the type for a portfolio item
interface PortfolioItem {
  color: string;
  title: string;
  desc: string;
  img: string;
  link: string;
}

const items: PortfolioItem[] = [
  {
    color: "from-blue-300 to-violet-300",
    title: "MS Draw",
    desc: "This project is a collaborative MS Paint clone built with a Turbo monorepo. It features a Next.js frontend, Express and WebSocket backends, and a PostgreSQL database managed via Prisma ORM. Real-time drawing sync is achieved using WebSockets, with scalable, modular code structure.",
    img: "https://res.cloudinary.com/dn0nsms3w/image/upload/v1751719298/projects/Screenshot_2025-07-05_181119_s60woh.png",
    link: "https://portfolio-refresh-five.vercel.app/",
  },
  {
    color: "from-violet-300 to-purple-300",
    title: "Portfolio 2",
    desc: "This portfolio uses Next.js, React, and TypeScript for a performant, SEO-friendly SPA. Tailwind CSS powers the responsive UI. Features include animated components (Framer Motion), a 3D globe (Three.js), parallax effects, and Sentry integration for error monitoring.",
    img: "https://res.cloudinary.com/dn0nsms3w/image/upload/v1751717662/projects/Screenshot_2025-07-05_174402_vvxndk.png",
    link: "https://portfolio-refresh-five.vercel.app/",
  },
  {
    color: "from-purple-300 to-red-300",
    title: "Multistep Form",
    desc: "A modern React/Next.js application featuring a centered, card-style form UI built with Tailwind CSS. The project uses modular components for maintainability and Lucide icons for visual clarity. The main page displays a shadowed, rounded form container with a close icon and integrates custom form logic, providing a clean, interactive user experience.",
    img: "https://res.cloudinary.com/dn0nsms3w/image/upload/v1751716050/projects/Screenshot_2025-07-05_171620_igtasa.png",
    link: "https://nablasol-xi.vercel.app/",
  },
  {
    color: "from-red-300 to-blue-300",
    title: "Airbnb clone",
    desc: "Engineered a feature-rich Airbnb clone, leveraging HTML, CSS, JavaScript, MongoDB, Node.js, and Express with MVC architecture, showcasing adeptness in full-stack development, database integration, and system design.",
    img: "https://res.cloudinary.com/dn0nsms3w/image/upload/v1714991378/projects/airlust_new_p2idmx.png",
    link: "https://airlust-project.onrender.com/listings",
  },
  {
    color: "from-blue-300 to-violet-300",
    title: "Food Ordering App",
    desc: "Built a dynamic food ordering application with Next.js, MongoDB, Tailwind CSS, Amazon S3, and Google Authentication. Features include user authentication, menu browsing, cart management, and order processing. Demonstrated proficiency in full-stack development, RESTful API integration, and deployment.",
    img: "https://res.cloudinary.com/dn0nsms3w/image/upload/v1714972797/projects/food-app_fydlxj.png",
    link: "https://food-app-sable.vercel.app/",
  },
  {
    color: "from-violet-300 to-purple-300",
    title: "Car Showcase App",
    desc: "Developed a comprehensive car deals website using Next.js, Tailwind CSS, and various APIs. The site features real-time data updates and a responsive design, providing an optimal user experience for browsing and managing car listings.",
    img: "https://res.cloudinary.com/dn0nsms3w/image/upload/v1719927625/projects/car-deals.png",
    link: "https://car-deals-ruddy.vercel.app/",
  },
  {
    color: "from-purple-300 to-red-300",
    title: "Spotify CSS Clone",
    desc: "Developed my first project—a Spotify-inspired clone—using raw HTML and CSS. Designed and implemented user interface components from scratch, demonstrating foundational skills in front-end web development and design.",
    img: "https://res.cloudinary.com/dn0nsms3w/image/upload/v1714991241/projects/spotifyclone_ujkoky.png",
    link: "https://alpranjal28.github.io/spotify-clone/",
  },
];

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
        className="relative h-full overflow-y-scroll lg:flex flex-col scrollbar-hide"
        ref={ref}
      >
        {/* <div ref={ref} className="h-[600vh] relative"> */}
        <div className="min-h-[60vh] flex justify-center items-center">
          <h1 className="text-8xl text-center">My Works</h1>
        </div>

        {/* Modal/Expanded View: Clicking a card expands it into a modal with more details */}
        <div className="relative h-auto flex flex-wrap justify-center gap-8 p-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className={`relative w-80 h-96 bg-gradient-to-r ${item.color} rounded-xl shadow-lg flex flex-col items-center justify-center cursor-pointer`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelected(item)}
            >
              <h2 className="text-2xl font-bold text-white mb-2 text-center">
                {item.title}
              </h2>
              <div className="relative w-64 h-40 mb-4">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <p className="text-white text-sm text-center px-2 line-clamp-3">
                {item.desc}
              </p>
              <button className="mt-4 px-4 py-2 bg-white text-gray-700 rounded font-semibold">
                View
              </button>
            </motion.div>
          ))}

          {/* Modal */}
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                className="bg-white rounded-xl p-8 max-w-lg w-full relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-2 right-2 text-gray-500"
                  onClick={() => setSelected(null)}
                >
                  <div className="hover:bg-gray-300 p-2 rounded-md">
                    <Close color="white" />
                  </div>
                </button>
                <h2 className="text-3xl font-bold mb-4">{selected.title}</h2>
                <div className="relative w-full h-56 mb-4">
                  <Image
                    src={selected.img}
                    alt={selected.title}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <p className="mb-4 text-gray-700">{selected.desc}</p>
                <Link href={selected.link} target="_blank">
                  <button className="px-6 py-2 bg-black text-white rounded font-semibold">
                    Visit Project
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* footer */}
        <div className="relative w-full h-[100vh] mt-16 flex flex-col items-center justify-center text-center">
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
