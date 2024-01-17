const IS_DEV =
  typeof process.env.NODE_ENV !== 'undefined' &&
  process.env.NODE_ENV.indexOf('dev') !== -1;

export const project = {
  IS_DEV,
  minSuffix: IS_DEV ? '' : '.min',
};
