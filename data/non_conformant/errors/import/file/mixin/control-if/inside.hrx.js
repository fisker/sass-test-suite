// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/errors/import/file/mixin/control-if/inside.hrx

export default [
  {
    name: 'input.scss',
    data: "@mixin do_import() {\r\n  @if (true) {\r\n    @import '_include';\r\n  }\r\n}\r\n\r\nfoo {\r\n  @include do_import();\r\n}",
  },
  {
    name: '_include.scss',
    data: '',
  },
  {
    name: 'error',
    data: "Error: This at-rule is not allowed here.\n  ,\n3 |     @import '_include';\r\n  |     ^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 3:5  root stylesheet\n",
  },
]
