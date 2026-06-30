// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/import/error/top_level_declaration.hrx

export default [
  {
    name: 'include/input.scss',
    data: "\n@import 'upstream';\n\n",
  },
  {
    name: 'include/_upstream.scss',
    data: '@mixin a { b: c }\n@include a;\n',
  },
  {
    name: 'include/error',
    data: "DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | @import 'upstream';\n  |         ^^^^^^^^^^\n  '\n    input.scss 2:9  root stylesheet\n\nError: Declarations may only be used within style rules.\n  ,\n1 | @mixin a { b: c }\n  |            ^^^^^\n  '\n  _upstream.scss 1:12  a()\n  _upstream.scss 2:1   @import\n  input.scss 2:9       root stylesheet\n",
  },
  {
    name: 'root/input.scss',
    data: "@import 'upstream';\n",
  },
  {
    name: 'root/_upstream.scss',
    data: 'a: b;\n',
  },
  {
    name: 'root/error',
    data: "DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import 'upstream';\n  |         ^^^^^^^^^^\n  '\n    input.scss 1:9  root stylesheet\n\nError: expected \"{\".\n  ,\n1 | a: b;\n  |     ^\n  '\n  _upstream.scss 1:5  @import\n  input.scss 1:9      root stylesheet\n",
  },
]
