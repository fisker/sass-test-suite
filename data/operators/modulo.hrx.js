export default [
  {
    name: 'degenerate/modulus/infinity/positive_and_positive/input.scss',
    data: 'a {b: 1px % calc(infinity * 1px)}\n',
  },
  {
    name: 'degenerate/modulus/infinity/positive_and_positive/output.css',
    data: 'a {\n  b: 1px;\n}\n',
  },
  {
    name: 'degenerate/modulus/infinity/positive_and_negative/input.scss',
    data: 'a {b: 1px % calc(-infinity * 1px)}\n',
  },
  {
    name: 'degenerate/modulus/infinity/positive_and_negative/output.css',
    data: 'a {\n  b: calc(NaN * 1px);\n}\n',
  },
  {
    name: 'degenerate/modulus/infinity/negative_and_negative/input.scss',
    data: 'a {b: -1px % calc(-infinity * 1px)}\n',
  },
  {
    name: 'degenerate/modulus/infinity/negative_and_negative/output.css',
    data: 'a {\n  b: -1px;\n}\n',
  },
  {
    name: 'degenerate/modulus/infinity/negative_and_positive/input.scss',
    data: 'a {b: -1px % calc(infinity * 1px)}\n',
  },
  {
    name: 'degenerate/modulus/infinity/negative_and_positive/output.css',
    data: 'a {\n  b: calc(NaN * 1px);\n}\n',
  },
  {
    name: 'error/syntax/whitespace/newline/after_percent/input.sass',
    data: 'a\n  b: 1%\n    1\n',
  },
  {
    name: 'error/syntax/whitespace/newline/after_percent/error',
    data: "Error: Expected identifier.\n  ,\n2 |   b: 1%\n  |        ^\n  '\n  input.sass 2:8  root stylesheet\n",
  },
]
