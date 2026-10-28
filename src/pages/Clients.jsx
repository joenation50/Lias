import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHead from "../components/SectionHead.jsx";

// 1. IMPORT CLIENT LOGOS HERE
// Make sure you create a folder named "clients" inside your "src/assets" folder
// and save the images with these exact names.
import krpcLogo from "../assets/clients/krpc-logo.png";
import christabenLogo from "../assets/clients/christaben-logo.png";
import phrcLogo from "../assets/clients/phrc-logo.png";
import hadjiLogo from "../assets/clients/hadji-dan-barau-logo.png";
import orkilaLogo from "../assets/clients/orkila-logo.png";
import easternLogo from "../assets/clients/eastern-metals-logo.png";
import qualiLogo from "../assets/clients/quali-foods-logo.png";

// 2. CLIENT DATA
const CLIENTS = [
  { 
    id: 1, 
    label: "Kaduna Refining & Petrochemical Co. Ltd", 
    industry: "NNPC Subsidiary", 
    logo: krpcLogo 
  },
  { 
    id: 2, 
    label: "Christaben Engineering & Supply Co. Ltd", 
    industry: "Engineering & Supply", 
    logo: christabenLogo 
  },
  { 
    id: 3, 
    label: "Port Harcourt Refining Company Ltd", 
    industry: "NNPC Subsidiary", 
    logo: phrcLogo 
  },
  { 
    id: 4, 
    label: "Hadji Dan Barau Nigeria Limited", 
    industry: "General Merchants", 
    logo: hadjiLogo 
  },
  { 
    id: 5, 
    label: "Orkila Chemicals Limited", 
    industry: "Chemical Distribution", 
    logo: orkilaLogo 
  },
  { 
    id: 6, 
    label: "Eastern Metals Limited", 
    industry: "Metal Manufacturing", 
    logo: easternLogo 
  },
  { 
    id: 7, 
    label: "Quali Foods Limited", 
    industry: "Food & Beverage", 
    logo: qualiLogo 
  },
];

export default function Clients() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen">
      {/* HERO SECTION */}
      <section className="mx-auto max-w-6xl px-5 pb-12 pt-16 sm:px-8 sm:pt-24">
        <Reveal>
          <SectionHead eyebrow="Our Partners" title="Trusted by industry leaders.">
            We are proud to partner with top-tier importers, manufacturers, and shipping agents across Nigeria. 
            From complex supply chains to urgent deliveries, these businesses trust us to keep their cargo moving.
          </SectionHead>
        </Reveal>
      </section>

      {/* GRID SECTION */}
      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CLIENTS.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.05}>
              <article className="group relative flex h-full flex-col items-center justify-center rounded-3xl bg-white p-8 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)]">
                
                {/* LOGO CONTAINER */}
                <div className="mb-6 flex h-24 w-full items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  {c.logo ? (
                    <img 
                      src={c.logo} 
                      alt={`${c.label} logo`} 
                      className="max-h-full max-w-[80%] object-contain" 
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 px-3 text-center text-sm font-semibold leading-tight text-navy/70">
                      {c.label}
                    </div>
                  )}
                </div>

                {/* TEXT CONTENT */}
                <h2 className="mt-2 font-display text-lg font-bold tracking-tight text-navy">
                  {c.label}
                </h2>
                <p className="mt-1 text-xs font-medium text-muted">
                  {c.industry}
                </p>
                
                {/* Decorative line on hover */}
                <span className="absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-t-full bg-signal transition-all duration-300 group-hover:w-16" />
              </article>
            </Reveal>
          ))}
        </div>

        {/* CTA SECTION */}
        <div className="mt-20">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-12 text-center shadow-2xl sm:px-12 sm:py-16">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#F2A516 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
              
              <div className="relative z-10 mx-auto max-w-2xl">
                <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Ready to simplify your logistics?
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-white/80">
                  Join the businesses that trust Lias Freight for seamless customs clearing and nationwide delivery.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-signal px-8 py-3.5 font-semibold text-navy shadow-lift transition-transform hover:scale-105 active:scale-[0.97]">
                    Become a client <Icon name="ArrowRight" size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}