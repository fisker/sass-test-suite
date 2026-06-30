// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2106/test.hrx

export default [
  {
    name: 'input.scss',
    data: '@import "../does-not-exist";\n',
  },
  {
    name: 'error',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "../does-not-exist";\n  |         ^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n\nError: Can\'t find stylesheet to import.\n  ,\n1 | @import "../does-not-exist";\n  |         ^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 1:9  root stylesheet\n',
  },
]
