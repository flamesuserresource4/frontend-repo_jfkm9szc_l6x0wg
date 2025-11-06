import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen pt-16 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 items-center gap-10 py-20 md:py-28">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight text-neutral-900 dark:text-white"
          >
            Alex — Master of High‑Level Code
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 max-w-xl text-neutral-600 dark:text-neutral-300 text-lg"
          >
            Building interactive 3D, highly animated experiences. Trilingual communicator (Bangla, Hindi, English) with a deep appreciation of Asian cultures — Chinese, Japanese, and Indian.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#projects" className="px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-transform active:scale-[0.98]">
              View Projects
            </a>
            <a href="#contact" className="px-5 py-3 rounded-xl border border-neutral-300/70 dark:border-neutral-700 text-neutral-900 dark:text-white font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-800">
              Get in Touch
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-indigo-500/20 via-purple-500/10 to-blue-500/20 blur-2xl pointer-events-none" />
          <div className="relative rounded-3xl border border-white/20 dark:border-white/10 backdrop-blur bg-white/40 dark:bg-white/5 p-6">
            <ul className="grid grid-cols-2 gap-4 text-sm">
              <li className="p-4 rounded-xl bg-white/70 dark:bg-white/10 backdrop-blur border border-white/30 dark:border-white/10">C++ • Rust • Go</li>
              <li className="p-4 rounded-xl bg-white/70 dark:bg-white/10 backdrop-blur border border-white/30 dark:border-white/10">TypeScript • Node</li>
              <li className="p-4 rounded-xl bg-white/70 dark:bg-white/10 backdrop-blur border border-white/30 dark:border-white/10">Python • FastAPI</li>
              <li className="p-4 rounded-xl bg-white/70 dark:bg-white/10 backdrop-blur border border-white/30 dark:border-white/10">WebGL • Three.js</li>
            </ul>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/90 dark:from-neutral-950/60 dark:to-neutral-950/95" />
    </section>
  );
}
