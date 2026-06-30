// https://github.com/sass/sass-spec/blob/HEAD/spec/values/numbers/error.hrx

export default [
  {
    name: 'trailing_dot/README.md',
    data: 'Regression tests for sass/dart-sass#1856.\n',
  },
  {
    name: 'trailing_dot/plus/input.scss',
    data: 'a {b: +.}\n',
  },
  {
    name: 'trailing_dot/plus/error',
    data: "Error: Expected digit.\n  ,\n1 | a {b: +.}\n  |         ^\n  '\n  input.scss 1:9  root stylesheet\n",
  },
  {
    name: 'trailing_dot/minus/input.scss',
    data: 'a {b: -.}\n',
  },
  {
    name: 'trailing_dot/minus/error',
    data: "Error: Expected digit.\n  ,\n1 | a {b: -.}\n  |         ^\n  '\n  input.scss 1:9  root stylesheet\n",
  },
  {
    name: 'trailing_dot/digit/input.scss',
    data: 'a {b: 1.}\n',
  },
  {
    name: 'trailing_dot/digit/error',
    data: "Error: Expected digit.\n  ,\n1 | a {b: 1.}\n  |         ^\n  '\n  input.scss 1:9  root stylesheet\n",
  },
  {
    name: 'trailing_dot/plus_digit/input.scss',
    data: 'a {b: +1.}\n',
  },
  {
    name: 'trailing_dot/plus_digit/error',
    data: "Error: Expected digit.\n  ,\n1 | a {b: +1.}\n  |          ^\n  '\n  input.scss 1:10  root stylesheet\n",
  },
  {
    name: 'trailing_dot/minus_digit/input.scss',
    data: 'a {b: -1.}\n',
  },
  {
    name: 'trailing_dot/minus_digit/error',
    data: "Error: Expected digit.\n  ,\n1 | a {b: -1.}\n  |          ^\n  '\n  input.scss 1:10  root stylesheet\n",
  },
]
