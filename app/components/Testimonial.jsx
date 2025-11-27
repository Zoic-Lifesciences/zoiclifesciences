// components/ClientTestimonials.js
import Image from "next/image";

const topTestimonials = [
  {
    name: "Mr. SAJAD AHMAD SHAH",
    role: "from Jammu and Kashmir praises Zoic LifeSciences for effective products and excellent support",
    text: "Zoic LifeSciences is the best pharma company in the market, Their products are very effective in quality, efficiency and getting excellent feedback from my Doctors and customers. I am Very much Happy in doing Business with this Company.",
    image: "/person.png",
  },
  {
    name: "Mr. KAMAL",
    role: "from Ganderbal Kashmir",
    text: "Zoic Lifesciences is my favorite company, all the products have good efficiency. Most of the doctors of our society likes the products of Zoic Company, I am very happy in doing business with Zoic Lifesciences. I thank Zoic Lifesciences and it's Managing Director.",
    image: "/person.png",
  },
  {
    name: "Mr. DILEEP KUMAR DWIVEDI",
    role: "from Lucknow, Uttar Pradesh",
    text: "1. Zoic Life Sciences Private Limited is a very good third-party manufacturing company, with excellent results for all of its products.A big thank you to the company Director and Priya Singh and a big thank you to the team Zoic.",
    image: "/person.png",
  },
  {
    name: "Dr. SANJAY SINHA",
    role: "from Vidisha, Madhya Pradesh",
    text: "THANKYOU for best Deal of Zoic Products Zoic Life sciences is one of the best Pharma Company that i have Founded",
    image: "/person.png",
  },
  {
    name: "Mr. ADITIYA",
    role: "from Laukaha Madhubani Bihar",
    text: "Zoic Life Sciences is the best company in the market, Their products are very effective in quality and getting excellent feedback from my Doctor customers. Zoic as company and their executive Ms. Priya Singh is giving me best support from their side for my growth also. I am Very much Happy in doing Business with this Company. I thank Zoic Life sciences and it&#39;s Managing Director Mr. Gupta sir.",
    image: "/person.png",
  },
  {
    name: "RG Medical Hall",
    role: "from Fazilka Punjab.",
    text: "Zoic Life Sciences is the best company in the market, Their products are very effective in quality and getting excellent feedback from my Doctor customers. The company and their executive Miss Priya is giving me best support from their side. I am Happy in doing Business with this Company. I am very thakful to Zoic Life Sciences to provide me good quality products with reasonable price.",
    image: "/person.png",
  },
  {
    name: "Mishra Pharma",
    role: "from Farrukhabad,India",
    text: "I, am working with Zoic life Sciences from last 2 years,I am very glad to inform you that Zoic life Sciences is the very good marketing company, company have biggest range and best quality products,Docters giving me excellent feedback about quality, packaging and effectiveness, overall my experience is great with the Zoic life Sciences",
    image: "/person.png",
  },
  {
    name: "Mr. Imroz Siddiqui",
    role: "from hyderabad, telangana",
    text: "zoic life sciences products are excellent and very effective also and getting good response from patients.iam getting good support from sales executive Anjali ji and I&#39;m very much thankful to Anjali ji for support and service",
    image: "/person.png",
  },
  {
    name: "Mr. HARIHARAN",
    role: "from MANAGING DIRECTOR OF PEARL GROUP OF COMPANY- TRICHY TAMILNADU.",
    text: "I, am working with Zoic life Sciences from last 2 years,I am very glad to inform you that Zoic life Sciences is the very good marketing company, company have biggest range and best quality products,Docters giving me excellent feedback about quality, packaging and effectiveness, overall my experience is great with the Zoic life Sciences",
    image: "/person.png",
  },
  
  // add more as needed
];

const bottomTestimonials = [
  {
    name: "Mr. Pushpraj Patel",
    role: "from Madhya Pradesh",
    text: "Pradesh.Zoic Life Science Is Best PCD Pharma ,Company.Thes Make Quality Product ,So That Very Easy To Competite Market.Your Marketing Team Is Very Supportive,Very Humble Especially Ms Rajni Kaur Mam.My Condition Is Not Good ,I Have Struggle In Market But Respected Rajni Mam All Time Motivated Me.Thanks To Zoic Life Science",
    image: "/person.png",
  },
  {
    name: "Jagdamba Bio Pharma",
    role: "from Saharanpur",
    text: "Your products are very effective in quality and also rates r also good Ms. Rajni explains very well regarding products nd talk time to time taking Feedback regarding any query. Thankyou Zoic Life sciences",
    image: "/person.png",
  },
  {
    name: "Kamboj medical store",
    role: "from Kadrabad Bijnor, Uttar Pradesh",
    text: "Zoic Life Sciences is the best company in the market, Their products are very effective in quality and getting excellent feedback from my Doctor customers. Zoic as company and their executive Ms. Rajni kaur is giving me best support from their side for my growth also. I am Very much Happy in doing Business with this Company. I thank Zoic Life sciences and it&#39;s Managing Director Mr. Gupta sir.",
    image: "/person.png",
  },
  {
    name: "Mr. Dhiraj yadav",
    role: "from Palghar, maharashtra.",
    text: "I have recently joined ZOIC LIFE SCIENCES. Ordered some of the product recently. Quality I can&#39;t say now because I just received the courier but yes the packaging is good and can be improved little �� And about anjali mam, she i doing a great job, very sensible, honest and supportive.. Just because of her professional behaviour, communication skills,m working with zoic rest depend on the quality too.. Hope for the better with zoic in coming future. Thanku",
    image: "/person.png",
  },
  // {
  //   name: "Mr. Vikram gupta",
  //   role: "from Elixir Life Sciences.",
  //   text: "We are very much pleased to inform you that our company Zoic Life Sciences has reached the heights in the pharma industry under the guidance of our director Mr. Sanjay Gupta ji we are not only the manufacturer but also exporters of medicine around the world. Now we are concentrating on capturing the prescription based market with the new molecules and lab tested medicine in the Indian market. Our products are available from Kashmir to Kanyakumari and Gujarat to North eastern states. Our dashing sales head Mr. Arindam Guptaji not only motivates us but also provides the tocks as per the market requirement on time. Our sales coordinator Ms. Tripti Sharma helps us in activities of our day-to-day sales promotions and also, to solve our sales management issues. Now we are expecting our company to become the leading company with all new molecules, and research centres and increase the presence in Indian market.",
  //   image: "/person.png",
  // },
  {
    name: "Mr. Hari",
    role: "from Tamil Nadu.",
    text: "10yrs i am running zoic life science very good response and 100%quality there in all product packing also very good .once doctor purchase regularly order given ....company all employe good response immediately send the bill that day dispatched to stock .staff belive the MR and MR also beliving the zoic staff...100% willing to take zoic life science...very very very good company....",
    image: "/person.png",
  },
  {
    name: "PKS Pharma",
    role: "from Tamil Nadu",
    text: "Zoic Life Sciences is the best company in the market, Their products are very effective in quality and getting excellent feedback from my Doctor customers. Zoic as company and their executive Ms. Tripti Sharma is giving me best support from their side for my growth also. I am Very much Happy in doing Business with this Company. I thank Zoic Life sciences and it&#39;s Managing Director Mr. Gupta sir.",
    image: "/person.png",
  },
  {
    name: "Mr. Brijesh",
    role: "from PRATAPGARH, UTTAR PRADESH",
    text: "Zoic life science company is very good company and all products very good all staff behaviour is good tripti Sharma mam is also good she always understand my problem . everytime she ready to listen my issue and solve them. Her support regarding sales to managing other things is smoothly going . Doing my work on time.",
    image: "/person.png",
  },
];

export default function Testimonial() {
  return (
    <section className="relative overflow-hidden py-16 bg-linear-to-b from-[#FFFFFF] to-[#D3EDFF]">
      <div className="text-start mb-10 flex justify-center">
        <div className="flex md:flex-row flex-col justify-between w-[80%] items-center">
          <div>
            <h2 className="md:text-6xl text-5xl text-[#090A69]">
              What <span className="text-[#048DB7]">Our Clients</span> Say
            </h2>
            <p className="text-gray-600 mt-2">
              Hear Directly From Our Satisfied Partners
            </p>
          </div>

          <button className="px-6 py-4 md:mt-0 mt-10 min-h-0 bg-[#048DB7] hover:bg-sky-600 text-white rounded-full shadow-md transition">
            Review us on Google
          </button>
        </div>
      </div>

      {/* Upper Row - Marquee Left */}
      <div className="overflow-hidden whitespace-nowrap mb-8">
        <marquee behavior="scroll" direction="left" scrollamount="7">
          <div className="inline-flex gap-6">
            {[...topTestimonials, ...topTestimonials].map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </marquee>
      </div>

      {/* Lower Row - Marquee Right */}
      <div className="overflow-hidden whitespace-nowrap">
        <marquee behavior="scroll" direction="right" scrollamount="7">
          <div className="inline-flex gap-6">
            {[...topTestimonials, ...bottomTestimonials].map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </marquee>
      </div>
    </section>
  );
}

function TestimonialCard({ name, role, text, image }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 md:w-[400px] w-[300px] shrink-0 overflow-hidden">
      <div className="text-gray-500 text-2xl mb-2">“</div>
      <p className="text-gray-600 text-sm mb-4 break-words whitespace-normal">{text}</p>
      <div className="flex items-center gap-3 mt-4 min-w-0">
        <Image
          src={image}
          alt={name}
          width={40}
          height={40}
          className="rounded-full flex-shrink-0"
        />
        <div className="min-w-0">
          <p className="font-bold text-sm truncate">{name}</p>
          <p className="text-gray-500 text-xs truncate">{role}</p>
        </div>
      </div>
    </div>
  );
}
