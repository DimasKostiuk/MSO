import { paths } from './paths.js';

export const pages = [
  {
    src: `${paths.src}/index`,
    dest: paths.build,
    subPages: [
      {
        src: '/policy',
        dest: paths.build + '/policy',
      },
      {
        src: '/oferta',
        dest: paths.build + '/oferta',
      }
    ],
  },
];
