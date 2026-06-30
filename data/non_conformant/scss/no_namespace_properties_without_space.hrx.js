export default [
  {
    name: 'input.scss',
    data: 'foo {\n  bar:baz {\n    bip: bop }}\n',
  },
  {
    name: 'output.css',
    data: 'foo bar:baz {\n  bip: bop;\n}\n',
  },
]
