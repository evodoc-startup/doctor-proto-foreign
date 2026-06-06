"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Share2, Link, Camera, Play } from "lucide-react";

const LINKS = {
  Quick: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Awards", href: "#achievements" },
    { label: "Testimonials", href: "#testimonials" },
  ],
  Support: [
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const SOCIALS = [
  { icon: Share2, href: "#", label: "Twitter / X" },
  { icon: Link, href: "#", label: "LinkedIn" },
  { icon: Camera, href: "#", label: "Instagram" },
  { icon: Play, href: "#", label: "YouTube" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    if (href === "#") return;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-black/[0.05] dark:border-white/[0.06] bg-[#fafafa] dark:bg-[#0a0a0a] px-4 sm:px-6 pt-12 sm:pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-8 sm:mb-14">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <p className="text-[16px] font-semibold text-[#111] dark:text-white tracking-tight">
              Dr. Montgomery
            </p>
            <p className="mt-3 text-[13px] text-[#777] dark:text-white/40 leading-relaxed max-w-[200px]">
              Expert cardiac care with a personal touch. Committed to your heart health.
            </p>
            <div className="flex gap-2 mt-5">
              {SOCIALS.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-white dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center text-[#777] dark:text-white/40 hover:text-[#F3DE72] hover:border-[#F3DE72]/30 transition-colors"
                >
                  <s.icon size={14} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(LINKS).map(([group, links]) => (
            <div key={group}>
              <p className="text-[12px] font-semibold uppercase tracking-widest text-[#999] dark:text-white/30 mb-4">
                {group}
              </p>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-[14px] text-[#555] dark:text-white/50 hover:text-[#111] dark:hover:text-white transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA */}
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#999] dark:text-white/30 mb-4">
              Ready to start?
            </p>
            <p className="text-[13px] text-[#777] dark:text-white/40 mb-4 leading-relaxed">
              Your heart health deserves expert care. Book your first appointment today.
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("#appointment")}
              className="flex items-center gap-1.5 bg-[#F3DE72] text-[#111] text-[13px] font-semibold px-4 py-2.5 rounded-full group shadow-[0_4px_20px_rgba(243,222,114,0.25)]"
            >
              Book Now
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-8 border-t border-black/[0.05] dark:border-white/[0.05]">
          <p className="text-[13px] text-[#aaa] dark:text-white/25">
            © {new Date().getFullYear()} Dr. Harper Montgomery. All rights reserved.
          </p>
          <p className="text-[13px] text-[#aaa] dark:text-white/25">
            Crafted with care for better health.
          </p>
        </div>
      </div>
    </footer>
  );
}
