export default [
  {
    name: 'input.scss',
    data: '@mixin foo($a...) {\n  @include bar($a...);\n}\n\n@mixin bar($b, $c, $a) {\n  a: $a;\n  b: $b;\n  c: $c;\n}\n\n.foo {@include foo(1, $c: 2, $a: 3)}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  a: 3;\n  b: 1;\n  c: 2;\n}\n',
  },
]
