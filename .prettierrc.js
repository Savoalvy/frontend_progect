module.exports = {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'avoid',
  endOfLine: 'auto',
  jsxSingleQuote: true,
  jsxBracketSpacing: true,
  singleAttributePerLine: false,
  // Ensure consistent line breaks for objects and arrays
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      options: {
        // Add any TypeScript/JavaScript specific options here
      },
    },
  ],
};
