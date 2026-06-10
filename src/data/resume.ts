import type { Certification, Education, Experience, LocalizedText } from '../types';

const loc = (en: string, es: string): LocalizedText => ({ en, es });

/** Work history — EN + ES; UI toggles via `html[lang]` + `.locale-en` / `.locale-es`. */
export const experiences: Experience[] = [
  {
    company: 'Wost Creative Solutions',
    role: loc('Senior Backend Developer', 'Desarrollador backend senior'),
    period: loc('Jan 2026 - Present', 'Ene 2026 - Actualidad'),
    engagement: 'full_time',
    description: loc(
      'Full-time remote delivery for web and mobile products, multitenant APIs, and integrations with regional compliance and logistics services.',
      'Entrega remota a tiempo completo para productos web y móviles, APIs multitenant e integraciones con cumplimiento regional y servicios logísticos.'
    ),
    highlights: [
      loc(
        'Multitenant NestJS APIs with per-client data isolation for logistics and customs workflows across Peru',
        'APIs NestJS multitenant con aislamiento de datos por cliente para flujos logísticos y aduaneros en Perú'
      ),
      loc('Web apps in React; mobile apps in React Native', 'Aplicaciones web en React; apps móviles en React Native'),
      loc(
        'PostgreSQL modeling and operations; integrations (Sunat, customs, e-invoicing, Nubefact, SeaRates)',
        'Modelado y operación con PostgreSQL; integraciones (Sunat, aduanas, facturación electrónica, Nubefact, SeaRates)'
      ),
      loc(
        'DevOps on AWS: CloudFront, S3, EC2, Amplify, DynamoDB, API Gateway, CodePipeline, CodeBuild, Lambda',
        'DevOps en AWS: CloudFront, S3, EC2, Amplify, DynamoDB, API Gateway, CodePipeline, CodeBuild, Lambda'
      ),
    ],
  },
  {
    company: 'Tres Astronautas',
    role: loc('Lead Backend Developer / Senior Backend Developer', 'Líder backend / Desarrollador backend senior'),
    period: loc('Mar 2021 - Jan 2026', 'Mar 2021 - Ene 2026'),
    engagement: 'full_time',
    description: loc(
      'Remote full-time roles in Colombia: progressed from senior backend (product and mentoring) to technical lead, owning architecture, quality, and delivery across distributed systems.',
      'Roles remotos a tiempo completo en Colombia: evolución de backend senior (producto y mentoría) a líder técnico, a cargo de arquitectura, calidad y entrega en sistemas distribuidos.'
    ),
    highlights: [
      loc(
        'Owned backend architecture for product teams shipping microservices with hexagonal boundaries and external provider integrations',
        'Arquitectura backend para equipos de producto con microservicios, límites hexagonales e integraciones con proveedores externos'
      ),
      loc(
        'Technical leadership and mentoring; promoted standards and sustainable practices in shared codebases',
        'Liderazgo técnico y mentoría; estándares y prácticas sostenibles en bases de código compartidas'
      ),
      loc(
        'DevOps and cloud on Google Cloud, AWS, and Azure DevOps with automated delivery pipelines',
        'DevOps y nube en Google Cloud, AWS y Azure DevOps con pipelines de entrega automatizados'
      ),
      loc(
        'Unit testing with Jest; focus on scalability, performance, and maintainability',
        'Pruebas unitarias con Jest; foco en escalabilidad, rendimiento y mantenibilidad'
      ),
    ],
  },
  {
    company: 'Think In',
    role: loc('Full Stack Engineer', 'Ingeniero full stack'),
    period: loc('Feb 2019 - Feb 2024', 'Feb 2019 - Feb 2024'),
    engagement: 'freelance',
    description: loc(
      'Freelance, project-based work from Colombia (remote): APIs, mobile, payments, cloud, IoT, and applied ML — concurrent with other engagements where schedules allowed.',
      'Trabajo freelance por proyectos desde Colombia (remoto): APIs, móvil, pagos, nube, IoT y ML aplicado — concurrente con otros compromisos cuando el calendario lo permitía.'
    ),
    highlights: [
      loc(
        'Microservices with NestJS and NATS; REST and GraphQL with NestJS; REST APIs with Laravel',
        'Microservicios con NestJS y NATS; REST y GraphQL con NestJS; APIs REST con Laravel'
      ),
      loc('Hybrid apps with Ionic 6; SPAs with Angular 12 and Vue.js', 'Apps híbridas con Ionic 6; SPAs con Angular 12 y Vue.js'),
      loc(
        'Payments: PayU Latam, Wompi, Mercado Pago, Coinbase; social APIs (Facebook, Twitter, Instagram)',
        'Pagos: PayU Latam, Wompi, Mercado Pago, Coinbase; APIs sociales (Facebook, Twitter, Instagram)'
      ),
      loc(
        'Releases to Google Play; hosting and G Suite administration; GCP (App Engine, GKE) and DigitalOcean',
        'Publicaciones en Google Play; hosting y administración G Suite; GCP (App Engine, GKE) y DigitalOcean'
      ),
      loc('IoT with MQTT and Arduino; facial recognition experiments with TensorFlow', 'IoT con MQTT y Arduino; experimentos de reconocimiento facial con TensorFlow'),
    ],
  },
  {
    company: 'Company JEF',
    role: loc('Full Stack Developer', 'Desarrollador full stack'),
    period: loc('Jul 2021 - Jul 2022', 'Jul 2021 - Jul 2022'),
    engagement: 'freelance',
    description: loc(
      'Independent, objective-based work from La Libertad, Peru — concurrent with other remote engagements; backend, frontend, and edge-style workloads.',
      'Trabajo independiente por objetivos desde La Libertad, Perú — concurrente con otros compromisos remotos; backend, frontend y cargas tipo edge.'
    ),
    highlights: [
      loc('Microservices with NestJS and NATS', 'Microservicios con NestJS y NATS'),
      loc('SPAs with Angular; installation and configuration of web hosting stacks', 'SPAs con Angular; instalación y configuración de stacks de hosting web'),
      loc('IoT with MQTT and Arduino', 'IoT con MQTT y Arduino'),
      loc('Machine learning features with TensorFlow', 'Funcionalidades de aprendizaje automático con TensorFlow'),
    ],
  },
  {
    company: 'Wost Creative Solutions',
    role: loc('Full Stack Engineer', 'Ingeniero full stack'),
    period: loc('Feb 2020 - Jan 2022', 'Feb 2020 - Ene 2022'),
    engagement: 'freelance',
    description: loc(
      'Freelance, objective-based projects across data, APIs, multi-tenant systems, mobile, and e-commerce — overlapping with other client work in 2020–2021.',
      'Proyectos freelance por objetivos en datos, APIs, sistemas multitenant, móvil y e-commerce — solapados con otros clientes en 2020–2021.'
    ),
    highlights: [
      loc(
        'Database design and implementation with MySQL, PostgreSQL, SQL Server, MongoDB, and Redis',
        'Diseño e implementación de bases de datos con MySQL, PostgreSQL, SQL Server, MongoDB y Redis'
      ),
      loc('REST and GraphQL APIs with NestJS and Laravel; multi-tenant architectures', 'APIs REST y GraphQL con NestJS y Laravel; arquitecturas multitenant'),
      loc('Hybrid apps with Ionic 5; SPAs with Angular 12; WooCommerce e-commerce', 'Apps híbridas con Ionic 5; SPAs con Angular 12; e-commerce WooCommerce'),
      loc('Payments with Culqi, PayU Latam, and Coinbase; social network APIs', 'Pagos con Culqi, PayU Latam y Coinbase; APIs de redes sociales'),
      loc('Deployments to Play Store, App Store, and DigitalOcean; web server setup on hostings', 'Despliegues en Play Store, App Store y DigitalOcean; configuración de servidores web en hostings'),
    ],
  },
  {
    company: 'Coordinadora Mercantil',
    role: loc('Full Stack Developer', 'Desarrollador full stack'),
    period: loc('Mar 2021 - Oct 2021', 'Mar 2021 - Oct 2021'),
    engagement: 'contract',
    description: loc(
      'Short contract from Colombia (home office) for a logistics network platform — ran in parallel with other remote roles.',
      'Contrato corto desde Colombia (home office) para una plataforma de red logística — en paralelo con otros roles remotos.'
    ),
    highlights: [
      loc('Deployments on Google Cloud (App Engine and Kubernetes)', 'Despliegues en Google Cloud (App Engine y Kubernetes)'),
      loc('Micro-frontends with React, Vue.js, and Angular; SSR with Next.js', 'Micro-frontends con React, Vue.js y Angular; SSR con Next.js'),
      loc('Event-driven microservices with Pub/Sub and TDD using Node.js and Firebase', 'Microservicios orientados a eventos con Pub/Sub y TDD con Node.js y Firebase'),
      loc('PayU Latam payments; CI/CD pipelines with GitHub Actions', 'Pagos PayU Latam; pipelines CI/CD con GitHub Actions'),
    ],
  },
  {
    company: 'Comodin Empresas',
    role: loc('Co-Founder | Programmer Analyst', 'Cofundador | Analista programador'),
    period: loc('Aug 2017 - Jul 2020', 'Ago 2017 - Jul 2020'),
    engagement: 'co_founder',
    description: loc(
      'Objective-based home office work on a services marketplace connecting users with trusted specialists in Peru.',
      'Trabajo por objetivos en home office en un marketplace de servicios que conecta usuarios con especialistas de confianza en Perú.'
    ),
    highlights: [
      loc('Requirements analysis and incident handling across the product lifecycle', 'Análisis de requisitos e incidencias a lo largo del ciclo de vida del producto'),
      loc('Database design with MySQL, PostgreSQL, and Redis 5; functional testing', 'Diseño de bases de datos con MySQL, PostgreSQL y Redis 5; pruebas funcionales'),
      loc('REST APIs with Laravel, Go, and Node.js; gRPC microservices with NestJS', 'APIs REST con Laravel, Go y Node.js; microservicios gRPC con NestJS'),
      loc('SPAs with Vue.js and Angular 9; mobile with Ionic 5 and Flutter', 'SPAs con Vue.js y Angular 9; móvil con Ionic 5 y Flutter'),
    ],
  },
  {
    company: 'Izaro',
    role: loc('Programmer Analyst', 'Analista programador'),
    period: loc('Aug 2017 - Oct 2018', 'Ago 2017 - Oct 2018'),
    engagement: 'full_time',
    description: loc(
      'Full-time role in Trujillo building internal and client systems for an incubator-style corporation.',
      'Rol a tiempo completo en Trujillo construyendo sistemas internos y de clientes para una corporación tipo incubadora.'
    ),
    highlights: [
      loc('SCRUM delivery; web and mail servers with cPanel, ISPConfig, and VestaCP', 'Entrega SCRUM; servidores web y correo con cPanel, ISPConfig y VestaCP'),
      loc('Business modeling, requirements, and incident resolution', 'Modelado de negocio, requisitos y resolución de incidencias'),
      loc('Databases with MySQL and MongoDB; REST APIs with Laravel, Go, and Node.js', 'Bases de datos con MySQL y MongoDB; APIs REST con Laravel, Go y Node.js'),
      loc(
        'Google Cloud Messaging integrations; hybrid apps with Ionic; MEAN-stack web applications',
        'Integraciones con Google Cloud Messaging; apps híbridas con Ionic; aplicaciones web stack MEAN'
      ),
      loc('Projects included Ibro, Inoclean, Izaro, Comodin, and Jens Car', 'Proyectos: Ibro, Inoclean, Izaro, Comodin y Jens Car'),
    ],
  },
];

export const education: Education[] = [
  {
    institution: 'Universidad Nacional de Trujillo',
    degree: loc("Bachelor's degree, Computer Science", 'Licenciatura en Ciencias de la Computación'),
    period: loc('2012 - 2017', '2012 - 2017'),
    description: loc('Activities and societies: SEEC', 'Actividades y sociedades: SEEC'),
  },
];

export const certifications: Certification[] = [
  {
    name: loc('AWS Certified Developer – Associate', 'AWS Certified Developer – Associate'),
    code: 'DVA-C02',
    issuer: loc('Amazon Web Services', 'Amazon Web Services'),
    issuerShort: 'AWS',
    status: 'in_progress',
    issuedAt: loc('Exam scheduled', 'Examen programado'),
    expiresAt: loc('Upon passing', 'Al aprobar'),
    verifyUrl: 'https://aws.amazon.com/certification/certified-developer-associate/',
    icon: 'aws',
  },
];

/** Only earned credentials — in-progress items stay in data but are hidden from the site. */
export const visibleCertifications = certifications.filter((cert) => cert.status === 'valid');

export const skillCategories = {
  backend: {
    label: 'Backend',
    skills: ['Node.js', 'TypeScript', 'NestJS', 'Python', 'FastAPI', 'PHP', 'Laravel'],
  },
  frontend: {
    label: 'Frontend',
    skills: ['React', 'React Native', 'Angular', 'Next.js', 'Ionic'],
  },
  databases: {
    label: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'DynamoDB', 'MySQL', 'Elasticsearch'],
  },
  cloud: {
    label: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'GCP'],
  },
  messaging: {
    label: 'Messaging',
    skills: ['Kafka', 'RabbitMQ', 'BullMQ', 'NATS', 'MQTT', 'gRPC', 'SQS'],
  },
  aiAssisted: {
    label: 'AI-Assisted Development',
    skills: ['Claude Code', 'Cursor', 'Codex'],
  },
  aiLlm: {
    label: 'AI & LLM',
    skills: ['LangChain', 'LangGraph'],
  },
  methodologies: {
    label: 'Methodologies',
    skills: ['Agile', 'Scrum', 'Spec-Driven Development', 'ADR'],
  },
};
