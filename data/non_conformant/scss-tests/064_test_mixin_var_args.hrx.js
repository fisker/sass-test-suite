export default [
  {
    name: 'input.scss',
    data: '@mixin foo($a, $b...) {\n  a: $a;\n  b: $b;\n}\n\n.foo {@include foo(1, 2, 3, 4)}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  a: 1;\n  b: 2, 3, 4;\n}\n',
  },
]
