export default [
  {
    name: 'input.scss',
    data: '@import "include.scss";',
  },
  {
    name: 'include.scss',
    data: '@at-root {\r\n  pre& {\r\n    foo {\r\n      bar: baz;\r\n    }\r\n  }\r\n}',
  },
  {
    name: 'error',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "include.scss";\n  |         ^^^^^^^^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n\nError: "&" may only used at the beginning of a compound selector.\n  ,\n2 |   pre& {\r\n  |      ^\n  \'\n  include.scss 2:6  @import\n  input.scss 1:9    root stylesheet\n',
  },
]
