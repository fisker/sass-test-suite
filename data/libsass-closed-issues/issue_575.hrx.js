export default [
  {
    name: 'input.scss',
    data: '.test {\n  @if (foo: bar) == (foo: bar) {\n    foo: bar;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '.test {\n  foo: bar;\n}\n',
  },
]
