import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Section from '../ui/Section';
import { contactCards, profile } from '../../data/portfolio';
import { fadeUp, staggerContainer } from '../../styles/animations';

export default function Contact() {
  return (
    <Section
      id="contato"
      eyebrow="Contato"
      title="Vamos transformar uma boa ideia em uma site memorável?"
      description="Aberta para oportunidades remotas, vendas de produto e projetos freelance com foco em fullstack."
      className="pb-24"
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="rounded-[2rem] border border-white/10 bg-panel p-7"
        >
          <p className="text-lg leading-8 text-muted">
            Envie uma mensagem com o contexto do projeto, prazo e objetivos. Respondo com próximos passos, disponibilidade e uma proposta clara.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={`mailto:${profile.email}`}>Enviar email</Button>
            <Button href={profile.socials[1].href} variant="secondary">
              LinkedIn
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
        >
          {contactCards.map((card) => (
            <motion.a key={card.label} href={card.href} variants={fadeUp} className="contact-card">
              <span className="contact-icon">
                <card.icon size={20} />
              </span>
              <span>
                <small>{card.label}</small>
                <strong>{card.value}</strong>
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
