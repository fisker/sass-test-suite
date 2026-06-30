export default [
  {
    name: 'input.scss',
    data: '@mixin foo() {\n  @import "https://foo";\n}\n@include foo;\n',
  },
  {
    name: 'output.css',
    data: '@import "https://foo";\n',
  },
]
