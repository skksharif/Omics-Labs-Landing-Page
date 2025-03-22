import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-20 bg-gray-50" id="contact">
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
            Contact Us
          </h2>
          <p className="text-gray-600">Get in touch with our expert team</p>
        </motion.div>

        {/* Contact Details & Form */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Contact Details */}
          <motion.div className="space-y-8">
            {[
              {
                Icon: MapPin,
                title: "Address",
                text: "Opp. Head Post Office, Journalist Colony,\nPalakollu-534260",
              },
              {
                Icon: Phone,
                title: "Phone",
                text: "08814-22 55 90\n95 77 33 44 99",
              },
              {
                Icon: Mail,
                title: "Email",
                text: "reports@omicslabs.com",
              },
              {
                Icon: Clock,
                title: "Working Hours",
                text: "Monday - Saturday: 7:00 AM - 9:00 PM\nSunday: 8:00 AM - 2:00 PM",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <item.Icon className="text-blue-600 w-6 h-6 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 whitespace-pre-line">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow space-y-6"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows={4}
                placeholder="Your message"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
