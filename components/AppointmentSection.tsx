"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CalendarDays, CheckCircle2, Loader2, ChevronDown, ArrowUpRight } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(7, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  type: z.string().min(1, "Please select consultation type"),
  problem: z.string().min(10, "Please describe your concern (min 10 chars)"),
});

type FormData = z.infer<typeof schema>;

const TIMES = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM",
];

const CONSULTATION_TYPES = [
  "General Consultation",
  "Cardiac Screening",
  "Follow-up Visit",
  "Emergency Consultation",
  "Teleconsultation",
  "Specialized Treatment",
];

export default function AppointmentSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1800));
    console.log("Appointment:", data);
    setSubmitting(false);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 6000);
  };

  const inputClass = (hasError?: boolean) =>
    `w-full px-4 py-3 rounded-2xl text-[14px] outline-none transition-all duration-200 bg-white dark:bg-white/[0.04] border ${
      hasError
        ? "border-red-400 focus:border-red-400"
        : "border-black/[0.08] dark:border-white/[0.08] focus:border-[#F3DE72] dark:focus:border-[#F3DE72]"
    } text-[#111] dark:text-white placeholder:text-[#aaa] dark:placeholder:text-white/30 focus:shadow-[0_0_0_3px_rgba(243,222,114,0.15)]`;

  return (
    <section id="appointment" ref={ref} className="py-16 sm:py-24 px-4 sm:px-6 bg-[#fafafa] dark:bg-[#0d0d0d]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <span className="text-[13px] font-medium text-[#F3DE72] uppercase tracking-widest">
            Book Appointment
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-[#111] dark:text-white">
            Schedule your visit
          </h2>
          <p className="mt-4 text-[15px] text-[#666] dark:text-white/50">
            Fill in your details and we'll confirm your appointment within 2 hours.
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card rounded-3xl p-8 md:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.07)] border border-black/[0.04] dark:border-white/[0.06]"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center gap-4 py-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-16 h-16 bg-[#F3DE72]/20 rounded-full flex items-center justify-center"
                >
                  <CheckCircle2 size={32} className="text-[#F3DE72]" />
                </motion.div>
                <h3 className="text-2xl font-bold text-[#111] dark:text-white">Appointment Requested!</h3>
                <p className="text-[15px] text-[#666] dark:text-white/50 max-w-sm">
                  Thank you! Our team will confirm your appointment within 2 hours via email or phone.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit(onSubmit)}
                className="grid md:grid-cols-2 gap-5"
              >
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-medium text-[#444] dark:text-white/60">Full Name</label>
                  <input
                    {...register("name")}
                    placeholder="Dr. John Smith"
                    className={inputClass(!!errors.name)}
                    suppressHydrationWarning
                  />
                  {errors.name && <span className="text-[12px] text-red-500">{errors.name.message}</span>}
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-medium text-[#444] dark:text-white/60">Phone Number</label>
                  <input
                    {...register("phone")}
                    placeholder="+1 (555) 000-0000"
                    className={inputClass(!!errors.phone)}
                    suppressHydrationWarning
                  />
                  {errors.phone && <span className="text-[12px] text-red-500">{errors.phone.message}</span>}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-medium text-[#444] dark:text-white/60">Email Address</label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="john@example.com"
                    className={inputClass(!!errors.email)}
                    suppressHydrationWarning
                  />
                  {errors.email && <span className="text-[12px] text-red-500">{errors.email.message}</span>}
                </div>

                {/* Type */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-medium text-[#444] dark:text-white/60">Consultation Type</label>
                  <div className="relative">
                    <select
                      {...register("type")}
                      className={`${inputClass(!!errors.type)} appearance-none pr-10`}
                      suppressHydrationWarning
                    >
                      <option value="">Select type...</option>
                      {CONSULTATION_TYPES.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#888] pointer-events-none" />
                  </div>
                  {errors.type && <span className="text-[12px] text-red-500">{errors.type.message}</span>}
                </div>

                {/* Date */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-medium text-[#444] dark:text-white/60">Preferred Date</label>
                  <div className="relative">
                    <input
                      {...register("date")}
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      className={inputClass(!!errors.date)}
                      suppressHydrationWarning
                    />
                    <CalendarDays size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#888] pointer-events-none" />
                  </div>
                  {errors.date && <span className="text-[12px] text-red-500">{errors.date.message}</span>}
                </div>

                {/* Time */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-medium text-[#444] dark:text-white/60">Preferred Time</label>
                  <div className="relative">
                    <select
                      {...register("time")}
                      className={`${inputClass(!!errors.time)} appearance-none pr-10`}
                      suppressHydrationWarning
                    >
                      <option value="">Select time...</option>
                      {TIMES.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#888] pointer-events-none" />
                  </div>
                  {errors.time && <span className="text-[12px] text-red-500">{errors.time.message}</span>}
                </div>

                {/* Problem — full width */}
                <div className="md:col-span-2 flex flex-col gap-1.5">
                  <label className="text-[13px] font-medium text-[#444] dark:text-white/60">
                    Describe Your Concern
                  </label>
                  <textarea
                    {...register("problem")}
                    rows={4}
                    placeholder="Please describe your symptoms or reason for visit..."
                    className={`${inputClass(!!errors.problem)} resize-none`}
                    suppressHydrationWarning
                  />
                  {errors.problem && <span className="text-[12px] text-red-500">{errors.problem.message}</span>}
                </div>

                {/* Submit */}
                <div className="md:col-span-2">
                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(243,222,114,0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={submitting}
                    className="w-full md:w-auto md:min-w-[220px] flex items-center justify-center gap-2 bg-[#F3DE72] text-[#111] font-semibold px-8 py-4 rounded-2xl text-[15px] shadow-[0_4px_20px_rgba(243,222,114,0.3)] transition-all duration-300 disabled:opacity-60"
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" /> Scheduling...
                      </>
                    ) : (
                      <span className="flex items-center gap-2">Schedule Appointment <ArrowUpRight size={16} /></span>
                    )}
                  </motion.button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
