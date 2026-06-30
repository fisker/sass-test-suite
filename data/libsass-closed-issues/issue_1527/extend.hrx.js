// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1527/extend.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n  @extend &;\n}\n',
  },
  {
    name: 'error',
    data: "Error: Parent selectors aren't allowed here.\n  ,\n2 |   @extend &;\n  |           ^\n  '\n  input.scss 2:11  root stylesheet\n",
  },
]
