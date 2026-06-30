export default [
  {
    name: 'input.scss',
    data: '$map: 1 + (a:b,c:d);\r\n',
  },
  {
    name: 'error',
    data: "Error: (a: b, c: d) isn't a valid CSS value.\n  ,\n1 | $map: 1 + (a:b,c:d);\n  |       ^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
]
