import gulpSvgSymbols from 'gulp-svg-symbols';

import { logger } from '../helpers/logger.js';

export const symbols = (src, options) =>
  src.pipe(gulpSvgSymbols(options)).on('error', logger.error);
