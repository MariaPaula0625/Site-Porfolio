import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { timeline } from '../../data/portfolio';
import { fadeUp, staggerContainer } from '../../styles/animations';

export default function Experience() {
  return (
    <Section
      id="experiencia"
      eyebrow="Experiência profissional"
    >
      <motion.div
        className="relative grid gap-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {timeline.map((item) => (
          <motion.article key={`${item.period}-${item.title}`} variants={fadeUp} className="timeline-card">
            <div className="timeline-icon">
              <item.icon size={22} />
            </div>
            <div className="min-w-0">
              <span className="text-sm font-semibold text-electric">{item.period}</span>
              <h3 className="mt-2 font-display text-2xl font-bold">{item.title}</h3>
              <p className="mt-1 text-sm font-semibold text-muted">{item.place}</p>
              <p className="mt-4 max-w-3xl leading-7 text-muted">{item.description}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
