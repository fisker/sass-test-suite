// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1801/import-cycle.hrx

export default [
  {
    name: 'input.scss',
    data: "@import 'alpha';\n",
  },
  {
    name: '_alpha.scss',
    data: "@import 'beta';\n",
  },
  {
    name: '_beta.scss',
    data: "@import 'alpha';\n",
  },
  {
    name: 'error',
    data: "DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import 'alpha';\n  |         ^^^^^^^\n  '\n    input.scss 1:9  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import 'beta';\n  |         ^^^^^^\n  '\n    _alpha.scss 1:9  @import\n    input.scss 1:9   root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import 'alpha';\n  |         ^^^^^^^\n  '\n    _beta.scss 1:9   @import\n    _alpha.scss 1:9  @import\n    input.scss 1:9   root stylesheet\n\nError: This file is already being loaded.\n  ,--> _beta.scss\n1 | @import 'alpha';\n  |         ^^^^^^^ new load\n  '\n  ,--> input.scss\n1 | @import 'alpha';\n  |         ======= original load\n  '\n  _beta.scss 1:9   @import\n  _alpha.scss 1:9  @import\n  input.scss 1:9   root stylesheet\n",
  },
]
