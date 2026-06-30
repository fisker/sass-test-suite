export default [
  {
    name: 'input.scss',
    data: '@mixin foo() {\n    foo: &;\n}\n\nfoo {\n  @include foo { bar: baz }\n}\n',
  },
  {
    name: 'error',
    data: "Error: Mixin doesn't accept a content block.\n    ,\n1   | @mixin foo() {\n    |        ===== declaration\n... |\n6   |   @include foo { bar: baz }\n    |   ^^^^^^^^^^^^ invocation\n    '\n  input.scss 6:3  root stylesheet\n",
  },
]
