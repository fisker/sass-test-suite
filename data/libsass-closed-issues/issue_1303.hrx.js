// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1303.hrx

export default [
  {
    name: 'input.scss',
    data: "@use \"sass:selector\";\n.simple {\n  a: selector.replace('foo.bar', 'foo', 'foo[baz]');\n}\n",
  },
  {
    name: 'output.css',
    data: '.simple {\n  a: foo.bar[baz];\n}\n',
  },
]
