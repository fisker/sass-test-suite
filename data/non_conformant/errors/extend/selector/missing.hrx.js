// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/errors/extend/selector/missing.hrx

export default [
  {
    name: 'input.scss',
    data: '.baz {\n  @extend .foo;\n  color: green;\n}\n',
  },
  {
    name: 'error',
    data: 'Error: The target selector was not found.\nUse "@extend .foo !optional" to avoid this error.\n  ,\n2 |   @extend .foo;\n  |   ^^^^^^^^^^^^\n  \'\n  input.scss 2:3  root stylesheet\n',
  },
]
