import njkRender from 'gulp-nunjucks-render';

import { nunjucks as data } from '../../nunjucks/store.js';
import { logger } from '../helpers/logger.js';

export const nunjucks = (src, options) =>
  src.pipe(njkRender({ ...options, data })).on('error', logger.error);
