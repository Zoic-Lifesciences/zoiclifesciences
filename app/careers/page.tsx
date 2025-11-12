"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { X } from "lucide-react";
import Footer from "../components/Footer";
import { useRouter } from "next/navigation";

const jobs = [
  {
    title: "Pharmaceutical Sales Executive",
    location: "Chandigarh, India",
    type: "Full-time",
    description:
      "Drive growth by building trusted relationships with healthcare professionals for our innovative products.",
  },
  {
    title: "Quality Assurance Officer",
    location: "Baddi, Himachal Pradesh",
    type: "Full-time",
    description:
      "Ensure GMP compliance and product quality to meet global standards and regulatory requirements.",
  },
  {
    title: "R&D Chemist",
    location: "Ahmedabad, India",
    type: "Full-time",
    description:
      "Lead formulation development and stability testing to create new, effective healthcare solutions.",
  },
];

export default function CareersPage() {

  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState<any>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-48 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-[cursive] text-black"
        >
          Join Our Mission to Redefine Healthcare
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 max-w-2xl text-gray-600"
        >
          At{" "}
          <span className="font-semibold text-[#048DB7]">
            ZOIC
          </span>
          , we empower people who innovate, care, and create meaningful impact
          in global healthcare.
        </motion.p>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white flex flex-col gap-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-row items-center">
          <h2 className="text-3xl font-[cursive] text-center text-[#048DB7] mb-10 w-[100%]">
            Why Work  With Us
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Innovative Environment",
                text: "Work with modern pharmaceutical technology and research-driven teams.",
              },
              {
                title: "Career Growth",
                text: "Grow in a culture that values your learning, contribution, and leadership.",
              },
              {
                title: "Global Impact",
                text: "Help us make essential healthcare accessible to every corner of the world.",
              },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * i }}
                className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-gray-200"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mx-auto">
            <button 
            onClick={() => router.push("/careers/life-at-zoic")}
            className="bg-[#048DB7] text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-500 cursor-pointer transition-all hover:shadow-md hover:-translate-y-1">
              Explore Life At ZOIC
            </button>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-gradient-to-b from-indigo-50 to-blue-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#048DB7] font-[cursive] text-center mb-10">
            Current Openings
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * i }}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold text-indigo-700 mb-3">
                  {job.title}
                </h3>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-2" /> {job.location}
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <Clock className="w-4 h-4 mr-2" /> {job.type}
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  {job.description}
                </p>
                <button
                  onClick={() => setSelectedJob(job)}
                  className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-[#048DB7] text-white font-medium hover:bg-indigo-700 transition-colors"
                >
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action
      <section className="py-16 text-center bg-indigo-700 text-white">
        <h2 className="text-3xl font-semibold mb-4">Can’t Find Your Role?</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          We’re always looking for talented individuals. Drop your resume and
          we’ll reach out when a suitable role opens up.
        </p>
        <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl hover:bg-indigo-100 transition-all">
          Submit Resume
        </button>
      </section> */}

      <AnimatePresence>
        {selectedJob && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedJob(null)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-lg max-w-lg w-full p-8 relative"
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>

              <h2 className="text-2xl font-bold text-[#048DB7] mb-2">
                Apply for {selectedJob.title}
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                Location: {selectedJob.location} • {selectedJob.type}
              </p>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="file"
                  className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 cursor-pointer file:mr-3 file:py-1 file:px-3 file:border-0 file:bg-[#048DB7] file:text-white file:rounded-md hover:file:bg-indigo-700"
                />
                <button
                  type="submit"
                  className="w-full bg-[#048DB7] text-white py-2 rounded-xl font-medium hover:bg-indigo-700 transition"
                >
                  Submit Application
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

        <Footer />
    </main>
  );
}
