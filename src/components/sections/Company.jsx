import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Section from '../ui/Section';
import { company } from '../../data/portfolio';
import { fadeUp } from '../../styles/animations';

export default function Company() {
  const Icon = company.icon;

  return (
    <Section
      id="loja"
      eyebrow="Minha Loja"
      title="Uma experiência digital própria, moderna e preparada para clientes online."
      description="Conheça a empresa por trás de uma das minhas entregas e acesse o site oficial pelo domínio."
    >
      <motion.article
        className="company-banner"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={fadeUp}
        whileHover={{ y: -6 }}
      >
        <div className="company-orb" aria-hidden="true" />
        <div className="relative z-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <div className="company-icon">
              <Icon size={24} />
            </div>
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.24em] text-electric">
              {company.title}
            </p>
            <h3 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
              {company.name}
            </h3>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              {company.description}
            </p>
          </div>

          <div className="company-panel">
            <div className="grid gap-3 sm:grid-cols-3">
              {company.metrics.map((item) => (
                <span key={item} className="company-chip">
                  {item}
                </span>
              ))}
            </div>
            <a
              href={company.href}
              target="_blank"
              rel="noreferrer"
              className="company-button"
              aria-label={`Visitar site da ${company.name}`}
            >
              <span>Visitar Loja</span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </motion.article>
    </Section>
  );
}
