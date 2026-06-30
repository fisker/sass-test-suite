// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1732/valid/propset.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo { \n  border: {\n    width: 1px;\n    color: green;\n  }\n}',
  },
  {
    name: 'output.css',
    data: 'foo {\n  border-width: 1px;\n  border-color: green;\n}\n',
  },
]
