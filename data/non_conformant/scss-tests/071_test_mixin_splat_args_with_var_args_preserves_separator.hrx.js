export default [
  {
    name: 'input.scss',
    data: '@mixin foo($a, $b...) {\n  a: $a;\n  b: $b;\n}\n\n$list: 3 4 5;\n.foo {@include foo(1, 2, $list...)}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  a: 1;\n  b: 2 3 4 5;\n}\n',
  },
]
