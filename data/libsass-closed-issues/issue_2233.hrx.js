// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2233.hrx

export default [
  {
    name: 'input.scss',
    data: '@media all and (min-width: 100px) {\n  @import "foo"\n}\n',
  },
  {
    name: 'foo.scss',
    data: 'a { b: c; }\n',
  },
  {
    name: 'output.css',
    data: '@media all and (min-width: 100px) {\n  a {\n    b: c;\n  }\n}\n',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 |   @import "foo"\n  |           ^^^^^\n  \'\n    input.scss 2:11  root stylesheet\n',
  },
]
