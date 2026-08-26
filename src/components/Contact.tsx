import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { personalInfo } from '../data/portfolioData';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert("Message sent successfully! (Frontend demo)");
    reset();
  };

  return (
    <section id="contact" className="py-20 bg-backgroundLighter relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-techblue mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm available for IT Support opportunities and always open to learning new technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-background p-6 rounded-2xl border border-white/5 flex items-start gap-4">
              <div className="w-12 h-12 bg-techblue/10 rounded-xl flex items-center justify-center text-techblue flex-shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Phone</h4>
                <p className="text-gray-400">{personalInfo.phone}</p>
              </div>
            </div>

            <div className="bg-background p-6 rounded-2xl border border-white/5 flex items-start gap-4">
              <div className="w-12 h-12 bg-techblue/10 rounded-xl flex items-center justify-center text-techblue flex-shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Email</h4>
                <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-techblue transition-colors">
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="bg-background p-6 rounded-2xl border border-white/5 flex items-start gap-4">
              <div className="w-12 h-12 bg-techblue/10 rounded-xl flex items-center justify-center text-techblue flex-shrink-0">
                <MessageSquare size={20} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Telegram</h4>
                <a href={`https://${personalInfo.telegram}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-techblue transition-colors">
                  {personalInfo.telegram}
                </a>
              </div>
            </div>

            <div className="bg-background p-6 rounded-2xl border border-white/5 flex items-start gap-4">
              <div className="w-12 h-12 bg-techblue/10 rounded-xl flex items-center justify-center text-techblue flex-shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Location</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{personalInfo.address}</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-background p-8 rounded-3xl border border-white/5"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input 
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    className="w-full bg-backgroundLighter border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-techblue focus:ring-1 focus:ring-techblue transition-colors"
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="text-red-400 text-xs mt-1 block">{errors.name.message}</span>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input 
                    id="email"
                    type="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" }
                    })}
                    className="w-full bg-backgroundLighter border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-techblue focus:ring-1 focus:ring-techblue transition-colors"
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="text-red-400 text-xs mt-1 block">{errors.email.message}</span>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <input 
                  id="subject"
                  {...register("subject", { required: "Subject is required" })}
                  className="w-full bg-backgroundLighter border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-techblue focus:ring-1 focus:ring-techblue transition-colors"
                  placeholder="Job Opportunity / IT Support Request"
                />
                {errors.subject && <span className="text-red-400 text-xs mt-1 block">{errors.subject.message}</span>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  id="message"
                  rows={5}
                  {...register("message", { required: "Message is required" })}
                  className="w-full bg-backgroundLighter border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-techblue focus:ring-1 focus:ring-techblue transition-colors resize-none"
                  placeholder="Hello, I would like to discuss..."
                ></textarea>
                {errors.message && <span className="text-red-400 text-xs mt-1 block">{errors.message.message}</span>}
              </div>

              <button 
                type="submit"
                className="w-full bg-techblue hover:bg-cyan-600 text-white font-medium py-4 rounded-xl transition-colors flex items-center justify-center gap-2 group"
              >
                <Send size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
