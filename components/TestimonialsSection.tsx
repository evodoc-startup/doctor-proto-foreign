"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "Patient since 2020",
    initials: "SC",
    color: "from-amber-200 to-yellow-300",
    rating: 5,
    text: "Dr. Montgomery truly changed my life. After years of struggling with heart palpitations, he diagnosed and treated me with incredible precision. His calm, thorough approach made me feel safe throughout.",
  },
  {
    name: "Marcus Williams",
    role: "Patient since 2021",
    initials: "MW",
    color: "from-teal-200 to-emerald-300",
    rating: 5,
    text: "The most attentive cardiologist I've ever had. He took time to explain every step of my treatment plan. I went from being terrified about my diagnosis to feeling completely confident in my recovery.",
  },
  {
    name: "Amelia Rodriguez",
    role: "Patient since 2022",
    initials: "AR",
    color: "from-rose-200 to-pink-300",
    rating: 5,
    text: "Booking was effortless, the clinic is beautiful, and Dr. Montgomery is exceptional. He caught a condition two previous doctors missed. I can't recommend him highly enough.",
  },
  {
    name: "David Park",
    role: "Patient since 2019",
    initials: "DP",
    color: "from-blue-200 to-indigo-300",
    rating: 5,
    text: "Five years as a patient and still the gold standard for cardiac care. Every visit, he remembers my history, my family, and my goals. That personal connection is rare and incredibly valuable.",
  },
];

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setActive((p) => (p + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(t);
  }, [paused]);

  const prev = () => { setPaused(true); setActive((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length); };
  const next = () => { setPaused(true); setActive((p) => (p + 1) % TESTIMONIALS.length); };

  return (
    <section id="testimonials" ref={ref} className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-[13px] font-medium text-[#F3DE72] uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-[#111] dark:text-white">
            What patients say
          </h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.7 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card rounded-3xl p-6 sm:p-10 md:p-12 border border-black/[0.04] dark:border-white/[0.06] shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: TESTIMONIALS[active].rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-[#F3DE72] text-[#F3DE72]" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed text-[#222] dark:text-white/80 font-medium max-w-2xl">
                “{TESTIMONIALS[active].text}”
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 mt-8">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${TESTIMONIALS[active].color} border-2 border-[#F3DE72]/30 flex items-center justify-center font-bold text-[#555] text-[13px]`}>
                  {TESTIMONIALS[active].initials}
                </div>
                <div>
                  <p className="font-semibold text-[#111] dark:text-white text-[15px]">
                    {TESTIMONIALS[active].name}
                  </p>
                  <p className="text-[13px] text-[#888] dark:text-white/40">
                    {TESTIMONIALS[active].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === active ? "w-8 h-2 bg-[#F3DE72]" : "w-2 h-2 bg-black/10 dark:bg-white/15"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-black/[0.08] dark:border-white/[0.1] flex items-center justify-center hover:bg-[#F3DE72] hover:border-[#F3DE72] hover:text-[#111] transition-all duration-200 text-[#666] dark:text-white/60"
                aria-label="Previous"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-black/[0.08] dark:border-white/[0.1] flex items-center justify-center hover:bg-[#F3DE72] hover:border-[#F3DE72] hover:text-[#111] transition-all duration-200 text-[#666] dark:text-white/60"
                aria-label="Next"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
