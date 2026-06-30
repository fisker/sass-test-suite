export default [
  {
    name: 'input.scss',
    data: '@mixin bar {\n  @at-root .bar {a: b}\n}\n\n.foo {\n  @include bar;\n}\n',
  },
  {
    name: 'output.css',
    data: '.bar {\n  a: b;\n}\n',
  },
]
