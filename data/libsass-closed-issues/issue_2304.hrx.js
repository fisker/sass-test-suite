// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2304.hrx

export default [
  {
    name: 'input.scss',
    data: '@import "module";',
  },
  {
    name: '_module.scss',
    data: '.foo, & {\n  background: red;\n}\n\n.foo, &:before {\n  background: red;\n}',
  },
  {
    name: 'output.css',
    data: '.foo, & {\n  background: red;\n}\n\n.foo, &:before {\n  background: red;\n}\n',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "module";\n  |         ^^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n',
  },
]
