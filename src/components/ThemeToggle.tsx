"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-6 right-6 z-50 p-2 rounded-full bg-[white] dark:bg-[#1C1E21]/5 dark:bg-slate-200 dark:bg-white/10 backdrop-blur-md border border-black/10 dark:border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-700 dark:text-slate-300 hover:bg-[white] dark:bg-[#1C1E21]/10 dark:hover:bg-white/20 transition-all shadow-lg"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}
