"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Star, Award, Shield, Heart, ChevronLeft, ChevronRight } from "lucide-react";

const AWARDS = [
  {
    icon: Trophy,
    title: "Top Doctor Award",
    org: "National Medical Board",
    year: "2023",
  },
  {
    icon: Star,
    title: "Excellence in Patient Care",
    org: "Healthcare Excellence Org",
    year: "2022",
  },
  {
    icon: Award,
    title: "Healthcare Leadership",
    org: "AHA Leadership Council",
    year: "2021",
  },
  {
    icon: Shield,
    title: "Compassionate Care Award",
    org: "Patient Advocacy Foundation",
    year: "2020",
  },
  {
    icon: Heart,
    title: "Best Cardiologist",
    org: "City Health Magazine",
    year: "2019",
  },
];

const CARD_WIDTH = 216; // card width (200) + gap (16)

export default function AchievementsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollTo = useCallback((index: number) => {
    if (!scrollRef.current) return;
    const clamped = Math.max(0, Math.min(index, AWARDS.length - 1));
    scrollRef.current.scrollTo({ left: clamped * CARD_WIDTH, behavior: "smooth" });
    setActiveIndex(clamped);
  }, []);

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const idx = Math.round(scrollRef.current.scrollLeft / CARD_WIDTH);
    setActiveIndex(Math.max(0, Math.min(idx, AWARDS.length - 1)));
  }, []);

  return (
    <section id="achievements" ref={ref} className="py-16 sm:py-24 px-4 sm:px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[13px] font-medium text-[#F3DE72] uppercase tracking-widest">
              Achievements
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-[#111] dark:text-white">
              Recognized for
              <br />
              Excellence
            </h2>
            <p className="mt-4 text-[15px] text-[#666] dark:text-white/50 leading-relaxed max-w-xs">
              Honored with awards for dedication, innovation, and outstanding patient care across 15+ years.
            </p>

            {/* Dots + Arrow controls */}
            <div className="flex items-center gap-4 mt-8">
              {/* Dots */}
              <div className="flex gap-2">
                {AWARDS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollTo(i)}
                    aria-label={`Go to award ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === activeIndex ? "w-8 bg-[#F3DE72]" : "w-1.5 bg-black/10 dark:bg-white/15"
                    }`}
                  />
                ))}
              </div>

              {/* Arrow buttons */}
              <div className="flex gap-1.5 ml-auto lg:ml-0">
                <button
                  onClick={() => scrollTo(activeIndex - 1)}
                  disabled={activeIndex === 0}
                  aria-label="Previous award"
                  className="w-8 h-8 rounded-full border border-black/[0.08] dark:border-white/[0.1] flex items-center justify-center hover:bg-[#F3DE72] hover:border-[#F3DE72] hover:text-[#111] transition-all duration-200 text-[#666] dark:text-white/60 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:border-black/[0.08] disabled:hover:text-[#666]"
                >
                  <ChevronLeft size={14} />
                </button>
                <button
                  onClick={() => scrollTo(activeIndex + 1)}
                  disabled={activeIndex === AWARDS.length - 1}
                  aria-label="Next award"
                  className="w-8 h-8 rounded-full border border-black/[0.08] dark:border-white/[0.1] flex items-center justify-center hover:bg-[#F3DE72] hover:border-[#F3DE72] hover:text-[#111] transition-all duration-200 text-[#666] dark:text-white/60 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:border-black/[0.08] disabled:hover:text-[#666]"
                >
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — scrollable award cards */}
          <div className="relative min-w-0">
            {/* Fade edges (desktop) */}
            <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white dark:from-[#080808] to-transparent z-10 pointer-events-none" />
            <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white dark:from-[#080808] to-transparent z-10 pointer-events-none" />

            <motion.div
              ref={scrollRef}
              onScroll={handleScroll}
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden scroll-smooth"
              style={{ scrollSnapType: "x mandatory" }}
            >
              <div className="flex gap-4 px-2" style={{ width: "max-content" }}>
                {AWARDS.map((award, i) => (
                  <motion.div
                    key={award.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1 * i + 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(243,222,114,0.2)" }}
                    className="glass-card w-[200px] rounded-2xl p-6 flex flex-col gap-4 cursor-default border border-[#F3DE72]/10 hover:border-[#F3DE72]/30 transition-all duration-300 flex-shrink-0"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <div className="w-12 h-12 bg-[#F3DE72]/15 rounded-xl flex items-center justify-center">
                      <award.icon size={22} className="text-[#F3DE72]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[14px] font-semibold text-[#111] dark:text-white leading-snug">
                        {award.title}
                      </p>
                      <p className="text-[12px] text-[#888] dark:text-white/40 mt-1">
                        {award.org}
                      </p>
                    </div>
                    <span className="inline-block text-[13px] font-bold text-[#F3DE72] mt-auto">
                      {award.year}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
