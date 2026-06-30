export default [
  {
    name: 'input.scss',
    data: '@mixin foo() {a: b}\n\n.foo {@include foo;}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  a: b;\n}\n',
  },
]
