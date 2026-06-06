"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, ArrowUpRight } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Awards", href: "#achievements" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-3 sm:px-4"
      >
        <div
          className={`flex items-center justify-between gap-6 px-5 py-3 rounded-full transition-all duration-500 w-full max-w-5xl ${
            scrolled
              ? "bg-white/80 dark:bg-black/70 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-black/[0.06] dark:border-white/[0.08]"
              : "bg-white/60 dark:bg-black/40 backdrop-blur-xl border border-white/30 dark:border-white/[0.06]"
          }`}
        >
          {/* Logo */}
          <a
            href="#"
            className="text-[15px] font-semibold tracking-tight text-[#111] dark:text-white whitespace-nowrap"
          >
            Dr. Montgomery
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="px-3.5 py-1.5 text-[13px] font-medium text-[#555] dark:text-white/60 hover:text-[#111] dark:hover:text-white rounded-full hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/[0.06] dark:hover:bg-white/[0.08] transition-colors"
            >
              {theme === "dark" ? (
                <Sun size={15} className="text-[#F3DE72]" />
              ) : (
                <Moon size={15} className="text-[#555]" />
              )}
            </button>

            {/* CTA */}
            <motion.button
              onClick={() => scrollTo("#appointment")}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="hidden md:flex items-center gap-1.5 bg-[#F3DE72] text-[#111] text-[13px] font-semibold px-4 py-2 rounded-full yellow-glow transition-all duration-300 group"
            >
              Book Appointment
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
              />
            </motion.button>

            {/* Mobile menu button */}
            <button
              className="md:hidden w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/[0.06] dark:hover:bg-white/[0.08]"
              onClick={() => setMenuOpen((p) => !p)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-20 z-40 rounded-3xl bg-white/95 dark:bg-[#111]/95 backdrop-blur-2xl border border-black/[0.06] dark:border-white/[0.08] shadow-2xl p-6 md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.href)}
                  className="text-left px-4 py-3 text-[15px] font-medium rounded-2xl hover:bg-[#F3DE72]/20 transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <button
                onClick={() => scrollTo("#appointment")}
                className="mt-3 flex items-center justify-center gap-2 bg-[#F3DE72] text-[#111] font-semibold py-3 rounded-2xl"
              >
                Book Appointment <ArrowUpRight size={15} />
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
