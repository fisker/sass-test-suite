export default [
  {
    name: 'input.scss',
    data: 'foo {\n  @mixin bar {a: b}\n  @include bar; }\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  a: b;\n}\n',
  },
]
