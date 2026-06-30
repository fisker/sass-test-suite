// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1766.hrx

export default [
  {
    name: 'input.scss',
    data: '@media all { @import "foo.scss" }\n@media all { @import "foo.scss"; }\n',
  },
  {
    name: 'foo.scss',
    data: 'foo { bar: baz }\n',
  },
  {
    name: 'output.css',
    data: '@media all {\n  foo {\n    bar: baz;\n  }\n}\n@media all {\n  foo {\n    bar: baz;\n  }\n}\n',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @media all { @import "foo.scss" }\n  |                      ^^^^^^^^^^\n  \'\n    input.scss 1:22  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 | @media all { @import "foo.scss"; }\n  |                      ^^^^^^^^^^\n  \'\n    input.scss 2:22  root stylesheet\n',
  },
]
