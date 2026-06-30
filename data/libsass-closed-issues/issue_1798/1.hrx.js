// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1798/1.hrx

export default [
  {
    name: 'input.scss',
    data: 'a /*#{"}*/ {\n  margin: 2px;\n}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  margin: 2px;\n}\n',
  },
]
