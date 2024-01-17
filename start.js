import { exec } from 'child_process';

// Set environment by os platform
const set = process.platform === 'win32' ? 'set' : 'export';

// Assigns environment -> second script argument (3 - his index)
const environment =
  typeof process.argv[3] === 'undefined' ||
  process.argv[3].indexOf('dev') !== -1
    ? 'development'
    : 'production';

// Assigns build flag -> first script argument (2 - his index)
const task =
  typeof process.argv[2] !== 'undefined' ? process.argv[2].toString() : '';

const command = exec(`${set} NODE_ENV=${environment} && gulp ${task}`);

command.stdout.on('data', (data) => {
  process.stdout.write(data);
});

command.stderr.on('data', (data) => {
  process.stderr.write(data);
});

command.on('error', (error) => {
  process.stderr.write(error);
});
