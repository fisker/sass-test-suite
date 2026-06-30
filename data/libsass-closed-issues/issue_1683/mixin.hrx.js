export default [
  {
    name: 'input.scss',
    data: '@mixin foo($x, $y) { }\n\na {\n  @include foo(1 2 3...);\n}\n',
  },
  {
    name: 'warning',
    data: 'WARNING: Mixin foo takes 2 arguments but 3 were passed.\n        on line 4 of input.scss\nThis will be an error in future versions of Sass.',
  },
  {
    name: 'error',
    data: "Error: Only 2 arguments allowed, but 3 were passed.\n    ,\n1   | @mixin foo($x, $y) { }\n    |        =========== declaration\n... |\n4   |   @include foo(1 2 3...);\n    |   ^^^^^^^^^^^^^^^^^^^^^^ invocation\n    '\n  input.scss 4:3  foo()\n  input.scss 4:3  root stylesheet\n",
  },
]
