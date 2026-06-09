import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'making-code',
    title: 'Making Code',
    description:
      'Making Code is the corner where I share my experiences and knowledge about technology, software development, cryptography, blockchain, artificial intelligence, and much more.',
    thumbnail: '/images/projects/making-code.png',
    techStack: ['Next.js', 'MDX', 'Tailwind CSS'],
    liveUrl: 'https://www.makingcode.dev/',
    tags: ['Blog', 'Next.js', 'MDX'],
    featured: true,
    category: 'content',
  },
  {
    id: 'arkano-banking-challenge',
    title: 'Banking Platform (Microservices + Events)',
    description:
      'Three NestJS microservices with PostgreSQL per service and Kafka-compatible event bus (Redpanda). Implements outbox pattern, idempotent consumers, retry/DLQ, and optional LLM integration via Ollama.',
    thumbnail: '/images/projects/banking.png',
    techStack: ['NestJS', 'TypeScript', 'PostgreSQL', 'KafkaJS', 'Docker'],
    githubUrl: 'https://github.com/AndresED/arkano-banking-challenge',
    tags: ['Microservices', 'Event-Driven', 'CQRS'],
    featured: true,
    category: 'microservices',
  },
  {
    id: 'nestjs-enterprise-starter',
    title: 'NestJS Enterprise Starter',
    description:
      'Production-ready boilerplate with Clean Architecture, CQRS, TypeORM, and PostgreSQL. Supports monolith, multi-tenant, and microservices patterns with comprehensive documentation.',
    thumbnail: '/images/projects/enterprise.png',
    techStack: ['NestJS', 'TypeORM', 'PostgreSQL', 'Redis', 'BullMQ'],
    githubUrl: 'https://github.com/AndresED/nestjs-enterprise-starter',
    tags: ['Architecture', 'Boilerplate', 'Multi-tenant'],
    featured: true,
    category: 'architecture',
  },
  {
    id: 'notarizar-documentos-algorand',
    title: 'Document Notarization with Algorand',
    description:
      'Service responsible for notarizing documents using the Algorand blockchain. Built with NestJS and TypeScript for cryptographic document verification and immutable record keeping.',
    thumbnail: '/images/projects/algorand.png',
    techStack: ['NestJS', 'Algorand', 'TypeScript', 'MongoDB'],
    githubUrl: 'https://github.com/AndresED/notarizar-documentos-algorand',
    tags: ['Blockchain', 'NestJS', 'Algorand'],
    featured: true,
    category: 'blockchain',
  },
  {
    id: 'spec-driven-development-framework',
    title: 'Spec-Driven Development Framework',
    description:
      'Complete framework for AI-assisted Spec-Driven Development. Includes templates, session management, architecture validation scripts, and agent rules for controlled AI code generation.',
    thumbnail: '/images/projects/spec-driven.png',
    techStack: ['Shell', 'Markdown', 'AI Agents', 'Clean Architecture'],
    githubUrl: 'https://github.com/AndresED/spec-driver-development-framework',
    tags: ['Methodology', 'AI', 'Framework'],
    featured: true,
    category: 'architecture',
  },
  {
    id: 'multitenant-api',
    title: 'Multi-Tenant API',
    description:
      'REST API with database-per-tenant isolation using NestJS, MongoDB, and CQRS. Features connection pooling, tenant middleware, and complete data separation between tenants.',
    thumbnail: '/images/projects/multitenant.png',
    techStack: ['NestJS', 'MongoDB', 'TypeScript', 'CQRS', 'Docker'],
    githubUrl: 'https://github.com/AndresED/multitenant-api',
    tags: ['Multi-tenant', 'CQRS', 'MongoDB'],
    featured: false,
    category: 'architecture',
  },
  {
    id: 'nestjs-microservices-transactions',
    title: 'Microservices Architecture',
    description:
      'Implementation of microservices with NestJS and RabbitMQ, utilizing the microservices architecture for user and transaction management.',
    thumbnail: '/images/projects/microservices.png',
    techStack: ['NestJS', 'RabbitMQ', 'MongoDB', 'TypeScript'],
    githubUrl: 'https://github.com/AndresED/nestjs-microservices-transactions-rabbitmq',
    tags: ['Microservices', 'RabbitMQ', 'NestJS'],
    featured: false,
    category: 'microservices',
  },
  {
    id: 'nestjs-microservice-users',
    title: 'Users Microservice (RabbitMQ)',
    description:
      'Dedicated users microservice built with NestJS and RabbitMQ for distributed user management, authentication, and event-based communication.',
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
      'API Gateway implementation with NestJS that routes requests to microservices via RabbitMQ message broker, providing a unified entry point for the distributed system.',
    thumbnail: '/images/projects/gateway.png',
    techStack: ['NestJS', 'RabbitMQ', 'TypeScript'],
    githubUrl: 'https://github.com/AndresED/nestjs-apigateway-rabbitmq',
    tags: ['API Gateway', 'RabbitMQ', 'NestJS'],
    featured: false,
    category: 'microservices',
  },
];

export const portfolioFilters = [
  { id: 'all', label: 'All', i18nKey: 'portfolio.filter.all' },
  { id: 'microservices', label: 'Microservices', i18nKey: 'portfolio.filter.microservices' },
  { id: 'architecture', label: 'Architecture', i18nKey: 'portfolio.filter.architecture' },
  { id: 'blockchain', label: 'Blockchain', i18nKey: 'portfolio.filter.blockchain' },
  { id: 'content', label: 'Content', i18nKey: 'portfolio.filter.content' },
] as const;
