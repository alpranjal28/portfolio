"use client";
import { useEffect } from "react";
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
  Cypress,
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
  Zustand,
} from "./icons";
import { useCursorStore } from "@/store/cursorStore";

export const Cursor = () => {
  // Zustand store for cursor state
  // This will manage the cursor position, visibility, and what it's hovering over
  // It will also handle the logic for showing different icons based on the hovered element
  // and updating the cursor position based on mouse movement
  const {
    position,
    setPosition,
    showCursor,
    setShowCursor,
    cursorOver,
    setCursorOver,
  } = useCursorStore();

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
        scale: cursorOver ? 1.3 : 1,
      }}
    >
      {cursorOver === "/" && <House />}
      {cursorOver === "about" && <BookOpen />}
      {cursorOver === "contact" && <Contact />}
      {cursorOver === "portfolio" && <BriefcaseBusiness />}
      {cursorOver === "copy" && <Clipboard />}
      {cursorOver === "external" && <ExternalLink />}
      {cursorOver === "javascript" && <JavaScript />}
      {cursorOver === "typescript" && <TypeScript />}
      {cursorOver === "html" && <Html5 />}
      {cursorOver === "css" && <Css3 />}
      {cursorOver === "node.js" && <NodeJs1 />}
      {cursorOver === "tailwind" && <Tailwind />}
      {cursorOver === "nextjs" && <NextJs />}
      {cursorOver === "linux" && <Linux />}
      {cursorOver === "github" && <Github color="white" />}
      {cursorOver === "mongodb" && <Mongo1 />}
      {cursorOver === "postgresql" && <Postgres />}
      {cursorOver === "bootstrap" && <Bootstrap />}
      {cursorOver === "react" && <React />}
      {cursorOver === "docker" && <Docker />}
      {cursorOver === "aws s3" && <Aws />}
      {cursorOver === "aws ec2" && <Aws />}
      {cursorOver === "aws rds" && <Aws />}
      {cursorOver === "postman" && <Postman />}
      {cursorOver === "sass" && <Sass />}
      {cursorOver === "express" && <Express />}
      {cursorOver === "turborepo" && <Turborepo />}
      {cursorOver === "git" && <Git />}
      {cursorOver === "mysql" && <MySql />}
      {cursorOver === "bun" && <Bun />}
      {cursorOver === "appwrite" && <AppWrite />}
      {cursorOver === "prisma orm" && <PrismaORM />}
      {cursorOver === "shadcn" && <ShadCn />}
      {cursorOver === "vs code" && <VsCode />}
      {cursorOver === "twilio" && <Twilio />}
      {cursorOver === "web socket" && <WebSocket />}
      {cursorOver === "material-ui" && <MaterialUi />}
      {cursorOver === "cloudinary" && <Cloudinary />}
      {cursorOver === "radix-ui" && <RadixUi />}
      {cursorOver === "motion.dev" && <MotionDev />}
      {cursorOver === "zustand" && <Zustand />}
      {cursorOver === "cypress" && <Cypress />} 
    </motion.div>
  );
};
