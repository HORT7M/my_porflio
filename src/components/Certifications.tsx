import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certifications } from '../data/portfolioData';
import { ExternalLink, X, ZoomIn } from 'lucide-react';

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="certifications" className="py-20 bg-backgroundLighter relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-success mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Verified credentials demonstrating foundational IT and networking knowledge.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-2xl p-6 border border-white/5 hover:border-success/30 transition-all group hover:-translate-y-1 flex flex-col cursor-pointer"
                onClick={() => setSelectedImage(cert.image)}
              >
                <div className="w-full h-64 bg-white/5 rounded-xl mb-6 overflow-hidden flex items-center justify-center border border-white/10 relative">
                   <img src={cert.image} alt={cert.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden') }} />
                   <div className="absolute hidden text-gray-500 text-sm font-medium">Add {`cert${index+1}.jpg`} to src/assets</div>
                </div>

                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center text-success group-hover:scale-110 transition-transform flex-shrink-0">
                    <Icon size={24} />
                  </div>
                  <span className="text-xs font-medium px-3 py-1 bg-white/5 rounded-full text-gray-400 whitespace-nowrap ml-2">
                    {cert.date}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 leading-tight flex-grow">
                  {cert.name}
                </h3>
                <p className="text-sm text-gray-400 mb-6">
                  {cert.authority}
                </p>

                <div className="pt-4 border-t border-white/5">
                  <a href={cert.verifyLink || "#"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-success hover:text-success/80 transition-colors font-medium" onClick={(e) => e.stopPropagation()}>
                    Verify Credential
                    <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm cursor-zoom-out"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-success bg-white/10 p-2 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
            <motion.img 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage} 
              alt="Certificate Zoom" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
