'use client';

import { motion } from "framer-motion";
import { Globe, Brain, Languages } from "lucide-react";

const features = [
  {
    icon: <Globe className="w-6 h-6 text-sky-400" />,
    title: "Content Intelligence",
    description: "Seamlessly extracts structured text from any blog link",
  },
  {
    icon: <Brain className="w-6 h-6 text-purple-400" />,
    title: "Contextual Compression",
    description: "Our engine compresses content into meaningful insights",
  },
  {
    icon: <Languages className="w-6 h-6 text-yellow-400" />,
    title: "Bilingual Understanding",
    description: "Auto-translates summaries into human-quality Urdu",
  },
];

export default function FeatureSection() {
  return (
    <section className="mt-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8 text-blue-300">
        Powered by Custom Intelligence
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feat, i) => (
          <motion.div
            key={i}
            className="bg-black/30 p-6 rounded-xl shadow-md border border-blue-900"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <div className="flex items-center gap-3 mb-3">
              {feat.icon}
              <h3 className="text-lg font-semibold text-white">{feat.title}</h3>
            </div>
            <p className="text-sm text-gray-300">{feat.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
