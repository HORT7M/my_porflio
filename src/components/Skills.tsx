import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-techblue mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive skill set focusing on network administration, IT support, cybersecurity, and AI/deepfake awareness.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skillGroup, index) => {
            const Icon = skillGroup.icon;
            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="bg-white dark:bg-backgroundLighter p-6 rounded-2xl border border-slate-200 dark:border-white/5 hover:border-techblue/40 shadow-sm transition-all group"
              >
                <div className="w-12 h-12 bg-slate-50 dark:bg-background rounded-xl flex items-center justify-center mb-6 group-hover:bg-techblue/10 transition-colors border border-slate-200/60 dark:border-transparent">
                  <Icon className="text-techblue" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">{skillGroup.category}</h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-600 dark:text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-techblue/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
