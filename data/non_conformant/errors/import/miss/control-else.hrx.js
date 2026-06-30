// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/errors/import/miss/control-else.hrx

export default [
  {
    name: 'input.scss',
    data: "@if (false) {\r\n} @else {\r\n  @import '_include';\r\n}\r\n",
  },
  {
    name: 'error',
    data: "Error: This at-rule is not allowed here.\n  ,\n3 |   @import '_include';\r\n  |   ^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 3:3  root stylesheet\n",
  },
]
