import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { ExternalLink, ShieldCheck } from 'lucide-react';

export default function Credly() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-techblue/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-backgroundLighter border border-white/10 rounded-3xl p-10 md:p-14 shadow-2xl"
        >
          <div className="w-16 h-16 bg-techblue/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-techblue">
            <ShieldCheck size={32} />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Certified & Verified</h2>
          <h3 className="text-xl text-techblue font-medium mb-6">
            View my professional certifications and technical achievements
          </h3>
          
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Explore my verified certifications on Credly and see the technical knowledge I've gained through Cisco Networking Academy and other training programs.
          </p>

          <a 
            href={personalInfo.credly} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-background font-bold rounded-xl hover:bg-gray-200 transition-colors group"
          >
            <span>View Credly Profile</span>
            <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
