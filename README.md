# Louffee ESLint Configuration

*A great way to start.*

> **Note**: The configuration is based on the [ESLint](https://eslint.org) plugin for the IDE or code editor of your choice, and is compatible with the ESLint ecosystem present in the [NPM Package of same name](https://npmjs.com/package/eslint).

The configuration assumes that you've got a [prettier](https://prettier.io) plugin installed and configured, both in your IDE or code editor, and via your Node Package Manager.

[![Downloads](https://img.shields.io/npm/dm/eslint-config-louffee.svg)](https://www.npmjs.com/package/eslint-config-louffee)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/louffee/eslint-config-louffee?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

Instead of reinventing the wheel, we know that there are talented people out there who made possible the open source, so we evaluate these people’s work by using its implementations of ESLint. What we mean is, please consider `eslint-config-louffee` not just as a contribution to the open source, but also a **gathering of all the incredible work that is being done by the people who contributed to the open source in the ESLint** community and ecosystem.

## Packages that we count on

As we said above, we know there are talented people doing their contribution to the community expecting nothing less than a high quality of the configuration. So we separate the packages in the nicest way possible, and we count on the following packages:

- `@typescript-eslint/eslint-plugin` to implement the [TypeScript](https://www.typescriptlang.org) ESLint compatibility
- `@typescript-eslint/parser` to implement the [TypeScript](https://www.typescriptlang.org) ESLint parser
- `eslint-plugin-compat` to warn us about the compatibility across browsers and environments at specific native functions or points of the code we’re writing.
- `eslint-plugin-import` to help us organise the import statements.
- `eslint-plugin-jest` to handle the linting in test unit files.
- `eslint-plugin-jest-dom` to handle the linting in the browser-compatibility tests.
- `eslint-plugin-jsx-a11y` to handle the linting of accessibility issues.
- `eslint-plugin-react` to handle the linting of React components.
- `eslint-plugin-react-hooks` to handle the linting of React hooks.
- `eslint-plugin-react-native` to handle the linting of React Native-related features.
- `eslint-plugin-security` to handle the linting of security issues.
- `eslint-plugin-storybook` to handle the linting of Storybook-related features.
- `eslint-plugin-testing-library` to handle the linting of testing-library-related features.
- `eslint-plugin-unicorn` to give the linting processes some powers.
- `eslint-plugin-regexp` to handle the linting of regular expressions.

## Installation

Install the package, follow the instructions according to the package manager of your choice, we ranked the top three most popular ones:

With **NPM**

```bash
npm install --dev eslint-config-louffee @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-compat eslint-plugin-import eslint-plugin-jest eslint-plugin-jest-dom eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-native eslint-plugin-security eslint-plugin-storybook eslint-plugin-testing-library
```

With **Yarn**

```bash
yarn add -D eslint-config-louffee @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-compat eslint-plugin-import eslint-plugin-jest eslint-plugin-jest-dom eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-native eslint-plugin-security eslint-plugin-storybook eslint-plugin-testing-library
```

With **PNPM**

```bash
pnpm install --dev eslint-config-louffee @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-compat eslint-plugin-import eslint-plugin-jest eslint-plugin-jest-dom eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-native eslint-plugin-security eslint-plugin-storybook eslint-plugin-testing-library
```

## Usage 📖

To use the Louffee’s configuration, create a new file named `.eslintrc.js` in the root of your project, and add the following content:

```js
module.exports = require('eslint-config-louffee');
```

(Optional) Also create a `.eslintignore` file in the root of your project, then add the following line:

```plain
.eslintrc.js
```
