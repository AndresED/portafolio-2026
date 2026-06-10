import type { ProfileData } from '../types';

export const profile: ProfileData = {
  name: 'Andrés Esquivel',
  title: 'Senior Backend Engineer',
  tagline: 'Building scalable cloud architectures & distributed systems',
  email: 'andres@andresed.dev',
  location: 'Perú',
  cvUrl: '/cv.pdf',
  makingCodeUrl: 'https://www.makingcode.dev',
  status: {
    available: true,
    text: 'Open to opportunities · remote · full-time or contract',
  },
  socials: [
    { name: 'GitHub', url: 'https://github.com/AndresED', icon: 'github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/andresedev/', icon: 'linkedin' },
    { name: 'Medium', url: 'https://medium.com/@andres30xed', icon: 'medium' },
  ],
};