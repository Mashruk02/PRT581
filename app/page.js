'use client';

import React from 'react';
import FeatureCard from '@/components/FeatureCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Paper,
} from '@mui/material';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-gray-800">
      <Header />

      {/* Hero Section - Card Layout */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4">
        {/* Background Image */}
        <Image
          src="/farm-hero.jpg"
          alt="Smart Farm Monitoring"
          fill
          priority
          className="object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0" />
        
        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12 text-center border border-white/20">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
              🌱 Smart Agriculture Technology
            </div>
            
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight"
            >
              Empower Your Farm with{' '}
              <span className="text-emerald-600 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Data
              </span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              AgriSense helps you monitor, control, and optimize agriculture like never before with real-time insights and intelligent automation.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.a
                href="#features"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-full shadow-lg hover:bg-emerald-700 transition-all duration-300 hover:shadow-xl"
              >
                Explore Features
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-full shadow-lg hover:shadow-xl border-2 border-emerald-600 hover:bg-emerald-50 transition-all duration-300"
              >
                Get Started
              </motion.a>
            </motion.div>
            
            {/* Stats or Features Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">24/7</div>
                <div className="text-sm text-gray-500">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">Real-time</div>
                <div className="text-sm text-gray-500">Data</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">Smart</div>
                <div className="text-sm text-gray-500">Control</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
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

      {/* Contact Section (Material UI) */}
      <section id="contact" className="py-16 bg-gray-50">
        <Container maxWidth="md">
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
              We'd love to hear from you! Send us a message using the form below.
            </Typography>
            <Box component="form" sx={{ mt: 4 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12} textAlign="center">
                  <Button type="submit" variant="contained" color="success">
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Container>
      </section>

      <Footer />
    </main>
  );
}