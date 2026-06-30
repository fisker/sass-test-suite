// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_628.hrx

export default [
  {
    name: 'input.scss',
    data: '$map: (\r\n  alpha: 1,\r\n  beta: 2,\r\n  gamma: 3,\r\n  delta: (\r\n    eta: 5,\r\n    eta: 6,\r\n  ),\r\n);',
  },
  {
    name: 'error',
    data: "Error: Duplicate key.\n  ,\n6 |     eta: 5,\n  |     === first key\n7 |     eta: 6,\n  |     ^^^ second key\n  '\n  input.scss 7:5  root stylesheet\n",
  },
]
