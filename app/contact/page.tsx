"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/NavBar";
import Footer from "../components/Footer";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  _honeypot?: string;
};

export default function ContactPage() {
  const THEME = "#048DB7";
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    _honeypot: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(null);

  function update<K extends keyof FormState>(k: K, v: FormState[K]) {
    setForm((s) => ({ ...s, [k]: v }));
  }

  function validate() {
    if (!form.name.trim()) return "Please enter your name.";
    if (!/^[\w.+-]+@[\w-]+\.[\w.-]+$/.test(form.email)) return "Please enter a valid email.";
    if (!form.subject.trim()) return "Please enter a subject.";
    if (!form.message.trim() || form.message.trim().length < 10) return "Message must be at least 10 characters.";
    // optional phone validation
    if (form.phone && !/^[0-9+() -]{6,20}$/.test(form.phone)) return "Please enter a valid phone number.";
    if (form._honeypot && form._honeypot.trim().length > 0) return "Spam detected."; // honeypot
    return null;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);
    const err = validate();
    if (err) {
      setStatus({ ok: false, msg: err });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => null);
      if (!res.ok) {
        setStatus({ ok: false, msg: data?.message ?? "Failed to send. Try again later." });
      } else {
        setStatus({ ok: true, msg: "Thanks — your message has been sent. We’ll get back to you soon." });
        setForm({ name: "", email: "", phone: "", company: "", subject: "", message: "", _honeypot: "" });
      }
    } catch (err) {
      setStatus({ ok: false, msg: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f6fbfd] to-white text-gray-900">

        <Header />

      <section className="max-w-6xl mx-auto px-6 py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Info */}
          <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl font-[cursive] md:text-5xl font-bold" style={{ color: THEME }}>
              <span className="text-black">Contact </span>ZOIC
            </h1>
            <p className="mt-4 text-gray-700 max-w-xl">
              We're here to help — reach out for partnerships, careers, product enquiries or general questions. Our team
              aims to respond within 1–2 business days.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <h4 className="text-sm font-semibold text-gray-600">Head Office</h4>
                <p className="text-gray-700 mt-1 text-sm">Plot No. X, Industrial Area, Chandigarh, India</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <h4 className="text-sm font-semibold text-gray-600">General Enquiries</h4>
                <p className="text-gray-700 mt-1 text-sm">contact@zoicpharma.com</p>
                <p className="text-gray-700 mt-1 text-sm">+91 98765 43210</p>
              </div>
            </div>

            <div className="mt-8">
              <h5 className="text-sm font-medium text-gray-600">Office Hours</h5>
              <p className="text-gray-700 text-sm">Mon — Fri: 9:30am — 6:00pm IST</p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100"
              aria-label="Contact form"
            >
              <div className="flex gap-3">
                <input
                  aria-label="Full name"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="w-1/2 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#bde6f3] outline-none"
                  placeholder="Full name"
                />
                <input
                  aria-label="Company"
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                  className="w-1/2 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#bde6f3] outline-none"
                  placeholder="Company (optional)"
                />
              </div>

              <div className="flex gap-3 mt-4">
                <input
                  aria-label="Email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="w-1/2 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#bde6f3] outline-none"
                  placeholder="Email"
                  type="email"
                />
                <input
                  aria-label="Phone"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="w-1/2 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#bde6f3] outline-none"
                  placeholder="Phone (optional)"
                  type="tel"
                />
              </div>

              <input
                aria-label="Subject"
                value={form.subject}
                onChange={(e) => update("subject", e.target.value)}
                className="w-full mt-4 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#bde6f3] outline-none"
                placeholder="Subject"
              />

              <textarea
                aria-label="Message"
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                className="w-full mt-4 px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#bde6f3] outline-none min-h-[140px]"
                placeholder="Write your message..."
              />

              {/* honeypot - invisible for users */}
              <input
                style={{ display: "none" }}
                value={form._honeypot}
                onChange={(e) => update("_honeypot", e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                name="_hp"
              />

              {status && (
                <div
                  role="status"
                  className={`mt-4 text-sm p-3 rounded-md ${status.ok ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}
                >
                  {status.msg}
                </div>
              )}

              <div className="mt-6 flex items-center gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  style={{ backgroundColor: THEME }}
                  className="px-6 py-3 rounded-xl text-white font-semibold shadow hover:brightness-95 disabled:opacity-60 transition"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setForm({ name: "", email: "", phone: "", company: "", subject: "", message: "", _honeypot: "" });
                    setStatus(null);
                  }}
                  className="px-4 py-3 rounded-lg bg-gray-50 border border-gray-200"
                >
                  Reset
                </button>
              </div>

              <p className="text-xs text-gray-400 mt-4">
                By contacting ZOIC you agree our team may contact you about your inquiry. We respect your privacy.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
