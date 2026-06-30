// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1550/while_embedded.hrx

export default [
  {
    name: 'input.scss',
    data: "$i: 1;\n@while $i == 1 {\n  @function foo() {\n    @return 'foo';\n  }\n  $i: $i + 1;\n}\n",
  },
  {
    name: 'error',
    data: "Error: Functions may not be declared in control directives.\n  ,\n3 |   @function foo() {\n  |   ^^^^^^^^^^^^^^^\n  '\n  input.scss 3:3  root stylesheet\n",
  },
]
