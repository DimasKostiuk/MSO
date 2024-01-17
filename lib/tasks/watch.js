import ansiColors from 'ansi-colors';
import browserSync from 'browser-sync';
import gulp from 'gulp';

import { bundles } from '../configs/bundles.js';
import { pages } from '../configs/pages.js';
import { logger } from '../helpers/logger.js';
import { createGlob } from '../helpers/paths.js';

import { build, tasks } from './build.js';
import { server } from './server.js';

const configure = (done) => {
  global.isWatching = true;

  done();
};

const runWatch = () => {
  bundles.forEach(({ type, src, files, watching }) => {
    const paths = pages.map((page) =>
      createGlob(page.src + src, files.pattern, files.ext, watching),
    );

    logger.log(
      `action: '${ansiColors.green(type)}' watch on: `,
      paths.join(', '),
    );

    gulp.watch(paths, tasks[type]).on('change', browserSync.reload);
  });
};

export const watch = gulp.series(
  gulp.parallel(configure, build),
  gulp.parallel(runWatch, server),
);
