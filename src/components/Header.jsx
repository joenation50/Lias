import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Icon from "./Icon.jsx";
import Logo from "./Logo.jsx";
import { BIZ } from "../lib/business.js";
import { spring } from "./Reveal.jsx";

const LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/clients", label: "Clients" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const reduce = useReducedMotion();

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled ? "bg-paper/85 backdrop-blur-md shadow-[0_1px_0_#E2E0D8]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link to="/" aria-label="Lias Freight Global Services, home" className="flex items-center gap-3 rounded-md">
          {/* Icon Logo */}
          <Logo size={40} className="shrink-0" />
          {/* Company Text */}
          <span className="font-display text-[1.35rem] font-bold leading-none tracking-tight text-navy">
            Lias Freight <span className="font-medium text-muted">Global Services</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 rounded-full bg-white/70 p-1 shadow-lift md:flex">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-white" : "text-ink/70 hover:text-navy"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-navy"
                      transition={reduce ? { duration: 0 } : spring}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-11 w-11 place-items-center rounded-full bg-white text-navy shadow-lift md:hidden"
        >
          <motion.span animate={{ rotate: open ? 90 : 0 }} transition={reduce ? { duration: 0 } : spring}>
            <Icon name={open ? "X" : "List"} size={22} />
          </motion.span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={reduce ? { duration: 0 } : spring}
            className="mx-4 mb-4 rounded-2xl bg-white p-2 shadow-lift md:hidden"
          >
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium ${
                    isActive ? "bg-navy text-white" : "text-ink hover:bg-paper"
                  }`
                }
              >
                {l.label}
                <Icon name="CaretRight" size={16} />
              </NavLink>
            ))}
            <a
              href={`tel:${BIZ.phones[0].tel}`}
              className="mt-1 flex items-center gap-2 rounded-xl px-4 py-3.5 text-sm font-medium text-navy"
            >
              <Icon name="Phone" size={18} /> {BIZ.phones[0].display}
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}