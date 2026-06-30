// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2143.hrx

export default [
  {
    name: 'input.scss',
    data: '$map:;',
  },
  {
    name: 'error',
    data: "Error: Expected expression.\n  ,\n1 | $map:;\n  |      ^\n  '\n  input.scss 1:6  root stylesheet\n",
  },
]
