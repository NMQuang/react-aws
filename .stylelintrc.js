module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order', 'stylelint-config-prettier'],
  plugins: ['stylelint-scss'],
  rules: {
    // recommended rules
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    // any other rules you'd want to change e.g.
    'color-hex-length': 'long',
    'comment-empty-line-before': 'always',
    'comment-whitespace-inside': 'always',
    // 'selector-class-pattern': [
    //   /*
    //   [stage]-[block]_[element]-[modifier]
    //     [stage] should be one of a, m, o, t, p, u
    //     [block], [element], [modifier] should be lowercase
    //     [block] should not start with a number
    //     [element] should have 0 - 2 occurences
    //     [modifier] should have 0 - 1 occurences
    //   */
    //   // '^[amotpu]-([a-z][a-z0-9]*)(__([a-z0-9]+)){0,2}(--([a-z0-9]+))?$',
    //   {
    //     resolveNestedSelectors: true,
    //   },
    // ],
  },
};
