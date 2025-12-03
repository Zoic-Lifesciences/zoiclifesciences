"use client";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";
import TeamCard from "../../components/TeamCard"

const team = [
  
  {
    name: "Renu",
    role: "Account Executive",
    image: "/team/Renu.jpeg",
    bio: "My name is Renu. I work as an Account Executive at Zoic Lifesciences.My journey at Zoic started in 2019.In these years, I have learned a lot about work and life, thanks to the Zoic environment. The workingsystem at Zoic Lifesciences is very good. Zoic Lifesciences pays great attention to both the quality and production of its products. Everyone has a job that is done well, every operation is checked by the next operation. Zoic Lifesciences supports all its employees in every happy and difficult time. I am grateful to you for trusting me as an Account Executive at Zoic Lifesciences.",
  },
  {
    name: "Mukesh Rawat",
    role: "",
    image: "/team/Mukesh_rawat.jpeg",
    bio: "Zoic is the best place to work because it offers a supportive environment, encourages learning, and provides opportunities to grow. The management is approachable, the culture is positive, and I feel motivated and valued in my work.",
  },
  {
    name: "Priya Singh",
    role: "",
    image: "/team/Priya_singh.jpeg",
    bio: "My 2 year journey at zoic Life sciences has been truly wonderful.The best part of being here has been the opportunity to learn grow and support.I have gained invaluable knowledge and skills.Thank you so much zoic Life sciences for being such an important part of my career.",
  },
  {
    name: "Anjali meena",
    role: "",
    image: "/team/Anjali_meena.jpeg",
    bio: "Hello everyone.My name is Anjali Meena .Working in zoic life sciences for the last 3 months.My journey till nowfilled with my personal growth ,valuable learning experiences.My colleagues and managers are very supportive to me as they are committed to employees growth and development.Encouraging team work ,provide guidance and sharing wealth of knowledge.Thanku zoic for being soo kind.",
  },
  {
    name: "Rajni kaur",
    role: "Sales Executive,",
    image: "/team/",
    bio: "Working as a Sales Executive, I have learned a lot about customer coordination, product handling and product knowledge. The best thing about this company provides great support, clear guidance and a friendly work environment.",
  },
  {
    name: "ANJALI KATARIA",
    role: "",
    image: "/team/",
    bio: "I, Anjali, have been associated with Zoic Life Sciences for the past 1.5 years, and my experience with the organization has been highly rewarding. Throughout my journey here, I have had the opportunity to learn, grow, and enhance my skills in a supportive and collaborative work environment.",
  },
  {
    name: "SIMRAN THAKUR",
    role: "",
    image: "/team/",
    bio: "At Zoic, I feel THAT I belong to this organization.Encouraging insights &amp; deep life lessons I receive on a time to time basis from the leadership. Perfect professional and personal work life balance.",
  },
  {
    name: "TRIPTI SHARMA",
    role: "",
    image: "/team/",
    bio: "25TH- SEPT- 2025 How fast time flies, it has been more than 5 years.Exceptional work culture, excellent learning environment, 360 degree support.",
  },
  {
    name: "Manmohan Semwal",
    role: "Accounts & Finance",
    image: "/team/",
    bio: "With over 8 years of experience at Zoic Lifesciences, I’ve grown both professionally and personally.Under the guidance of my supportive seniors and Managing Director, I’ve learned that hard work and dedication are the true keys to success. Zoic Lifesciences has given me the opportunity to learn continuously and contribute with purpose every day.",
  },
];

export default function TeamPage() {
  return (
    <>
    
        <div className=" flex justify-center w-screen bg-gradient-to-b ">
          <div className="w-[90%] bg-[#1BA3CD]/10 mt-[15vh] py-10 rounded-3xl mb-[10vh]">
            {/* Header */}
          <div className="text-center max-w-3xl mx-auto px-4">
            <h1
              className="text-4xl md:text-5xl font-bold text-[#048DB7]"
            >
              Meet Our Team
            </h1>

            <p
              className="mt-4 text-gray-600 text-lg"
            >
              At <span className="font-semibold text-[#048DB7]">ZOIC</span>, we grow together as one family.  
              Our leadership & team bring passion, innovation, and excellence to every step.
            </p>
          </div>

          <section className="space-y-10 py-12">
      {team.map((member, idx) => (
        <TeamCard key={idx} {...member} />
      ))}
    </section>

          {/* Leadership Highlight Section */}
          <div className="max-w-6xl mx-auto mt-24 px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-linear-to-b from-[#1BA3CD] to-[#090A69] text-white p-12 rounded-3xl shadow-xl flex flex-col md:flex-row items-center gap-10"
            >

              <div>
                <h2 className="text-3xl font-semibold">Leadership That Inspires Excellence</h2>
                <p className="mt-3 text-blue-100 text-md leading-relaxed">
                  Under the guidance of our leadership team, ZOIC has become a trusted name 
                  in pharmaceutical innovation, PCD franchise development, and quality-driven healthcare solutions.
                </p>
              </div>
            </motion.div>
          </div>
    </div>
          
        </div>  
        <Footer />
    </>
  );
}
