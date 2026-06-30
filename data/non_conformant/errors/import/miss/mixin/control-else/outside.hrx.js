export default [
  {
    name: 'input.scss',
    data: "@mixin do_import() {\r\n  @import '_include';\r\n}\r\n\r\n@if (false) {\r\n} @else {\r\n  @include do_import();\r\n}\r\n",
  },
  {
    name: 'error',
    data: "Error: This at-rule is not allowed here.\n  ,\n2 |   @import '_include';\r\n  |   ^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:3  root stylesheet\n",
  },
]
