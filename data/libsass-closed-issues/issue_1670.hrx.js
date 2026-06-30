export default [
  {
    name: 'input.scss',
    data: '.this-should-error {\n  @extend %an-undefined-placeholder;\n}\n',
  },
  {
    name: 'error',
    data: 'Error: The target selector was not found.\nUse "@extend %an-undefined-placeholder !optional" to avoid this error.\n  ,\n2 |   @extend %an-undefined-placeholder;\n  |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:3  root stylesheet\n',
  },
]
