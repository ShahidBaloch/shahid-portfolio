"use client";

import { useEffect, useState } from "react";
import { Briefcase, FolderGit2, Home, Mail, User } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Portfolio", href: "#portfolio", icon: FolderGit2 },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "About", href: "#about", icon: User },
  { label: "Hire Me", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navItems.map((x) => x.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActiveHash(`#${visible.target.id}`);
      },
      { threshold: 0.35 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* subtle top glow line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div
        className={[
          "border-b border-white/10 backdrop-blur-2xl transition",
          scrolled ? "bg-[#070A12]/55" : "bg-[#070A12]/80", // ✅ top is darker, scroll is lighter
        ].join(" ")}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          {/* Brand */}
          <a href="#home" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500/25 to-purple-500/25 border border-white/10 flex items-center justify-center">
              <span className="text-sm font-bold text-white">MS</span>
            </div>
            <div className="leading-tight">
              <div className="text-white/90 font-semibold">Muhammad Shahid</div>
              <div className="text-[11px] text-gray-400">.NET Full Stack Developer</div>
            </div>
          </a>

          {/* Desktop */}
<nav className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-black/25 px-1 py-1">            {navItems.map((item) => {
              const isActive = activeHash === item.href;
              const Icon = item.icon;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={[
                    "group flex items-center gap-2 rounded-full px-4 py-2 text-sm transition",
                    isActive
                      ? "bg-gradient-to-r from-blue-500/25 to-purple-500/25 text-white border border-blue-500/20 shadow-sm shadow-blue-500/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5",
                  ].join(" ")}
                >
                  <Icon
                    className={[
                      "h-4 w-4 transition",
                      isActive ? "text-blue-200" : "text-gray-400 group-hover:text-white",
                    ].join(" ")}
                  />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-gray-200 hover:bg-white/10 transition"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-white/10 bg-black/40">
            <nav className="mx-auto max-w-6xl px-4 py-3 grid gap-2">
              {navItems.map((item) => {
                const isActive = activeHash === item.href;
                const Icon = item.icon;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={[
                      "flex items-center gap-3 rounded-xl border px-4 py-3 text-sm transition",
                      isActive
                        ? "border-blue-500/30 bg-blue-500/10 text-white"
                        : "border-white/10 bg-white/5 text-gray-200 hover:bg-white/10",
                    ].join(" ")}
                  >
                    <Icon className={isActive ? "h-4 w-4 text-blue-300" : "h-4 w-4 text-gray-300"} />
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}