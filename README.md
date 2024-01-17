# Frontend Starter Kit

## Create project

```bash

```

## Running locally

- **Node 18** - can be installed through [nvm](https://github.com/nvm-sh/nvm)
  - `nvm install 18`
  - `nvm use` (will use version specified in .nvmrc)
- Install **yarn** package manager
  - `npm install -g yarn`
- Install **node modules**
  - `yarn`

You can run the following command:
- `yarn start` - run development mode (files compiling and watch for them)
- `yarn dev` - run files compiling in development mode
- `yarn prod` - run files compiling in production mode

### Differences between Development and Production

**Development mode**:
- **CSS** and **JS** are compiling with maps and non-minified
- **Images** copy as is

**Development mode**:
- **CSS** and **JS** are compiling without maps and minified
- **Images** optimization
