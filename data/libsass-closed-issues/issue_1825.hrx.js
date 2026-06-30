export default [
  {
    name: 'input.scss',
    data: 'foo {\n  &-- {\n    &baz {\n      color: red;\n    } \n  } \n} ',
  },
  {
    name: 'output.css',
    data: 'foo--baz {\n  color: red;\n}\n',
  },
]
