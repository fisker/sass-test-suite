// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/errors/invalid-parent/mixin-in-while.hrx

export default [
  {
    name: 'input.scss',
    data: '@while (false) {\r\n  @mixin foo() {}\r\n}',
  },
  {
    name: 'error',
    data: "Error: Mixins may not be declared in control directives.\n  ,\n2 |   @mixin foo() {}\n  |   ^^^^^^^^^^^^\n  '\n  input.scss 2:3  root stylesheet\n",
  },
]
