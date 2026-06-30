export default [
  {
    name: 'input.scss',
    data: 'foo {\n    color: missing($a: b);\n}\n',
  },
  {
    name: 'error',
    data: "Error: Plain CSS functions don't support keyword arguments.\n  ,\n2 |     color: missing($a: b);\n  |            ^^^^^^^^^^^^^^\n  '\n  input.scss 2:12  root stylesheet\n",
  },
]
