import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export default function ThemeToggle({ className = '', showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      whileTap={{ scale: 0.92 }}
      whileHover={{ scale: 1.05 }}
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-center gap-2 p-2.5 rounded-xl border transition-colors cursor-pointer ${
        isDark
          ? 'bg-white/5 border-white/10 text-yellow-400 hover:bg-white/10 hover:border-yellow-400/30'
          : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200 hover:text-techblue'
      } ${className}`}
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun size={19} className="transition-transform duration-300 rotate-0 scale-100" />
        ) : (
          <Moon size={19} className="transition-transform duration-300 rotate-0 scale-100 text-techblue" />
        )}
      </div>
      {showLabel && (
        <span className="text-xs font-medium">
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </span>
      )}
    </motion.button>
  );
}
