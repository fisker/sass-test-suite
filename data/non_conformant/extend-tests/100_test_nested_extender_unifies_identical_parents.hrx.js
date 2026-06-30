export default [
  {
    name: 'input.scss',
    data: '.baz .bip .foo {a: b}\n.baz .bip bar {@extend .foo}\n',
  },
  {
    name: 'output.css',
    data: '.baz .bip .foo, .baz .bip bar {\n  a: b;\n}\n',
  },
]
