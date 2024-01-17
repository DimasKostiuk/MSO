import gulpRename from 'gulp-rename';

import { logger } from '../helpers/logger.js';

export const rename = (gulpSrc, options) =>
  gulpSrc.pipe(gulpRename(options)).on('error', logger.error);
