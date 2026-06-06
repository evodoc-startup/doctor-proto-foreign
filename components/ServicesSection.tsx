"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Stethoscope,
  ShieldCheck,
  Activity,
  Zap,
  RefreshCw,
  Microscope,
} from "lucide-react";

const SERVICES = [
  {
    icon: Stethoscope,
    title: "General Consultation",
    desc: "Comprehensive one-on-one consultations addressing your cardiac health, symptoms, and lifestyle concerns.",
    tag: "Most Requested",
  },
  {
    icon: ShieldCheck,
    title: "Preventive Care",
    desc: "Proactive strategies to reduce risk factors and maintain optimal heart health before issues arise.",
    tag: null,
  },
  {
    icon: Activity,
    title: "Health Screening",
    desc: "Advanced diagnostic screenings including ECG, echocardiography, and stress testing.",
    tag: "Popular",
  },
  {
    icon: Zap,
    title: "Emergency Care",
    desc: "Rapid response cardiac evaluation and stabilization for urgent and acute presentations.",
    tag: null,
  },
  {
    icon: RefreshCw,
    title: "Follow-up Visits",
    desc: "Structured follow-up care to monitor your progress, adjust treatments, and keep you on track.",
    tag: null,
  },
  {
    icon: Microscope,
    title: "Specialized Treatment",
    desc: "Expert management of complex conditions: arrhythmias, heart failure, coronary artery disease, and more.",
    tag: "Advanced",
  },
];

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="text-[13px] font-medium text-[#F3DE72] uppercase tracking-widest">
            Services
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-[#111] dark:text-white">
            Expert care, every step
          </h2>
          <p className="mt-4 text-[15px] text-[#666] dark:text-white/50 max-w-md mx-auto">
            From your first consultation to long-term cardiac management - all under one roof.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, boxShadow: "0 24px 60px rgba(0,0,0,0.08)" }}
              className="glass-card rounded-3xl p-7 flex flex-col gap-5 border border-black/[0.04] dark:border-white/[0.06] cursor-default transition-all duration-300 group relative overflow-hidden"
            >
              {/* Background accent on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F3DE72]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />

              <div className="relative flex items-start justify-between">
                <div className="w-12 h-12 bg-[#F3DE72]/15 rounded-2xl flex items-center justify-center group-hover:bg-[#F3DE72]/25 transition-colors duration-300">
                  <svc.icon
                    size={22}
                    className="text-[#F3DE72] group-hover:scale-110 transition-transform duration-300"
                    strokeWidth={1.5}
                  />
                </div>
                {svc.tag && (
                  <span className="text-[11px] font-semibold text-[#111] dark:text-[#111] bg-[#F3DE72] px-2.5 py-1 rounded-full">
                    {svc.tag}
                  </span>
                )}
              </div>

              <div className="relative">
                <h3 className="text-[16px] font-semibold text-[#111] dark:text-white">
                  {svc.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#666] dark:text-white/50">
                  {svc.desc}
                </p>
              </div>

              <div className="relative mt-auto pt-2 border-t border-black/[0.04] dark:border-white/[0.06]">
                <button
                  onClick={() => document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-[13px] font-medium text-[#F3DE72] hover:opacity-80 transition-opacity"
                >
                  Book this service →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
