export default [
  {
    name: 'input.scss',
    data: '.debug {\n  @debug-this {\n    foo: bar;\n  }\n}',
  },
  {
    name: 'output.css',
    data: '@debug-this {\n  .debug {\n    foo: bar;\n  }\n}\n',
  },
]
