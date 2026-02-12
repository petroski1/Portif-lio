// Mock data para o portfólio do Davi Medeiros

export const portfolioData = {
  // Informações pessoais
  personalInfo: {
    fullName: "Davi da Silva Cruz Medeiros",
    title: "Desenvolvedor Full Stack & Estudante de Engenharia da Computação",
    institution: "Universidade Veiga de Almeida (7º Período)",
    email: "daviscmedeiros@gmail.com",
    linkedin: "https://www.linkedin.com/in/davi-silva-876858281/",
    github: "https://github.com/petroski1/",
    photoPlaceholder: "https://customer-assets.emergentagent.com/job_davi-portfolio-2/artifacts/pdvx30wi_image.png",
    bio: "Sou estudante de Engenharia da Computação na Universidade Veiga de Almeida (7º período) e desenvolvedor Full Stack com forte domínio no ecossistema JavaScript (Node.js e TypeScript). Tenho sólida experiência na implementação de arquiteturas escaláveis e no desenvolvimento de sistemas complexos, utilizando React.js para interfaces de alta performance e Node.js para backends robustos. Especialista em integração de APIs e gerenciamento de infraestrutura em nuvem via AWS (Amplify, Elastic Beanstalk, EC2), foco na escrita de código limpo e eficiente. Meu histórico inclui a resolução de desafios de engenharia em dashboards financeiros e sistemas de gestão (ERP), sempre priorizando a performance do software e a integridade dos dados."
  },

  // Conquistas e impacto
  achievements: [
    {
      id: 1,
      metric: "3000+",
      description: "Horas economizadas em um único mês",
      detail: "Sistema automatizado para empresa de médio porte"
    },
    {
      id: 2,
      metric: "10+",
      description: "Projetos entregues",
      detail: "Aplicativos e sistemas para pequenas e médias empresas"
    },
    {
      id: 3,
      metric: "100%",
      description: "Ciclo completo",
      detail: "Do design UI à infraestrutura AWS"
    }
  ],

  // Projetos
  projects: [
    {
      id: 1,
      title: "Dashboard de Investimento",
      description: "Painel de controle para análise de ativos e performance financeira com visualizações interativas.",
      stack: ["React", "Vite", "Chart.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/petroski1/dashboard-investimento",
      category: "Dashboard"
    },
    {
      id: 2,
      title: "NomadoSul - Gestão de Reservas",
      description: "ERP focado em controle de fluxo de hóspedes, check-in e check-out para pousadas.",
      stack: ["Node.js", "React", "Context API"],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/petroski1/project-nomadosul",
      category: "ERP"
    },
    {
      id: 3,
      title: "Controle de Gestão Pessoal",
      description: "Sistema para organização de fluxos de trabalho e produtividade individual.",
      stack: ["JavaScript", "HTML", "CSS"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      githubUrl: "https://github.com/petroski1/site-gestao",
      category: "Produtividade"
    },
    {
      id: 4,
      title: "Vall Estética",
      description: "Landing page profissional de alta conversão para serviços de estética.",
      stack: ["HTML", "CSS", "Netlify"],
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop",
      liveUrl: "https://vallestetica.netlify.app/",
      category: "Landing Page"
    },
    {
      id: 5,
      title: "Gestão de Barbearia 2.0",
      description: "Plataforma B2B com dashboard administrativo e checkout Stripe integrado.",
      stack: ["React", "Node.js", "Stripe", "AWS"],
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=400&fit=crop",
      category: "SaaS"
    }
  ],

  // Stack técnica
  skills: [
    {
      category: "Frontend",
      technologies: ["React", "Next.js", "Vite", "Tailwind CSS", "TypeScript"]
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Express", "PostgreSQL", "MongoDB"]
    },
    {
      category: "Cloud/DevOps",
      technologies: ["AWS Amplify", "Elastic Beanstalk", "EC2", "Docker"]
    }
  ],

  // Experiência
  experience: [
    {
      id: 1,
      title: "Desenvolvedor Full Stack Freelancer",
      period: "2022 - Presente",
      description: "Desenvolvimento de aplicativos e sistemas para pequenas e médias empresas, com foco em automação e eficiência operacional.",
      highlights: [
        "Sistema que economizou 3000 horas/mês para empresa de médio porte",
        "Plataformas SaaS B2B com integrações de pagamento",
        "Infraestrutura completa em AWS"
      ]
    },
    {
      id: 2,
      title: "Estudante de Engenharia da Computação",
      period: "2021 - 2025 (Previsão)",
      institution: "Universidade Veiga de Almeida",
      description: "Atualmente no 7º período, com foco em engenharia de software e arquitetura de sistemas."
    }
  ],

  // Blog Posts
  blogPosts: [
    {
      id: 1,
      title: "Como Economizar 3000 Horas com Automação Inteligente",
      excerpt: "Case study de como desenvolvi um sistema que revolucionou a operação de uma empresa de médio porte, automatizando processos críticos e economizando milhares de horas de trabalho manual.",
      content: "Conteúdo completo do artigo aqui...",
      category: "Case Study",
      tags: ["Automação", "Python", "AWS"],
      date: "2025-01-15",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Arquitetura de SaaS: Do Zero à Produção na AWS",
      excerpt: "Um guia completo sobre como estruturei e implantei plataformas SaaS escaláveis usando AWS, desde a concepção até o deployment em produção.",
      content: "Conteúdo completo do artigo aqui...",
      category: "Tutorial",
      tags: ["AWS", "SaaS", "Arquitetura", "DevOps"],
      date: "2025-01-08",
      readTime: "12 min",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
      featured: true
    },
    {
      id: 3,
      title: "React + Node.js: Stack Perfeita para MVPs Rápidos",
      excerpt: "Por que escolho React e Node.js para desenvolver MVPs de forma ágil, e as melhores práticas que aprendi construindo produtos reais.",
      content: "Conteúdo completo do artigo aqui...",
      category: "Desenvolvimento",
      tags: ["React", "Node.js", "MVP"],
      date: "2024-12-20",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
      featured: false
    },
    {
      id: 4,
      title: "Integrando Stripe em Aplicações B2B: Lições Aprendidas",
      excerpt: "Minha experiência implementando pagamentos recorrentes com Stripe em plataformas B2B, incluindo desafios e soluções práticas.",
      content: "Conteúdo completo do artigo aqui...",
      category: "Desenvolvimento",
      tags: ["Stripe", "Pagamentos", "B2B"],
      date: "2024-12-10",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
      featured: false
    }
  ]
};
