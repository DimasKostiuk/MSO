import { paths } from '../configs/paths.js';

const runModule = (src, modules) => {
  const [module, options] = modules[0];
  const nextModules = modules.slice(1);

  return module(
    nextModules.length ? runModule(src, nextModules) : src,
    options,
  );
};

export const runActions = (src, actions) =>
  Promise.all(
    Object.entries(actions).map(async ([action, options]) => [
      (await import(`${paths.actions + action}.js`))[action],
      options,
    ]),
  ).then((modules) =>
    modules.length ? runModule(src, modules.reverse()) : src,
  );
