import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/85 dark:bg-background/90 backdrop-blur-md shadow-sm dark:shadow-lg border-b border-slate-200 dark:border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex flex-col">
              <span className="text-xl font-bold tracking-wider text-slate-900 dark:text-white">NON HORT</span>
              <span className="text-xs text-techblue font-medium tracking-widest">IT & NETWORKING</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 dark:text-gray-300 hover:text-techblue dark:hover:text-techblue transition-colors text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side Icons / CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <a href={personalInfo.credly} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-gray-300 hover:text-techblue transition-colors" title="Credly">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </a>
            <a href="/cv.pdf" download className="flex items-center gap-2 bg-techblue/10 text-techblue hover:bg-techblue hover:text-white px-4 py-2 rounded-lg transition-all text-sm font-medium border border-techblue/20">
              <Download size={16} />
              <span>CV</span>
            </a>
          </div>

          {/* Mobile menu button and quick theme toggle */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-backgroundLighter border-b border-slate-200 dark:border-white/10 shadow-xl">
          <div className="px-4 pt-3 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-gray-300 hover:text-techblue dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 pb-2 border-t border-slate-200 dark:border-white/10 flex items-center justify-between px-3">
              <a href={personalInfo.credly} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-gray-300 hover:text-techblue text-sm font-medium">
                Credly Profile
              </a>
              <a href="/cv.pdf" download className="flex items-center gap-2 text-techblue font-medium text-sm">
                <Download size={16} />
                Download CV
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
