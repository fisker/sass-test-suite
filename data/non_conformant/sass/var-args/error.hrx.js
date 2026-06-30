// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/sass/var-args/error.hrx

export default [
  {
    name: 'input.scss',
    data: '@mixin bar($x, $y, $z) {\n  x: $x;\n  y: $y;\n  z: $z;\n}\n\ndiv {\n  @include bar(a, c d e...);\n}\n',
  },
  {
    name: 'warning',
    data: 'WARNING: Mixin bar takes 3 arguments but 4 were passed.\n        on line 8 of input.scss\nThis will be an error in future versions of Sass.',
  },
  {
    name: 'error',
    data: "Error: Only 3 arguments allowed, but 4 were passed.\n    ,\n1   | @mixin bar($x, $y, $z) {\n    |        =============== declaration\n... |\n8   |   @include bar(a, c d e...);\n    |   ^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n    '\n  input.scss 8:3  bar()\n  input.scss 8:3  root stylesheet\n",
  },
]
