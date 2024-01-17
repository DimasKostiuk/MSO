import ansiColors from 'ansi-colors';
import gulp from 'gulp';

import { bundles } from '../configs/bundles.js';
import { pages } from '../configs/pages.js';

import { runActions } from './actions.js';
import { findBundlesByTask } from './finder.js';
import { logger } from './logger.js';
import { createGlob } from './paths.js';

const run = (page, task) =>
  bundles
    .filter((bundle) => findBundlesByTask(bundle, task))
    .map(async (bundle) => {
      let src = gulp.src(
        createGlob(
          page.src + bundle.src,
          bundle.files.pattern,
          bundle.files.ext,
        ),
      );

      src = await runActions(src, bundle.actions);

      src
        .pipe(gulp.dest(page.dest + bundle.dest))
        .on('end', () => {
          logger.log(`${ansiColors.green(task)}:`, page.dest + bundle.dest);
        })
        .on('error', logger.error);
    });

export const build = (task) =>
  Promise.all(
    pages.map((page) => {
      const tasks = [run(page, task)];

      if (page.subPages) {
        tasks.push(
          ...page.subPages.map((subPage) =>
            run(
              {
                ...subPage,
                src: `${page.src}/layout/pages/${subPage.src}`,
              },
              task,
            ),
          ),
        );
      }

      return tasks;
    }),
  );
