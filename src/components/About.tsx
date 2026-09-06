import { motion } from 'framer-motion';
import { personalInfo, services } from '../data/portfolioData';
import { CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-backgroundLighter relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-techblue mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Professional Introduction</h3>
            <p className="text-gray-300 leading-relaxed text-lg mb-8 bg-background p-6 rounded-xl border border-white/5 shadow-inner">
              "{personalInfo.intro}"
            </p>
            
            <div className="space-y-4">
              <div className="flex border-b border-white/10 pb-3">
                <span className="w-32 text-gray-400 font-medium">Name:</span>
                <span className="text-white">{personalInfo.name}</span>
              </div>
              <div className="flex border-b border-white/10 pb-3">
                <span className="w-32 text-gray-400 font-medium">Role:</span>
                <span className="text-techblue font-medium">{personalInfo.role}</span>
              </div>
              <div className="flex border-b border-white/10 pb-3">
                <span className="w-32 text-gray-400 font-medium">Current:</span>
                <span className="text-white">{personalInfo.current}</span>
              </div>
              <div className="flex border-b border-white/10 pb-3">
                <span className="w-32 text-gray-400 font-medium">Location:</span>
                <span className="text-white">{personalInfo.location}</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-background p-8 rounded-2xl border border-white/5"
          >
            <h3 className="text-xl font-semibold text-white mb-6">What I Do (Services & Expertise)</h3>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-techblue mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-300">{service}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
