import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { skills } from '../../data/portfolio';
import { fadeUp, staggerContainer } from '../../styles/animations';

export default function Skills() {
  return (
    <Section
      id="habilidades"
      eyebrow="Habilidades"
      title="Stack moderna para produtos rápidos, bonitos e escaláveis."
      description="Do protótipo ao deploy, combino repertório visual com disciplina técnica."
    >
      <div className="grid gap-6">
        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {skills.map((skill) => (
            <motion.div key={skill.name} variants={fadeUp} className="skill-card">
              <h3>{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
