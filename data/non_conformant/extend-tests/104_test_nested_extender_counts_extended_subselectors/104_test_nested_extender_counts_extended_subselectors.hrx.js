export default [
  {
    name: 'input.scss',
    data: '.a .bip.bop .foo {a: b}\n.b .bip .bar {@extend .foo}\n',
  },
  {
    name: 'output.css',
    data: '.a .bip.bop .foo, .a .b .bip.bop .bar, .b .a .bip.bop .bar {\n  a: b;\n}\n',
  },
]
