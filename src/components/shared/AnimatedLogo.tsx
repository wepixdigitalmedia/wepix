import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const categories = [
  "Fashion",
  "Sourcing",
  "Business",
  "Academy",
  "Ai",
  "Media",
  "Garment Tech",
  "Digital Media",
];

export function AnimatedLogo() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % categories.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <Link
      to="/"
      className="flex items-center font-display text-xl tracking-tight text-foreground"
    >
      <span className="font-bold">WePix.</span>
      <span className="relative inline-flex overflow-hidden h-[1.5em] items-center ml-0.5 md:ml-1">
        <AnimatePresence mode="wait">
          <motion.span
            key={categories[index]}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 32,
            }}
            className="inline-block text-primary whitespace-nowrap font-medium tracking-tight"
          >
            {categories[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </Link>
  );
}
