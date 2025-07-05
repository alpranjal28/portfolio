"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Airbnb clone",
    desc: "Engineered a feature-rich Airbnb clone, leveraging HTML, CSS, JavaScript, MongoDB, Node.js, and Express with MVC architecture, showcasing adeptness in full-stack development, database integration, and system design.",
    img: "https://res.cloudinary.com/dn0nsms3w/image/upload/v1714991378/projects/airlust_new_p2idmx.png",
    link: "https://airlust-project.onrender.com/listings",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Food Ordering App",
    desc: "Built a dynamic food ordering application with Next.js, MongoDB, Tailwind CSS, Amazon S3, and Google Authentication. Features include user authentication, menu browsing, cart management, and order processing. Demonstrated proficiency in full-stack development, RESTful API integration, and deployment.",
    img: "https://res.cloudinary.com/dn0nsms3w/image/upload/v1714972797/projects/food-app_fydlxj.png",
    link: "https://food-app-sable.vercel.app/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Car Showcase App",
    desc: "Developed a comprehensive car deals website using Next.js, Tailwind CSS, and various APIs. The site features real-time data updates and a responsive design, providing an optimal user experience for browsing and managing car listings.",
    img: "https://res.cloudinary.com/dn0nsms3w/image/upload/v1719927625/projects/car-deals.png",
    link: "https://car-deals-ruddy.vercel.app/",
  },
  {
    id: 4,
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

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.5 }}
    >
      <div ref={ref} className="h-[600vh] relative">
        <div className="relative w-screen h-[calc(90vh-6rem)] flex justify-center items-center text-8xl text-center">
          My Works
          <ChevronDown
            size={64}
            color="gray"
            className="animate-bounce absolute -bottom-10 z-10"
          />
        </div>

        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            {/* start buffer */}
            <div className="h-screen w-[80vw] flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300"></div>
            {/* projects */}
            {items.map((item) => (
              <div
                className={` p-4 h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className=" text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>

                  <div className="lg:grid lg:grid-cols-2">
                    <div className="">
                      <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                        <Image src={item.img} alt={item.title} fill />
                      </div>
                    </div>
                    <div className="py-8 lg:px-8">
                      <p className="w-80  md:w-96 lg:w-[500px] lg:text-lg  xl:w-[600px]">
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
            ))}
            {/* end buffer */}
            <div className="relative h-screen w-[80vw] flex items-center justify-center bg-gradient-to-r from-red-300 to-blue-300">
              <button className="p-2 lg:ml-0 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-500 font-semibold m-4 rounded">
                Github{" "}
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative w-screen h-[90vh] flex flex-col gap-16 items-center justify-center text-center">
        <ChevronDown size={64} color="gray" className="absolute -top-20 animate-bounce" />

        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          {/* SVG */}
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
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
    </motion.div>
  );
};

export default PortfolioPage;
