export default [
  {
    name: 'input.scss',
    data: "@import 'other';\n",
  },
  {
    name: 'other.css',
    data: 'other {index: false}\n',
  },
  {
    name: 'index/other.scss',
    data: 'other {index: true}\n',
  },
  {
    name: 'output.css',
    data: 'other {\n  index: false;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import 'other';\n  |         ^^^^^^^\n  '\n    input.scss 1:9  root stylesheet\n",
  },
]
