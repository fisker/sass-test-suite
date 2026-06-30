export default [
  {
    name: 'input.scss',
    data: 'foo {\n  a: b;\n  bar {c: d}}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  a: b;\n}\nfoo bar {\n  c: d;\n}\n',
  },
]
