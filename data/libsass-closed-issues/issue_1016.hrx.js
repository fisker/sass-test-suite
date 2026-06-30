// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1016.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo {\n  [baz="#{&}"] {\n    foo: bar;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '.foo [baz=".foo"] {\n  foo: bar;\n}\n',
  },
]
