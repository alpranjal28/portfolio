"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { House } from "lucide-react";

export const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorover,setCursorOver]= useState("") 
  useEffect(() => {
    const mousemove = (e: MouseEvent) => {
      setPosition({ x: e.clientX + 10, y: e.clientY + 10 });
      
      const target = e.target as HTMLElement
      const link= target.closest("button, a")

      if(link){
        const type = 
        link.getAttribute("href")||
        link.getAttribute("type")||
        "click"
        console.log(type);
        setCursorOver(type)
      }else{
        setCursorOver("")
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
    >{
      cursorover && cursorover==="/"? <House/> : ""
    }</motion.div>
  );
};
