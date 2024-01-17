import gulpJsbeautifier from 'gulp-jsbeautifier';

import { logger } from '../helpers/logger.js';

export const prettify = (src, options) =>
  src.pipe(gulpJsbeautifier(options)).on('error', logger.error);
