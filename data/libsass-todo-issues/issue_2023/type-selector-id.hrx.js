export default [
  {
    name: 'input.scss',
    data: '1a {\r\n    color: red;\r\n}\r\n',
  },
  {
    name: 'error',
    data: "Error: expected selector.\n  ,\n1 | 1a {\r\n  | ^\n  '\n  input.scss 1:1  root stylesheet\n",
  },
]
