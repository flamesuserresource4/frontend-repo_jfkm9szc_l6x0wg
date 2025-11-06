import { motion } from 'framer-motion';
import { Code2, Languages, Globe2 } from 'lucide-react';

const skills = [
  { icon: Code2, title: 'High‑Level Languages', items: ['TypeScript', 'Python', 'Rust', 'Go', 'C++'] },
  { icon: Languages, title: 'Languages Spoken', items: ['Bangla', 'Hindi', 'English'] },
  { icon: Globe2, title: 'Cultural Fluency', items: ['Chinese', 'Japanese', 'Indian'] },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white"
        >
          Skills at a Glance
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ icon: Icon, title, items }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-neutral-200/70 dark:border-neutral-800 p-6 bg-white/70 dark:bg-neutral-900/60 backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white grid place-items-center">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-neutral-600 dark:text-neutral-300">
                {items.map((item) => (
                  <li key={item} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
