import type { Project, LocalizedText } from '../types';
import { layersFor } from './project-layers';

const loc = (en: string, es: string): LocalizedText => ({ en, es });

const withLayers = (project: Omit<Project, 'layers'>): Project => ({
  ...project,
  layers: layersFor(project.id) ?? [],
});

export const projects: Project[] = [
  withLayers({
    id: 'sims-technology-safesense',
    title: 'SafeSense — SIMS Technology IoT Platform',
    description:
      'Production IoT platform for agroindustry and laboratories in Peru: portable sensors, real-time monitoring, automated alerts, and audit-ready dashboards — full stack from Arduino edge to web and mobile.',
    thumbnail: '/images/projects/portada-sims.png',
    techStack: ['NestJS', 'React', 'Angular', 'React Native', 'MQTT', 'Arduino', 'MySQL'],
    liveUrl: 'https://sims-technology.com/',
    tags: ['IoT', 'Multi-tenant', 'Real-time', 'Full stack'],
    featured: true,
    category: 'iot',
    role: loc(
      'Full-stack engineer — hardware edge, API architecture, Angular v1, React v2 migration, and Expo mobile',
      'Ingeniero full stack — edge hardware, arquitectura API, Angular v1, migración React v2 y móvil Expo',
    ),
    problem: loc(
      'Cold-chain and lab processes relied on manual readings and disconnected thermometers — failures were discovered after product loss, with weak traceability for HACCP/ISO audits.',
      'La cadena de frío y procesos de laboratorio dependían de lecturas manuales y termómetros sin conectividad — las fallas se detectaban tras pérdida de producto, con trazabilidad débil para auditorías HACCP/ISO.',
    ),
    impact: loc(
      'Live product at sims-technology.com — end-to-end SafeSense stack with multi-tenant operations, incident alerts (email, SMS, WhatsApp), and exportable compliance reports.',
      'Producto en vivo en sims-technology.com — stack SafeSense de punta a punta con operación multitenant, alertas de incidencias (email, SMS, WhatsApp) y reportes exportables para cumplimiento.',
    ),
  }),
  withLayers({
    id: 'andres-ed-academy',
    title: 'Technical Academy (GitHub)',
    description:
      'Open curriculum repositories for AWS certification prep, language deep dives, and applied AI engineering — structured labs and notes for self-paced learning.',
    thumbnail: '/images/projects/academy.png',
    techStack: ['AWS', 'TypeScript', 'JavaScript', 'React', 'AI', 'Java', 'Go'],
    githubUrl: 'https://github.com/AndresED',
    tags: ['Academy', 'Open source', 'Learning'],
    featured: false,
    category: 'academy',
    role: loc('Author & maintainer', 'Autor y mantenedor'),
    problem: loc(
      'Scattered tutorials rarely build depth — learners need structured, repo-based paths tied to real certification and production skills.',
      'Tutoriales dispersos rara vez construyen profundidad — hace falta rutas estructuradas en repos ligadas a certificación y skills productivos.',
    ),
    impact: loc(
      'Seven public academies on GitHub covering AWS DVA, JS internals, TypeScript, React, AI engineering, Java, and Go — each repo is a modular learning track.',
      'Siete academias públicas en GitHub: AWS DVA, JS internals, TypeScript, React, AI engineering, Java y Go — cada repo es un track modular de aprendizaje.',
    ),
  }),
  withLayers({
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
  }),
  withLayers({
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
  }),
  withLayers({
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
  }),
  withLayers({
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
  }),
  withLayers({
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
  }),
  withLayers({
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
  }),
  withLayers({
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
  }),
  withLayers({
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
  }),
  withLayers({
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
    role: loc('Implementer', 'Implementador'),
    problem: loc(
      'User identity and profile data must stay isolated while other services consume auth events asynchronously.',
      'Identidad y perfiles deben permanecer aislados mientras otros servicios consumen eventos de auth de forma async.',
    ),
    impact: loc(
      'Message-only API via RabbitMQ — composable building block in the NestJS microservices demo suite.',
      'API solo por mensajes vía RabbitMQ — bloque composable en el demo de microservicios NestJS.',
    ),
  }),
  withLayers({
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
    role: loc('Implementer', 'Implementador'),
    problem: loc(
      'External clients need REST while internal services should communicate only through the message bus.',
      'Clientes externos necesitan REST mientras servicios internos deben comunicarse solo por el bus de mensajes.',
    ),
    impact: loc(
      'Thin HTTP edge translating requests to RabbitMQ RPC — hides topology from API consumers.',
      'Edge HTTP delgado traduciendo requests a RPC RabbitMQ — oculta topología a consumidores del API.',
    ),
  }),
];

/** Shown on the home page — production and reference builds. */
export const homeFeaturedProjectIds = [
  'sims-technology-safesense',
  'arkano-banking-challenge',
  'nestjs-enterprise-starter',
] as const;

export function getHomeFeaturedProjects(): Project[] {
  return homeFeaturedProjectIds
    .map((id) => projects.find((p) => p.id === id))
    .filter((p): p is Project => p !== undefined);
}

export const portfolioFilters = [
  { id: 'all', label: 'All', i18nKey: 'portfolio.filter.all' },
  { id: 'iot', label: 'IoT & Edge', i18nKey: 'portfolio.filter.iot' },
  { id: 'microservices', label: 'Microservices', i18nKey: 'portfolio.filter.microservices' },
  { id: 'architecture', label: 'Architecture & Patterns', i18nKey: 'portfolio.filter.architecture' },
  { id: 'blockchain', label: 'Blockchain', i18nKey: 'portfolio.filter.blockchain' },
  { id: 'frontend', label: 'Frontend', i18nKey: 'portfolio.filter.frontend' },
  { id: 'academy', label: 'Academy', i18nKey: 'portfolio.filter.academy' },
] as const;
