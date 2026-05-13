"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "problem", label: "Situation" },
    { id: "task", label: "Task" },
    { id: "investigation", label: "Action" },
    { id: "results", label: "Result" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
    >
      <nav className="flex flex-col gap-4 items-start">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`group flex items-center px-4 py-2.5 rounded-full text-xl transition-all duration-300 text-left ${
              activeSection === section.id
                ? "bg-[#2563EB]/10 text-[#2563EB] dark:bg-white/10 dark:text-white font-medium"
                : "text-[#1C1E21] dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5"
            }`}
          >
            <span className="flex-shrink-0">
              {section.label.charAt(0)}
            </span>
            <span className="max-w-0 opacity-0 overflow-hidden group-hover:max-w-[200px] group-hover:opacity-100 whitespace-nowrap transition-all duration-300 ease-in-out">
              {section.label.substring(1)}
            </span>
          </a>
        ))}
      </nav>
    </motion.div>
  );
}
