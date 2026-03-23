"use client";

import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   Types
───────────────────────────────────────────────────────────── */
interface LeadFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  description: string;
}

const INITIAL: LeadFormData = {
  name: "",
  phone: "",
  email: "",
  service: "",
  description: "",
};

const SERVICES = [
  "web development",
  "app development",
  "ui/ux design",
  "ai / ml solutions",
  "digital analytics",
  "digital marketing",
  "game development",
  "not sure yet",
] as const;

/* ─────────────────────────────────────────────────────────────
   Tape strip
───────────────────────────────────────────────────────────── */
const Tape = () => (
  <div
    style={{
      position: "absolute",
      width: 80,
      height: 22,
      background: "rgba(254,240,138,0.7)",
      border: "0.5px solid rgba(160,130,0,0.22)",
      top: -11,
      left: "50%",
      transform: "translateX(-50%) rotate(-2deg)",
      zIndex: 10,
      pointerEvents: "none",
    }}
    aria-hidden
  />
);

/* ─────────────────────────────────────────────────────────────
   Paper pin SVG
───────────────────────────────────────────────────────────── */
const Pin = ({ color, side }: { color: string; side: "left" | "right" }) => (
  <svg
    width="18"
    height="26"
    viewBox="0 0 18 26"
    fill="none"
    style={{
      position: "absolute",
      top: -13,
      [side]: 20,
      transform: side === "left" ? "rotate(-8deg)" : "rotate(6deg)",
      pointerEvents: "none",
    }}
    aria-hidden
  >
    <circle cx="9" cy="7" r="6.5" fill={color} />
    <circle cx="9" cy="7" r="3.5" fill="rgba(255,255,255,0.28)" />
    <line
      x1="9"
      y1="13"
      x2="9"
      y2="26"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

/* ─────────────────────────────────────────────────────────────
   Component
───────────────────────────────────────────────────────────── */
const LeadPopup: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState<LeadFormData>(INITIAL);

  /* Show only to new visitors — checked after hydration */
  useEffect(() => {
    const seen = localStorage.getItem("dcoder_popup_shown");
    if (!seen) {
      const t = setTimeout(() => setVisible(true), 3000);
      return () => clearTimeout(t);
    }
  }, []);

  const close = () => {
    localStorage.setItem("dcoder_popup_shown", "true");
    setVisible(false);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(false);
  };

  const handleSubmit = async () => {
    const { name, phone, email, service } = formData;
    if (!name || !phone || !email || !service) {
      setError(true);
      return;
    }

    setSending(true);
    try {
      await emailjs.send(
        "service_uqmtxdg",
        "template_6i6iiik",
        {
          name,
          phone,
          email,
          expertise: service,
          project: formData.description || "— no description provided —",
          location: "via lead popup",
        } as unknown as Record<string, unknown>,
        "8ohgmMCekGJIm_2yC",
      );
      setSuccess(true);
      localStorage.setItem("dcoder_popup_shown", "true");
    } catch {
      toast.error("something went wrong. please try again.");
    } finally {
      setSending(false);
    }
  };

  /* Shared input style */
  const inputStyle: React.CSSProperties = {
    fontFamily: "'Space Mono', monospace",
    fontSize: 12,
    color: "#1a1208",
    background: "#f0ebe0",
    border: "1px solid rgba(0,0,0,0.14)",
    padding: "10px 12px",
    outline: "none",
    width: "100%",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Space Mono', monospace",
    fontSize: 10,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "#7a7060",
    marginBottom: 5,
    display: "block",
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* ── Backdrop ── */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={close}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(26,18,8,0.72)",
              zIndex: 999,
            }}
            aria-hidden
          />

          {/* ── Card ── */}
          <motion.div
            key="popup"
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            role="dialog"
            aria-modal
            aria-label="Quick enquiry form"
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 1000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                background: "#fffef9",
                border: "1px solid rgba(0,0,0,0.08)",
                position: "relative",
                overflow: "visible",
                width: "100%",
                maxWidth: 540,
                pointerEvents: "auto",
              }}
            >
              {/* Tape + pins */}
              <Tape />
              <Pin color="#c0392b" side="left" />
              <Pin color="#c8860a" side="right" />

              {/* Torn corner */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: 44,
                  height: 44,
                  background: "#f0ebe0",
                  clipPath: "polygon(100% 0,100% 100%,0 100%)",
                  pointerEvents: "none",
                }}
                aria-hidden
              />

              {/* Close button */}
              <button
                onClick={close}
                aria-label="Close"
                style={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: "#7a7060",
                  fontSize: 18,
                  lineHeight: 1,
                  zIndex: 20,
                  padding: 4,
                }}
              >
                ✕
              </button>

              {/* ── Success state ── */}
              {success ? (
                <div
                  style={{
                    padding: "48px 36px",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background: "#fef08a",
                      border: "2px solid #1a1208",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 24,
                      transform: "rotate(-6deg)",
                      marginBottom: 8,
                    }}
                  >
                    ✦
                  </div>
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 26,
                      fontWeight: 900,
                      color: "#1a1208",
                      lineHeight: 1.2,
                    }}
                  >
                    we&apos;ve got your
                    <br />
                    <em style={{ fontStyle: "italic", color: "#c0392b" }}>
                      details!
                    </em>
                  </p>
                  <p
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 11.5,
                      color: "#7a7060",
                      lineHeight: 1.8,
                      maxWidth: 300,
                    }}
                  >
                    our team will reach out within 24 hours.
                    <br />
                    no waiting around — we&apos;re quick.
                  </p>
                  <p
                    style={{
                      fontFamily: "'Caveat', cursive",
                      fontSize: 17,
                      color: "#b0a898",
                      marginTop: 4,
                    }}
                  >
                    — the dcoder team ✦
                  </p>
                  <button
                    onClick={close}
                    style={{
                      marginTop: 8,
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      background: "#1a1208",
                      color: "#f0ebe0",
                      border: "none",
                      borderLeft: "3px solid #c8860a",
                      padding: "10px 24px",
                      cursor: "pointer",
                    }}
                  >
                    explore the site →
                  </button>
                </div>
              ) : (
                /* ── Form state ── */
                <div style={{ padding: "18px 24px 16px" }}>
                  <p
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 10,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#7a7060",
                      marginBottom: 10,
                    }}
                  >
                    {"// let's talk"}
                  </p>
                  <h2
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "clamp(18px, 3vw, 22px)",
                      fontWeight: 900,
                      color: "#1a1208",
                      lineHeight: 1.1,
                      marginBottom: 4,
                    }}
                  >
                    tell us what&apos;s in your{" "}
                    <em style={{ fontStyle: "italic", color: "#c0392b" }}>
                      mind.
                    </em>
                  </h2>

                  <p
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 10.5,
                      color: "#7a7060",
                      lineHeight: 1.6,
                      marginBottom: 10,
                    }}
                  >
                    just the essentials.
                    <br />
                    we&apos;ll take it from there.
                  </p>

                  <hr
                    style={{
                      border: "none",
                      borderTop: "1px dashed rgba(0,0,0,0.14)",
                      marginBottom: 10,
                    }}
                  />

                  {/* Name + Phone */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 8,
                      marginBottom: 8,
                    }}
                  >
                    <div>
                      <label style={labelStyle}>your name *</label>
                      <input
                        name="name"
                        type="text"
                        placeholder="full name"
                        value={formData.name}
                        onChange={handleChange}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>phone / whatsapp *</label>
                      <input
                        name="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div style={{ marginBottom: 8 }}>
                    <label style={labelStyle}>email address *</label>
                    <input
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </div>

                  {/* Service */}
                  <div style={{ marginBottom: 8 }}>
                    <label style={labelStyle}>what do you need? *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      style={inputStyle}
                    >
                      <option value="">select a service</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Description — optional */}
                  <div style={{ marginBottom: 4 }}>
                    <label
                      style={{
                        ...labelStyle,
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      briefly describe your idea
                      <span
                        style={{
                          fontFamily: "'Caveat', cursive",
                          fontSize: 13,
                          color: "#b0a898",
                          letterSpacing: 0,
                          textTransform: "none",
                        }}
                      >
                        (optional)
                      </span>
                    </label>
                    <textarea
                      name="description"
                      placeholder="a quick line about what you're building..."
                      value={formData.description}
                      onChange={handleChange}
                      rows={2}
                      style={{ ...inputStyle, resize: "none" }}
                    />
                  </div>

                  {/* Error message */}
                  {error && (
                    <p
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: 10.5,
                        color: "#c0392b",
                        marginBottom: 10,
                        letterSpacing: "0.04em",
                      }}
                    >
                      ✕ please fill in all required fields
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    onClick={handleSubmit}
                    disabled={sending}
                    style={{
                      width: "100%",
                      background: "#1a1208",
                      color: "#f0ebe0",
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      padding: 13,
                      border: "none",
                      borderLeft: "3px solid #c8860a",
                      cursor: sending ? "not-allowed" : "pointer",
                      opacity: sending ? 0.6 : 1,
                      marginTop: 4,
                      transition: "background .2s",
                    }}
                  >
                    {sending ? "sending..." : "→ let's connect"}
                  </button>

                  {/* Skip */}
                  <p
                    onClick={close}
                    style={{
                      textAlign: "center",
                      marginTop: 8,
                      fontFamily: "'Caveat', cursive",
                      fontSize: 16,
                      color: "#b0a898",
                      cursor: "pointer",
                    }}
                  >
                    or{" "}
                    <span
                      style={{
                        textDecoration: "underline",
                        textUnderlineOffset: 3,
                      }}
                    >
                      skip for now
                    </span>{" "}
                    and explore the site →
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LeadPopup;