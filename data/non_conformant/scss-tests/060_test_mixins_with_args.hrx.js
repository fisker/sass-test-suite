export default [
  {
    name: 'input.scss',
    data: '@mixin foo($a) {a: $a}\n\n.foo {@include foo(bar)}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  a: bar;\n}\n',
  },
]
