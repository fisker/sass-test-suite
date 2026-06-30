// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/errors/import/file/loop/each.hrx

export default [
  {
    name: 'input.scss',
    data: "@each $i in (1) {\r\n  @import '_include';\r\n}\r\n",
  },
  {
    name: '_include.scss',
    data: '',
  },
  {
    name: 'error',
    data: "Error: This at-rule is not allowed here.\n  ,\n2 |   @import '_include';\r\n  |   ^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:3  root stylesheet\n",
  },
]
