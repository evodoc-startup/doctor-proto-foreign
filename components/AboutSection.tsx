"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, GraduationCap, Building2, Award } from "lucide-react";

const STATS = [
  { value: "15+", label: "Years Experience" },
  { value: "5,000+", label: "Patients Treated" },
  { value: "50+", label: "Awards Won" },
  { value: "98%", label: "Satisfaction Rate" },
];

const CREDENTIALS = [
  {
    icon: GraduationCap,
    title: "Education",
    items: ["MD, Johns Hopkins School of Medicine", "Residency - Mayo Clinic", "Fellowship in Cardiology - Stanford"],
  },
  {
    icon: CheckCircle2,
    title: "Board Certifications",
    items: ["American Board of Internal Medicine", "American Board of Cardiology", "Advanced Cardiac Imaging"],
  },
  {
    icon: Building2,
    title: "Hospital Affiliations",
    items: ["City General Medical Center", "St. Luke's Heart Institute", "University Medical Center"],
  },
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-16 sm:py-24 px-4 sm:px-6 bg-[#fafafa] dark:bg-[#0d0d0d] overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT — Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Stats grid overlaid */}
            <div className="relative rounded-[32px] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.12)] aspect-[4/5] max-h-[420px] sm:max-h-none bg-gradient-to-b from-[#fdf8e0] via-[#faf5d5] to-[#f5edb8]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/doctor.png"
                alt="Dr. Harper Montgomery"
                className="w-full h-full object-contain object-center pt-6"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="absolute -bottom-4 sm:-bottom-6 -right-3 sm:-right-6 glass-card rounded-2xl p-3 sm:p-5 shadow-xl"
            >
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-xl font-bold text-[#F3DE72]">{s.value}</p>
                    <p className="text-[11px] text-[#666] dark:text-white/40 mt-0.5 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Award badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
              className="absolute -top-3 sm:-top-5 -left-3 sm:-left-5 glass-card rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-lg flex items-center gap-2"
            >
              <div className="w-8 h-8 bg-[#F3DE72]/20 rounded-lg flex items-center justify-center">
                <Award size={16} className="text-[#F3DE72]" />
              </div>
              <div>
                <p className="text-[12px] font-semibold text-[#111] dark:text-white">Top Doctor</p>
                <p className="text-[11px] text-[#888] dark:text-white/40">2023 Award</p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-8"
          >
            <div>
              <span className="text-[13px] font-medium text-[#F3DE72] uppercase tracking-widest">
                About
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-[#111] dark:text-white">
                Meet Dr. Harper
                <br />
                <span className="text-[#F3DE72]">Montgomery</span>
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#555] dark:text-white/55">
                With over 15 years of clinical experience, Dr. Montgomery is a board-certified cardiologist
                known for combining cutting-edge diagnostics with a deeply personal approach to patient care.
                His philosophy is simple: every patient deserves to feel heard, understood, and empowered
                in their health journey.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-[#555] dark:text-white/55">
                He completed his fellowship at Stanford Medical Center and has published over 30 peer-reviewed
                articles in leading cardiology journals.
              </p>
            </div>

            {/* Credentials */}
            <div className="flex flex-col gap-5">
              {CREDENTIALS.map((cred, i) => (
                <motion.div
                  key={cred.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 bg-[#F3DE72]/15 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <cred.icon size={18} className="text-[#F3DE72]" />
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-[#111] dark:text-white mb-1">{cred.title}</p>
                    <ul className="flex flex-col gap-0.5">
                      {cred.items.map((item) => (
                        <li key={item} className="text-[13px] text-[#666] dark:text-white/50">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
