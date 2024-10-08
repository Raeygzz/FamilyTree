// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "eslint:recommended", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "off",
    // "@typescript-eslint/explicit-module-boundary-types": "off",
    // "import/no-useless-path-segments": "off",
    // "no-unused-vars": "off",
  },
};
