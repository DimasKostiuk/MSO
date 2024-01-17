import ansiColors from 'ansi-colors';
import fancyLog from 'fancy-log';

export const logger = {
  log: (message = '', path = '', isFail = false) => {
    fancyLog(message + (isFail ? ansiColors.red : ansiColors.green)(path));
  },
  error(error) {
    process.stderr.write(error.toString());
    this.emit('end');
  },
};
