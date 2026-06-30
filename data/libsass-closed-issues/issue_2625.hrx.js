// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2625.hrx

export default [
  {
    name: 'input.scss',
    data: 'something\\:{ padding: 2px; }\n',
  },
  {
    name: 'output.css',
    data: 'something\\: {\n  padding: 2px;\n}\n',
  },
]
