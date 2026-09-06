import { motion } from 'framer-motion';
import { experience } from '../data/portfolioData';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-background relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience & Training</h2>
          <div className="w-20 h-1 bg-techblue mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-white/10 ml-3 md:ml-0 md:pl-0">
          {experience.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-10 ml-8 md:ml-10 relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] md:-left-[43px] top-1 w-10 h-10 bg-backgroundLighter rounded-full border-2 border-techblue flex items-center justify-center">
                <Briefcase size={16} className="text-techblue" />
              </div>
              
              <div className="bg-backgroundLighter p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <span className="text-sm text-techblue font-medium mt-1 md:mt-0">{exp.period}</span>
                </div>
                <h4 className="text-md font-medium text-gray-400 mb-4">{exp.company}</h4>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
