export default [
  {
    name: 'input.scss',
    data: "@mixin do_import() {\r\n  @if (false) {\r\n  } @else {\r\n    @import '_include';\r\n  }\r\n}\r\n\r\nfoo {\r\n  @include do_import();\r\n}",
  },
  {
    name: '_include.scss',
    data: '',
  },
  {
    name: 'error',
    data: "Error: This at-rule is not allowed here.\n  ,\n4 |     @import '_include';\r\n  |     ^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 4:5  root stylesheet\n",
  },
]
