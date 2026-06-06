"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Phone, MessageCircle, Star, Shield, Clock } from "lucide-react";
import Image from "next/image";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function HeroSection() {
  const imageRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [6, -6]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-6, 6]), { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Background clinic illustration */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/clinic-bg.jpg"
          alt="Modern clinic"
          fill
          priority
          className="object-cover object-center"
          style={{ filter: "blur(3px)", transform: "scale(1.05)" }}
        />
        {/* Layered overlays */}
        <div className="absolute inset-0 bg-white/70 dark:bg-[#080808]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent dark:from-[#080808]/95 dark:via-[#080808]/70 dark:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/30 dark:from-[#080808]/90 dark:via-transparent dark:to-[#080808]/30" />
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-32 right-1/4 w-96 h-96 bg-[#F3DE72]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-[#F3DE72]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center w-full">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-5 sm:gap-6">
          <motion.div custom={0} variants={FADE_UP} initial="hidden" animate="show">
            <span className="inline-flex items-center gap-2 text-[13px] font-medium text-[#666] dark:text-white/50 tracking-wide uppercase">
              <span className="w-5 h-px bg-[#F3DE72]" />
              Cardiologist
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={FADE_UP}
            initial="hidden"
            animate="show"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-[#111] dark:text-white"
          >
            Achieve the best
            <br />
            version of your{" "}
            <span className="text-[#F3DE72] relative">
              health
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
                className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#F3DE72]/40 rounded-full origin-left"
              />
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={FADE_UP}
            initial="hidden"
            animate="show"
            className="text-[15px] sm:text-[16px] leading-relaxed text-[#555] dark:text-white/55 max-w-md"
          >
            Personalized treatment plans, compassionate care, and years of
            trusted cardiac expertise - all focused on you.
          </motion.p>

          {/* Buttons */}
          <motion.div
            custom={3}
            variants={FADE_UP}
            initial="hidden"
            animate="show"
            className="flex flex-wrap items-center gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(243,222,114,0.5)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("appointment")}
              className="flex items-center gap-2 bg-[#F3DE72] text-[#111] font-semibold px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-[14px] sm:text-[15px] group shadow-[0_4px_20px_rgba(243,222,114,0.3)] transition-all duration-300"
            >
              Book an Appointment
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="tel:+1234567890"
              className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.1] shadow-sm hover:shadow-md hover:bg-[#F3DE72]/10 transition-all duration-200"
              aria-label="Call us"
            >
              <Phone size={16} className="text-[#111] dark:text-white" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.1] shadow-sm hover:shadow-md hover:bg-[#F3DE72]/10 transition-all duration-200"
              aria-label="WhatsApp"
            >
              <MessageCircle size={16} className="text-[#111] dark:text-white" />
            </motion.a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            custom={4}
            variants={FADE_UP}
            initial="hidden"
            animate="show"
            className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2"
          >
            {/* Avatars */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white dark:border-[#080808] bg-gradient-to-br from-[#F3DE72]/60 to-[#EFD95A]/40 overflow-hidden flex items-center justify-center text-[9px] sm:text-[10px] font-bold text-[#8B6E00]"
                  >
                    {["SC", "MW", "AR"][i - 1]}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-[13px] font-semibold text-[#F3DE72]">1,000+</p>
                <p className="text-[11px] sm:text-[12px] text-[#666] dark:text-white/40">Patients Trust Us</p>
              </div>
            </div>

            <div className="w-px h-8 bg-black/[0.06] dark:bg-white/[0.08]" />

            <div className="flex items-center gap-1.5">
              <Star size={14} className="fill-[#F3DE72] text-[#F3DE72]" />
              <span className="text-[13px] font-semibold text-[#111] dark:text-white">4.9</span>
              <span className="text-[11px] sm:text-[12px] text-[#666] dark:text-white/40">Rating</span>
            </div>

            <div className="w-px h-8 bg-black/[0.06] dark:bg-white/[0.08]" />

            <div className="flex items-center gap-1.5">
              <Shield size={14} className="text-[#F3DE72]" />
              <span className="text-[13px] font-semibold text-[#111] dark:text-white">15+</span>
              <span className="text-[11px] sm:text-[12px] text-[#666] dark:text-white/40">Years Exp.</span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE — Doctor Image */}
        <div className="relative flex justify-center items-end lg:justify-end mt-6 lg:mt-0">
          {/* Quote card — hidden on small screens to prevent overflow */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="hidden sm:block absolute top-4 right-0 lg:right-[-20px] glass-card rounded-2xl p-4 max-w-[190px] sm:max-w-[220px] z-20 shadow-lg"
          >
            <span className="text-3xl text-[#F3DE72] leading-none font-serif">"</span>
            <p className="text-[12px] sm:text-[13px] text-[#444] dark:text-white/60 leading-relaxed mt-1">
              I'm here to provide expert care, guide you through your health concerns, and help you live a healthier life.
            </p>
            <p className="text-[11px] sm:text-[12px] font-semibold text-[#111] dark:text-white mt-3">Dr. Harper Montgomery</p>
          </motion.div>

          {/* Floating stat card — hidden on small screens */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="hidden sm:block absolute bottom-12 left-0 lg:left-[-30px] glass-card rounded-2xl px-4 py-3 z-20 shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#F3DE72]/20 rounded-xl flex items-center justify-center">
                <Clock size={17} className="text-[#F3DE72]" />
              </div>
              <div>
                <p className="text-[12px] sm:text-[13px] font-semibold text-[#111] dark:text-white">Next Available</p>
                <p className="text-[11px] sm:text-[12px] text-[#666] dark:text-white/50">Today, 2:30 PM</p>
              </div>
            </div>
          </motion.div>

          {/* Doctor image with tilt */}
          <motion.div
            ref={imageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformPerspective: 1000 }}
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[480px]"
          >
            {/* Float animation wrapper */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Glow base */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-24 bg-[#F3DE72]/25 blur-3xl rounded-full" />

              <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-b from-[#fdf8e0] via-[#faf5d5] to-[#f5edb8] border border-[#F3DE72]/30 shadow-[0_32px_80px_rgba(0,0,0,0.12)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/doctor.png"
                  alt="Dr. Harper Montgomery"
                  className="w-full h-auto object-contain object-bottom"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
