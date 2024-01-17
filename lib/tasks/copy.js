import gulp from 'gulp';

import { paths } from '../configs/paths.js';
import { logger } from '../helpers/logger.js';

export const copy = () =>
  Promise.all(
    paths.copy.map(({ src, dest }) =>
      gulp.src(src).pipe(gulp.dest(dest)).on('error', logger.error),
    ),
  );
