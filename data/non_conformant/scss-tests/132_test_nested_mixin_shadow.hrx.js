export default [
  {
    name: 'input.scss',
    data: '@mixin bar {a: b}\n\nfoo {\n  @mixin bar {c: d}\n  @include bar;\n}\n\nbaz {@include bar}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  c: d;\n}\n\nbaz {\n  a: b;\n}\n',
  },
]
