import webpackStream from 'webpack-stream';

import { webpack as config } from '../configs/webpack.js';
import { logger } from '../helpers/logger.js';

export const webpack = (src) =>
  src.pipe(webpackStream(config)).on('error', logger.error);
