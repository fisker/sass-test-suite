export default [
  {
    name: 'input.scss',
    data: '.baz .bip .bap .bink .foo {a: b}\n.brat .bip .bap bar {@extend .foo}\n',
  },
  {
    name: 'output.css',
    data: '.baz .bip .bap .bink .foo, .baz .brat .bip .bap .bink bar, .brat .baz .bip .bap .bink bar {\n  a: b;\n}\n',
  },
]
