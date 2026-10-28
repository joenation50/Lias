import Icon from "../components/Icon.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHead from "../components/SectionHead.jsx";

const STEPS = [
  { icon: "ChatCircleText", name: "Consult", text: "We learn what is being shipped, where it is coming from and when it must arrive." },
  { icon: "FileText", name: "Document", text: "Our team prepares and checks import or export paperwork before anything is submitted." },
  { icon: "Anchor", name: "Clear", text: "Duties are processed and the cargo is cleared through any Nigerian seaport or airport, from Apapa and Tin Can to Onne, Calabar, Warri and Port Harcourt." },
  { icon: "Truck", name: "Deliver", text: "The cargo moves from port or warehouse to its destination, and we deliver to your doorstep anywhere in Nigeria." },
];

const SHIP_URL = "https://images.unsplash.com/photo-1769144256181-698b8f807066?w=1600&auto=format&fit=crop";

export default function About() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-6 sm:px-8">
        <Reveal>
          <img
            src={SHIP_URL}
            alt="Aerial view of a container ship docked at a Nigerian port"
            loading="lazy"
            className="h-64 w-full rounded-3xl object-cover shadow-lift sm:h-96"
          />
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <SectionHead eyebrow="About us" title="A Nigerian freight firm with a long memory of the port." />
        </Reveal>
        <Reveal delay={0.08} className="space-y-5 text-lg leading-relaxed text-muted">
          <p>
            Lias Freight Global Services Limited was incorporated in 1981 and has been based in Olodi-Apapa, Lagos, since its early years. We work with importers and exporters who need their cargo cleared, forwarded and moved safely through the port and onto the road.
          </p>
          <p>
            We are a freight and forwarding firm. Customs clearing, forwarding and shipping, and freight transportation are the core of what we do, and we keep our scope focused on those services.
          </p>
        </Reveal>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <Reveal>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-signal-ink">Our mission</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-navy">Move cargo across Nigeria with fewer surprises.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-lg leading-relaxed text-muted">
              We aim to make each shipment predictable for the client: clear paperwork, a clear plan for the port and road, and clear communication from the first call to final delivery.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal>
          <SectionHead eyebrow="How we work" title="Four steps, from first call to delivery" />
        </Reveal>
        <ol className="relative mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.name} delay={i * 0.08} className="rounded-2xl bg-white p-6 shadow-lift">
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-signal">
                  <Icon name={s.icon} size={24} />
                </span>
                <span className="font-mono text-sm text-muted">0{i + 1}</span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-navy">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </section>
    </>
  );
}
