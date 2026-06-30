export default [
  {
    name: 'input.scss',
    data: ".foo {\n  &--#{'bar'} {\n    color: red;\n  }\n}",
  },
  {
    name: 'output.css',
    data: '.foo--bar {\n  color: red;\n}\n',
  },
]
