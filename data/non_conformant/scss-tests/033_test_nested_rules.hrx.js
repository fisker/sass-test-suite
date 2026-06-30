export default [
  {
    name: 'input.scss',
    data: 'foo {\n  bar {a: b}\n  baz {b: c}}\n',
  },
  {
    name: 'output.css',
    data: 'foo bar {\n  a: b;\n}\nfoo baz {\n  b: c;\n}\n',
  },
]
