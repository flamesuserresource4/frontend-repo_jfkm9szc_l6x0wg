import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white"
        >
          Let’s build something immersive
        </motion.h2>
        <p className="mt-4 text-neutral-600 dark:text-neutral-300">
          Open to collaborations and new opportunities. Comfortable communicating in Bangla, Hindi, and English.
        </p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 grid gap-4 sm:grid-cols-2 text-left"
        >
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input className="w-full px-4 py-3 rounded-xl border border-neutral-300/70 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/60 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your name" />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input type="email" className="w-full px-4 py-3 rounded-xl border border-neutral-300/70 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/60 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="you@email.com" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-neutral-300/70 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/60 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Tell me about your idea…" />
          </div>
          <div className="sm:col-span-2 flex justify-center">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-transform active:scale-[0.98]">
              <Send size={18} /> Send Message
            </button>
          </div>
        </motion.form>

        <div className="mt-6 inline-flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
          <Mail size={16} /> alex@portfolio.dev
        </div>
      </div>
    </section>
  );
}
