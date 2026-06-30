export default [
  {
    name: 'input.sass',
    data: '@import unquoted, sub/unquoted\n',
  },
  {
    name: 'unquoted.scss',
    data: 'a {b: c}\n',
  },
  {
    name: 'sub/unquoted.scss',
    data: 'd {e: f}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: c;\n}\n\nd {\n  e: f;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import unquoted, sub/unquoted\n  |         ^^^^^^^^\n  '\n    input.sass 1:9  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import unquoted, sub/unquoted\n  |                   ^^^^^^^^^^^^\n  '\n    input.sass 1:19  root stylesheet\n",
  },
]
