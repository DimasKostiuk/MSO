// Assert is experimental functional. Remove if it causes an error
import settings from '../package.json' assert { type: 'json' };

import { project } from '../lib/configs/project.js';

export const nunjucks = {
  minSuffix: project.minSuffix,
  projectTitle: settings.name,
  themeColor: '#fff',
  year: new Date().getFullYear(),
};
