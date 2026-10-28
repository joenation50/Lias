import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";
import Logo from "./Logo.jsx";
import { BIZ } from "../lib/business.js";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            {/* Banner Logo inside a white box */}
            <div className="inline-flex rounded-xl bg-white px-4 py-2">
              <Logo size={40} variant="banner" />
            </div>
          </div>
          <p className="mt-4 text-sm text-white/60">
            Since {BIZ.established}
          </p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed">
            Customs clearing, freight forwarding, haulage and warehousing through all Nigerian seaports and airports, with delivery to any state in Nigeria.
          </p>
        </div>
        <div className="text-sm">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-signal">Visit and call</p>
          <p className="flex gap-2"><Icon name="MapPin" size={18} className="mt-0.5 shrink-0" />
            <span>{BIZ.address.join(", ")}</span>
          </p>
          {BIZ.phones.map((p) => (
            <a key={p.tel} href={`tel:${p.tel}`} className="mt-2 flex items-center gap-2 hover:text-white">
              <Icon name="Phone" size={18} /> {p.label}: {p.display}
            </a>
          ))}
        </div>
        <div className="text-sm">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-signal">Working hours</p>
          {BIZ.hours.map((h) => (
            <p key={h.days} className="flex justify-between gap-6 py-1">
              <span>{h.days}</span><span className="text-white">{h.time}</span>
            </p>
          ))}
          <nav aria-label="Footer" className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            <Link to="/about" className="hover:text-white">About</Link>
            <Link to="/services" className="hover:text-white">Services</Link>
            <Link to="/clients" className="hover:text-white">Clients</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
          </nav>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-white/50 sm:px-8">
          © 2026 Lias Freight Global Services Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}