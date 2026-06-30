export default [
  {
    name: 'input.scss',
    data: '.bip > .bap .foo {a: b}\n.grip > .bap .bar {@extend .foo}\n',
  },
  {
    name: 'output.css',
    data: '.bip > .bap .foo, .bip > .bap .grip > .bap .bar, .grip > .bap .bip > .bap .bar {\n  a: b;\n}\n',
  },
]
