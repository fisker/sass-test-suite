export default [
  {
    name: 'input.scss',
    data: '#foo #bar,,\n,#baz #boom, {a: b}\n\n#bip #bop, ,, {c: d}\n',
  },
  {
    name: 'output.css',
    data: '#foo #bar,\n#baz #boom {\n  a: b;\n}\n\n#bip #bop {\n  c: d;\n}\n',
  },
]
