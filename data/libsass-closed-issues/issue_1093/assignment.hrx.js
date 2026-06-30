// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1093/assignment.hrx

export default [
  {
    name: 'input.scss',
    data: '$foo: #{};\n',
  },
  {
    name: 'error',
    data: "Error: Expected expression.\n  ,\n1 | $foo: #{};\n  |       ^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
]
