import type { LocalizedText } from '../types';

const loc = (en: string, es: string): LocalizedText => ({ en, es });

export interface TopicResource {
  label: LocalizedText;
  url: string;
}

export interface TopicHub {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  lead: LocalizedText;
  keywords: string[];
  projectIds: string[];
  blogPostIds: string[];
  resources?: TopicResource[];
}

export const topics: TopicHub[] = [
  {
    id: 'nestjs-multitenant-saas',
    title: loc('Multi-tenant SaaS with NestJS', 'SaaS multitenant con NestJS'),
    description: loc(
      'Production patterns for tenant isolation, shared schemas, and scalable onboarding in NestJS — case studies, articles, and learning repos.',
      'Patrones productivos de aislamiento de tenants, esquemas compartidos y onboarding escalable en NestJS — casos de estudio, artículos y repos de aprendizaje.',
    ),
    lead: loc(
      'How to scale B2B products without duplicating codebases or databases per customer. This hub connects live IoT/compliance platforms, banking-style demos, and reference APIs with the architecture writing behind them.',
      'Cómo escalar productos B2B sin duplicar codebases ni bases de datos por cliente. Este hub conecta plataformas IoT/cumplimiento en producción, demos tipo banking y APIs de referencia con la escritura de arquitectura detrás.',
    ),
    keywords: ['NestJS', 'multi-tenant', 'SaaS', 'tenant isolation'],
    projectIds: [
      'sims-technology-safesense',
      'arkano-banking-challenge',
      'multitenant-api',
      'nestjs-enterprise-starter',
    ],
    blogPostIds: ['multi-tenant-nestjs-saas'],
    resources: [
      {
        label: loc('Software Architecture Academy', 'Academia Arquitectura'),
        url: 'https://github.com/AndresED/academia-arquitectura',
      },
      {
        label: loc('TypeScript Academy', 'Academia TypeScript'),
        url: 'https://github.com/AndresED/academia-typescript',
      },
    ],
  },
  {
    id: 'event-driven-cqrs',
    title: loc('Event-driven architecture & CQRS', 'Arquitectura orientada a eventos y CQRS'),
    description: loc(
      'Decouple NestJS modules with domain events, message buses, and separate read/write models — microservice demos and deep-dive articles.',
      'Desacopla módulos NestJS con eventos de dominio, buses de mensajes y modelos de lectura/escritura separados — demos de microservicios y artículos profundos.',
    ),
    lead: loc(
      'When every feature touches five services, you have a coupling problem — not a staffing problem. Explore RabbitMQ gateways, transaction services, and CQRS handlers used in reference architectures and production-minded write-ups.',
      'Cuando cada feature toca cinco servicios, el problema es acoplamiento — no headcount. Explora gateways RabbitMQ, servicios de transacciones y handlers CQRS usados en arquitecturas de referencia y artículos orientados a producción.',
    ),
    keywords: ['event-driven', 'CQRS', 'RabbitMQ', 'NestJS microservices'],
    projectIds: [
      'nestjs-apigateway-rabbitmq',
      'nestjs-microservices-transactions',
      'nestjs-microservice-users',
      'arkano-banking-challenge',
    ],
    blogPostIds: ['fintech-core-rebuild-from-zero-slowly', 'nestjs-event-driven-api', 'cqrs-nestjs-reads-writes'],
    resources: [
      {
        label: loc('Software Architecture Academy', 'Academia Arquitectura'),
        url: 'https://github.com/AndresED/academia-arquitectura',
      },
    ],
  },
  {
    id: 'hexagonal-clean-architecture',
    title: loc('Hexagonal & Clean Architecture in NestJS', 'Arquitectura hexagonal y Clean en NestJS'),
    description: loc(
      'Ports, adapters, and testable boundaries for NestJS services that outlive framework churn — starter templates and practical guides.',
      'Puertos, adaptadores y límites testeables para servicios NestJS que sobreviven al framework — plantillas starter y guías prácticas.',
    ),
    lead: loc(
      'Controllers that know too much and entities full of ORM decorators are symptoms — not causes. This cluster links an enterprise starter template, a step-by-step hexagonal guide, and curriculum repos for maintainable backend design.',
      'Controllers que saben demasiado y entidades llenas de decoradores ORM son síntomas — no causas. Este cluster enlaza un starter enterprise, una guía hexagonal paso a paso y repos curriculares para diseño backend mantenible.',
    ),
    keywords: ['hexagonal architecture', 'clean architecture', 'ports and adapters', 'NestJS'],
    projectIds: ['nestjs-enterprise-starter', 'spec-driven-development-framework', 'arkano-banking-challenge'],
    blogPostIds: ['fintech-core-rebuild-from-zero-slowly', 'hexagonal-architecture-nestjs'],
    resources: [
      {
        label: loc('Software Architecture Academy', 'Academia Arquitectura'),
        url: 'https://github.com/AndresED/academia-arquitectura',
      },
      {
        label: loc('JavaScript Internals Academy', 'Academia JavaScript Internals'),
        url: 'https://github.com/AndresED/academia-javascript-internals',
      },
    ],
  },
  {
    id: 'iot-edge-compliance',
    title: loc('IoT, edge & compliance platforms', 'IoT, edge y plataformas de cumplimiento'),
    description: loc(
      'End-to-end SafeSense stack: Arduino edge, MQTT ingestion, multitenant APIs, web/mobile ops, and audit-ready reporting for HACCP/ISO workflows.',
      'Stack SafeSense de punta a punta: edge Arduino, ingesta MQTT, APIs multitenant, operación web/móvil y reportes listos para auditoría HACCP/ISO.',
    ),
    lead: loc(
      'Cold-chain and lab monitoring fail silently until product is lost. SIMS Technology SafeSense is a production platform in Peru spanning hardware, backend, and compliance dashboards — documented here as a full-stack case study.',
      'La cadena de frío y monitoreo de laboratorio fallan en silencio hasta perder producto. SIMS Technology SafeSense es una plataforma en producción en Perú que abarca hardware, backend y dashboards de cumplimiento — documentada aquí como caso de estudio full stack.',
    ),
    keywords: ['IoT', 'MQTT', 'compliance', 'cold chain', 'multitenant'],
    projectIds: ['sims-technology-safesense'],
    blogPostIds: ['multi-tenant-nestjs-saas'],
    resources: [
      {
        label: loc('SafeSense live product', 'Producto SafeSense en vivo'),
        url: 'https://sims-technology.com/',
      },
    ],
  },
  {
    id: 'aws-backend-cloud',
    title: loc('AWS backend & cloud delivery', 'Backend AWS y entrega en la nube'),
    description: loc(
      'AWS-certified backend patterns: serverless, containers, certification prep repos, and production NestJS services deployed on AWS.',
      'Patrones backend certificados AWS: serverless, contenedores, repos de preparación para certificación y servicios NestJS productivos desplegados en AWS.',
    ),
    lead: loc(
      'From DVA-C02 study paths to multitenant APIs in production, this hub gathers cloud-native delivery work — certification-backed learning tracks plus projects that ship on AWS infrastructure.',
      'Desde rutas de estudio DVA-C02 hasta APIs multitenant en producción, este hub reúne trabajo cloud-native — tracks de aprendizaje respaldados por certificación más proyectos que despliegan en infraestructura AWS.',
    ),
    keywords: ['AWS', 'cloud-native', 'Lambda', 'ECS', 'DVA-C02'],
    projectIds: ['andres-ed-academy', 'sims-technology-safesense', 'portafolio-2026'],
    blogPostIds: [],
    resources: [
      {
        label: loc('AWS Developer Associate Academy', 'Academia AWS Developer Associate'),
        url: 'https://github.com/AndresED/academia-aws-developer-associate',
      },
      {
        label: loc('AI Engineer Academy', 'Academia AI Engineer'),
        url: 'https://github.com/AndresED/ai-engineer-academy',
      },
    ],
  },
];

/** Topics highlighted on the home page. */
export const featuredTopicIds = [
  'nestjs-multitenant-saas',
  'event-driven-cqrs',
  'iot-edge-compliance',
] as const;

export function getTopicById(id: string): TopicHub | undefined {
  return topics.find((topic) => topic.id === id);
}

export function getFeaturedTopics(): TopicHub[] {
  return featuredTopicIds
    .map((id) => getTopicById(id))
    .filter((topic): topic is TopicHub => topic !== undefined);
}

export function getTopicsForProject(projectId: string): TopicHub[] {
  return topics.filter((topic) => topic.projectIds.includes(projectId));
}

export function getTopicsForPost(postId: string): TopicHub[] {
  return topics.filter((topic) => topic.blogPostIds.includes(postId));
}
