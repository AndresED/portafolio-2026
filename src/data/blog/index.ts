import type { BlogPost } from '../../types';

const cover = (id: string) => `${id}.svg`;

export const blogFilters = [
  { id: 'all', label: 'All', i18nKey: 'blog.filter.all' },
  { id: 'data_structures', label: 'Data Structures', i18nKey: 'blog.filter.dataStructures' },
  { id: 'cryptography', label: 'Cryptography', i18nKey: 'blog.filter.cryptography' },
  { id: 'algorithms', label: 'Algorithms', i18nKey: 'blog.filter.algorithms' },
  { id: 'ai', label: 'AI', i18nKey: 'blog.filter.ai' },
  { id: 'architecture', label: 'Architecture', i18nKey: 'blog.filter.architecture' },
] as const;

export const posts: BlogPost[] = [
  {
    id: 'fintech-core-rebuild-from-zero-slowly',
    title: "Why I'm Rebuilding a Fintech Core — From Zero, Slowly",
    description:
      'A public series on rebuilding a fintech reference backend from scratch — NestJS, hexagonal boundaries, PostgreSQL, Redpanda, outbox/idempotency, and honest trade-offs after sprinting the Arkano banking challenge.',
    coverImage: 'fintench.webp',
    publishedAt: '2026-06-08',
    tags: ['NestJS', 'Fintech', 'Architecture', 'Event-Driven', 'Hexagonal'],
    mediumUrl:
      'https://www.makingcode.dev/blog/why-i-m-rebuilding-a-fintech-core-from-zero-slowly',
    readingTime: '8 min',
    featured: true,
    category: 'architecture',
  },
  {
    id: 'multi-tenant-nestjs-saas',
    title: 'How to Build a Multi-Tenant SaaS Application in NestJS Without Duplicating Your Code',
    description:
      'If onboarding a new customer requires deploying a new application or duplicating an entire database, your SaaS architecture probably is not ready to scale. Multi-tenancy in NestJS, done cleanly.',
    coverImage: 'multitenant.webp',
    publishedAt: '2026-06-11',
    tags: ['NestJS', 'Architecture', 'SaaS', 'Multi-tenant'],
    mediumUrl:
      'https://makingcode.dev/blog/how-to-build-a-multi-tenant-saas-application-in-nestjs-without-duplicating-your-code',
    readingTime: '5 min',
    featured: true,
    category: 'architecture',
  },
  {
    id: 'nestjs-event-driven-api',
    title: "Your API Doesn't Need More Services, It Needs Events",
    description:
      'If every new feature forces you to modify five different services, you probably have a coupling problem. Event-Driven Architecture to decouple NestJS modules.',
    coverImage: 'event-drive.webp',
    publishedAt: '2026-06-11',
    tags: ['NestJS', 'Architecture', 'Event-Driven', 'CQRS'],
    mediumUrl: 'https://makingcode.dev/blog/your-api-doesn-t-need-more-services-it-needs-events',
    readingTime: '4 min',
    featured: true,
    category: 'architecture',
  },
  {
    id: 'cqrs-nestjs-reads-writes',
    title: 'CQRS in NestJS: Stop Mixing Reads and Writes in the Same Service',
    description:
      'When your UserService handles POST and GET, optimizations on one side break the other. Commands, queries, and handlers with @nestjs/cqrs.',
    coverImage: 'cqrs.webp',
    publishedAt: '2026-06-11',
    tags: ['NestJS', 'Architecture', 'CQRS'],
    mediumUrl: 'https://makingcode.dev/blog/cqrs-in-nestjs-stop-mixing-reads-and-writes-in-the-same-service',
    readingTime: '3 min',
    featured: false,
    category: 'architecture',
  },
  {
    id: 'hexagonal-architecture-nestjs',
    title: 'Why Your NestJS Service Becomes a Mess (and How Hexagonal Architecture Fixes It)',
    description:
      'Controllers that know too much, entities full of ORM decorators, and tests that need a database. A practical guide to ports and adapters in NestJS.',
    coverImage: 'hexagonal.webp',
    publishedAt: '2026-06-11',
    tags: ['NestJS', 'Architecture', 'Hexagonal', 'Clean Architecture'],
    mediumUrl:
      'https://makingcode.dev/blog/why-your-nestjs-service-becomes-a-mess-and-how-hexagonal-architecture-fixes-it',
    readingTime: '4 min',
    featured: false,
    category: 'architecture',
  },
  {
    id: 'heapsort-golang',
    title: 'HeapSort Implementation in Golang',
    description:
      'Step-by-step implementation of the HeapSort sorting algorithm in Go, including heap construction and in-place sorting.',
    coverImage: cover('heapsort-golang'),
    publishedAt: '2018-09-20',
    tags: ['Data Structures', 'Algorithms', 'Go'],
    mediumUrl: 'https://www.backup.makingcode.dev/2018/09/implementacion-del-metodo-de-ordenacion_72.html',
    readingTime: '8 min',
    featured: false,
    category: 'data_structures',
  },
  {
    id: 'mergesort-golang',
    title: 'MergeSort Implementation in Golang',
    description:
      'Divide-and-conquer MergeSort implemented in Go with recursive splitting and merging of sorted subarrays.',
    coverImage: cover('mergesort-golang'),
    publishedAt: '2018-09-20',
    tags: ['Data Structures', 'Algorithms', 'Go'],
    mediumUrl: 'https://www.backup.makingcode.dev/2018/09/implementacion-del-metodo-de-ordenacion_91.html',
    readingTime: '8 min',
    featured: false,
    category: 'data_structures',
  },
  {
    id: 'quicksort-golang',
    title: 'QuickSort Implementation in Golang',
    description:
      'QuickSort in Go using partition-based recursion, a practical example of average-case efficient sorting.',
    coverImage: cover('quicksort-golang'),
    publishedAt: '2018-09-20',
    tags: ['Data Structures', 'Algorithms', 'Go'],
    mediumUrl: 'https://www.backup.makingcode.dev/2018/09/implementacion-del-metodo-de-ordenacion_77.html',
    readingTime: '8 min',
    featured: false,
    category: 'data_structures',
  },
  {
    id: 'insertion-sort-golang',
    title: 'Insertion Sort Implementation in Golang',
    description:
      'Simple insertion sort in Go: building a sorted array one element at a time, ideal for small datasets.',
    coverImage: cover('insertion-sort-golang'),
    publishedAt: '2018-09-20',
    tags: ['Data Structures', 'Algorithms', 'Go'],
    mediumUrl: 'https://www.backup.makingcode.dev/2018/09/implementacion-del-metodo-de-ordenacion_20.html',
    readingTime: '6 min',
    featured: false,
    category: 'data_structures',
  },
  {
    id: 'bubble-sort-golang',
    title: 'Bubble Sort Implementation in Golang',
    description:
      'Classic bubble sort implemented in Go, comparing adjacent elements and swapping until the list is ordered.',
    coverImage: cover('bubble-sort-golang'),
    publishedAt: '2018-09-20',
    tags: ['Data Structures', 'Algorithms', 'Go'],
    mediumUrl: 'https://www.backup.makingcode.dev/2018/09/implementacion-del-metodo-de-ordenacion.html',
    readingTime: '6 min',
    featured: false,
    category: 'data_structures',
  },
  {
    id: 'pattern-recognition-neural-networks',
    title: 'Pattern Recognition with Neural Networks',
    description:
      'An artificial neural network is a massively parallel distributed processor that has a natural tendency to store experiential...',
    coverImage: cover('pattern-recognition-neural-networks'),
    publishedAt: '2016-08-07',
    tags: ['AI', 'Neural Networks', 'Java'],
    mediumUrl: 'https://www.backup.makingcode.dev/2016/08/reconocimiento-de-patrones-mediante.html',
    readingTime: '15 min',
    featured: true,
    category: 'ai',
  },
  {
    id: 'sorting-methods-python',
    title: 'Sorting Methods Implementation in Python',
    description:
      'Implementation and comparison of classic sorting algorithms in Python, from simple methods to more efficient approaches.',
    coverImage: cover('sorting-methods-python'),
    publishedAt: '2016-01-17',
    tags: ['Data Structures', 'Algorithms', 'Python'],
    mediumUrl: 'https://www.backup.makingcode.dev/2016/01/implementacion-de-los-metodos-de.html',
    readingTime: '10 min',
    featured: false,
    category: 'data_structures',
  },
  {
    id: 'rsa-encryption',
    title: 'RSA Encryption',
    description:
      'Public-key RSA cipher explained and implemented in Java, covering key generation, encryption, and decryption.',
    coverImage: cover('rsa-encryption'),
    publishedAt: '2015-08-13',
    tags: ['Cryptography', 'Security', 'Java'],
    mediumUrl: 'https://www.backup.makingcode.dev/2015/08/cifrado-rsa.html',
    readingTime: '12 min',
    featured: false,
    category: 'cryptography',
  },
  {
    id: 'rabin-encryption',
    title: 'Rabin Encryption',
    description:
      'Rabin cryptosystem based on modular arithmetic and prime factorization, with a practical Java implementation.',
    coverImage: cover('rabin-encryption'),
    publishedAt: '2015-07-30',
    tags: ['Cryptography', 'Security', 'Java'],
    mediumUrl: 'https://www.backup.makingcode.dev/2015/07/cifrado-de-rabin.html',
    readingTime: '10 min',
    featured: false,
    category: 'cryptography',
  },
  {
    id: 'hill-cipher',
    title: 'Hill Cipher',
    description:
      'Polygraphic substitution cipher using linear algebra and matrix multiplication, implemented in C++.',
    coverImage: cover('hill-cipher'),
    publishedAt: '2015-07-29',
    tags: ['Cryptography', 'Security', 'C++'],
    mediumUrl: 'https://www.backup.makingcode.dev/2015/07/cifrado-de-hill.html',
    readingTime: '10 min',
    featured: false,
    category: 'cryptography',
  },
  {
    id: 'sorting-methods-complexity',
    title: 'Sorting Methods Complexity Analysis',
    description:
      'In computer science and mathematics, a sorting algorithm is an algorithm that puts elements of a list in a sequence given by an...',
    coverImage: cover('sorting-methods-complexity'),
    publishedAt: '2015-07-29',
    tags: ['Data Structures', 'Algorithms', 'Java', 'Analysis'],
    mediumUrl: 'https://www.backup.makingcode.dev/2015/07/analisis-de-la-complejidad-de-metodos.html',
    readingTime: '12 min',
    featured: true,
    category: 'data_structures',
  },
  {
    id: 'playfair-cipher',
    title: 'Playfair Cipher',
    description:
      'Digraph substitution cipher using a 5×5 key square, with encryption and decryption logic in C++.',
    coverImage: cover('playfair-cipher'),
    publishedAt: '2015-07-25',
    tags: ['Cryptography', 'Security', 'C++'],
    mediumUrl: 'https://www.backup.makingcode.dev/2015/07/cifrado-de-playfair.html',
    readingTime: '8 min',
    featured: false,
    category: 'cryptography',
  },
  {
    id: 'vernam-cipher',
    title: 'Vernam Cipher (One-Time Pad)',
    description:
      'Perfect secrecy with the Vernam one-time pad: XOR-based encryption when key length matches the message.',
    coverImage: cover('vernam-cipher'),
    publishedAt: '2015-07-25',
    tags: ['Cryptography', 'Security', 'C++'],
    mediumUrl: 'https://www.backup.makingcode.dev/2015/07/cifrado-de-vernam.html',
    readingTime: '8 min',
    featured: false,
    category: 'cryptography',
  },
  {
    id: 'vigenere-cipher',
    title: 'Vigenère Cipher',
    description:
      'Polyalphabetic substitution cipher using a repeating keyword, implemented with modular arithmetic in C++.',
    coverImage: cover('vigenere-cipher'),
    publishedAt: '2015-07-25',
    tags: ['Cryptography', 'Security', 'C++'],
    mediumUrl: 'https://www.backup.makingcode.dev/2015/07/cifrado-de-vigenere.html',
    readingTime: '8 min',
    featured: false,
    category: 'cryptography',
  },
  {
    id: 'affine-cipher',
    title: 'Affine Cipher',
    description:
      'Monoalphabetic substitution combining multiplication and addition modulo 26, with encrypt and decrypt routines.',
    coverImage: cover('affine-cipher'),
    publishedAt: '2015-07-25',
    tags: ['Cryptography', 'Security', 'C++'],
    mediumUrl: 'https://www.backup.makingcode.dev/2015/07/cifrado-afin.html',
    readingTime: '7 min',
    featured: false,
    category: 'cryptography',
  },
  {
    id: 'caesar-cipher',
    title: 'Caesar Cipher',
    description:
      'Classic shift cipher rotating letters by a fixed offset, implemented in Java with wrap-around for the alphabet.',
    coverImage: cover('caesar-cipher'),
    publishedAt: '2015-07-25',
    tags: ['Cryptography', 'Security', 'Java'],
    mediumUrl: 'https://www.backup.makingcode.dev/2015/07/cifrado-de-cesar.html',
    readingTime: '6 min',
    featured: false,
    category: 'cryptography',
  },
  {
    id: 'analisis-diseno-algoritmos',
    title: 'Analysis and Design of Algorithms - Introduction',
    description:
      'A human being thinks and behaves as such following a logical sequence of actions. This same association could be coupled as far a...',
    coverImage: 'algoritmos.png',
    publishedAt: '2015-06-18',
    tags: ['Algorithms', 'Design', 'Data Structures'],
    mediumUrl: 'https://www.backup.makingcode.dev/2015/06/analisis-y-diseno-de-algoritmos.html',
    readingTime: '8 min',
    featured: true,
    category: 'algorithms',
  },
];

export const blogBatchSize = 6;

/** Cards in the first batch that may appear above the fold on /blog (horizontal layout). */
export const blogAboveFoldEagerCount = 6;

export function getPostById(id: string): BlogPost | undefined {
  return posts.find((post) => post.id === id);
}
