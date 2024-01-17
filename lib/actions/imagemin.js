import gulpImagemin from 'gulp-imagemin';

import { logger } from '../helpers/logger.js';

export const imagemin = (src, options) =>
  src.pipe(gulpImagemin(options)).on('error', logger.error);
