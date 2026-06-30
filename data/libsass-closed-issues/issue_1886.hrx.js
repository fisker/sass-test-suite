// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1886.hrx

export default [
  {
    name: 'input.scss',
    data: 'body {\n  background: url()\n}',
  },
  {
    name: 'output.css',
    data: 'body {\n  background: url();\n}\n',
  },
]
