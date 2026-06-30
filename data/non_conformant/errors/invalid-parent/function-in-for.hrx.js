// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/errors/invalid-parent/function-in-for.hrx

export default [
  {
    name: 'input.scss',
    data: '@for $i from 1 through 1 {\r\n  @function foo() {}\r\n}',
  },
  {
    name: 'error',
    data: "Error: Functions may not be declared in control directives.\n  ,\n2 |   @function foo() {}\n  |   ^^^^^^^^^^^^^^^\n  '\n  input.scss 2:3  root stylesheet\n",
  },
]
