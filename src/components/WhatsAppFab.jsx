import { motion, useReducedMotion } from "framer-motion";
import Icon from "./Icon.jsx";
import { BIZ } from "../lib/business.js";
import { spring } from "./Reveal.jsx";

export default function WhatsAppFab() {
  const reduce = useReducedMotion();
  return (
    <motion.a
      href={BIZ.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={reduce ? false : { scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={reduce ? undefined : { y: -3 }}
      whileTap={{ scale: 0.92 }}
      transition={{ ...spring, delay: 0.6 }}
      className="fixed bottom-5 right-5 z-40 flex h-14 items-center gap-2 rounded-full bg-whatsapp px-4 text-white shadow-lift hover:bg-whatsapp-hover sm:bottom-7 sm:right-7"
    >
      <Icon name="WhatsappLogo" weight="fill" size={26} />
      <span className="hidden text-sm font-semibold sm:inline">WhatsApp us</span>
    </motion.a>
  );
}
