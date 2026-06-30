// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_279.hrx

export default [
  {
    name: 'input.scss',
    data: '.theme {\n  @import "foo.scss";\n}\n',
  },
  {
    name: 'foo.scss',
    data: '.test-hello {\n  color: red;\n}\n\n.test-world {\n  @extend .test-hello;\n}\n',
  },
  {
    name: 'output.css',
    data: '.theme .test-hello, .theme .test-world {\n  color: red;\n}\n',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n2 |   @import "foo.scss";\n  |           ^^^^^^^^^^\n  \'\n    input.scss 2:11  root stylesheet\n',
  },
]
