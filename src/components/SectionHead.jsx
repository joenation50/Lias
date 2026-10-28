export default function SectionHead({ eyebrow, title, children, align = "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-signal-ink">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-navy sm:text-5xl">{title}</h2>
      {children && <p className="mt-4 text-base leading-relaxed text-muted">{children}</p>}
    </div>
  );
}
