import { useState, useEffect } from 'react';
import { Sparkles, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur bg-white/60 shadow-sm dark:bg-neutral-900/60' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 grid place-items-center text-white">
            <Sparkles size={18} />
          </div>
          <span>Alex.dev</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#skills" className="hover:text-indigo-600 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="mailto:alex@portfolio.dev" aria-label="Email" className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800">
            <Mail size={18} />
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800">
            <Linkedin size={18} />
          </a>
        </div>
      </nav>
    </header>
  );
}
