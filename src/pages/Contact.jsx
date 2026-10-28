import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Icon from "../components/Icon.jsx";
import Reveal, { spring } from "../components/Reveal.jsx";
import SectionHead from "../components/SectionHead.jsx";
import { BIZ, SERVICES } from "../lib/business.js";
import { useStoredState } from "../lib/useStoredState.js";
import { useLagosOpen } from "../lib/useLagosOpen.js";

const EMPTY = { name: "", company: "", phone: "", service: "", message: "" };
const DRAFT_KEY = "lias-contact-draft-v1";

const inputCls =
  "w-full rounded-xl border border-hairline bg-paper px-4 py-3 text-ink placeholder:text-muted/60 transition-colors focus:border-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-signal/60";

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">{label}</span>
      {children}
      {error && (
        <motion.span initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="mt-1.5 block text-sm text-red-700">
          {error}
        </motion.span>
      )}
    </label>
  );
}

const SHIP_URL = "https://images.unsplash.com/photo-1769144256181-698b8f807066?w=1600&auto=format&fit=crop";

export default function Contact() {
  const [form, setForm] = useStoredState(DRAFT_KEY, EMPTY);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const submitRef = useRef(null);
  const { open } = useLagosOpen();
  const reduce = useReducedMotion();

  const update = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "Enter your name so we know who to reply to.";
    if (!form.phone.trim()) next.phone = "Add a phone number we can call or message.";
    if (!form.service) next.service = "Choose the service you need.";
    if (!form.message.trim()) next.message = "Tell us a little about the cargo.";
    setErrors(next);
    
    // If there are errors, stop here
    if (Object.keys(next).length) return;

    // If no errors, format the message and open WhatsApp immediately
    const lines = [
      "*New enquiry from the Lias Freight website*",
      `*Name:* ${form.name.trim()}`,
      `*Company:* ${form.company.trim() || "Not given"}`,
      `*Phone:* ${form.phone.trim()}`,
      `*Service needed:* ${form.service}`,
      `*Message:* ${form.message.trim()}`,
    ];
    
    // Open WhatsApp
    window.open(`https://wa.me/2348033076357?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
    
    // Show the success screen
    setSent(true);
    setForm(EMPTY);
    try { localStorage.removeItem(DRAFT_KEY); } catch { /* ignore */ }
  };

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-10 pt-6 sm:px-8">
        <Reveal>
          <img
            src={SHIP_URL}
            alt="Container ship at a Nigerian port, for the Lias Freight office"
            loading="lazy"
            className="mb-12 h-56 w-full rounded-3xl object-cover shadow-lift sm:h-72"
          />
        </Reveal>
        <Reveal>
          <SectionHead eyebrow="Contact" title="Talk to the team that clears your cargo.">
            Call, message on WhatsApp, or send the form. We reply during working hours.
          </SectionHead>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-24 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <Reveal className="rounded-2xl bg-navy p-7 text-white">
            <div className="flex items-center justify-between">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-signal">Office</p>
              <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${open ? "bg-whatsapp/20 text-white" : "bg-white/10 text-white/70"}`}>
                <span className={`h-2 w-2 rounded-full ${open ? "bg-whatsapp" : "bg-white/40"}`} />
                {open ? "Open now" : "Closed now"}
              </span>
            </div>
            <p className="mt-4 flex gap-3 text-lg leading-snug">
              <Icon name="MapPin" size={22} className="mt-0.5 shrink-0 text-signal" />
              <span>{BIZ.address.join(", ")}</span>
            </p>
            <a href={BIZ.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy transition-transform active:scale-[0.97]">
              Open in Google Maps <Icon name="ArrowUpRight" size={16} />
            </a>
          </Reveal>

          <Reveal delay={0.06} className="rounded-2xl bg-white p-7 shadow-lift">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-signal-ink">Call</p>
            <ul className="mt-4 divide-y divide-hairline">
              {BIZ.phones.map((p) => (
                <li key={p.tel}>
                  <a href={`tel:${p.tel}`} className="group flex items-center justify-between py-4">
                    <span>
                      <span className="block text-sm text-muted">{p.label}</span>
                      <span className="font-display text-2xl font-semibold text-navy">{p.display}</span>
                    </span>
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-paper text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                      <Icon name="Phone" size={20} />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="rounded-2xl bg-white p-7 shadow-lift">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-signal-ink">Working hours</p>
            <dl className="mt-4 space-y-2">
              {BIZ.hours.map((h) => (
                <div key={h.days} className="flex justify-between gap-4">
                  <dt className="text-muted">{h.days}</dt>
                  <dd className="font-medium text-ink">{h.time}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.14}>
            <a
              href={BIZ.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl bg-whatsapp px-6 py-4 text-lg font-semibold text-white shadow-lift transition-colors hover:bg-whatsapp-hover active:scale-[0.98]"
            >
              <Icon name="WhatsappLogo" weight="fill" size={26} /> Chat on WhatsApp
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.08} className="rounded-3xl bg-white p-7 shadow-lift sm:p-10">
          {sent ? (
            <motion.div initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={spring} className="py-10 text-center">
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-signal text-navy">
                <Icon name="Check" weight="bold" size={30} />
              </span>
              <h2 className="mt-6 font-display text-4xl font-semibold text-navy">Thank you.</h2>
              <p className="mx-auto mt-3 max-w-sm text-muted">Your message has been forwarded to WhatsApp. We will reply during working hours, Monday to Saturday.</p>
              <button type="button" onClick={() => setSent(false)} className="mt-8 rounded-full bg-paper px-5 py-2.5 font-medium text-navy">
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={submit} noValidate className="space-y-5">
              <h2 className="font-display text-3xl font-semibold text-navy">Send a message</h2>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" error={errors.name}>
                  <input className={inputCls} value={form.name} onChange={update("name")} autoComplete="name" aria-invalid={!!errors.name} />
                </Field>
                <Field label="Company (optional)">
                  <input className={inputCls} value={form.company} onChange={update("company")} autoComplete="organization" />
                </Field>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Phone" error={errors.phone}>
                  <input type="tel" className={inputCls} value={form.phone} onChange={update("phone")} autoComplete="tel" aria-invalid={!!errors.phone} />
                </Field>
                <Field label="Service needed" error={errors.service}>
                  <select className={inputCls} value={form.service} onChange={update("service")} aria-invalid={!!errors.service}>
                    <option value="">Choose a service</option>
                    {SERVICES.map((s) => <option key={s.id} value={s.title}>{s.title}</option>)}
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </Field>
              </div>
              <Field label="Message" error={errors.message}>
                <textarea rows={5} className={inputCls} value={form.message} onChange={update("message")} aria-invalid={!!errors.message} placeholder="Port, cargo type, and expected arrival or dispatch date" />
              </Field>
              <p className="text-xs text-muted">Your draft is saved on this device until you send it.</p>
              <button ref={submitRef} type="submit" className="w-full rounded-full bg-navy px-6 py-4 font-semibold text-white transition-transform active:scale-[0.98] sm:w-auto">
                Send via WhatsApp
              </button>
            </form>
          )}
        </Reveal>
      </section>
    </>
  );
}