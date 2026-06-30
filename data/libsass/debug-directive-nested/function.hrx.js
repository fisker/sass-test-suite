// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/debug-directive-nested/function.hrx

export default [
  {
    name: 'input.scss',
    data: '@function c() {\n  @warn test;\n  @return d;\n}\n\na {\n  b: {\n    c: c();\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b-c: d;\n}\n',
  },
  {
    name: 'warning',
    data: 'WARNING: test\n    input.scss 2:3  c()\n    input.scss 8:8  root stylesheet\n',
  },
]
