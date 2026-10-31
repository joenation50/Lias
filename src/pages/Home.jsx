import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Icon from "../components/Icon.jsx";
import Logo from "../components/Logo.jsx";
import Reveal, { spring } from "../components/Reveal.jsx";
import SectionHead from "../components/SectionHead.jsx";
import { SERVICES, BIZ } from "../lib/business.js";

const SHIP_URL = "https://images.unsplash.com/photo-1769144256181-698b8f807066?w=1600&auto=format&fit=crop";
const CRANE_URL = "https://images.unsplash.com/photo-1759389003827-2a214e4c73b4?w=1600&auto=format&fit=crop";

const WHY = [
  { icon: "UsersThree", title: "Experienced clearing team", text: "Our staff work the Apapa and Tin Can processes every day and know where delays usually happen." },
  { icon: "Broadcast", title: "End-to-end tracking and updates", text: "We report each stage of the movement so you always know where your cargo stands." },
  { icon: "Path", title: "Coordinated port and road movement", text: "Clearance, haulage and delivery are planned together, so one stage does not hold up the next." },
  { icon: "ChatsCircle", title: "Transparent communication", text: "Costs and timelines are explained up front, and we tell you early when something changes." },
];

export default function Home() {
  const reduce = useReducedMotion();
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <img
          src={SHIP_URL}
          alt="Large cargo ship with stacked containers at a Nigerian port"
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-navy/80 via-navy/70 to-navy" />
        
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:pb-28 lg:pt-44">
          <div>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={spring}
              className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-navy shadow-lift"
            >
              <span className="h-2 w-2 rounded-full bg-signal" /> 
              A 45-Year Legacy of Trust (Est. 1981)
            </motion.p>
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.08 }}
              className="mt-6 font-display text-5xl font-bold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Reliable customs clearing and freight forwarding through all Nigerian ports.
            </motion.h1>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.16 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-white/80"
            >
              Lias Freight Global Services Limited handles the documents, duties, port clearance and road movement for importers and exporters at Apapa, Tin Can, Onne, Calabar, Warri, Port Harcourt and other seaports and airports. We deliver to your doorstep anywhere in Nigeria.
            </motion.p>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.24 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3.5 font-semibold text-navy shadow-lift transition-transform active:scale-[0.97]">
                Talk to our team
                <Icon name="ArrowRight" size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a href={`tel:${BIZ.phones[0].tel}`} className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-navy shadow-lift transition-transform active:scale-[0.97]">
                <Icon name="Phone" size={18} /> {BIZ.phones[0].display}
              </a>
            </motion.div>
          </div>

          {/* Banner Logo Card */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...spring, delay: 0.1 }}
            className="overflow-hidden rounded-[28px] bg-white p-8 text-center shadow-lift sm:p-12"
          >
            <Logo size={60} variant="banner" className="mx-auto" />
            <p className="mt-6 text-sm font-medium text-muted leading-relaxed">
              Proudly carrying forward the legacy of our founder, <strong className="text-navy">Alhaji Olushoga Elias</strong>, who cleared cargo for NNPC, Cadbury, KRPC, and many more since 1981.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 mt-12">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <SectionHead eyebrow="What we do" title="Four services, one movement" />
          <Link to="/services" className="inline-flex items-center gap-1.5 font-semibold text-navy hover:text-signal-ink">
            All services <Icon name="ArrowRight" size={16} />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.06}>
              <Link to={`/services#${s.id}`} className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-lift transition-transform duration-300 hover:-translate-y-1">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-signal transition-colors group-hover:bg-signal group-hover:text-navy">
                  <Icon name={s.icon} size={24} />
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold leading-tight text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.short}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <Reveal className="flex flex-wrap items-center justify-between gap-6 rounded-2xl bg-white p-6 shadow-lift sm:p-8">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-signal-ink">Our clients</p>
            <p className="mt-2 font-display text-2xl font-semibold text-navy">Importers, marketers and shipping agents we move cargo for.</p>
          </div>
          <Link to="/clients" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-navy px-6 py-3 font-semibold text-white transition-transform active:scale-[0.97]">
            View our clients <Icon name="ArrowRight" size={18} />
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <Reveal className="grid gap-4 sm:grid-cols-2">
          <img src={CRANE_URL} alt="Container cranes lifting boxes at a busy port terminal" loading="lazy" className="h-64 w-full rounded-2xl object-cover shadow-lift sm:h-80" />
          <img src={SHIP_URL} alt="Aerial view of a container ship docked at port" loading="lazy" className="h-64 w-full rounded-2xl object-cover shadow-lift sm:h-80" />
        </Reveal>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <Reveal>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-signal">Why choose us</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">Clear processes, and clear updates at every stage.</h2>
          </Reveal>
          <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.07} className="flex gap-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy-soft text-signal">
                  <Icon name={w.icon} size={24} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{w.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-white/70">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-8 rounded-3xl bg-signal p-8 sm:flex-row sm:items-center sm:p-12">
          <div>
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight text-navy">Have a shipment arriving soon?</h2>
            <p className="mt-2 max-w-lg text-navy/80">Send us your bill of lading or a short message. We will reply during working hours, Monday to Saturday.</p>
          </div>
          <Link to="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-navy px-7 py-4 font-semibold text-white transition-transform active:scale-[0.97]">
            Contact us <Icon name="ArrowRight" size={18} />
          </Link>
        </Reveal>
      </section>
    </>
  );
}