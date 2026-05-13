import { motion } from 'framer-motion';
import { fadeUp } from '../../styles/animations';

export default function Section({ id, eyebrow, title, description, children, className = '' }) {
  return (
    <section id={id} className={`section-shell ${className}`}>
      <motion.div
        className="section-heading"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={fadeUp}
      >
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </motion.div>
      {children}
    </section>
  );
}
