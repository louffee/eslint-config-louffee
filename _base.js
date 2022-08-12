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
      "compat",
    ],
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
  };
};

module.exports = base;
