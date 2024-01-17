import { deleteSync } from 'del';

import { paths } from '../configs/paths.js';
import { logger } from '../helpers/logger.js';

export const clean = async () => {
  try {
    logger.log('Remove paths: ', (await deleteSync(paths.clean)).join(' '));
  } catch (error) {
    logger.error(error);
  }
};
