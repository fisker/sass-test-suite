// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_549.hrx

export default [
  {
    name: 'input.scss',
    data: '$value: 10;\n\nfoo {\n  filter: foo(opacity=$value*100);\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  filter: foo(opacity=1000);\n}\n',
  },
]
