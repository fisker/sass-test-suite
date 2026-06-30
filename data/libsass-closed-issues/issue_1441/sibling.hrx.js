export default [
  {
    name: 'input.scss',
    data: '.sibling {\n    & ~ & {\n        foo: bar;\n    }\n}\n',
  },
  {
    name: 'output.css',
    data: '.sibling ~ .sibling {\n  foo: bar;\n}\n',
  },
]
