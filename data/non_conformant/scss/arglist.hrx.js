export default [
  {
    name: 'input.scss',
    data: '@mixin foo($x, $y, $zs...) {\n  foo-x: $x;\n  foo-y: $y;\n  foo-zs: $zs;\n}\n\ndiv {\n  @include foo(a, b, c, d, e);\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  foo-x: a;\n  foo-y: b;\n  foo-zs: c, d, e;\n}\n',
  },
]
