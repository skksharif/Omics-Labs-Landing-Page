import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle } from "lucide-react";

const features = [
  "Tele counselling for timely intervention",
  "Clear and concise lab reporting",
  "Fully automated workflow",
  "Easy access to reports",
  "Free home collection services",
  "Highly qualified staff",
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="max-w-[1400px] mx-auto px-4">
        <div ref={ref} className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src="./modern-lab.png"
              alt="Modern Laboratory"
              className="rounded-2xl shadow-xl"
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Excellence in Diagnostics for 25+ Years
            </h2>
            <p className="text-gray-600 mb-8">
              Omics Laboratories is a NABL-accredited, ISO-certified diagnostic
              center providing state-of-the-art medical testing services in
              Palakollu since 1997.
            </p>

            {/* Feature List Animation */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <CheckCircle className="text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
