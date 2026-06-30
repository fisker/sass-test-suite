export default [
  {
    name: 'input.scss',
    data: 'pre& {\r\n  foo {\r\n    bar: baz;\r\n  }\r\n}',
  },
  {
    name: 'error',
    data: 'Error: "&" may only used at the beginning of a compound selector.\n  ,\n1 | pre& {\r\n  |    ^\n  \'\n  input.scss 1:4  root stylesheet\n',
  },
]
