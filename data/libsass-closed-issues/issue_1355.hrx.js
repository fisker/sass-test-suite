// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1355.hrx

export default [
  {
    name: 'input.scss',
    data: '@function test() {\n  @return;\n}\n\ndiv {\n  x: type-of(test());\n}',
  },
  {
    name: 'error',
    data: "Error: Expected expression.\n  ,\n2 |   @return;\n  |          ^\n  '\n  input.scss 2:10  root stylesheet\n",
  },
]
