export default [
  {
    name: 'input.scss',
    data: '@mixin bar {\r\n  @at-root @bar {a: b}\r\n}\r\n\r\n.foo {\r\n  @include bar;\r\n}',
  },
  {
    name: 'error',
    data: "Error: expected selector.\n  ,\n2 |   @at-root @bar {a: b}\r\n  |            ^\n  '\n  input.scss 2:12  bar()\n  input.scss 6:3   root stylesheet\n",
  },
]
