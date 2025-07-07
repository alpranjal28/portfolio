"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Clipboard, ExternalLink, House } from "lucide-react";

export const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorover, setCursorOver] = useState("");
  useEffect(() => {
    const mousemove = (e: MouseEvent) => {
      setPosition({ x: e.clientX + 10, y: e.clientY + 10 });

      const target = e.target as HTMLElement;
      const link = target.closest("button, a");

      if (link) {
        const href = link.getAttribute("href");
        const about = link.getAttribute("about");
        if (about === "copy") {
          setCursorOver("copy");
        } else if (href === "/") {
          setCursorOver("/");
        } else if (href === "/") {
          setCursorOver("/");
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
  return (
    <motion.div
      className="fixed h-10 w-10 flex items-center justify-center rounded-full border-2 border-zinc-950 z-40"
      animate={position}
    >
      {cursorover === "/" && <House size={16} />}
      {cursorover === "copy" && <Clipboard size={16} />}
      {cursorover === "external" && <ExternalLink size={16} />}
    </motion.div>
  );
};
