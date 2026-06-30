export default [
  {
    name: 'input.scss',
    data: '@mixin colors($color) {\r\n  border-color: $color;\r\n  background-color: $color;\r\n  @content;\r\n}\r\n.colors {\r\n  @include colors {\r\n    color: $color;\r\n  }\r\n  border-width: 10px;\r\n}',
  },
  {
    name: 'error',
    data: "Error: Missing argument $color.\n    ,\n1   | @mixin colors($color) {\n    |        ============== declaration\n... |\n7   |   @include colors {\n    |   ^^^^^^^^^^^^^^^ invocation\n    '\n  input.scss 7:3  colors()\n  input.scss 7:3  root stylesheet\n",
  },
]
