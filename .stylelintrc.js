module.exports = {
  extends: 'stylelint-config-standard-scss',
  rules: {
    'no-missing-end-of-source-newline': null,
    'selector-class-pattern': null,
    'no-descending-specificity': null,
    'number-max-precision': null,
    'keyframes-name-pattern': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'layer',
          'use',
          'forward',
          'mixin',
          'include',
          'function',
          'return',
          'if',
          'else',
          'each',
          'for',
          'while',
        ],
      },
    ],
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen', 'layer'],
      },
    ],
  },
};
