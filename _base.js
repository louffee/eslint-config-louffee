const browser = require("./tools/browser");
const __import = require("./tools/import");
const jest = require("./tools/jest");
const lang = require("./tools/lang");
const promise = require("./tools/promise");

const base = ({ isBrowser } = {}) => {
  return {
    plugins: [
      ...__import.plugins,
      ...jest.plugins,
      ...lang.plugins,
      ...promise.plugins,
      isBrowser && "compat",
      "regexp",
      "unicorn",
    ].filter(Boolean),
    env: isBrowser ? browser.env : {},
    rules: {
      ...__import.rules,
      ...jest.rules,
      ...lang.rules,
      ...promise.rules,
    },
    parser: lang.parser,
    parserOptions: {
      ...lang.parserOptions,
    },
    extends: [
      "eslint:recommended",
      isBrowser && "plugin:compat/recommended",
      "plugin:regexp/recommended",
      "plugin:unicorn/recommended",
      "plugin:promise/recommended",
      "plugin:jest/recommended",
    ],
  };
};

module.exports = base;
