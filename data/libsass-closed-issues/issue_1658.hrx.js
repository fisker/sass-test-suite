// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1658.hrx

export default [
  {
    name: 'input.scss',
    data: '@else{}\n',
  },
  {
    name: 'error',
    data: "Error: This at-rule is not allowed here.\n  ,\n1 | @else{}\n  | ^^^^^\n  '\n  input.scss 1:1  root stylesheet\n",
  },
]
