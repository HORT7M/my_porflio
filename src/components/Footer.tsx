import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-center md:text-left">
          <span className="text-xl font-bold tracking-wider text-white block">{personalInfo.name}</span>
          <span className="text-sm text-gray-500 font-medium">{personalInfo.role} & Networking Enthusiast</span>
        </div>

        <div className="flex items-center space-x-6">
          <a href={personalInfo.telegram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-techblue transition-colors text-sm font-medium">
            Telegram
          </a>
          <span className="text-white/20">|</span>
          <a href={personalInfo.credly} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-techblue transition-colors text-sm font-medium">
            Credly
          </a>
        </div>

        <div className="text-gray-500 text-sm text-center md:text-right">
          © {currentYear} {personalInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
