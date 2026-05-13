import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, MapPin } from 'lucide-react';
import Button from '../ui/Button';
import { profile } from '../../data/portfolio';
import { fadeUp, scaleIn, staggerContainer } from '../../styles/animations';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen bg-mesh pt-28">
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-ink to-transparent" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pt-12">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-panel px-3 py-2 text-sm text-muted backdrop-blur">
            <span className="size-2 rounded-full bg-electric shadow-[0_0_20px_rgba(216,165,139,0.9)]" />
            Disponível para freelances
          </motion.div>

          <motion.h1 variants={fadeUp} className="mt-7 max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-xl font-semibold text-electric sm:text-2xl">
            {profile.role}
          </motion.p>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            {profile.headline}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#projetos">Ver projetos</Button>
            <Button href="#contato" variant="secondary">
              Entrar em contato
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3 text-sm text-muted">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-panel px-4 py-2">
              <MapPin size={16} /> {profile.location}
            </span>
            <a className="social-pill" href={profile.socials[0].href} target="_blank" rel="noreferrer">
              <Github size={16} /> GitHub
            </a>
            <a className="social-pill" href={profile.socials[1].href} target="_blank" rel="noreferrer">
              <Linkedin size={16} /> LinkedIn
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={scaleIn}
          className="relative mx-auto w-full max-w-[22rem] lg:mr-0"
        >
          <div className="hero-frame">
            <img src={profile.avatar} alt={`Avatar profissional de ${profile.name}`} className="h-full w-full object-cover" />
          </div>
        </motion.div>
      </div>

      <a href="#sobre" className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 rounded-full border border-white/10 bg-panel p-3 text-muted transition hover:text-white md:block" aria-label="Descer para sobre mim">
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
