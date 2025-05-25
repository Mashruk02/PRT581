'use client';
import FeatureCard from '@/components/FeatureCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-gray-800">
      <Header />

      {/* Hero Section */}
      <section className="relative flex-grow flex items-center justify-center pt-28 pb-20 bg-gradient-to-br from-green-100 via-white to-emerald-100 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/farm-hero.jpg" // place image in public folder (e.g., public/farm-hero.jpg)
          alt="Smart Farm Monitoring"
          fill
          priority
          className="object-cover opacity-30"
        />

        {/* Overlay Content */}
        <div className="relative z-10 max-w-3xl text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold text-emerald-800"
          >
            Empower Your Farm with Data
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-lg text-gray-700"
          >
            AgriSense helps you monitor, control, and optimize agriculture like never before.
          </motion.p>
          <motion.a
            href="#features"
            whileHover={{ scale: 1.05 }}
            className="inline-block mt-6 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-full shadow-md hover:bg-emerald-700 transition"
          >
            Explore Features
          </motion.a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10 text-gray-800">AgriSense Features</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard title="Real-Time Monitoring" description="Monitor temperature, humidity, and soil moisture live from your field." />
          <FeatureCard title="Smart Irrigation Control" description="Remotely activate or stop irrigation pumps anytime." />
          <FeatureCard title="Alerts & Analytics" description="Get notified when thresholds are crossed. View data analytics and trends." />
        </div>
      </section>

      <Footer />
    </main>
  );
}
