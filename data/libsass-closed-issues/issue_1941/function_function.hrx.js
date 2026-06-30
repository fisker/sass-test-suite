// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1941/function_function.hrx

export default [
  {
    name: 'input.scss',
    data: '@function parent() {\n  @function nested() {\n    @return foo;\n  }\n\n  @return nested();\n}\n\n\ntest {\n  foo: parent();\n}\n',
  },
  {
    name: 'error',
    data: "Error: This at-rule is not allowed here.\n  ,\n2 |   @function nested() {\n  |   ^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:3  root stylesheet\n",
  },
]
