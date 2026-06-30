export default [
  {
    name: 'input.scss',
    data: '@mixin bar() {\n  @content;\n}\n\nfoo {\n  @include bar {\n    color: blue;\n  }\n}',
  },
  {
    name: 'output.css',
    data: 'foo {\n  color: blue;\n}\n',
  },
]
