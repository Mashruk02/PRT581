// components/FeatureCard.js
'use client';

import { motion } from 'framer-motion';

export default function FeatureCard({ title, description, Icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className="relative overflow-hidden rounded-2xl bg-white/60 p-6
                 backdrop-blur-lg shadow-lg ring-1 ring-inset ring-gray-200"
    >
      {Icon && (
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/90 text-white mb-4 shadow-md">
          <Icon className="h-6 w-6" />
        </div>
      )}
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-700">{description}</p>
    </motion.div>
  );
}
