import type { LocalizedText } from '../types';

const loc = (en: string, es: string): LocalizedText => ({ en, es });

/** Featured on home — most recent, aligned with senior backend positioning. */
export const featuredRecommendation = {
  quote: loc(
    'Strong backend capability — follows coding best practices and information security, even when handling complex requests from the frontend team. Very responsible; I would recommend him 100% for any role.',
    'Gran capacidad en backend: sigue buenas prácticas de codificación y seguridad de la información, incluso al atender solicitudes complejas desde frontend. Muy responsable; lo recomendaría al 100% para cualquier empleo.',
  ),
  author: 'Alejandro Bermúdez',
  role: loc('Solution Architect', 'Solution Architect'),
  date: loc('February 2024 · same team', 'Febrero 2024 · mismo equipo'),
};
