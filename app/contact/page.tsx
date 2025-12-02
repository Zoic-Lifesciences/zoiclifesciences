"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/NavBar";
import Footer from "../components/Footer";
import { FiMapPin, FiPhone } from "react-icons/fi";


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
    <main className="min-h-screen text-gray-900">

      <Header />

      <section className=" px-6 py-40 w-screen flex flex-col items-center">
        <div className="flex w-[70%] h-[30vh] justify-between">
          <div className="w-[50%]">
            <h1 className="text-6xl font-bold mb-5">Get in touch</h1>
            <p className="w-[90%] text-gray-700">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Ipsum Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
          </div>
          <div className="flex w-[50%] justify-between text-start">
            <div className="flex flex-col gap-2">
    <FiMapPin className="text-blue-600" size={28}/>
    <h1>Our Address</h1>
    <span>123 Ahmedabad, Gujarat, India</span>
  </div>
          <div className="flex flex-col gap-2">
    <FiPhone className="text-blue-600" size={28}/>
    <h1>Our Phone Details</h1>
    <span>+91 98765 43210</span>
  </div>
          </div>
          
        </div>

       

        <div className="mt-10 grid lg:grid-cols-2 gap-12 items-center bg-gradient-to-t w-screen from-white via-white to-[#1BA3CD]/40 p-10   ">
          {/* Left: Info */}
          <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold" style={{ color: THEME }}>
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
              className=" rounded-2xl p-6 md:p-8"
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

       <div className="w-full h-[60vh] mb-10 rounded-xl overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.509322301689!2d78.03276167556386!3d30.30802747479193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909299a31b23237%3A0xa0d43576d12b70c3!2sZOIC%20LIFE%20SCIENCES%2F%20ONE%20OF%20THE%20BEST%20PHARMA%20COMPANIES%20IN%20INDIA!5e0!3m2!1sen!2sin!4v1764604536160!5m2!1sen!2sin"
        width="100%"
        height="100%"
        loading="lazy"
      ></iframe>
    </div>

      <Footer />
    </main>
  );
}
