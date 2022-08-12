const ERROR = "error";
const WARN = "warn";

module.exports = {
  plugins: ["jest"],
  rules: {
    "jest/no-jest-import": WARN,
    "jest/prefer-to-have-length": WARN,
    "jest/no-disabled-tests": ERROR,
    "jest/no-focused-tests": ERROR,
    "jest/no-identical-title": ERROR,
    "jest/valid-expect": ERROR,
    "jest/no-commented-out-tests": ERROR,
    "jest/expect-expect": ERROR,
    "jest/no-conditional-expect": ERROR,
    "jest/no-export": ERROR,
    "jest/no-mocks-import": ERROR,
    "jest/no-standalone-expect": ERROR,
    "jest/no-test-return-statement": ERROR,
    "jest/valid-describe-callback": ERROR,
    "jest/valid-title": ERROR,
  },
};
