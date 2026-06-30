export default [
  {
    name: 'top_level_parent/input.scss',
    data: "@import 'other';\n",
  },
  {
    name: 'top_level_parent/_other.scss',
    data: '& {a: b}\n',
  },
  {
    name: 'top_level_parent/output.css',
    data: '& {\n  a: b;\n}\n',
  },
  {
    name: 'top_level_parent/warning',
    data: "DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import 'other';\n  |         ^^^^^^^\n  '\n    input.scss 1:9  root stylesheet\n",
  },
]
