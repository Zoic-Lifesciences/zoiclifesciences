"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { useState,useRef } from "react";
import { X } from "lucide-react";
import Footer from "../components/Footer";
import { useRouter } from "next/navigation";
import { useScroll, useTransform } from "framer-motion";

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
const items=[
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
            ]

export default function CareersPage() {

  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState<any>(null);
  

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900">

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-48 px-6 bg-[url('/career-cover.webp')] bg-cover bg-no-repeat bg-top">

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-5xl text-white"
      >
        Join Our Mission to Redefine Healthcare
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="relative mt-4 max-w-2xl text-gray-200"
      >
        At{" "}
        <span className="font-semibold text-[#04B8E0]">
          ZOIC
        </span>
        , we empower people who innovate, care, and create meaningful impact
        in global healthcare.
      </motion.p>
    </section>

    {/* Open Positions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-black text-center mb-10">
            Current Openings
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * i }}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold text-[#1BA3CD] mb-3">
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
                </div>
                
                <button
                  onClick={() => setSelectedJob(job)}
                  className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-[#1BA3CD] text-white font-medium hover:bg-[#090A69] transition-colors"
                >
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Benefits Section */}
      <section className="py-16 bg-linear-to-b from-[#1BA3CD] to-[#090A69] flex flex-col gap-12">
        <div className=" px-6 flex flex-col items-center">
          <h2 className="text-5xl text-center text-white mb-10 w-[100%]">
            Why Work  With Us
          </h2>
          {/* Left Content */}
                    <div className="flex flex-col h-full gap-5 md:w-[85%] w-full  items-center">
                      <div className="flex md:flex-row flex-col h-[50vh] gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative bg-white flex flex-col md:h-full h-[90vh] md:w-[20vw] w-[80vw] overflow-hidden group shadow-lg hover:scale-105 transition-transform duration-300"
            style={{
              borderTopRightRadius: "20%",
              borderBottomLeftRadius: "20%",
            }}
            data-aos="flip-up"
            data-aos-delay={index * 200} // stagger cards
          >

            <div className=" w-full  bg-opacity-50 transition duration-300 flex flex-col justify-end text-left p-6">
              <h3 className="regulator-nova-alts font-bold tracking-wider text-2xl md:text-xl mb-10">{item.title}</h3>
              <p className="regulator-nova-alts-straight text-xl mt-2">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

                    </div>

         
        </div>
        <div className="mx-auto">
            <button 
            onClick={() => router.push("/careers/life-at-zoic")}
            className="bg-[#048DB7] text-white font-semibold px-6 py-3 rounded-xl hover:text-indigo-800 cursor-pointer transition-all hover:shadow-md hover:-translate-y-1">
              Explore Life At ZOIC
            </button>
        </div>
      </section>

      

      {/* Call to Action
      <section className="py-16 text-center bg-[#090A69] text-white">
        <h2 className="text-3xl font-semibold mb-4">Can’t Find Your Role?</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          We’re always looking for talented individuals. Drop your resume and
          we’ll reach out when a suitable role opens up.
        </p>
        <button className="bg-white text-[#090A69] font-semibold px-6 py-3 rounded-xl hover:bg-indigo-100 transition-all">
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
                  className="w-full text-sm border border-gray-300 rounded-lg px-3 py-2 cursor-pointer file:mr-3 file:py-1 file:px-3 file:border-0 file:bg-[#048DB7] file:text-white file:rounded-md hover:file:bg-[#090A69]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#048DB7] text-white py-2 rounded-xl font-medium hover:bg-[#090A69] transition"
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
