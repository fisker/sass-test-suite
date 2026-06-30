export default [
  {
    name: 'input.scss',
    data: 'foo {\n  bar {c: d}\n  a: b}\n',
  },
  {
    name: 'output.css',
    data: 'foo bar {\n  c: d;\n}\nfoo {\n  a: b;\n}\n',
  },
]
