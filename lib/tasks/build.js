import gulp from 'gulp';

import { clean } from './clean.js';
import { copy } from './copy.js';
import { css } from './css.js';
import { html } from './html.js';
import { img } from './img.js';
import { js } from './js.js';
import { svg } from './svg.js';

export const tasks = { copy, css, html, img, js, svg };
export const build = gulp.series(clean, gulp.parallel(Object.values(tasks)));
