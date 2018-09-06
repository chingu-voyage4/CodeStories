module.exports = {
  root: true,
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true
  },
  extends: "standard",
  // required to lint *.vue files
  plugins: ["html"],
  // add your custom rules here
  rules: {
    "no-console": "off",
    "comma-dangle": "off",
    "space-before-function-paren": "off",
    "import/prefer-default-export": "off",
    "no-underscore-dangle": "off",
    "consistent-return": "off",
    quotes: "off",
    "arrow-parens": "off",
    semi: "off",
    curly: "off"
  },
  globals: {}
};
