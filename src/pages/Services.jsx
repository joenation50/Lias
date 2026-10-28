import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHead from "../components/SectionHead.jsx";
import { SERVICES } from "../lib/business.js";

const SHIP_URL = "https://images.unsplash.com/photo-1769144256181-698b8f807066?w=1600&auto=format&fit=crop";
const CRANE_URL = "https://images.unsplash.com/photo-1759389003827-2a214e4c73b4?w=1600&auto=format&fit=crop";

export default function Services() {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-6 sm:px-8">
        <Reveal>
          <img
            src={CRANE_URL}
            alt="Container cranes lifting boxes at a busy port terminal"
            loading="lazy"
            className="mb-12 h-56 w-full rounded-3xl object-cover shadow-lift sm:h-80"
          />
          <SectionHead eyebrow="Services" title="Customs, freight, haulage and storage, handled as one service.">
            Choose the stage you need, or let us manage the whole movement from the port to your doorstep anywhere in Nigeria.
          </SectionHead>
        </Reveal>
        <nav aria-label="Jump to service" className="mt-10 flex flex-wrap gap-2">
          {SERVICES.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-navy shadow-lift transition-colors hover:bg-navy hover:text-white">
              {s.title}
            </a>
          ))}
        </nav>
      </section>

      <div className="mx-auto max-w-6xl space-y-6 px-5 pb-24 sm:px-8">
        {SERVICES.map((s, i) => (
          <Reveal key={s.id}>
            <article id={s.id} className="scroll-mt-28 grid gap-8 rounded-3xl bg-white p-8 shadow-lift sm:p-10 md:grid-cols-2">
              <img
                src={i % 2 ? SHIP_URL : CRANE_URL}
                alt={i % 2 ? "Container ship docked at port" : "Container cranes at a port terminal"}
                loading="lazy"
                className="h-64 w-full rounded-2xl object-cover md:h-full md:min-h-72"
              />
              <div className="flex flex-col justify-center gap-8">
                <div>
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy text-signal">
                    <Icon name={s.icon} size={28} />
                  </span>
                  <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-signal-ink">Service 0{i + 1}</p>
                  <h2 className="mt-2 font-display text-4xl font-semibold leading-tight text-navy">{s.title}</h2>
                  <p className="mt-3 text-muted">{s.short}</p>
                </div>
                <ul className="space-y-4">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3 rounded-xl bg-paper p-4 text-ink">
                      <Icon name="CheckCircle" weight="fill" size={22} className="mt-0.5 shrink-0 text-signal-ink" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
        <Reveal className="flex flex-col items-start gap-4 rounded-3xl bg-navy p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <p className="font-display text-3xl font-semibold leading-tight">Not sure which service you need?</p>
          <Link to="/contact" className="rounded-full bg-signal px-6 py-3.5 font-semibold text-navy transition-transform active:scale-[0.97]">Tell us about your cargo</Link>
        </Reveal>
      </div>
    </>
  );
}
