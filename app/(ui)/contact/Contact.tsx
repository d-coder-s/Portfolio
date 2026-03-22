"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import TornEdge from "@/components/ui/TornEdge";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  expertise: string;
  project: string;
}

const INITIAL_FORM: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  location: "",
  expertise: "",
  project: "",
};

/* ─────────────────────────────────────────────────────────────
   FAQs — SEO keywords woven naturally
───────────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: "How long does a web or app development project take?",
    a: "A landing page or simple website takes 1–2 weeks. A full-stack web app or mobile app project is usually 6–12 weeks. We give you a realistic timeline with clear milestones — not hopeful guesses.",
  },
  {
    q: "What is your web development pricing?",
    a: "We offer fixed-scope projects and flexible monthly retainers. You get a clear, itemised estimate after the first call — no hidden fees, no surprise invoices. Ever.",
  },
  {
    q: "Do I need a full brief or project plan ready?",
    a: "Not at all. Most clients come to us with just an idea. We help shape it into a proper scope during the first call — no pressure, no lengthy forms.",
  },
  {
    q: "Do you provide post-launch support and maintenance?",
    a: "Yes — 30 days of free bug fixes after every launch. After that, most clients work with us on a retainer for ongoing updates and support. We don't disappear after handoff.",
  },
  {
    q: "Can I hire Dcoder for UI/UX design only — no development?",
    a: "Absolutely. We take on design-only projects too — wireframes, Figma prototypes, full UI kits — that you can hand off to your own development team.",
  },
  {
    q: "Do you work with startups and first-time founders?",
    a: "Yes, and we love it. Some of our best work has been 0-to-1 MVPs for first-time founders. We're comfortable with ambiguity and good at figuring things out from scratch.",
  },
  {
    q: "Can you work with our existing codebase or legacy project?",
    a: "Yes. We've jumped into messy legacy codebases before. We'll audit it, tell you what's salvageable, and work from there — no drama, no pressure to start from scratch.",
  },
  {
    q: "What if I don't have a budget in mind yet?",
    a: "That's completely fine. Just mention it in the form. We'll scope the project and suggest approaches at different price points — you decide what makes sense.",
  },
] as const;

const CONTACT_ITEMS = [
  {
    icon: "📞",
    label: "phone",
    value: "+91-8690896522",
    href: "tel:+918690896522",
  },
  {
    icon: "📞",
    label: "phone",
    value: "+91-9548566064",
    href: "tel:+919548566064",
  },
  {
    icon: "✉",
    label: "email",
    value: "dcoder.atwork@gmail.com",
    href: "mailto:dcoder.atwork@gmail.com",
  },
  { icon: "📍", label: "location", value: "Remote", href: null },
  {
    icon: "🌐",
    label: "web",
    value: "dcoder.online",
    href: "dcoder.online",
  },
] as const;

/* ─── Tape ─── */
const Tape = ({
  rotate = "-rotate-2",
  width = 65,
}: {
  rotate?: string;
  width?: number;
}) => (
  <div
    className={`dc-tape absolute ${rotate}`}
    style={{
      width,
      height: 19,
      top: -10,
      left: "50%",
      transform: "translateX(-50%)",
    }}
    aria-hidden
  />
);

/* ─── FAQ accordion ─── */
const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-dashed border-black/[0.14]">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-4 py-4 text-left group"
        aria-expanded={open}
      >
        <span className="font-mono text-[14px] text-dc-ink2 group-hover:text-dc-ink transition-colors leading-relaxed">
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.22 }}
          className="w-6 h-6 shrink-0 bg-dc-ink text-dc-cream flex items-center justify-center text-lg font-light leading-none mt-0.5"
        >
          +
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.p
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.26, ease: "easeInOut" }}
            className="font-mono text-[13px] text-dc-ink3 leading-[1.9] overflow-hidden pb-4 pr-8"
          >
            {a}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ─── Shared styles ─── */
const inputCls = `
  font-mono text-[16px] text-dc-ink
  bg-dc-cream border border-black/[0.12]
  px-3 py-3 w-full outline-none
  transition-colors duration-200
  focus:border-dc-ink
  placeholder:text-dc-ink3/40
`;

const Field = ({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-2">
    <label
      htmlFor={id}
      className="font-mono text-[13px] tracking-[0.12em] uppercase text-dc-ink3"
    >
      {label} *
    </label>
    {children}
  </div>
);

/* ─────────────────────────────────────────────────────────────
   Component
───────────────────────────────────────────────────────────── */
const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send(
        "service_uqmtxdg",
        "template_6i6iiik",
        formData as unknown as Record<string, unknown>,
        "8ohgmMCekGJIm_2yC",
      );
      setSent(true);
      toast.success("message sent! we'll be in touch soon.");
      setFormData(INITIAL_FORM);
    } catch(err) {
      console.error("EmailJS error:", err); 
      toast.error("something went wrong. please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="bg-dc-ink border-b-2 border-dc-amber pt-16 pb-20 relative overflow-hidden">
        <span
          className="absolute -bottom-4 right-6 font-serif font-black text-white/[0.03] select-none pointer-events-none leading-none"
          style={{ fontSize: "clamp(80px, 14vw, 180px)" }}
          aria-hidden
        >
          contact
        </span>
        <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
          <p className="font-mono text-[13px] tracking-[0.2em] uppercase text-white/30 mb-3">
            // hire a digital studio · get a free quote
          </p>
          <h1
            className="font-serif font-black text-white/90 leading-tight mb-4"
            style={{ fontSize: "clamp(40px, 6vw, 80px)" }}
          >
            let&apos;s build something{" "}
            <em className="italic text-dc-red">that works.</em>
          </h1>
          <p className="font-mono text-[16px] text-white/35 max-w-lg leading-[1.9]">
            looking for a web development agency, app developers, or a design
            team? reach out — no lengthy forms, just a real conversation.
          </p>
        </div>
      </section>

      <TornEdge from="dc-ink" to="dc-cream2" flip />

      {/* ── Main content ─────────────────────────────────── */}
      <section className="bg-dc-cream2 py-20 lg:py-24">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            {/* ── LEFT ──────────────────────────────────── */}
            <div className="flex flex-col gap-10">
              {/* Contact info */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
              >
                <p className="font-mono text-[13px] tracking-[0.2em] uppercase text-dc-ink3 mb-5">
                  // reach us directly
                </p>
                <ul className="flex flex-col">
                  {CONTACT_ITEMS.map(({ icon, label, value, href }) => (
                    <li
                      key={value}
                      className="flex items-center gap-4 py-4 border-b border-dashed border-black/[0.12] first:border-t group"
                    >
                      <span
                        className="text-[18px] shrink-0 w-7 text-center"
                        aria-hidden
                      >
                        {icon}
                      </span>
                      <div className="flex flex-col gap-0.5">
                        <span className="font-mono text-[11px] tracking-widest uppercase text-dc-ink3/50">
                          {label}
                        </span>
                        {href ? (
                          <a
                            href={href}
                            target={
                              href.startsWith("http") ? "_blank" : undefined
                            }
                            rel={
                              href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="font-mono text-[16px] text-dc-ink2 hover:text-dc-red transition-colors duration-200"
                          >
                            {value}
                          </a>
                        ) : (
                          <span className="font-mono text-[16px] text-dc-ink2">
                            {value}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Sticky note */}
              <div
                className="inline-block relative bg-dc-sticky-yellow border border-black/[0.07] p-5 -rotate-[1.5deg] max-w-[260px]"
                style={{ boxShadow: "3px 4px 0 rgba(0,0,0,0.08)" }}
              >
                <Tape rotate="rotate-[3deg]" width={55} />
                <p className="font-hand text-[20px] text-dc-ink2 leading-[1.5]">
                  avg response under 24 hrs ⚡
                </p>
                <p className="font-hand text-[16px] text-dc-ink3 mt-1">
                  we actually check our email 😄
                </p>
              </div>

              {/* FAQ */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 }}
              >
                <p className="font-mono text-[13px] tracking-[0.2em] uppercase text-dc-ink3 mb-5">
                  // frequently asked questions
                </p>
                <div className="border-t border-dashed border-black/[0.14]">
                  {FAQS.map(({ q, a }) => (
                    <FaqItem key={q} q={q} a={a} />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* ── RIGHT: form ───────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div
                className="relative bg-dc-paper border border-black/[0.07]"
                style={{ boxShadow: "5px 7px 0 rgba(0,0,0,0.06)" }}
              >
                <Tape rotate="-rotate-[2.5deg]" width={80} />

                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-10 flex flex-col items-center text-center gap-5"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 240,
                        damping: 16,
                      }}
                      className="text-6xl"
                    >
                      🎉
                    </motion.span>
                    <h3 className="font-serif font-bold text-dc-ink text-2xl">
                      message received!
                    </h3>
                    <p className="font-mono text-[14px] text-dc-ink3 max-w-sm leading-relaxed">
                      we&apos;ve got your enquiry and will get back within 24
                      hours. exciting things ahead!
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="font-mono text-[13px] uppercase tracking-wider border-2 border-dc-ink px-6 py-3 hover:bg-dc-ink hover:text-dc-cream transition-all duration-200 mt-2"
                    >
                      send another →
                    </button>
                  </motion.div>
                ) : (
                  <div className="p-8 lg:p-10">
                    {/* Form header */}
                    <div className="flex items-center justify-between pb-5 mb-6 border-b border-dashed border-black/[0.1]">
                      <div>
                        <p className="font-hand text-[24px] text-dc-ink font-bold">
                          get a free quote ✦
                        </p>
                        <p className="font-mono text-[11px] text-dc-ink3 mt-0.5">
                          // no commitment · we reply within 24 hrs
                        </p>
                      </div>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-5"
                      noValidate
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Field label="Full name" id="name">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            required
                            className={inputCls}
                          />
                        </Field>
                        <Field label="Email address" id="email">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            required
                            className={inputCls}
                          />
                        </Field>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Field label="Phone number" id="phone">
                          <input
                            type="tel"
                            name="phone"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 XXXXX XXXXX"
                            required
                            className={inputCls}
                          />
                        </Field>
                        <Field label="Your city" id="location">
                          <input
                            type="text"
                            name="location"
                            id="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="Delhi, Mumbai, Bangalore..."
                            required
                            className={inputCls}
                          />
                        </Field>
                      </div>

                      <Field label="Service you need" id="expertise">
                        <div className="relative">
                          <select
                            name="expertise"
                            id="expertise"
                            value={formData.expertise}
                            onChange={handleChange}
                            required
                            className={
                              inputCls + " appearance-none pr-8 cursor-pointer"
                            }
                          >
                            <option value="" disabled>
                              Select a service...
                            </option>
                            <option value="Web Development">
                              🌐 Web Development
                            </option>
                            <option value="App Development">
                              📱 Mobile App Development
                            </option>
                            <option value="UI/UX Design">
                              🎨 UI/UX Design
                            </option>
                            <option value="AI/ML Solutions">
                              🤖 AI/ML Solutions
                            </option>
                            <option value="Digital Analytics">
                              📊 Digital Analytics
                            </option>
                            <option value="Digital Marketing">
                              📣 Digital Marketing & SEO
                            </option>
                            <option value="Training">
                              🧑‍💻 Training & Workshops
                            </option>
                            <option value="Something else">
                              ✦ Something else
                            </option>
                          </select>
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-dc-ink3 pointer-events-none text-[12px]">
                            ▾
                          </span>
                        </div>
                      </Field>

                      <Field label="Tell us about your project" id="project">
                        <textarea
                          name="project"
                          id="project"
                          rows={4}
                          value={formData.project}
                          onChange={handleChange}
                          placeholder="What are you building? Share your goals, timeline, or any references — as much or as little as you like."
                          maxLength={800}
                          required
                          className={inputCls + " resize-none"}
                        />
                        <p className="font-mono text-[11px] text-dc-ink3/40 text-right mt-1">
                          {formData.project.length}/800
                        </p>
                      </Field>

                      <button
                        type="submit"
                        disabled={sending}
                        className="group relative font-mono text-[14px] font-bold uppercase tracking-[0.15em] bg-dc-ink text-dc-cream w-full py-4 overflow-hidden disabled:opacity-40 disabled:cursor-not-allowed mt-1"
                      >
                        <span className="absolute inset-0 bg-dc-red translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        <span className="relative">
                          {sending ? "sending..." : "get a free quote ✦"}
                        </span>
                      </button>
                    </form>
                  </div>
                )}
              </div>

              <p className="font-mono text-[12px] text-dc-ink3/40 text-center mt-4 tracking-wide">
                // no spam. no selling your data. just a real conversation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <TornEdge from="dc-cream2" to="dc-cream" />
    </>
  );
};

export default Contact;
