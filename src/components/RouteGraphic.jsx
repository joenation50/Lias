import { motion, useReducedMotion } from "framer-motion";

export default function RouteGraphic({ className = "" }) {
  const reduce = useReducedMotion();
  const draw = (delay) =>
    reduce
      ? {}
      : { initial: { pathLength: 0 }, animate: { pathLength: 1 }, transition: { duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] } };
  return (
    <svg viewBox="0 0 480 420" className={className} aria-hidden="true">
      <rect x="0" y="0" width="480" height="420" rx="28" fill="#0E2A47" />
      {[80, 150, 220, 290, 360].map((y) => (
        <line key={y} x1="40" x2="440" y1={y} y2={y} stroke="#1B3D5E" strokeWidth="1" />
      ))}
      <motion.path d="M60 330 C 150 330, 170 110, 280 110 S 400 90, 430 70" fill="none" stroke="#F2A516" strokeWidth="5" strokeLinecap="round" {...draw(0.2)} />
      {[
        [60, 330, 60, 330], [280, 110, 280, 110], [430, 70, 430, 70],
      ].map(([x, y], i) => (
        <motion.circle key={i} cx={x} cy={y} r="9" fill="#F5F4F0" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 + i * 0.35, type: "spring", stiffness: 300, damping: 18 }} style={{ transformOrigin: `${x}px ${y}px` }} />
      ))}
      <g fill="#F2A516">
        <rect x="120" y="268" width="56" height="34" rx="4" />
        <rect x="180" y="268" width="56" height="34" rx="4" fill="#F5F4F0" />
        <rect x="240" y="268" width="56" height="34" rx="4" />
      </g>
      <rect x="300" y="260" width="120" height="42" rx="4" fill="#1B3D5E" />
      <text x="40" y="60" fill="#F5F4F0" fontFamily="Barlow Condensed, sans-serif" fontSize="30" fontWeight="600" letterSpacing="1">NIGERIA → YOUR DOOR</text>
    </svg>
  );
}
