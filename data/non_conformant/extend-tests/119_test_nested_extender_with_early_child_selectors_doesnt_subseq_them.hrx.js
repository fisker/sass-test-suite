export default [
  {
    name: 'input.scss',
    data: '.bap > .bip .foo {a: b}\n.bap > .grip .bar {@extend .foo}\n',
  },
  {
    name: 'output.css',
    data: '.bap > .bip .foo, .bap > .bip .bap > .grip .bar, .bap > .grip .bap > .bip .bar {\n  a: b;\n}\n',
  },
]
