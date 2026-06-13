import type { LocalizedText } from '../types';
import { experiences } from './resume';

const loc = (en: string, es: string): LocalizedText => ({ en, es });

/** First entry in resume.ts — current role for the home “At a glance” block. */
export const currentExperience = experiences[0];

export const atAGlanceTitle = loc('At a glance', 'En resumen');

export const atAGlanceYears = loc(
  '6+ years backend · 2019–present · remote LATAM delivery',
  '6+ años backend · 2019–actualidad · entrega remota LATAM',
);

export const atAGlanceBullets: LocalizedText[] = [
  loc(
    'Live IoT platform (SafeSense) — multitenant NestJS, real-time alerts, compliance reporting in Peru.',
    'Plataforma IoT en producción (SafeSense) — NestJS multitenant, alertas en tiempo real y reportes de cumplimiento en Perú.',
  ),
  loc(
    'Event-driven microservices on AWS — Kafka, hexagonal boundaries, and idempotent consumers in reference builds.',
    'Microservicios orientados a eventos en AWS — Kafka, límites hexagonales y consumidores idempotentes en builds de referencia.',
  ),
  loc(
    'Technical lead track — architecture ownership, mentoring, and CI/CD across distributed product teams.',
    'Trayectoria de liderazgo técnico — arquitectura, mentoría y CI/CD en equipos de producto distribuidos.',
  ),
];

export const atAGlanceResumeLink = loc('Full experience & education →', 'Experiencia y formación completa →');
