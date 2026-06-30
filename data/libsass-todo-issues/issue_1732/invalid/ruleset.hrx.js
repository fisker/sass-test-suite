// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-todo-issues/issue_1732/invalid/ruleset.hrx

export default [
  {
    name: 'input.scss',
    data: 'color: green;\n',
  },
  {
    name: 'error',
    data: 'Error: expected "{".\n  ,\n1 | color: green;\n  |             ^\n  \'\n  input.scss 1:13  root stylesheet\n',
  },
]
