import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, FileText } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"></div>
      <div className="max-w-[1400px] mx-auto px-4 py-16 relative">
        <div className="flex flex-col lg:flex-row items-center justify-evenly gap-12">
          {/* Content Section */}
          <motion.div 
            className="lg:w-3/5"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img src="./logo.png" alt="Omics Laboratories" className="h-16 mb-8" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Unleashing the Potential of Medical Laboratory Services
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              NABL Accredited & ISO 9001:2015 Certified
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Book a Test <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                View Reports <FileText size={20} />
              </motion.button>
            </div>
            <div className="mt-8 flex items-center gap-4 text-gray-600">
              <Phone className="text-blue-600" />
              <span>Call us: 08814-22 55 90</span>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            className="lg:w-2/5"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <img src="./lab-equipment1.png" alt="Laboratory Equipment" className="rounded-xl" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
