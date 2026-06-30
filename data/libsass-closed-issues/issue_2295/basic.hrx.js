export default [
  {
    name: 'input.scss',
    data: ".my-scope {\r\n  @import 'include.scss';\r\n}",
  },
  {
    name: 'include.scss',
    data: '@if (true) {\r\n  .foo { display: none; }\r\n}',
  },
  {
    name: 'output.css',
    data: '.my-scope .foo {\n  display: none;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 |   @import 'include.scss';\r\n  |           ^^^^^^^^^^^^^^\n  '\n    input.scss 2:11  root stylesheet\n",
  },
]
