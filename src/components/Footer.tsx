import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-background border-t border-slate-200 dark:border-white/5 py-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-center md:text-left">
          <span className="text-xl font-bold tracking-wider text-slate-900 dark:text-white block">{personalInfo.name}</span>
          <span className="text-sm text-slate-500 dark:text-gray-400 font-medium">{personalInfo.role}</span>
        </div>

        <div className="flex items-center space-x-6">
          <a href={personalInfo.telegram} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-gray-400 hover:text-techblue dark:hover:text-techblue transition-colors text-sm font-medium">
            Telegram
          </a>
          <span className="text-slate-300 dark:text-white/20">|</span>
          <a href={personalInfo.credly} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-gray-400 hover:text-techblue dark:hover:text-techblue transition-colors text-sm font-medium">
            Credly
          </a>
        </div>

        <div className="text-slate-500 dark:text-gray-400 text-sm text-center md:text-right">
          © {currentYear} {personalInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
