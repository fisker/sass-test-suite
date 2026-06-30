export default [
  {
    name: 'input.scss',
    data: '@import "include.scss";',
  },
  {
    name: 'include.scss',
    data: '#{&} {\r\n  foo {\r\n    bar: baz;\r\n  }\r\n}\r\n',
  },
  {
    name: 'error',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "include.scss";\n  |         ^^^^^^^^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n\nError: expected selector.\n  ,\n1 | #{&} {\r\n  |      ^\n  \'\n  include.scss 1:6  @import\n  input.scss 1:9    root stylesheet\n',
  },
]
