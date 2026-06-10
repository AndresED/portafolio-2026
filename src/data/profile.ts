import type { ProfileData } from '../types';

export const profile: ProfileData = {
  name: 'Andrés Esquivel',
  title: 'Senior Backend Engineer',
  tagline: 'Building scalable cloud architectures & distributed systems',
  email: 'andres30xed@gmail.com',
  location: 'Perú',
  cvUrl: 'https://www.dropbox.com/scl/fi/5gh8zuwrp22k2kwvwp3i0/Estuardo-Andr-s-Esquivel-D-az-CV_6.pdf?rlkey=0jodo28vhhhg45zbbn0fooheo&dl=0',
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