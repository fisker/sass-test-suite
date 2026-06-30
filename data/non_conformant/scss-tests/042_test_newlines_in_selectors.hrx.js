export default [
  {
    name: 'input.scss',
    data: 'foo\nbar {\n  baz\n  bang {a: b}\n\n  bip bop {c: d}}\n',
  },
  {
    name: 'output.css',
    data: 'foo bar baz bang {\n  a: b;\n}\nfoo bar bip bop {\n  c: d;\n}\n',
  },
]
