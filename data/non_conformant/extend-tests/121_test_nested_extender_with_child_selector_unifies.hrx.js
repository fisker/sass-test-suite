export default [
  {
    name: 'input.scss',
    data: '.baz > {\n.foo {a: b}\n.bar {@extend .foo}\n}\n',
  },
  {
    name: 'output.css',
    data: '.baz > .foo, .baz > .bar {\n  a: b;\n}\n',
  },
]
