// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1550/mixin_embedded.hrx

export default [
  {
    name: 'input.scss',
    data: "@mixin foo() {\n  @function foo() {\n    @return 'foo';\n  }\n}\n",
  },
  {
    name: 'error',
    data: "Error: Mixins may not contain function declarations.\n  ,\n2 |   @function foo() {\n  |   ^^^^^^^^^^^^^^^\n  '\n  input.scss 2:3  root stylesheet\n",
  },
]
