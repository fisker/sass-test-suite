// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1732/valid/ruleset.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo { \n  color: green;\n}',
  },
  {
    name: 'output.css',
    data: 'foo {\n  color: green;\n}\n',
  },
]
