# TypeScript Express API Bootstrap with Hexagonal architecture (base / project starter)

This is a repository intended to serve as a starting point if you want to bootstrap a express API project in TypeScript with Hexagonal architecture. 
This repository has helped me to learn about this architecture. there are probably many things to improve, any comment is welcome :blush:


## Features

- [TypeScript](https://www.typescriptlang.org/) (v4)
- [ts-node-dev](https://github.com/wclr/ts-node-dev)
- [Express](https://github.com/expressjs/express) with
  - [Cors](https://github.com/expressjs/cors)
  - [Express-validator](https://github.com/express-validator/express-validator)
- [Mongoose](https://mongoosejs.com/)
- [Uuid](https://github.com/uuidjs/uuid)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/) with:
  - [Simple Import Sort](https://github.com/lydell/eslint-plugin-simple-import-sort/)
  - [Import plugin](https://github.com/benmosher/eslint-plugin-import/)
- [lint-staged](https://github.com/okonet/lint-staged)
- [Jest](https://jestjs.io) with [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/intro)
- [Commitlint](https://github.com/conventional-changelog/commitlint) checks if your commit messages meet the [conventional commit format](https://www.conventionalcommits.org/).
- [Husky](https://typicode.github.io/husky/#/) you can use it to lint your commit messages, run tests, lint code, etc...

## Running the app

```
# install dependencies
npm install

# run in dev mode on port 3000
npm run dev

# generate production build
npm run build

# run generated content in dist folder on port 3000
npm run start
```

## Testing

### Jest with supertest

```
npm run test
```

## Linting

```
# run linter
npm run lint

# fix lint issues
npm run lint:fix
```
