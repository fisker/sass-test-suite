export default [
  {
    name: 'input.scss',
    data: '@mixin main() {\n  bar {\n    baz: 1;\n  }\n}\n\nfoo {\n  @at-root {\n    @include main();\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: 'bar {\n  baz: 1;\n}\n',
  },
]
