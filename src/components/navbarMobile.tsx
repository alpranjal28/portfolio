"use client";
import { useNavStore } from "@/store/navStore";
import { motion } from "framer-motion";
import { links } from "./navbar";
import Link from "next/link";
import { Github, Linkedin } from "./icons";
import { CopyEmail } from "./copyEmail";

export const NavbarMobile = () => {
  const { isOpen, setIsOpen, toggle } = useNavStore();

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="md:hidden z-50">
      {/* HAMBURGER MENU BUTTON */}
      <button
        className="w-10 h-8 flex flex-col justify-between z-50 relative mr-4"
        onClick={toggle}
      >
        <motion.div
          variants={topVariants}
          animate={isOpen ? "opened" : "closed"}
          className="w-10 h-1 bg-black rounded origin-left"
        ></motion.div>
        <motion.div
          variants={centerVariants}
          animate={isOpen ? "opened" : "closed"}
          className="w-10 h-1 bg-black rounded"
        ></motion.div>
        <motion.div
          variants={bottomVariants}
          animate={isOpen ? "opened" : "closed"}
          className="w-10 h-1 bg-black rounded origin-left"
        ></motion.div>
      </button>

      {/* MENU LIST */}
      {isOpen && (
        <motion.div
          variants={listVariants}
          initial="closed"
          animate="opened"
          className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
        >
          {links.map((link) => (
            <motion.div
              variants={listItemVariants}
              className=""
              key={link.title}
              onClick={() => setTimeout(() => setIsOpen(false), 450)} // Close menu after clicking a link
            >
              <Link href={link.url}>{link.title}</Link>
            </motion.div>
          ))}
          <motion.div
            variants={listItemVariants}
            className=" flex flex-row space-x-4 items-center"
          >
            <Link href={"https://github.com/alpranjal28"} target="_blank">
              <Github />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/pranjal-altherius-lakra/"}
              target="_blank"
            >
              <Linkedin />
            </Link>
            <CopyEmail />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};
