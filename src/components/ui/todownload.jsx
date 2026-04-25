import React from "react";
import { motion } from "framer-motion";

export default function AppDownloadGuide() {
  const steps = [
    {
      title: "Verify Eligibility",
      description:
        "You must be a university or college student with a valid educational email (e.g. .edu) or official student ID.",
    },
    {
      title: "Download the App",
      description:
        "Once verified, download the official APK file from the secure platform provided by your institution.",
    },
    {
      title: "Install APK",
      description:
        "Enable installation from unknown sources on your device and install the app safely.",
    },
    {
      title: "Create Account",
      description:
        "Sign up using your university email or student ID to activate your student profile.",
    },
    {
      title: "Connect Globally",
      description:
        "Start posting updates, joining discussions, and messaging students from universities around the world.",
    },
  ];

  return (
    <section id="Download" className="bg-black text-white py-20  px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-primary mb-4"
        >
          App Access & Download Guide
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto mb-16"
        >
          Follow these simple steps to join the global student community and unlock all features.
        </motion.p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{ scale: 1.05 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-2"
            >
              {/* Step Number */}
              <div className="w-10 h-10 mx-auto mb-2 flex items-center justify-center rounded-full bg-primary text-black font-bold">
                {index + 1}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-2">
                {step.title}
              </h3>

              <p className="text-sm text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
<div className="mt-5 flex flex-wrap justify-center gap-4">
  
  <a
    href="/your-app.apk"
    download
    className="bg-primary text-black px-6 py-3 rounded-full font-semibold"
  >
    Download APK
  </a>

  

</div>
        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-gray-500 text-sm"
        >
          Only verified students from recognized institutions can access the platform.
        </motion.p>
      </div>
    </section>
  );
}