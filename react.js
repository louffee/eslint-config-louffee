const react = require("./tools/react");
const reactHooks = require("./tools/react-hooks");

const base = require("./_base")({ isBrowser: true });

module.exports = {
  ...base,

  plugins: [...base.plugins, ...react.plugins, ...reactHooks.plugins],

  rules: {
    ...base.rules,
    ...react.rules,
    ...reactHooks.rules,
  },
};
