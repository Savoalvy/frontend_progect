module.exports = {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  tabWidth: 2,
  printWidth: 100,
  bracketSpacing: true,
  arrowParens: 'avoid',
  endOfLine: 'auto',
  jsxSingleQuote: true,
  bracketSameLine: false,
  jsxBracketSameLine: false,
  singleAttributePerLine: true,
  overrides: [
    {
      files: '*.{ts,tsx,js,jsx}',
      options: {
        bracketSpacing: true,
        jsxBracketSameLine: false,
        singleAttributePerLine: true,
        jsxSingleAttributePerLine: true,
        bracketSameLine: false,
      },
    },
  ],
};
