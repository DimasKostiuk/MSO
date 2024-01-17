import gulpSass from 'gulp-sass';
import sass from 'sass';

import { logger } from '../helpers/logger.js';

export const scss = (src, options) =>
  src.pipe(gulpSass(sass).sync(options)).on('error', logger.error);
