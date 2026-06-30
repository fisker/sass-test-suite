export default [
  {
    name: 'input.sass',
    data: '@mixin foo($foo:red)\n  color: $foo\n\n.foo\n  @include foo(green)\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  color: green;\n}\n',
  },
]
