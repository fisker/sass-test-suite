export default [
  {
    name: 'input.scss',
    data: '$var: foo;\n\nblat {a: $var}\n',
  },
  {
    name: 'output.css',
    data: 'blat {\n  a: foo;\n}\n',
  },
]
