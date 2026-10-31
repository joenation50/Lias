import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHead from "../components/SectionHead.jsx";
import founderImage from "../assets/founder.png"; // Father's image
import ownerImage from "../assets/owner.png"; // Son's image (Abdulateef)

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
          <SectionHead eyebrow="About us" title="A modern logistics firm built on a 40-year legacy." />
        </Reveal>
        <Reveal delay={0.08} className="space-y-5 text-lg leading-relaxed text-muted">
          <p>
            Lias Freight Global Services Limited represents the next chapter of a proud Nigerian story. We are the modern evolution of <em>Lias Freight Agencies Limited</em>, originally incorporated in 1981.
          </p>
          <p>
            While our technology and global reach have evolved, our core remains unchanged. We still work with importers and exporters who need their cargo cleared, forwarded, and moved safely through the port and onto the road, combining decades of port experience with modern efficiency.
          </p>
        </Reveal>
      </section>

      {/* THE HERITAGE SECTION */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* FOUNDER IMAGE */}
            <Reveal className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-signal/20 blur-xl"></div>
              <div className="overflow-hidden rounded-3xl bg-paper p-2 shadow-lift">
                <img 
                  src={founderImage} 
                  alt="Alhaji Olushoga Elias, Founder" 
                  className="aspect-[4/5] w-full rounded-2xl object-cover object-top"
                />
                <div className="p-6 text-center">
                  <h3 className="font-display text-2xl font-bold text-navy">Alhaji Olushoga Elias</h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-widest text-signal-ink">Founder (Est. 1981)</p>
                </div>
              </div>
            </Reveal>

            {/* HERITAGE TEXT */}
            <Reveal delay={0.1}>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-signal-ink">Our Heritage</p>
              <h2 className="mt-3 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-navy">The vision that started it all.</h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
                <p>
                  In 1981, <strong className="text-navy">Alhaji Olushoga Elias</strong> founded Lias Freight Agencies Limited at Coconut Bus Stop, Apapa, Lagos. Through his dedication and deep understanding of the Nigerian ports, he built the company into one of the nation's leading clearing and forwarding agencies.
                </p>
                <p>
                  Under his leadership, the company earned the trust of the country's most prestigious institutions. He successfully managed complex logistics for the <strong>Nigerian National Petroleum Corporation (NNPC), Kaduna Refining & Petrochemical Company (KRPC), Warri Refinery, Cadbury Nigeria, the Nigerian Minting and Printing Company, and the Cocoa Research Institute of Ibadan.</strong>
                </p>
              </div>
            </Reveal>
          </div>

          {/* NEW OWNER SECTION */}
          <div className="mt-24 grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* NEW OWNER TEXT */}
            <Reveal className="order-2 lg:order-1">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-signal-ink">The Next Chapter</p>
              <h2 className="mt-3 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-navy">Continuing the family legacy.</h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
                <p>
                  Today, under the leadership of <strong className="text-navy">Abdulateef Babatunde Elias</strong>, we carry his father's vision forward. We are not just a new company; we are the continuation of a family promise to deliver excellence, integrity, and unmatched port expertise.
                </p>
                <p>
                  With our new incorporation (RC 8374387), Lias Freight Global Services Limited combines our historic roots with modern global logistics, ensuring your cargo is handled with the same care and precision that defined us 40 years ago.
                </p>
              </div>
            </Reveal>

            {/* NEW OWNER IMAGE */}
            <Reveal delay={0.1} className="relative order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-none">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-navy/10 blur-xl"></div>
              <div className="overflow-hidden rounded-3xl bg-paper p-2 shadow-lift">
                <img 
                  src={ownerImage} 
                  alt="Abdulateef Babatunde Elias, Current Owner" 
                  className="aspect-[4/5] w-full rounded-2xl object-cover object-top"
                />
                <div className="p-6 text-center">
                  <h3 className="font-display text-2xl font-bold text-navy">Abdulateef Babatunde Elias</h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-widest text-signal-ink">Managing Director</p>
                </div>
              </div>
            </Reveal>
          </div>

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

      {/* CTA SECTION */}
      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-8 rounded-3xl bg-signal p-8 sm:flex-row sm:items-center sm:p-12">
          <div>
            <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight text-navy">Experience the Lias difference.</h2>
            <p className="mt-2 max-w-lg text-navy/80">Let our family's 40-year legacy work for your business today.</p>
          </div>
          <Link to="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-navy px-7 py-4 font-semibold text-white transition-transform active:scale-[0.97]">
            Contact us <Icon name="ArrowRight" size={18} />
          </Link>
        </Reveal>
      </section>
    </>
  );
}