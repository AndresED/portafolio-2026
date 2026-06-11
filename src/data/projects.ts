import type { Project, LocalizedText } from '../types';

const loc = (en: string, es: string): LocalizedText => ({ en, es });

export const projects: Project[] = [
  {
    id: 'making-code',
    title: 'Making Code',
    description:
      'Technical blog on software engineering, cryptography, blockchain, and applied AI — articles and tutorials from production experience.',
    thumbnail: '/images/projects/making-code.png',
    techStack: ['Next.js', 'MDX', 'Tailwind CSS'],
    liveUrl: 'https://www.makingcode.dev/',
    tags: ['Blog', 'Next.js', 'MDX'],
    featured: true,
    category: 'frontend',
    role: loc('Author & maintainer', 'Autor y mantenedor'),
    problem: loc(
      'Document deep technical topics without losing clarity for practitioners.',
      'Documentar temas técnicos profundos sin perder claridad para quien implementa.',
    ),
    impact: loc(
      '17+ articles on algorithms, cryptography, and backend patterns; reference for peers and interviews.',
      '17+ artículos sobre algoritmos, criptografía y patrones backend; referencia para colegas y entrevistas.',
    ),
  },
  {
    id: 'portafolio-2026',
    title: 'Personal Portfolio (andresed.dev)',
    description:
      'Bilingual static portfolio for a Senior Backend Engineer — Astro, TypeScript, Tailwind, EmailJS contact, and recruiter-focused sections.',
    thumbnail: '/images/projects/portfolio.png',
    techStack: ['Astro', 'TypeScript', 'Tailwind CSS', 'EmailJS'],
    githubUrl: 'https://github.com/AndresED/portafolio-2026',
    liveUrl: 'https://www.andresed.dev/',
    tags: ['Portfolio', 'Astro', 'Static Site'],
    featured: true,
    category: 'frontend',
    role: loc('Author & maintainer', 'Autor y mantenedor'),
    problem: loc(
      'Present backend experience, projects, and publications in a fast, credible site recruiters can scan in minutes.',
      'Presentar experiencia backend, proyectos y publicaciones en un sitio rápido y creíble que un reclutador revise en minutos.',
    ),
    impact: loc(
      'Open-source blueprint with EN/ES i18n, PageSpeed-focused assets, and contact flow — live at andresed.dev.',
      'Blueprint open source con i18n EN/ES, assets optimizados para PageSpeed y flujo de contacto — en vivo en andresed.dev.',
    ),
  },
  {
    id: 'arkano-banking-challenge',
    title: 'Banking Platform (Microservices + Events)',
    description:
      'Three NestJS microservices with PostgreSQL per service and a Kafka-compatible event bus (Redpanda).',
    thumbnail: '/images/projects/banking.png',
    techStack: ['NestJS', 'TypeScript', 'PostgreSQL', 'KafkaJS', 'Docker'],
    githubUrl: 'https://github.com/AndresED/arkano-banking-challenge',
    tags: ['Microservices', 'Event-Driven', 'CQRS'],
    featured: true,
    category: 'microservices',
    role: loc('Architect & implementer', 'Arquitecto e implementador'),
    problem: loc(
      'Model a banking-style domain with reliable cross-service events and failure recovery.',
      'Modelar un dominio tipo banca con eventos confiables entre servicios y recuperación ante fallos.',
    ),
    impact: loc(
      'Outbox pattern, idempotent consumers, retry/DLQ policies, and isolated DB per service — production-grade event flow.',
      'Patrón outbox, consumidores idempotentes, reintentos/DLQ y BD aislada por servicio — flujo de eventos listo para producción.',
    ),
  },
  {
    id: 'nestjs-enterprise-starter',
    title: 'NestJS Enterprise Starter',
    description:
      'Production-ready boilerplate with Clean Architecture, CQRS, TypeORM, and PostgreSQL.',
    thumbnail: '/images/projects/enterprise.png',
    techStack: ['NestJS', 'TypeORM', 'PostgreSQL', 'Redis', 'BullMQ'],
    githubUrl: 'https://github.com/AndresED/nestjs-enterprise-starter',
    tags: ['Architecture', 'Boilerplate', 'Multi-tenant'],
    featured: true,
    category: 'architecture',
    role: loc('Author & maintainer', 'Autor y mantenedor'),
    problem: loc(
      'Teams need a NestJS baseline that scales from monolith to multi-tenant microservices without rewriting foundations.',
      'Los equipos necesitan una base NestJS que escale de monolito a microservicios multitenant sin reescribir cimientos.',
    ),
    impact: loc(
      'Documented modules for CQRS, hexagonal boundaries, and deployment patterns — accelerates new service bootstrapping.',
      'Módulos documentados para CQRS, límites hexagonales y despliegue — acelera el arranque de nuevos servicios.',
    ),
  },
  {
    id: 'notarizar-documentos-algorand',
    title: 'Document Notarization with Algorand',
    description:
      'NestJS service for cryptographic document notarization and immutable records on Algorand.',
    thumbnail: '/images/projects/algorand.png',
    techStack: ['NestJS', 'Algorand', 'TypeScript', 'MongoDB'],
    githubUrl: 'https://github.com/AndresED/notarizar-documentos-algorand',
    tags: ['Blockchain', 'NestJS', 'Algorand'],
    featured: true,
    category: 'blockchain',
    role: loc('Backend developer', 'Desarrollador backend'),
    problem: loc(
      'Prove document integrity with on-chain proof without exposing file contents on the ledger.',
      'Demostrar integridad documental con prueba on-chain sin exponer el contenido del archivo en la cadena.',
    ),
    impact: loc(
      'Hash-based notarization API with NestJS — verifiable timestamps for compliance workflows.',
      'API de notarización por hash con NestJS — timestamps verificables para flujos de cumplimiento.',
    ),
  },
  {
    id: 'spec-driven-development-framework',
    title: 'Spec-Driven Development Framework',
    description:
      'Framework for AI-assisted spec-driven delivery: templates, session management, and architecture validation.',
    thumbnail: '/images/projects/spec-driven.png',
    techStack: ['Shell', 'Markdown', 'AI Agents', 'Clean Architecture'],
    githubUrl: 'https://github.com/AndresED/spec-driver-development-framework',
    tags: ['Methodology', 'AI', 'Framework'],
    featured: true,
    category: 'architecture',
    role: loc('Creator', 'Creador'),
    problem: loc(
      'AI-generated code drifts from architecture without explicit specs and guardrails.',
      'El código generado por IA se desalinea de la arquitectura sin specs explícitas y guardrails.',
    ),
    impact: loc(
      'Repeatable spec templates and validation scripts — tighter human–AI loop for backend changes.',
      'Plantillas de specs y scripts de validación repetibles — ciclo humano–IA más controlado en backend.',
    ),
  },
  {
    id: 'multitenant-api',
    title: 'Multi-Tenant API',
    description:
      'REST API with database-per-tenant isolation using NestJS, MongoDB, and CQRS.',
    thumbnail: '/images/projects/multitenant.png',
    techStack: ['NestJS', 'MongoDB', 'TypeScript', 'CQRS', 'Docker'],
    githubUrl: 'https://github.com/AndresED/multitenant-api',
    tags: ['Multi-tenant', 'CQRS', 'MongoDB'],
    featured: false,
    category: 'architecture',
    role: loc('Implementer', 'Implementador'),
    problem: loc(
      'Isolate tenant data completely while sharing application code and deployment.',
      'Aislar datos por tenant manteniendo código y despliegue compartidos.',
    ),
    impact: loc(
      'Connection pooling per tenant, middleware routing, and CQRS read/write separation.',
      'Pool de conexiones por tenant, middleware de enrutamiento y separación CQRS lectura/escritura.',
    ),
  },
  {
    id: 'nestjs-microservices-transactions',
    title: 'Microservices Architecture',
    description:
      'NestJS microservices with RabbitMQ for user and transaction management.',
    thumbnail: '/images/projects/microservices.png',
    techStack: ['NestJS', 'RabbitMQ', 'MongoDB', 'TypeScript'],
    githubUrl: 'https://github.com/AndresED/nestjs-microservices-transactions-rabbitmq',
    tags: ['Microservices', 'RabbitMQ', 'NestJS'],
    featured: false,
    category: 'microservices',
    role: loc('Implementer', 'Implementador'),
    problem: loc(
      'Coordinate user and transaction operations across services without tight coupling.',
      'Coordinar operaciones de usuarios y transacciones entre servicios sin acoplamiento fuerte.',
    ),
    impact: loc(
      'Message-driven boundaries with RabbitMQ — reference for async inter-service communication.',
      'Límites orientados a mensajes con RabbitMQ — referencia de comunicación async entre servicios.',
    ),
  },
  {
    id: 'nestjs-microservice-users',
    title: 'Users Microservice (RabbitMQ)',
    description:
      'Dedicated users microservice with RabbitMQ for distributed user management and auth events.',
    thumbnail: '/images/projects/users-ms.png',
    techStack: ['NestJS', 'RabbitMQ', 'TypeScript', 'MongoDB'],
    githubUrl: 'https://github.com/AndresED/nestjs-microservice-users-rabbitmq',
    tags: ['Microservices', 'RabbitMQ', 'NestJS'],
    featured: false,
    category: 'microservices',
  },
  {
    id: 'nestjs-apigateway-rabbitmq',
    title: 'API Gateway (RabbitMQ)',
    description:
      'NestJS API Gateway routing HTTP requests to microservices via RabbitMQ.',
    thumbnail: '/images/projects/gateway.png',
    techStack: ['NestJS', 'RabbitMQ', 'TypeScript'],
    githubUrl: 'https://github.com/AndresED/nestjs-apigateway-rabbitmq',
    tags: ['API Gateway', 'RabbitMQ', 'NestJS'],
    featured: false,
    category: 'microservices',
  },
];

/** Shown on the home page — backend-focused featured work. */
export const homeFeaturedProjectIds = ['arkano-banking-challenge', 'nestjs-enterprise-starter', 'multitenant-api'] as const;

export function getHomeFeaturedProjects(): Project[] {
  return homeFeaturedProjectIds
    .map((id) => projects.find((p) => p.id === id))
    .filter((p): p is Project => p !== undefined);
}

export const portfolioFilters = [
  { id: 'all', label: 'All', i18nKey: 'portfolio.filter.all' },
  { id: 'microservices', label: 'Microservices', i18nKey: 'portfolio.filter.microservices' },
  { id: 'architecture', label: 'Architecture & Patterns', i18nKey: 'portfolio.filter.architecture' },
  { id: 'blockchain', label: 'Blockchain', i18nKey: 'portfolio.filter.blockchain' },
  { id: 'frontend', label: 'Frontend', i18nKey: 'portfolio.filter.frontend' },
] as const;
