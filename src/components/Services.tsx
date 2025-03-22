import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Microscope, 
  TestTube2, 
  Heart, 
  Search, 
  Dna, 
  FlaskRound as Flask, 
  Activity,
  Crop as Drop,
  ArrowRight
} from "lucide-react";

const services = [
  { icon: TestTube2, name: "Clinical Biochemistry" },
  { icon: Microscope, name: "Microbiology" },
  { icon: Activity, name: "Clinical Pathology" },
  { icon: Search, name: "Cancer Screening" },
  { icon: Dna, name: "Cytogenetics" },
  { icon: Flask, name: "Molecular Biology" },
  { icon: Heart, name: "Histopathology" },
  { icon: Drop, name: "Blood, Urine, and Body Fluid Tests" },
];

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-[1400px] mx-auto px-4">
        
        {/* Section Title */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive diagnostic solutions using state-of-the-art technology
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow bg-white group hover:border-blue-500 relative overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Floating Icon Animation */}
              <motion.div 
                className="absolute -top-6 -right-6 opacity-10 text-blue-100"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <service.icon className="w-20 h-20" />
              </motion.div>

              {/* Service Icon */}
              <motion.div 
                className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <service.icon />
              </motion.div>

              {/* Service Name */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>

              {/* Learn More Button */}
              <a 
                href="#" 
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1"
              >
                Learn more <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Explore All Services Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Explore All Services
          </button>
        </motion.div>

      </div>
    </section>
  );
}
