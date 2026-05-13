import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navItems, profile } from '../../data/portfolio';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition duration-300 ${
        isScrolled ? 'border-b border-white/10 bg-ink/[0.82] shadow-2xl shadow-black/20 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="group flex items-center gap-3" aria-label="Ir para o início">
          <span className="grid size-10 place-items-center rounded-2xl bg-electric text-sm font-black text-white transition group-hover:bg-violet group-hover:text-ink">
            MP
          </span>
          <span className="hidden font-display text-sm font-semibold sm:block">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-panel/80 p-1 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <a href="#contato" className="rounded-full bg-electric px-4 py-2 text-sm font-bold text-white transition hover:bg-violet hover:text-ink">
            Vamos conversar
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-white/10 bg-panel"
            onClick={() => setIsOpen((value) => !value)}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="mx-5 mb-4 rounded-[1.5rem] border border-white/10 bg-night/95 p-3 shadow-violet backdrop-blur-xl md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block rounded-2xl px-4 py-3 text-sm font-semibold text-muted transition hover:bg-violet/10 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
