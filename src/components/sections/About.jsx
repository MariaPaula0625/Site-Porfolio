import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { highlights, profile } from '../../data/portfolio';
import { fadeUp, staggerContainer } from '../../styles/animations';

export default function About() {
  return (
    <Section
      id="sobre"
      eyebrow="Sobre mim"
      title="Arquitetura sólida, desenvolvimento completo e foco em produto."
      description="Gosto de desenvolver aplicações que parecem simples para o usuário porque toda a complexidade foi bem estruturada por trás."
    >
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          className="rounded-[2rem] border border-white/10 bg-panel p-7 shadow-glow backdrop-blur"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <p className="text-lg leading-8 text-muted">{profile.summary}</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-3xl bg-ink p-5">
              <span className="text-sm text-muted">Paleta sugerida</span>
              <div className="mt-4 flex gap-3">
                {['#F8F6F2', '#FFFFFF', '#111827', '#6B7280', '#D8A58B', '#8B5CF6', '#E5E7EB'].map((color) => (
                  <span key={color} className="size-10 rounded-full border border-white/15" style={{ backgroundColor: color }} title={color} />
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-ink p-5">
              <span className="text-sm text-muted">Fontes sugeridas</span>
              <p className="mt-3 font-display text-xl font-bold">Space Grotesk</p>
              <p className="text-sm text-muted">Inter para leitura e textos longos.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
        >
          {highlights.map((item) => (
            <motion.article key={item.title} variants={fadeUp} className="feature-card">
              <div className="feature-icon">
                <item.icon size={22} />
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
