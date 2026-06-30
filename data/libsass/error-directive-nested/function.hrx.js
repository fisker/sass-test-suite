// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/error-directive-nested/function.hrx

export default [
  {
    name: 'input.scss',
    data: '@function c() {\n  @error test;\n  @return d;\n}\n\na {\n  b: {\n    c: c();\n  }\n}\n',
  },
  {
    name: 'error',
    data: "Error: test\n  ,\n8 |     c: c();\n  |        ^^^\n  '\n  input.scss 8:8  root stylesheet\n",
  },
]
