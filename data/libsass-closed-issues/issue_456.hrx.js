// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_456.hrx

export default [
  {
    name: 'input.scss',
    data: 'body {\n  -webkit-filter: invert(100%);\n}\n',
  },
  {
    name: 'output.css',
    data: 'body {\n  -webkit-filter: invert(100%);\n}\n',
  },
]
