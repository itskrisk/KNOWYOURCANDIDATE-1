import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import './styles/globals.css'


export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer className="relative overflow-hidden" ref={ref}>
      {/* Background Image - Using Unsplash placeholder */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2715&q=80')` 
        }}
      />
      
      {/* Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-[#0b1d26]/95 via-[#0b1d26]/80 to-[#0b1d26]/70"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      />
      
      {/* Content */}
      <div className="relative z-10 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 max-w-6xl">
            
            {/* Logo and Tagline */}
            <motion.div 
              className="space-y-6 md:space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div>
                <h3 
                  className="text-2xl md:text-[32px] font-bold text-white tracking-[0.32px] capitalize leading-normal"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  KNOW YOUR CANDIDATE
                </h3>
              </div>
              
              <div 
                className="text-base md:text-[18px] text-white leading-relaxed md:leading-[32px] font-bold max-w-xs"
                style={{ fontFamily: 'IBM Plex Mono, monospace' }}
              >
                <p>
                  This platform doesn't endorse anyone.<br />
                  It just gives you receipts.
                </p>
              </div>
            </motion.div>
            
            {/* More on US section */}
            <motion.div 
              className="space-y-6 md:space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div>
                <h4 
                  className="text-xl md:text-[24px] text-[#fbd784] font-bold leading-[32px]"
                  style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                >
                  More on US
                </h4>
              </div>
              
              <div 
                className="text-base md:text-[18px] text-white leading-relaxed md:leading-[32px] font-medium max-w-xs"
                style={{ fontFamily: 'IBM Plex Mono, monospace' }}
              >
                <p>
                  Want to add a candidate? Report missing data?
                </p>
              </div>
              
              {/* Contact Links */}
              <div className="space-y-2">
                <motion.a 
                  href="#" 
                  className="block text-[#fbd784] hover:text-white transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  Contact Us
                </motion.a>
                <motion.a 
                  href="#" 
                  className="block text-[#fbd784] hover:text-white transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  Submit Data
                </motion.a>
              </div>
            </motion.div>
            
            {/* Newsletter/Social */}
            <motion.div 
              className="space-y-6 md:space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div>
                <h4 
                  className="text-xl md:text-[24px] text-[#fbd784] font-bold leading-[32px]"
                  style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                >
                  Stay Updated
                </h4>
              </div>
              
              <div className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-white/60 focus:outline-none focus:border-[#fbd784] transition-colors duration-300"
                />
                <motion.button 
                  className="w-full px-4 py-3 bg-[#fbd784] text-[#0b1d26] font-bold rounded hover:bg-white transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </div>
          
          {/* Copyright */}
          <motion.div 
            className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-white/20"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p 
                className="text-base md:text-[18px] text-white/50 leading-[32px] font-medium"
                style={{ fontFamily: 'IBM Plex Mono, monospace' }}
              >
                Copyright 2025 KNOWYOURCANDIDATE, All RIGHTS RESERVED
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-6">
                {['Twitter', 'Facebook', 'Instagram'].map((social, index) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="text-white/60 hover:text-[#fbd784] transition-colors duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {social}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-3 h-3 bg-[#fbd784]/30 rounded-full"
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 right-20 w-2 h-2 bg-[#fbd784]/40 rounded-full"
        animate={{ y: [0, -15, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      />
    </footer>
  );
}
