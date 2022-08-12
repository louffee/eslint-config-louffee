const react = require("./react");

const reactNative = require("./tools/react-native");

module.exports = {
  ...react,
  ...reactNative,

  plugins: [...reactNative.plugins, ...react.plugins],

  rules: {
    ...react.rules,
    ...reactNative.rules,
  },
};
