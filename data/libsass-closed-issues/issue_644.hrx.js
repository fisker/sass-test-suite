// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_644.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n  background-image: url(foo/#{"bar"}/baz.jpg);\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  background-image: url(foo/bar/baz.jpg);\n}\n',
  },
]
