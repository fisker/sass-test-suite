export default [
  {
    name: 'input.scss',
    data: 'foo,\nbar {\n  baz,\n  bang {a: b}}\n',
  },
  {
    name: 'output.css',
    data: 'foo baz,\nfoo bang,\nbar baz,\nbar bang {\n  a: b;\n}\n',
  },
]
