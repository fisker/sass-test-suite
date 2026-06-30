// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_137.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo {\n  background-color: lime;\n  a {\n    color: white;\n  }\n}\n\n.baz {\n  @extend .foo;\n}',
  },
  {
    name: 'output.css',
    data: '.foo, .baz {\n  background-color: lime;\n}\n.foo a, .baz a {\n  color: white;\n}\n',
  },
]
