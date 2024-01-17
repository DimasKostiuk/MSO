import browserSync from 'browser-sync';

import { server as config } from '../configs/server.js';

export const server = () => browserSync(config);
