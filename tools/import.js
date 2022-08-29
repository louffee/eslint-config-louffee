const DISABLED = "off";
const ERROR = "error";

module.exports = {
  plugins: ["import"],
  rules: {
    "import/no-default-export": DISABLED,
    "import/no-unassigned-import": [
      ERROR,
      {
        allow: ["**/*.d.ts", "**/*.css", "**/*.scss", "*/**.sass"],
      },
    ],
  },
};
