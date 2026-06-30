export default [
  {
    name: 'input.scss',
    data: '@mixin foo($a, $b) {\n  a: $a;\n  b: $b; }\n\n.foo {@include foo(bar, 12px)}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  a: bar;\n  b: 12px;\n}\n',
  },
]
