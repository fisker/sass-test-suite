// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2056.hrx

export default [
  {
    name: 'input.scss',
    data: ':foobar(.baz) {\n    color: red;\n}\n',
  },
  {
    name: 'output.css',
    data: ':foobar(.baz) {\n  color: red;\n}\n',
  },
]
