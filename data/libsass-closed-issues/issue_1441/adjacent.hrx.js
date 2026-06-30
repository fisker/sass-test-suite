export default [
  {
    name: 'input.scss',
    data: '.adjacent {\n    & + & {\n        foo: bar;\n    }\n}\n',
  },
  {
    name: 'output.css',
    data: '.adjacent + .adjacent {\n  foo: bar;\n}\n',
  },
]
