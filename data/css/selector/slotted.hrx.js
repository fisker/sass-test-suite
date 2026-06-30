export default [
  {
    name: 'input.scss',
    data: '::slotted(.a) {x: y}\n\n::slotted(.c.d) {x: y}\n.e {@extend .c}\n\n::slotted(.f) {x: y}\n::slotted(.g) {@extend .f}\n',
  },
  {
    name: 'output.css',
    data: '::slotted(.a) {\n  x: y;\n}\n\n::slotted(.c.d, .d.e) {\n  x: y;\n}\n\n::slotted(.f, ::slotted(.g)) {\n  x: y;\n}\n',
  },
]
