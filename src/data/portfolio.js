import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Palette,
  Smartphone,
  Sparkles,
  Store,
  Zap,
} from 'lucide-react';

export const profile = {
  name: 'Maria Paula',
  role: 'Suporte de TI & Dev Fullstack Júnior',
  location: 'Guaratinguetá, São Paulo',
  email: 'smariapaula0625@gmail.com',
  avatar: '/images/fototrabalho.png',
  headline:
    'Crio aplicações completas, modernas e eficientes, unindo interfaces intuitivas, APIs e soluções backend para entregar produtos digitais de alto impacto.',
  summary:
    'Sou desenvolvedora fullstack com foco em criar aplicações modernas, intuitivas e eficientes. Trabalho unindo frontend, backend e banco de dados para transformar ideias em produtos digitais completos, com atenção à performance, experiência do usuário e qualidade do código.',
  socials: [
    { label: 'GitHub', href: 'https://github.com/MariaPaula0625' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mpaulacsilva/' },
  ],
};

export const navItems = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Skills', href: '#habilidades' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Loja', href: '#loja' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Contato', href: '#contato' },
];

export const highlights = [
  {
    icon: Palette,
    title: 'UI de alto padrão',
    description: 'Interfaces minimalistas com hierarquia clara, microinterações e atenção ao detalhe.',
  },
  {
    icon: Zap,
    title: 'Performance real',
    description: 'Componentes leves, carregamento rápido e boas práticas para experiências fluidas.',
  },
  {
    icon: Layers3,
    title: 'Design systems',
    description: 'Estruturas reutilizáveis, tokens visuais e documentação para escalar produtos.',
  },
];

export const skills = [
  { name: 'HTML5', level: 100, group: 'Frontend' },
  { name: 'CSS3', level: 100, group: 'Frontend' },
  { name: 'JavaScript', level: 85, group: 'Frontend' },
  { name: 'TypeScript', level: 50, group: 'Frontend' },
  { name: 'React', level: 25, group: 'Frontend' },
  { name: 'Next.js', level: 25, group: 'Frontend' },

  { name: 'Node.js', level: 65, group: 'Backend' },
  { name: 'NestJS', level: 25, group: 'Backend' },
  { name: 'REST APIs', level: 50, group: 'Backend' },
  { name: 'JWT Auth', level: 25, group: 'Backend' },

  { name: 'PostgreSQL', level: 75, group: 'Database' },
  { name: 'SQL', level: 80, group: 'Database' },
  { name: 'Prisma ORM', level: 25, group: 'Database' },
  { name: 'Firebase', level: 25, group: 'Database' },

  { name: 'Tailwind CSS', level: 75, group: 'Styling' },
  { name: 'Sass', level: 50, group: 'Styling' },
  { name: 'Figma', level: 75, group: 'Design' },

  { name: 'Git & GitHub', level: 100, group: 'Tools' },
  { name: 'Docker', level: 25, group: 'Tools' },
];

export const techStack = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'NestJS',
  'PostgreSQL',
  'Prisma',
  'Firebase',
  'Tailwind CSS',
  'Docker',
  'Git/GitHub',
  'REST APIs',
  'Figma',
];

export const projects = [
  {
    title: 'Três Pescadores',
    category: 'E-commerce',
    description:
      'Plataforma web de vendas para a Loja de Artigos Religiosos Três Pescadores, com catálogo de produtos, autenticação de usuários e interface moderna para gestão e compras online.',
    stack: ['React', 'JavaScript', 'CSS', 'Node.js', 'Express', 'PostgreSQL', 'SQL'],
    result: '+32% de agilidade na tomada de decisão e otimização dos processos operacionais.',
    href: '#',
    accent: 'from-electric/30 via-violet/25 to-panel/40',
  },
  {
    title: 'ControlFácil',
    category: 'Finance Tracker',
    description:
      'Dashboard financeiro com controle de despesas, gráficos interativos e análise de dados em tempo real.',
    stack: ['HTML', 'CSS'],
    result: 'Em andamento',
    href: '#',
    accent: 'from-violet/30 via-electric/20 to-panel/40',
  },
  {
    title: 'AprovaAI',
    category: 'EdTech',
    description:'Plataforma educacional para concursos públicos, com ciclos de estudo, simulados e acompanhamento inteligente de desempenho.',
    stack: ['HTML', 'CSS'],
    result: 'Em andamento',
    href: '#',
    accent: 'from-panel/60 via-electric/20 to-violet/25',
  },
];

export const company = {
  icon: Store,
  title: 'Minha Loja',
  name: 'TechPro Connect',
  description:
    'Empresa especializada na vendas de Gedgets',
  href: 'https://techproconnect.com.br/',
  metrics: ['Atendimento online', 'Catálogo digital', 'Experiência moderna'],
};

export const timeline = [
  {
    icon: BriefcaseBusiness,
    period: '2025 - 2026',
    title: 'Backup TI',
    place: 'Poupatempo',
    description:
      'Suporte técnico em TIC, atendimento operacional aos usuários e suporte aos sistemas e equipamentos da unidade.',
  },
  {
    icon: Code2,
    period: '2024 - 2026',
    title: 'Desenvolvedora Fullstack',
    place: 'Projetos Pessoais',
    description:
      'Desenvolvimento de aplicações frontend e backend, integração com APIs, banco de dados e colaboração com produto e design.',
  },
  {
    icon: GraduationCap,
    period: '2024 - Atualmente',
    title: 'Gestão da Tecnologia da Informação',
    place: 'Fatec Guaratinguetá Prof. João Mod',
    description:
      'Base em gestão de projetos, infraestrutura, banco de dados, redes, segurança da informação e administração de sistemas de tecnologia.',
  },
    {
    icon: GraduationCap,
    period: '2022 - 2023',
    title: 'Técnico em informatica',
    place: 'Etec Professor Alfredo de Barros Santos',
    description:
      'Base em programação, manutenção de computadores, redes, banco de dados e desenvolvimento de sistemas.',
  },
];

export const contactCards = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: MapPin,
    label: 'Localização',
    value: profile.location,
    href: '#',
  },
  {
    icon: Smartphone,
    label: 'Disponibilidade',
    value: 'Freelas e vagas remotas',
    href: '#',
  },
];

export const projectIcon = ArrowUpRight;
export const sparkleIcon = Sparkles;
