const ERROR = "error";

module.exports = {
  plugins: ["promise"],
  rules: {
    "promise/prefer-await-to-then": ERROR,
    "promise/no-native": ERROR,
    "promise/no-nesting": ERROR,
    "promise/no-return-in-finally": ERROR,
    "promise/no-return-wrap": ERROR,
    "promise/param-names": ERROR,
    "promise/prefer-await-to-callbacks": ERROR,
  },
};
