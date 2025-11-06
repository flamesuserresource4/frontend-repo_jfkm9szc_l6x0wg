import { motion } from 'framer-motion';
import { Rocket, Sparkle, Cpu } from 'lucide-react';

const projects = [
  {
    icon: Rocket,
    title: 'Nebula Scroll',
    desc: 'WebGL + shaders for parallax starfields and depth-driven scroll animations.',
    tags: ['WebGL', 'Shaders', 'Framer Motion']
  },
  {
    icon: Cpu,
    title: 'AI Studio',
    desc: 'Full-stack FastAPI + React platform with real-time inference UIs.',
    tags: ['FastAPI', 'React', 'WS']
  },
  {
    icon: Sparkle,
    title: 'Cultural Atlas',
    desc: 'Interactive knowledge map celebrating Asian cultures and languages.',
    tags: ['D3', 'i18n', 'Maps']
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 md:py-28 bg-gradient-to-b from-transparent to-indigo-50/50 dark:to-indigo-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white"
        >
          Featured Work
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ icon: Icon, title, desc, tags }) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group rounded-2xl border border-neutral-200/70 dark:border-neutral-800 overflow-hidden bg-white/70 dark:bg-neutral-900/60 backdrop-blur"
            >
              <div className="p-6">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white grid place-items-center">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-neutral-600 dark:text-neutral-300">{desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-500/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="h-px bg-gradient-to-r from-indigo-500/0 via-indigo-500/40 to-purple-500/0" />
              <div className="p-6">
                <button className="px-4 py-2 rounded-lg border border-neutral-300/70 dark:border-neutral-700 text-sm font-medium group-hover:bg-neutral-50 dark:group-hover:bg-neutral-800 transition-colors">
                  View Case Study
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
