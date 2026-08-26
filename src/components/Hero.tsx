import { motion } from 'framer-motion';
import { ArrowRight, Download, Server, Wifi, Monitor } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import catProfile from '../assets/cat_profile.jpg';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background abstract elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-techblue/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-techblue font-medium tracking-wide mb-4"
            >
              Hi, I'm {personalInfo.name}
            </motion.p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              IT Support Specialist <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-techblue to-cyan-300">
                & Networking Enthusiast
              </span>
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              CCNA-certified IT professional with hands-on experience in networking, hardware troubleshooting, and customer-focused IT support.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#certifications" 
                className="w-full sm:w-auto px-8 py-3 bg-techblue hover:bg-cyan-600 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 group"
              >
                View Certifications
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/cv.pdf" 
                download
                className="w-full sm:w-auto px-8 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6">
              <a href={personalInfo.telegram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-techblue transition-colors">
                <span className="sr-only">Telegram</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.94z"/></svg>
              </a>
              <a href={personalInfo.credly} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-techblue transition-colors">
                <span className="sr-only">Credly</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </a>
            </div>
          </motion.div>

          {/* Image/Visual Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              {/* Decorative border */}
              <div className="absolute inset-0 rounded-full border-2 border-techblue/30 scale-105 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-techblue/20 scale-110 animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Profile Image */}
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-backgroundLighter shadow-2xl">
                <img 
                  src={catProfile} 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Icons */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -left-6 bg-backgroundLighter p-3 rounded-xl border border-white/10 shadow-lg text-techblue"
              >
                <Server size={24} />
              </motion.div>
              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 -right-4 bg-backgroundLighter p-3 rounded-xl border border-white/10 shadow-lg text-green-400"
              >
                <Wifi size={24} />
              </motion.div>
              <motion.div 
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-4 bg-backgroundLighter p-3 rounded-xl border border-white/10 shadow-lg text-purple-400"
              >
                <Monitor size={24} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
