export default [
  {
    name: 'input.scss',
    data: '@import "first.css", "second.css" (max-width: 400px);\n@import "first.scss", "second.scss" (max-width: 400px);\n',
  },
  {
    name: 'first.scss',
    data: 'foo { bar: baz }\n',
  },
  {
    name: 'second.scss',
    data: 'a { b: c }\n',
  },
  {
    name: 'output.css',
    data: '@import "first.css";\n@import "second.css" (max-width: 400px);\n@import "second.scss" (max-width: 400px);\nfoo {\n  bar: baz;\n}\n',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | @import "first.scss", "second.scss" (max-width: 400px);\n  |         ^^^^^^^^^^^^\n  \'\n    input.scss 2:9  root stylesheet\n',
  },
]
