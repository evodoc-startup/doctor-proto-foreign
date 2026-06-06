"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Mail, Phone, Clock, ArrowUpRight } from "lucide-react";

const INFO = [
  {
    icon: MapPin,
    label: "Clinic Address",
    value: "1420 Cardiology Drive, Suite 800\nNew York, NY 10022",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@drmontgomery.com",
    href: "mailto:contact@drmontgomery.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (212) 555-0190",
    href: "tel:+12125550190",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Fri: 8:00 AM - 6:00 PM\nSat: 9:00 AM - 1:00 PM",
  },
];

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[13px] font-medium text-[#F3DE72] uppercase tracking-widest">Contact</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-[#111] dark:text-white">
            We're here for you
          </h2>
          <p className="mt-4 text-[15px] text-[#666] dark:text-white/50">
            Reach out anytime. We respond within one business day.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* LEFT — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            {INFO.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.08 * i + 0.1, duration: 0.5 }}
                className="flex gap-4 glass-card rounded-2xl p-5 border border-black/[0.04] dark:border-white/[0.06]"
              >
                <div className="w-10 h-10 bg-[#F3DE72]/15 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon size={18} className="text-[#F3DE72]" />
                </div>
                <div>
                  <p className="text-[12px] font-medium text-[#999] dark:text-white/40 uppercase tracking-wide">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-[14px] font-medium text-[#111] dark:text-white mt-0.5 hover:text-[#F3DE72] transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[14px] font-medium text-[#111] dark:text-white mt-0.5 whitespace-pre-line">
                      {item.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(243,222,114,0.4)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center justify-center gap-2 bg-[#F3DE72] text-[#111] font-semibold px-6 py-4 rounded-2xl text-[15px] shadow-[0_4px_20px_rgba(243,222,114,0.3)] transition-all duration-300 group mt-2"
            >
              Book an Appointment
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>
          </motion.div>

          {/* RIGHT — Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl overflow-hidden border border-black/[0.06] dark:border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.08)] h-[300px] sm:h-[400px] lg:h-auto lg:min-h-[520px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215151025!2d-73.9634!3d40.7580!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzI4LjgiTiA3M8KwNTcnNDguMiJX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(20%) contrast(1.05)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
