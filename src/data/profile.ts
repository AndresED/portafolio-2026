import type { ProfileData } from '../types';

export const profile: ProfileData = {
  name: 'Andrés Esquivel',
  title: 'Senior Backend Engineer',
  tagline: 'Building scalable cloud architectures & distributed systems',
  email: 'andres30xed@gmail.com',
  location: 'Perú',
  cvUrl: 'https://www.dropbox.com/scl/fi/gy70ga0116mpbk3tie95x/cv-version-9.pdf?rlkey=jp7xg3ij9iocu774i1hp17t6p&st=6o0ufzj3&dl=0',
  status: {
    available: true,
    text: 'Open to opportunities',
  },
  socials: [
    { name: 'GitHub', url: 'https://github.com/AndresED', icon: 'github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/andresedev/', icon: 'linkedin' },
    { name: 'Medium', url: 'https://medium.com/@andres30xed', icon: 'medium' },
  ],
};