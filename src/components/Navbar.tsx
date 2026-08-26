import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

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
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md shadow-lg border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex flex-col">
              <span className="text-xl font-bold tracking-wider text-white">NON HORT</span>
              <span className="text-xs text-techblue font-medium tracking-widest">IT SUPPORT</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-techblue transition-colors text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side Icons / CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href={personalInfo.credly} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-techblue transition-colors" title="Credly">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </a>
            <a href="/cv.pdf" download className="flex items-center gap-2 bg-techblue/10 text-techblue hover:bg-techblue hover:text-white px-4 py-2 rounded-lg transition-all text-sm font-medium border border-techblue/20">
              <Download size={16} />
              <span>CV</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-backgroundLighter border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 pb-2 border-t border-white/10 flex items-center justify-between px-3">
              <a href={personalInfo.credly} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-techblue">
                Credly Profile
              </a>
              <a href="/cv.pdf" download className="flex items-center gap-2 text-techblue font-medium">
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
