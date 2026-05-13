import { profile } from '../../data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-night/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="font-display text-lg font-bold">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">FullStack Developer</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {profile.socials.map((social) => (
            <a key={social.label} href={social.href} className="footer-link" target="_blank" rel="noreferrer">
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
