import { ArrowUpRight } from 'lucide-react';

const variants = {
  primary:
    'bg-electric text-white hover:bg-violet hover:text-ink shadow-glow focus-visible:ring-violet',
  secondary:
    'border border-white/15 bg-panel text-white hover:border-violet/60 hover:bg-violet/10 focus-visible:ring-violet',
};

export default function Button({ href, children, variant = 'primary', icon: Icon = ArrowUpRight }) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${variants[variant]}`}
    >
      <span>{children}</span>
      {Icon && <Icon size={17} aria-hidden="true" />}
    </a>
  );
}
