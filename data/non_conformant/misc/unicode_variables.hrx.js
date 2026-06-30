export default [
  {
    name: 'input.scss',
    data: '$vär: foo;\n\nblat {a: $vär}\n',
  },
  {
    name: 'output.css',
    data: 'blat {\n  a: foo;\n}\n',
  },
]
