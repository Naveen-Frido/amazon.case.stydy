"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="absolute top-0 left-0 right-0 z-40 px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto w-full">
      <div className="font-semibold text-[#1C1E21] dark:text-white tracking-tight text-lg">
         <span className="text-[#2563EB]">AI Generalist</span>
      </div>
      <div className="flex bg-white dark:bg-[#1C1E21] p-1 rounded-full border border-slate-200 dark:border-white/10 shadow-sm">
        <Link
          href="/"
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
            pathname === "/"
              ? "bg-[#2563EB]/10 text-[#2563EB]"
              : "text-slate-600 dark:text-slate-400 hover:text-[#1C1E21] dark:hover:text-white"
          }`}
        >
          Case Study 1: Compliance
        </Link>
        <Link
          href="/case-study-2"
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
            pathname === "/case-study-2"
              ? "bg-[#2563EB]/10 text-[#2563EB]"
              : "text-slate-600 dark:text-slate-400 hover:text-[#1C1E21] dark:hover:text-white"
          }`}
        >
          Case Study 2: Staging
        </Link>
        <Link
          href="/case-study-3"
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
            pathname === "/case-study-3"
              ? "bg-[#2563EB]/10 text-[#2563EB]"
              : "text-slate-600 dark:text-slate-400 hover:text-[#1C1E21] dark:hover:text-white"
          }`}
        >
          Case Study 3: Intelligence
        </Link>
      </div>
    </header>
  );
}
