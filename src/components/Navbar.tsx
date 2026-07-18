"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "HOME",       href: "#",           section: "" },
  { label: "ABOUT",      href: "#about",      section: "about" },
  { label: "EXPERIENCE", href: "#experience", section: "experience" },
  { label: "PROJECTS",   href: "#projects",   section: "projects" },
  { label: "SKILLS",     href: "#skills",     section: "skills" },
  { label: "CONTACT",    href: "#contact",    section: "contact" },
];

const navStyle: React.CSSProperties = {
  backgroundImage:
    'url("https://www.transparenttextures.com/patterns/wavecut.png"), linear-gradient(to right, bisque, #ffd8b1)',
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.section).filter(Boolean);

    const handleScroll = () => {
      const mid = window.scrollY + window.innerHeight / 2;
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= mid) current = id;
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20" style={navStyle}>
      <nav className="mx-auto h-full flex items-center justify-evenly px-6">
        <ul className="hidden md:flex items-center justify-evenly w-full">
          {navLinks.map(({ label, href, section }) => {
            const active = activeSection === section;
            return (
              <li key={href} className="list-none">
                <a
                  href={href}
                  className={`underline-slide font-sans font-medium transition-colors duration-300 inline-flex items-center ${
                    active ? "text-[brown]" : "text-black"
                  }`}
                  style={{ fontSize: "clamp(1rem, 1vw, 1.25rem)" }}
                >
                  <span className={`transition-all duration-300 ${active ? "opacity-100 translate-x-0" : "opacity-0 translate-x-1"}`}>[</span>
                  <span>{label}</span>
                  <span className={`transition-all duration-300 ${active ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1"}`}>]</span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile header */}
        <div className="md:hidden flex items-center justify-between w-full">
          <a href="#" className="font-display italic text-2xl font-medium text-black hover:text-[brown] transition-colors duration-200">SL</a>
          <button
            onClick={() => setOpen(!open)}
            className="relative text-2xl text-black w-8 h-8 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <span className={`absolute transition-all duration-200 ${open ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`}>☰</span>
            <span className={`absolute transition-all duration-200 ${open ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`}>✕</span>
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-200 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        style={navStyle}
      >
        <div className="border-t border-black/20 px-6 py-4 space-y-3">
          {navLinks.map(({ label, href, section }) => {
            const active = activeSection === section;
            return (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`flex items-center font-medium transition-colors py-1 ${
                  active ? "text-[brown]" : "text-black hover:text-[brown]"
                }`}
              >
                <span className={`transition-all duration-300 ${active ? "opacity-100 translate-x-0" : "opacity-0 translate-x-1"}`}>[</span>
                <span>{label}</span>
                <span className={`transition-all duration-300 ${active ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1"}`}>]</span>
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
}
