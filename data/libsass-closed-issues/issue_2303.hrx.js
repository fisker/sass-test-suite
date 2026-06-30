// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2303.hrx

export default [
  {
    name: 'input.scss',
    data: ".wrapper-class {\r\n  @import 'module';\r\n}",
  },
  {
    name: '_module.scss',
    data: '.okay {\r\n  background: green;\r\n}\r\n\r\n@if true {\r\n  .broken {\r\n    background: red;\r\n  }\r\n}',
  },
  {
    name: 'output.css',
    data: '.wrapper-class .okay {\n  background: green;\n}\n.wrapper-class .broken {\n  background: red;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 |   @import 'module';\r\n  |           ^^^^^^^^\n  '\n    input.scss 2:11  root stylesheet\n",
  },
]
