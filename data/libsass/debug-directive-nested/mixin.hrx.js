// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/debug-directive-nested/mixin.hrx

export default [
  {
    name: 'input.scss',
    data: '@mixin c() {\n  @warn test;\n  c: d;\n}\n\na {\n  b: {\n    @include c();\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b-c: d;\n}\n',
  },
  {
    name: 'warning',
    data: 'WARNING: test\n    input.scss 2:3  c()\n    input.scss 8:5  root stylesheet\n',
  },
]
