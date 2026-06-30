// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1550/each_embedded.hrx

export default [
  {
    name: 'input.scss',
    data: "@each $i in (1) {\n  @function foo() {\n    @return 'foo';\n  }\n}\n",
  },
  {
    name: 'error',
    data: "Error: Functions may not be declared in control directives.\n  ,\n2 |   @function foo() {\n  |   ^^^^^^^^^^^^^^^\n  '\n  input.scss 2:3  root stylesheet\n",
  },
]
