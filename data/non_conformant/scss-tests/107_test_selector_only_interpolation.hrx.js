export default [
  {
    name: 'input.scss',
    data: '#{"foo" + " bar"} {a: b}\n',
  },
  {
    name: 'output.css',
    data: 'foo bar {\n  a: b;\n}\n',
  },
]
