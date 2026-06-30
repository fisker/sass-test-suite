export default [
  {
    name: 'input.scss',
    data: '.code.ruby > {\r\n    &.ruby {\r\n        color: green;\r\n    }\r\n}',
  },
  {
    name: 'error',
    data: 'Error: Selector ".code.ruby >" can\'t be used as a parent in a compound selector.\n  ,\n1 | .code.ruby > {\r\n  | ^^^^^^^^^^^^ outer selector\n2 |     &.ruby {\r\n  |     = parent selector\n  \'\n  input.scss 1:1  root stylesheet\n',
  },
]
