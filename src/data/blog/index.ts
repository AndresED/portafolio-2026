import type { BlogPost } from '../../types';

export const posts: BlogPost[] = [
  {
    id: 'analisis-diseno-algoritmos',
    title: 'Analysis and Design of Algorithms - Introduction',
    description: 'A human being thinks and behaves as such following a logical sequence of actions. This same association could be coupled as far a...',
    coverImage: '/images/blog/algoritmos.png',
    publishedAt: '2015-06-18',
    tags: ['Algorithms', 'Design', 'Data Structures'],
    mediumUrl: 'https://www.makingcode.dev/2015/06/analisis-y-diseno-de-algoritmos.html',
    readingTime: '8 min',
    featured: true,
  },
  {
    id: 'sorting-methods-complexity',
    title: 'Sorting Methods Complexity Analysis',
    description: 'In computer science and mathematics, a sorting algorithm is an algorithm that puts elements of a list in a sequence given by an...',
    coverImage: '/images/blog/sorting.jpg',
    publishedAt: '2015-07-29',
    tags: ['Algorithms', 'Java', 'Analysis'],
    mediumUrl: 'https://www.makingcode.dev/2015/07/analisis-de-la-complejidad-de-metodos.html',
    readingTime: '12 min',
    featured: true,
  },
  {
    id: 'pattern-recognition-neural-networks',
    title: 'Pattern Recognition with Neural Networks',
    description: 'An artificial neural network is a massively parallel distributed processor that has a natural tendency to store experiential...',
    coverImage: '/images/blog/neural-networks.jpg',
    publishedAt: '2016-08-07',
    tags: ['AI', 'Neural Networks', 'Java'],
    mediumUrl: 'https://www.makingcode.dev/2016/08/reconocimiento-de-patrones-mediante.html',
    readingTime: '15 min',
    featured: true,
  },
];