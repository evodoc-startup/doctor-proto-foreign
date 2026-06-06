"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays } from "lucide-react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          whileHover={{ scale: 1.06, boxShadow: "0 0 40px rgba(243,222,114,0.5)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#F3DE72] text-[#111] font-semibold px-5 py-3.5 rounded-full shadow-[0_8px_32px_rgba(243,222,114,0.35)] md:hidden"
          aria-label="Book an appointment"
        >
          <CalendarDays size={16} />
          Book Appointment
        </motion.button>
      )}
    </AnimatePresence>
  );
}
