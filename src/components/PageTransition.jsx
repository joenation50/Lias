import { motion, useReducedMotion } from "framer-motion";
import { spring } from "./Reveal.jsx";

export default function PageTransition({ children }) {
  const reduce = useReducedMotion();
  return (
    <motion.main
      initial={reduce ? { opacity: 0 } : { opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={reduce ? { opacity: 0 } : { opacity: 0, x: -24 }}
      transition={reduce ? { duration: 0.15 } : spring}
      className="min-h-[70vh] pt-24"
    >
      {children}
    </motion.main>
  );
}
