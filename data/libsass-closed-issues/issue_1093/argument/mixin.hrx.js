export default [
  {
    name: 'input.scss',
    data: '@mixin foo($bar:#{}) {\n  @return $bar;\n}\n\nfoo {\n  @include foo;\n}\n',
  },
  {
    name: 'error',
    data: "Error: Expected expression.\n  ,\n1 | @mixin foo($bar:#{}) {\n  |                 ^^\n  '\n  input.scss 1:17  root stylesheet\n",
  },
]
