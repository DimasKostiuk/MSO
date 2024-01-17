export const createGlob = (location, pattern, ext, options = {}) => {
  let path = location;

  if (options.pattern) {
    path += options.pattern;
  }

  return `${path + pattern}.${options.ext ? options.ext : ext}`;
};
