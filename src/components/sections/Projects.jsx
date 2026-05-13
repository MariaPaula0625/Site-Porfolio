import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { projectIcon as ArrowUpRight, projects } from '../../data/portfolio';
import { fadeUp, staggerContainer } from '../../styles/animations';

export default function Projects() {
  return (
    <Section
      id="projetos"
      eyebrow="Projetos"
      title="Cases pensados para impacto visual e resultado de negócio."
      description="Cards fictícios de exemplo com espaço para métricas, stack e links reais."
    >
      <motion.div
        className="grid gap-5 md:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {projects.map((project) => (
          <motion.article key={project.title} variants={fadeUp} whileHover={{ y: -8 }} className="project-card">
            <div className={`project-cover bg-gradient-to-br ${project.accent}`}>
              <div className="h-20 rounded-3xl border border-white/15 bg-panel/70 p-4 backdrop-blur">
                <div className="h-3 w-24 rounded-full bg-white/35" />
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <span className="h-8 rounded-xl bg-white/20" />
                  <span className="h-8 rounded-xl bg-white/[0.12]" />
                  <span className="h-8 rounded-xl bg-white/18" />
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-electric">{project.category}</span>
                  <h3 className="mt-3 font-display text-2xl font-bold">{project.title}</h3>
                </div>
                <a href={project.href} className="project-link" aria-label={`Abrir projeto ${project.title}`}>
                  <ArrowUpRight size={18} />
                </a>
              </div>
              <p className="mt-4 leading-7 text-muted">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full bg-white/[0.06] px-3 py-1 text-xs font-semibold text-muted">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-white/10 bg-ink px-4 py-3 text-sm font-semibold text-electric">
                {project.result}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
