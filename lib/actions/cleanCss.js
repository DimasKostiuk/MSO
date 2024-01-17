import gulpCleanCss from 'gulp-clean-css';

import { logger } from '../helpers/logger.js';

export const cleanCss = (src, options) =>
  src.pipe(gulpCleanCss(options)).on('error', logger.error);
