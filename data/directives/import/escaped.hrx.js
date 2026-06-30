export default [
  {
    name: 'input.scss',
    data: '@impor\\74 "other"\n',
  },
  {
    name: 'other.scss',
    data: 'a {b: c}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @impor\\74 "other"\n  |           ^^^^^^^\n  \'\n    input.scss 1:11  root stylesheet\n',
  },
]
