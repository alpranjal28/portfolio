"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  BriefcaseBusiness,
  Clipboard,
  Contact,
  ExternalLink,
  House,
} from "lucide-react";
import {
  AppWrite,
  Aws,
  Bootstrap,
  Bun,
  Cloudinary,
  Css3,
  Docker,
  Express,
  Git,
  Github,
  Html5,
  JavaScript,
  Linux,
  MaterialUi,
  Mongo1,
  MotionDev,
  MySql,
  NextJs,
  NodeJs1,
  Postgres,
  Postman,
  PrismaORM,
  RadixUi,
  React,
  Sass,
  ShadCn,
  Tailwind,
  Turborepo,
  Twilio,
  TypeScript,
  VsCode,
  WebSocket,
} from "./icons";

export const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorover, setCursorOver] = useState("");
  const [showCursor, setShowCursor] = useState(false);
  useEffect(() => {
    const hasMouse = window.matchMedia("(pointer:fine)").matches;
    setShowCursor(hasMouse);
    if (!hasMouse) return;

    const mousemove = (e: MouseEvent) => {
      setPosition({ x: e.clientX + 10, y: e.clientY + 10 });

      const target = e.target as HTMLElement;
      const link = target.closest("button, a");

      if (link) {
        const href = link.getAttribute("href");
        const about = link.getAttribute("about");
        const key = link.getAttribute("title");
        if (about === "copy") {
          setCursorOver("copy");
        } else if (about && about.toLowerCase()) {
          setCursorOver(about.toLowerCase());
        } else if (href === "/") {
          setCursorOver("/");
        } else if (href === "/about") {
          setCursorOver("about");
        } else if (href === "/portfolio") {
          setCursorOver("portfolio");
        } else if (href === "/contact") {
          setCursorOver("contact");
        } else if (href && href.startsWith("http")) {
          setCursorOver("external");
        } else {
          setCursorOver("");
        }
      } else {
        setCursorOver("");
      }
    };
    window.addEventListener("mousemove", mousemove);

    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);

  if (!showCursor) return null;

  return (
    <motion.div
      className="fixed h-12 w-12 flex items-center justify-center rounded-full border-2 border-zinc-950/30 z-40 overflow-hidden backdrop-blur-sm bg-white/20"
      animate={{
        x: position.x,
        y: position.y,
        scale: cursorover ? 1.3 : 1,
      }}
    >
      {cursorover === "/" && <House />}
      {cursorover === "about" && <BookOpen />}
      {cursorover === "contact" && <Contact />}
      {cursorover === "portfolio" && <BriefcaseBusiness />}
      {cursorover === "copy" && <Clipboard />}
      {cursorover === "external" && <ExternalLink />}
      {cursorover === "javascript" && <JavaScript />}
      {cursorover === "typescript" && <TypeScript />}
      {cursorover === "html" && <Html5 />}
      {cursorover === "css" && <Css3 />}
      {cursorover === "node.js" && <NodeJs1 />}
      {cursorover === "tailwind" && <Tailwind />}
      {cursorover === "nextjs" && <NextJs />}
      {cursorover === "linux" && <Linux />}
      {cursorover === "github" && <Github color="white" />}
      {cursorover === "mongodb" && <Mongo1 />}
      {cursorover === "postgresql" && <Postgres />}
      {cursorover === "bootstrap" && <Bootstrap />}
      {cursorover === "react" && <React />}
      {cursorover === "docker" && <Docker />}
      {cursorover === "aws s3" && <Aws />}
      {cursorover === "aws ec2" && <Aws />}
      {cursorover === "aws rds" && <Aws />}
      {cursorover === "postman" && <Postman />}
      {cursorover === "sass" && <Sass />}
      {cursorover === "express" && <Express />}
      {cursorover === "turborepo" && <Turborepo />}
      {cursorover === "git" && <Git />}
      {cursorover === "mysql" && <MySql />}
      {cursorover === "bun" && <Bun />}
      {cursorover === "appwrite" && <AppWrite />}
      {cursorover === "prisma orm" && <PrismaORM />}
      {cursorover === "shadcn" && <ShadCn />}
      {cursorover === "vs code" && <VsCode />}
      {cursorover === "twilio" && <Twilio />}
      {cursorover === "web socket" && <WebSocket />}
      {cursorover === "material-ui" && <MaterialUi />}
      {cursorover === "cloudinary" && <Cloudinary />}
      {cursorover === "radix-ui" && <RadixUi />}
      {cursorover === "motion.dev" && <MotionDev />}
    </motion.div>
  );
};
