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
      period: "2022 - 2027 (Previsão)",
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
      content: `
# Como Economizar 3000 Horas com Automação Inteligente

## O Desafio

Uma empresa de médio porte enfrentava um problema crítico: processos manuais repetitivos estavam consumindo mais de 3000 horas/mês da equipe operacional. Tarefas como consolidação de relatórios, processamento de dados de múltiplas fontes e geração de documentos eram feitas manualmente, resultando em:

- Alto custo operacional
- Erros frequentes na manipulação de dados
- Atrasos na entrega de informações críticas
- Baixa produtividade da equipe

## A Solução

Desenvolvi um sistema de automação completo utilizando:

### Stack Tecnológica
- **Backend:** Node.js + TypeScript para lógica de negócio robusta
- **Banco de Dados:** PostgreSQL para armazenamento estruturado
- **Integração:** APIs REST para comunicação com sistemas legados
- **Orquestração:** AWS Lambda para processamento assíncrono
- **Monitoramento:** CloudWatch para logging e alertas

### Funcionalidades Principais

1. **Extração Automatizada de Dados**
   - Integração com múltiplas fontes (APIs, bancos de dados, arquivos CSV/Excel)
   - Processamento em batch com retry automático
   - Validação de dados em tempo real

2. **Processamento Inteligente**
   - Algoritmos de consolidação de dados
   - Detecção de anomalias e inconsistências
   - Geração automática de relatórios

3. **Distribuição Automatizada**
   - Envio programado de relatórios por e-mail
   - Integração com sistemas internos via webhooks
   - Dashboard em tempo real para visualização

## Resultados

Após a implementação completa:

- ✅ **3000+ horas economizadas/mês**
- ✅ **Redução de 95% nos erros operacionais**
- ✅ **Relatórios gerados em minutos ao invés de dias**
- ✅ **ROI positivo em menos de 3 meses**

## Lições Aprendidas

1. **Mapeamento Detalhado:** Investir tempo inicial no mapeamento de processos economiza muito tempo no desenvolvimento
2. **Testes Rigorosos:** Automação crítica requer testes extensivos antes do deploy
3. **Monitoramento Contínuo:** Implementar alertas desde o início evita surpresas
4. **Documentação:** Processos automatizados precisam de documentação clara para manutenção

## Tecnologias e Práticas

- TypeScript para type safety
- Docker para containerização
- CI/CD com GitHub Actions
- Testes automatizados com Jest
- Infraestrutura como código (Terraform)

A automação não é apenas sobre economizar tempo, mas sobre liberar pessoas para trabalharem em atividades estratégicas que realmente agregam valor ao negócio.
      `,
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
      content: `
# Arquitetura de SaaS: Do Zero à Produção na AWS

## Introdução

Desenvolver uma plataforma SaaS escalável requer decisões arquiteturais sólidas desde o início. Neste artigo, compartilho minha experiência construindo múltiplas plataformas B2B na AWS.

## Arquitetura Base

### Frontend
- **React.js** com TypeScript
- **Vite** para build otimizado
- **AWS Amplify** para hosting e CI/CD
- **CloudFront** para CDN global

### Backend
- **Node.js** + Express + TypeScript
- **AWS Elastic Beanstalk** para deploy automatizado
- **RDS PostgreSQL** para dados relacionais
- **Redis (ElastiCache)** para cache e sessões

### Infraestrutura
- **VPC** configurada com subnets públicas e privadas
- **Application Load Balancer** para distribuição de carga
- **Auto Scaling** para elasticidade
- **CloudWatch** para monitoramento

## Multi-Tenancy

Implementei arquitetura multi-tenant usando:

1. **Schema por Tenant:** Cada cliente tem seu próprio schema no banco
2. **Isolamento de Dados:** Middleware de segurança valida tenant_id em todas as requisições
3. **Customização:** Configurações específicas por cliente armazenadas em DynamoDB

## Segurança

- **Cognito** para autenticação e autorização
- **WAF** para proteção contra ataques
- **Secrets Manager** para credenciais sensíveis
- **Encryption at rest** para todos os dados
- **HTTPS** obrigatório em todas as comunicações

## Escalabilidade

### Horizontal Scaling
- Auto Scaling Groups configurados para escalar baseado em métricas
- Min: 2 instâncias, Max: 10 instâncias

### Vertical Scaling
- Instâncias otimizadas por workload (Compute, Memory, Balanced)

### Database Scaling
- Read replicas para queries de leitura pesadas
- Connection pooling para gerenciar conexões eficientemente

## CI/CD Pipeline

\`\`\`yaml
# Exemplo do pipeline
1. Commit → GitHub
2. GitHub Actions executa testes
3. Build da aplicação
4. Deploy staging automático
5. Testes E2E em staging
6. Aprovação manual
7. Deploy produção
8. Health checks
\`\`\`

## Monitoramento

- **CloudWatch Dashboards** customizados
- **Alertas** configurados para métricas críticas
- **X-Ray** para tracing distribuído
- **Log aggregation** com CloudWatch Logs

## Custos

Para otimizar custos:
- Reserved Instances para cargas previsíveis
- Spot Instances para processamento batch
- S3 Lifecycle policies para arquivamento
- CloudFront para redução de tráfego de origem

## Conclusão

Construir SaaS na AWS oferece flexibilidade e escalabilidade, mas requer conhecimento profundo dos serviços e boas práticas. O investimento em arquitetura sólida desde o início compensa largamente no longo prazo.
      `,
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
      content: `
# React + Node.js: Stack Perfeita para MVPs Rápidos

## Por Que Esta Stack?

Quando preciso entregar um MVP rapidamente, sempre recorro à combinação React + Node.js. Aqui está o porquê:

### Vantagens

1. **JavaScript Fullstack**
   - Mesma linguagem no frontend e backend
   - Compartilhamento de tipos (com TypeScript)
   - Redução da curva de aprendizado da equipe

2. **Ecossistema Rico**
   - NPM com milhões de pacotes
   - Bibliotecas maduras e testadas
   - Comunidade ativa e suporte

3. **Performance**
   - Node.js é rápido para I/O bound operations
   - React é eficiente com Virtual DOM
   - SSR e SSG possíveis com Next.js

## Estrutura do Projeto

\`\`\`
project/
├── frontend/          # React app
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── utils/
│   │   └── api/
│   └── package.json
├── backend/           # Node.js API
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── middleware/
│   │   └── utils/
│   └── package.json
└── shared/            # Código compartilhado
    └── types/
\`\`\`

## Best Practices Frontend

### 1. Componentização
- Componentes pequenos e reutilizáveis
- Props tipadas com TypeScript
- Composition over inheritance

### 2. State Management
- Context API para estado global simples
- React Query para servidor state
- useState/useReducer para estado local

### 3. Performance
- React.memo para componentes puros
- useMemo e useCallback quando apropriado
- Code splitting com lazy loading

## Best Practices Backend

### 1. Estrutura
- Separação clara de concerns (MVC)
- Middleware para lógica transversal
- Services layer para lógica de negócio

### 2. Segurança
- Helmet para headers HTTP seguros
- Rate limiting para prevenir abuse
- Input validation com Joi ou Zod
- JWT para autenticação

### 3. Error Handling
- Middleware global de erro
- Logging estruturado
- Mensagens de erro claras

## Ferramentas Essenciais

### Development
- **Vite** - Build tool rápido
- **Nodemon** - Hot reload backend
- **ESLint + Prettier** - Code quality
- **TypeScript** - Type safety

### Testing
- **Jest** - Unit tests
- **React Testing Library** - Component tests
- **Supertest** - API tests
- **Cypress** - E2E tests

### DevOps
- **Docker** - Containerização
- **GitHub Actions** - CI/CD
- **PM2** - Process management
- **Nginx** - Reverse proxy

## Timeline Típico de MVP

- **Semana 1:** Setup, auth, CRUD básico
- **Semana 2:** Features core do produto
- **Semana 3:** UI polish, testes, bugs
- **Semana 4:** Deploy, monitoramento, feedback

## Conclusão

React + Node.js é uma stack comprovada para MVPs. A chave é focar no essencial, usar bibliotecas maduras e iterar rapidamente baseado em feedback real de usuários.
      `,
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
      content: `
# Integrando Stripe em Aplicações B2B: Lições Aprendidas

## Contexto

Integrar pagamentos em aplicações B2B é diferente de B2C. Há contratos complexos, múltiplos usuários por conta, e necessidades específicas de faturamento.

## Setup Inicial

### Instalação
\`\`\`bash
npm install stripe
\`\`\`

### Configuração Básica
\`\`\`javascript
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
\`\`\`

## Arquitetura de Pagamentos

### 1. Customers
- Um Customer Stripe por empresa (não por usuário)
- Metadata customizada para vincular ao tenant_id
- Email do admin da empresa

### 2. Products & Prices
- Products representam planos (Básico, Pro, Enterprise)
- Prices definem valores e recorrência
- Multiple prices por produto para tiers diferentes

### 3. Subscriptions
- Assinaturas vinculadas ao Customer
- Webhooks para eventos de lifecycle
- Trial periods configuráveis

## Implementação de Checkout

\`\`\`javascript
// Backend - Criar checkout session
app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    customer: customerId,
    payment_method_types: ['card'],
    line_items: [{
      price: priceId,
      quantity: 1,
    }],
    mode: 'subscription',
    success_url: 'https://yoursite.com/success',
    cancel_url: 'https://yoursite.com/cancel',
    metadata: {
      tenant_id: req.user.tenantId
    }
  });
  
  res.json({ sessionId: session.id });
});
\`\`\`

## Webhooks Críticos

### 1. checkout.session.completed
- Ativar assinatura no sistema
- Enviar email de boas-vindas
- Provisionar recursos

### 2. invoice.payment_succeeded
- Registrar pagamento
- Atualizar período de faturamento
- Gerar nota fiscal

### 3. invoice.payment_failed
- Notificar cliente
- Tentar cobrar novamente
- Suspender acesso após N tentativas

### 4. customer.subscription.deleted
- Cancelar acesso
- Arquivar dados
- Email de feedback

## Tratamento de Falhas

\`\`\`javascript
app.post('/webhook', express.raw({type: 'application/json'}), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body, 
      sig, 
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return res.status(400).send(\`Webhook Error: \${err.message}\`);
  }

  // Processar evento de forma idempotente
  const eventId = event.id;
  const alreadyProcessed = await checkIfEventProcessed(eventId);
  
  if (!alreadyProcessed) {
    await processEvent(event);
    await markEventAsProcessed(eventId);
  }

  res.json({received: true});
});
\`\`\`

## Gerenciamento de Assinaturas

### Upgrade/Downgrade
\`\`\`javascript
await stripe.subscriptions.update(subscriptionId, {
  items: [{
    id: subscriptionItemId,
    price: newPriceId,
  }],
  proration_behavior: 'create_prorations', // Prorata automaticamente
});
\`\`\`

### Cancelamento
\`\`\`javascript
// Cancelar no fim do período
await stripe.subscriptions.update(subscriptionId, {
  cancel_at_period_end: true
});

// Cancelar imediatamente
await stripe.subscriptions.cancel(subscriptionId);
\`\`\`

## Desafios e Soluções

### 1. Sincronização de Estado
**Problema:** Estado do Stripe pode divergir do banco de dados

**Solução:** 
- Webhooks são fonte da verdade
- Idempotência em todas as operações
- Reconciliação periódica

### 2. Testes
**Problema:** Testar fluxos de pagamento é complexo

**Solução:**
- Usar Stripe Test Mode
- Webhooks de teste com Stripe CLI
- Mock de chamadas Stripe em testes unitários

### 3. Faturamento Internacional
**Problema:** Diferentes moedas e impostos

**Solução:**
- Stripe Tax para cálculo automático
- Prices em múltiplas moedas
- Invoices localizadas

## Monitoramento

- Alertas para falhas de webhook
- Dashboard de métricas de pagamento
- Logs detalhados de todas as transações
- Reconciliação diária Stripe vs Banco

## Custos

- Stripe cobra 2.9% + R$0.30 por transação (Brasil)
- Sem mensalidade para plano padrão
- Stripe Billing adiciona funcionalidades avançadas

## Conclusão

Stripe simplifica enormemente a implementação de pagamentos, mas requer atenção aos detalhes especialmente em B2B. Webhooks bem implementados e tratamento robusto de erros são fundamentais para uma integração confiável.
      `,
      category: "Desenvolvimento",
      tags: ["Stripe", "Pagamentos", "B2B"],
      date: "2024-12-10",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
      featured: false
    }
  ]
};
