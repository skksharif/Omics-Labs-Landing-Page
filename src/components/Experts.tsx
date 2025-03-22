import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experts = [
  {
    name: "Dr. K. Prasanthi",
    role: "M.D. Pathology",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80",
  },
  {
    name: "Dr. L. Rajendra Prasad",
    role: "M.D. Micro Biology",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80",
  },
  {
    name: "Dr. P. Madhu Babu",
    role: "M.Sc., Ph.D., Molecular Biologist",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80",
  },
];

export default function Experts() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-20 bg-gray-50" id="experts">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Section Title */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Experts
          </h2>
          <p className="text-gray-600">
            Leading professionals committed to your health
          </p>
        </motion.div>

        {/* Experts Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {experts.map((expert, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow relative group"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Image */}
              <motion.div
                className="w-full h-64 overflow-hidden relative"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
              >
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>

              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {expert.name}
                </h3>
                <p className="text-gray-600">{expert.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
