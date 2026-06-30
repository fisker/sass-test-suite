// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/errors/invalid-parent/return-in-mixin.hrx

export default [
  {
    name: 'input.scss',
    data: '@mixin mix() {\r\n  @return 42;\r\n}\r\n\r\nfoo {\r\n  @include mix();\r\n}',
  },
  {
    name: 'error',
    data: "Error: This at-rule is not allowed here.\n  ,\n2 |   @return 42;\n  |   ^^^^^^^^^^\n  '\n  input.scss 2:3  root stylesheet\n",
  },
]
