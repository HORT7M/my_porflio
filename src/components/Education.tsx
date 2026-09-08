import { motion } from 'framer-motion';
import { education } from '../data/portfolioData';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section className="py-20 bg-backgroundLighter relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-techblue mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-slate-200 dark:border-white/10 ml-3 md:ml-0 md:pl-0">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-10 ml-8 md:ml-10 relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] md:-left-[43px] top-1 w-10 h-10 bg-slate-100 dark:bg-background rounded-full border-2 border-techblue flex items-center justify-center shadow-sm">
                <GraduationCap size={16} className="text-techblue" />
              </div>
              
              <div className="bg-slate-50 dark:bg-background p-6 rounded-2xl border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10 shadow-sm transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{edu.institution}</h3>
                  <span className="text-sm text-techblue font-medium mt-1 md:mt-0">{edu.period}</span>
                </div>
                <h4 className="text-md font-medium text-slate-700 dark:text-gray-300 mb-2">{edu.faculty}</h4>
                <p className="text-slate-500 dark:text-gray-400 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-techblue/70 inline-block" />
                  {edu.status}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
